import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* Custom JS files */}
        <script
          async
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
        ></script>
        {/* theme js */}
        <script async src='public/assets/one/js/jquery-3.5.1.min.dc5e7f18c8.js'></script>
        <script async src='public/assets/one/js/webflow.de8ed9447.js'></script>
        <script async src='public/assets/one/js/webfont.js'></script>
        {/* startbootstrap forms */}
        <script
          async
          src='https://cdn.startbootstrap.com/sb-forms-latest.js'
        ></script>
      </body>
    </Html>
  )
}
