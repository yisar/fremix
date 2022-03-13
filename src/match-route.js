import param from 'regexparam';

export default function matchRoute(route, toMatch) {
  const routeRegex = param(route);
  return routeRegex.pattern.test(toMatch);
}