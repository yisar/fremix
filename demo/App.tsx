export default function App({ Component }) {
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
