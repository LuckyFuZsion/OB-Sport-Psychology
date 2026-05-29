export const CONTACT_EMAIL = 'obsportpsychology@yahoo.com'

/** Display format for UK mobiles */
export const CONTACT_PHONE = '07468 488919'

export const CONTACT_PHONE_E164 = '+447468488919'

export const CONTACT_PHONE_HREF = `tel:${CONTACT_PHONE_E164}`

export interface ContactFormData {
  name: string
  email: string
  message?: string
}

export interface ContactEmailDraft {
  subject: string
  body: string
  gmailComposeUrl: string
  outlookComposeUrl: string
  clipboardText: string
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

function buildSubject(name: string): string {
  return `Enquiry | OBSportPsychology (${name})`
}

export function buildGmailComposeUrl(data: ContactFormData): string {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: CONTACT_EMAIL,
    su: buildSubject(data.name),
    body: buildBody(data.name, data.email, data.message ?? ''),
  })

  return `https://mail.google.com/mail/?${params.toString()}`
}

export function buildOutlookComposeUrl(data: ContactFormData): string {
  const params = new URLSearchParams({
    to: CONTACT_EMAIL,
    subject: buildSubject(data.name),
    body: buildBody(data.name, data.email, data.message ?? ''),
  })

  return `https://outlook.office.com/mail/deeplink/compose?${params.toString()}`
}

export function buildContactEmailDraft(data: ContactFormData): ContactEmailDraft {
  const subject = buildSubject(data.name)
  const body = buildBody(data.name, data.email, data.message ?? '')

  return {
    subject,
    body,
    gmailComposeUrl: buildGmailComposeUrl(data),
    outlookComposeUrl: buildOutlookComposeUrl(data),
    clipboardText: `To: ${CONTACT_EMAIL}\nSubject: ${subject}\n\n${body}`,
  }
}
