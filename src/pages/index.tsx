import "../app/globals.css";
import PathBars from "@/component/PathBars";
import Image from "next/image";
import HomePreview from "@/component/HomePreview";
import LandingPage from "@/layout/LandingPage";
import CardPrice from "@/component/CardPrice";
import Testimonal from "@/component/Testimonal";
import AnotherItemPreview from "@/component/AnotherItemPreview";
import Carousel from "@/component/Carousel";


const Home = () => {
  return (
    <LandingPage>
      <PathBars path={["Home", "Layanan Desain", "Omah Apik 3S"]} />
      <Carousel loop/>      
      <div className="md:p-side flex gap-14 md:flex-row flex-col items-center">
        <HomePreview />
        <div className="">
          <CardPrice />
          <Testimonal />
        </div>
      </div>
      <AnotherItemPreview />
    </LandingPage>
  );
};

export default Home;
