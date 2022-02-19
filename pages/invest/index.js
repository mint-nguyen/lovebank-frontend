import AppBar from "../../components/AppBar";
import Head from "../../components/Head";
import Header from "../../components/Header";
import InvestTab from "../../components/Invest/InvestTab";

export default function Invest() {
  return (
    <>
      <Head>Love Bank - Invest</Head>
      <Header />
      <InvestTab />
      <AppBar />
    </>
  );
}
