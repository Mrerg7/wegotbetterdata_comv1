const APEX = 'wegotbetterdata.com';
const CANONICAL_ORIGIN = `https://${APEX}`;

export async function onRequest(context) {
  const url = new URL(context.request.url);

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

  return context.next();
}
