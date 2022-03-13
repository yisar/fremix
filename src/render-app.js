import { routes } from "../demo/routes";
import matchRoute from "./match-route";
import {RouteDataContext} from './index'

export async function renderApp(url) {
    const urlWithoutQuery = new URL(`https://example.com${url}`).pathname;
    const route = routes.find(x => matchRoute(x.path, urlWithoutQuery))
    if (!route) {
        return { notFound: true }
    }
    const page = await route.page()
    const data = await page.loader()
    const component = page.default

    return () => {
        return <RouteDataContext.Provider value={data}><App Component={component} data={data}></App></RouteDataContext.Provider>
    }
}

export function App({ Component, data }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <template id="__fremix_data">
                    {JSON.stringify(data)}
                </template>
                <div id="__fremix">
                    <Component />
                </div>
                <script src="/build/entry-client.js"></script>
            </body>
        </html>
    );
}