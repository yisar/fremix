import ReactDOMServer from 'react-dom/server';

export default function handleRequest(App) {
  const markup = ReactDOMServer.renderToString(<App />);
  return `<!DOCTYPE html>${markup}`;
}
