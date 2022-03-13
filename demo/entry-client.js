import ReactDOM from 'react-dom';
import { Route,Switch } from "wouter"
import matchRoute from '../src/match-route';
import { routes } from './routes';
import { App } from '../src/render-app';

const fremixData = document.getElementById('__fremix_data');
window.__fremix_data = JSON.parse(fremixData.innerHTML)

function Router() {
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
