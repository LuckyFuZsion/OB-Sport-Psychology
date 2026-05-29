const HAS_TIMEZONE = /(?:Z|[+-]\d{2}:?\d{2})$/i

/** ISO 8601 datetime with timezone for schema.org and Open Graph. */
export function toSchemaDateTime(value: string): string {
  if (HAS_TIMEZONE.test(value)) return value
  if (value.includes('T')) return `${value}Z`
  return `${value}T00:00:00Z`
}
