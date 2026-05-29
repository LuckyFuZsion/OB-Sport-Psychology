export const CONTACT_EMAIL = 'hello@obsportpsychology.co.uk'

/** Safe upper bound for mailto URLs across common desktop and mobile clients. */
const MAILTO_MAX_LENGTH = 1900

export interface ContactFormData {
  name: string
  email: string
  message?: string
}

function buildBody(name: string, email: string, message: string): string {
  return (
    `Hello,\n\n` +
    `I would like to get in touch with OBSportPsychology.\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n\n` +
    `Message:\n${message || '(No message provided)'}\n\n` +
    `Sent via the OBSportPsychology website contact form.`
  )
}

export function buildContactMailtoUrl({
  name,
  email,
  message = '',
}: ContactFormData): string {
  const subject = `Enquiry | OBSportPsychology (${name})`
  const body = buildBody(name, email, message)

  const query = [
    `subject=${encodeURIComponent(subject)}`,
    `body=${encodeURIComponent(body)}`,
    `headers=${encodeURIComponent(`Reply-To=${email}`)}`,
  ].join('&')

  const url = `mailto:${CONTACT_EMAIL}?${query}`

  if (url.length <= MAILTO_MAX_LENGTH) {
    return url
  }

  const overflow = url.length - MAILTO_MAX_LENGTH + 80
  const trimmed =
    message.length > overflow
      ? `${message.slice(0, Math.max(0, message.length - overflow))}\n\n[Message truncated due to email client length limits.]`
      : message

  return buildContactMailtoUrl({ name, email, message: trimmed })
}

/** Opens the user's default mail client via a transient anchor (most reliable in SPAs). */
export function openContactMailto(url: string): void {
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.rel = 'noopener noreferrer'
  anchor.style.display = 'none'
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
}
