import { routes } from "../demo/routes";
import matchRoute from "./match-route";

export async function renderApp(url) {
    const urlWithoutQuery = new URL(`https://example.com${url}`).pathname;
    const route = routes.find(x => matchRoute(x.path, urlWithoutQuery))
    if (!route) {
        return { notFound: true }
    }
    const page = await route.page()
    console.log(page)
    const data = page.loader()
    const component = page.defalut

    return () => {
        return <App Component={component} data={data}></App>
    }
}

function App({ Component, data }) {
    console.log(data)
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <div id="__fremix">
                    <Component />
                </div>
            </body>
        </html>
    );
}