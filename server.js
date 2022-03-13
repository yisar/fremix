import express from 'express';
import { renderApp } from './src/render-app';
import handleRequest from './demo/entry-server'

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', async function (req, res) {
  const RemixApp = await renderApp(req.originalUrl);

    if (RemixApp.notFound === true) {
      return res.status(404).send('Page not found');
    }

    const html = handleRequest(RemixApp);
    res.setHeader('content-type', 'text/html');
    res.send(html);
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
})