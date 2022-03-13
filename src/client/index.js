import { useLoaderData } from '../index';
import { routes } from '../../demo/routes';
import matchRoute from '../match-route';

export function useFetchRouteData() {
  const [, setRouteData] = useLoaderData();

  return async (url) => {
    console.log('FETCHING');
    const route = routes.find(x => matchRoute(x.path, url));
    const res = await fetch(`/data?path=${route.path}&href=${url}`);
    const data = await res.json();

    setRouteData(data.data.props);
    setRemix(data);
    console.log('SET');
  };
}