import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useFetchRouteData } from '../src/client';
import { Route,Switch } from "wouter"
import matchRoute from '../src/match-route';
import { routes } from './routes';
import { App } from '../src/render-app';

const premixData = document.getElementById('__REMIX_DATA__');
const initialData = JSON.parse(premixData.innerHTML);

function Router() {
  const history = useHistory();
  const fetchRouteData = useFetchRouteData();

  useEffect(() => {
    const unsubscribe = history.listen(location =>
      fetchRouteData(location.pathname)
    );

    return () => unsubscribe();
  }, []);

  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact
          component={route.component}
        />
      ))}
    </Switch>
  );
}

async function init() {
  const route = routes.find(x => matchRoute(x.path, window.location.pathname));
  await route.page();

  ReactDOM.render(
    <App Component={Router} />, document
  );
}

init();
