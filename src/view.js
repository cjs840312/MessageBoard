export default ({ body, title }) => {
  return `
    <html>
      <head>
        <title>${title}</title>
      </head>
      
      <body>
        <div id="root"></div>
      </body>

      <script src="./bundle.js"></script>
    </html>
  `;
};