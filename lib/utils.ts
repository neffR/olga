export function toAbsoluteUrl(domain: string, path: string): string {
  const normalizedDomain = domain.endsWith("/") ? domain.slice(0, -1) : domain;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedDomain}${normalizedPath}`;
}
