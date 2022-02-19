import Head from "next/head";

export default ({ children }) => {
  return (
    <Head>
      <title>{children}</title>
      <meta name="description" content="Love Bank App for couples." />
      <link rel="icon" href="../../logo.png" />
    </Head>
  );
};
