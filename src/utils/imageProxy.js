export function proxyImageUrl(originalUrl, options = {}) {
  if (!originalUrl || typeof originalUrl !== 'string') {
    return originalUrl;
  }

  const trimmedUrl = originalUrl.trim();

  // Only proxy http/https external URLs; leave others (data:, blob:, relative assets) untouched
  if (!/^https?:\/\//i.test(trimmedUrl)) {
    return trimmedUrl;
  }

  // Remove protocol; wsrv.nl assumes https by default
  const withoutProtocol = trimmedUrl.replace(/^https?:\/\//i, '');

  const params = new URLSearchParams();
  params.set('url', withoutProtocol);

  if (options.width) params.set('w', String(options.width));
  if (options.quality) params.set('q', String(options.quality));
  if (options.fit) params.set('fit', String(options.fit));
  if (options.auto) params.set('auto', String(options.auto));

  return `https://wsrv.nl/?${params.toString()}`;
}


