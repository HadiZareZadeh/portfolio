/**
 * Proxy image URLs through wsrv.nl for optimization
 * @param {string} originalUrl - The original image URL
 * @param {Object} options - Optimization options
 * @param {number} options.width - Target width
 * @param {number} options.quality - Image quality (1-100)
 * @param {string} options.fit - Fit mode (cover, contain, fill, etc.)
 * @param {string} options.auto - Auto optimization (format, compress)
 * @returns {string} - Proxied URL or original URL if not applicable
 */
export function proxyImageUrl(originalUrl, options = {}) {
  // Return as-is if not a string
  if (typeof originalUrl !== 'string') {
    return originalUrl
  }
  
  // Don't proxy data URLs, blob URLs, or relative URLs
  if (originalUrl.startsWith('data:') || 
      originalUrl.startsWith('blob:') || 
      originalUrl.startsWith('/') ||
      !originalUrl.startsWith('http')) {
    return originalUrl
  }
  
  // Only proxy absolute HTTP/HTTPS URLs
  if (!originalUrl.startsWith('http://') && !originalUrl.startsWith('https://')) {
    return originalUrl
  }
  
  // Remove protocol for wsrv.nl
  const urlWithoutProtocol = originalUrl.replace(/^https?:\/\//, '')
  
  // Build query parameters
  const params = new URLSearchParams()
  params.set('url', urlWithoutProtocol)
  
  // Add optimization options
  if (options.width) {
    params.set('w', options.width.toString())
  }
  
  if (options.quality) {
    params.set('q', options.quality.toString())
  }
  
  if (options.fit) {
    params.set('fit', options.fit)
  }
  
  if (options.auto) {
    params.set('auto', options.auto)
  }
  
  return `https://wsrv.nl/?${params.toString()}`
}
