import DownloadSection from "@/components/downloadSection/DownloadSection";
import ForBusiness from "@/components/Features/ForBusiness/forBusiness";
import HowActivityWork from "@/components/Features/HowItWork/howActivityWork";
import HowSimpleMoneyWork from "@/components/Features/HowItWork/howSimpleMoneyWork";
import SharedActivity from "@/components/Features/SharedActivity/sharedActivity";
import SimpleMoney from "@/components/Features/SimpleMoney/simpleMoney";
import Footer from "@/components/Footer/footer";
import NavBar from "@/components/NavBar/navBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <SimpleMoney />
        <HowSimpleMoneyWork />
        <SharedActivity />
        <HowActivityWork />
        <ForBusiness/>
        <DownloadSection/>
        <Footer/>
      </main>
    </>
  );
}
3;
