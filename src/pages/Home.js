import Achievements from "../components/Home/Achievements.js";
import NewsletterRegister from "../components/Reusable/NewsletterRegister.js";
import OurClients from "../components/Home/OurClients.js";
import ClientTestimonySlider from "../components/Home/ClientTestimonySlider.js";
import RecentProjects from "../components/Home/RecentProjects.js";
import RecentBlogs from "../components/Home/RecentBlogs.js";
import WhyChooseUS from "../components/Home/WhyChooseUs.js";
import ServiceSpotlight from "../components/Home/ServiceSpotlight.js";
import OurServices from "../components/Home/OurServices.js";
import OurVision from "../components/Home/OurVision.js";
import Hero from "../components/Home/Hero.js";
import PronunciationButton from "../components/Home/PronunciationButton.js";
import { useParams } from "react-router-dom";

function Home() {
  const { lang } = useParams();

  return (
    <div className="page-background">
      <Hero lang={lang} />

      <PronunciationButton lang={lang} />

      <OurClients lang={lang} />

      <OurVision lang={lang} />

      <OurServices lang={lang} />

      <ServiceSpotlight lang={lang} />

      <WhyChooseUS lang={lang} />

      <Achievements lang={lang} />

      <RecentProjects lang={lang} />

      <ClientTestimonySlider lang={lang} />

      <NewsletterRegister lang={lang} />

      <RecentBlogs lang={lang} />
    </div>
  );
}

export default Home;
