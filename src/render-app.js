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

    
    return { notFound: true }
}