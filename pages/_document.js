import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-AO">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Techweb Solutions - Criação de Sites, Apps e Sistemas Web</title>
          <meta name="description" content="Techweb Solutions - Desenvolvimento de sites com chatbots, sistemas web, apps nativos e iOS. Soluções tecnológicas para seu negócio." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;