import AppBar from "../../components/AppBar";
import Head from "../../components/Head";
import Header from "../../components/Header";
import ProfileTab from "../../components/Profile/ProfileTab";

export default function Profile() {
  return (
    <>
      <Head>Love Bank - Profile</Head>
      <Header />
      <ProfileTab />
      <AppBar />
    </>
  );
}
