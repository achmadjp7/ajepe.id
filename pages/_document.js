import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <script src="/assets/js/jquery.min.js"></script>
            <script src="/assets/js/main.js"></script>
            <link rel="stylesheet" href="/assets/css/bootstrap-grid.css" />
            <link rel="stylesheet" href="/assets/css/style.css" />
            <link rel="stylesheet" href="/assets/css/glide.css" />
            <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
            <link rel="stylesheet" href="/assets/css/content-box.css" />
            <link rel="stylesheet" href="/assets/css/contact-form.css" />
            <link rel="stylesheet" href="/assets/css/media-box.css" />
            <link rel="stylesheet" href="/assets/css/skin.css" />
            <link rel="stylesheet" href="/assets/icons/iconsmind/line-icons.min.css" />           
        </Head>
        <body>
            <Main />
            <NextScript />

            <script src="/assets/js/parallax.min.js"></script>
            <script src="/assets/js/glide.min.js"></script>
            <script src="/assets/js/magnific-popup.min.js"></script>
            <script src="/assets/js/tab-accordion.js"></script>
            <script src="/assets/js/imagesloaded.min.js"></script>
            <script src="/assets/js/contact-form/contact-form.js"></script>
            <script src="/assets/js/progress.js"></script>
            <script src="/assets/js/custom.js"></script> 
        </body>
      </Html>
    );
  }
}

export default MyDocument;
