const APEX = 'wegotbetterdata.com';
const CANONICAL_ORIGIN = `https://${APEX}`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === `www.${APEX}`) {
      url.hostname = APEX;
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }

    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }

    // Collapse known duplicate / dead search paths
    if (url.pathname === '/search' || url.pathname.startsWith('/search/')) {
      return Response.redirect(`${CANONICAL_ORIGIN}/`, 301);
    }

    // Normalize index.html to canonical root
    if (url.pathname === '/index.html') {
      return Response.redirect(`${CANONICAL_ORIGIN}/`, 301);
    }

    const response = await env.ASSETS.fetch(request);

    // Ensure HTML responses advertise canonical when missing (defense in depth)
    if (response.headers.get('content-type')?.includes('text/html')) {
      const headers = new Headers(response.headers);
      if (!headers.has('Strict-Transport-Security')) {
        headers.set(
          'Strict-Transport-Security',
          'max-age=31536000; includeSubDomains; preload',
        );
      }
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    return response;
  },
};
