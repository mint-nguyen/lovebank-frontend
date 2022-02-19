import AppBar from "../../components/AppBar";
import Head from "../../components/Head";
import Header from "../../components/Header";
import HomeTab from "../../components/Home/HomeTab";

export default function Home() {
  return (
    <>
      <Head>Love Bank - Home</Head>
      <Header />
      <HomeTab />
      <AppBar />
    </>
  );
}
