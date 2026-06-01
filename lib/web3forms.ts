export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ''

export interface ContactFormPayload {
  name: string
  email: string
  message: string
}

export function buildContactSubject(name: string): string {
  return `Enquiry | OBSportPsychology (${name})`
}

export async function submitContactForm(
  payload: ContactFormPayload
): Promise<{ success: boolean; message?: string }> {
  if (!WEB3FORMS_ACCESS_KEY) {
    return {
      success: false,
      message: 'Contact form is not configured. Please email us directly.',
    }
  }

  const formData = new FormData()
  formData.append('access_key', WEB3FORMS_ACCESS_KEY)
  formData.append('name', payload.name)
  formData.append('email', payload.email)
  formData.append('message', payload.message || '(No message provided)')
  formData.append('subject', buildContactSubject(payload.name))
  formData.append('botcheck', '')

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  })

  const data = (await response.json()) as { success?: boolean; message?: string }

  if (response.ok && data.success) {
    return { success: true }
  }

  return {
    success: false,
    message: data.message ?? 'Something went wrong. Please try again.',
  }
}
