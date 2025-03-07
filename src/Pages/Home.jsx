import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import ChooseUs from '../components/Chosseus';
import Faq from "../components/Faq";
import Download from "../components/Download";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Faq />
      <Download />
      <Footer />
    </>
  );
}

export default Home;
