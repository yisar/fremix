import loadable from '../src/loadable';

export const routes = makeRoutes([
  {
    path: '/',
    page: () => import('./pages'),
  }
]);

function makeRoutes(
  routes
) {
  return routes.map(route => ({
    ...route,
    component: route.component || loadable(route.page),
  }));
}
