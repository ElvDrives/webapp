import Layout from "../Components/Layout";

function myApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default myApp;
