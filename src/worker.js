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

    if (url.pathname === '/search' || url.pathname.startsWith('/search/')) {
      return Response.redirect(`${CANONICAL_ORIGIN}/`, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
