/**
 * Compress and convert site images to WebP for production.
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = path.join(root, 'public')

/** @type {{ input: string; output: string; maxWidth?: number; quality?: number }[]} */
const jobs = [
  // Hero uses the original PNG — Next.js optimizes at request time (do not pre-crush here).
  {
    input: 'images/brooke-house.png',
    output: 'images/brooke-house.webp',
    maxWidth: 800,
    quality: 85,
  },
  {
    input: 'images/leicester-city-football-club.png',
    output: 'images/leicester-city-football-club.webp',
    maxWidth: 800,
    quality: 85,
  },
  {
    input: 'images/blog/systems-approach-youth-athletes.png',
    output: 'images/blog/systems-approach-youth-athletes.webp',
    maxWidth: 1200,
    quality: 80,
  },
  {
    input: 'images/webfuzsion-logo.png',
    output: 'images/webfuzsion-logo.webp',
    maxWidth: 320,
    quality: 85,
  },
]

async function optimize({ input, output, maxWidth = 1200, quality = 82 }) {
  const inputPath = path.join(publicDir, input)
  const outputPath = path.join(publicDir, output)
  await mkdir(path.dirname(outputPath), { recursive: true })

  const image = sharp(inputPath)
  const meta = await image.metadata()
  const width = meta.width && meta.width > maxWidth ? maxWidth : meta.width

  await image
    .resize(width ? { width, withoutEnlargement: true } : undefined)
    .webp({ quality, effort: 6 })
    .toFile(outputPath + '.tmp')

  const { size: before } = await import('node:fs/promises').then((fs) =>
    fs.stat(inputPath)
  )
  const { size: after } = await import('node:fs/promises').then((fs) =>
    fs.stat(outputPath + '.tmp')
  )
  const { rename } = await import('node:fs/promises')
  await rename(outputPath + '.tmp', outputPath)

  console.log(
    `${input} → ${output}: ${(before / 1024).toFixed(1)}KB → ${(after / 1024).toFixed(1)}KB (${meta.width}×${meta.height})`
  )

  return { width: width ?? meta.width, height: meta.height }
}

const dimensions = {}
for (const job of jobs) {
  const meta = await sharp(path.join(publicDir, job.input)).metadata()
  const targetWidth =
    meta.width && meta.width > (job.maxWidth ?? 1200)
      ? job.maxWidth ?? 1200
      : meta.width
  const targetHeight =
    meta.width && meta.height && targetWidth
      ? Math.round((meta.height * targetWidth) / meta.width)
      : meta.height
  dimensions[job.output] = { width: targetWidth, height: targetHeight }
  await optimize(job)
}

console.log('\nDimensions:', JSON.stringify(dimensions, null, 2))
