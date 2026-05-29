export const navSections = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Blog', id: 'blog' },
  { label: 'Contact', id: 'contact' },
] as const

export type NavSectionId = (typeof navSections)[number]['id']

export function sectionHref(id: string) {
  return `/#${id}`
}

export function scrollToSection(id: string, behavior: ScrollBehavior = 'smooth') {
  document.getElementById(id)?.scrollIntoView({ behavior })
}
