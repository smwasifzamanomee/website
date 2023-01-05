import AboutMiicon from "../../components/pages/aboutus/AboutMiicon";
import BestService from "../../components/pages/aboutus/BestService";
import HeadTitle from "../../components/UI/HeadTitle";
import TopHeading from "../../components/UI/TopHeading";
import HorizontalLayout from "../../layouts/HorizontalLayout";
import VerticalLayout from "../../layouts/VerticalLayout";
import OurTeams from "../team";

const AboutUs = () => {
  return (
    <>
      <HorizontalLayout>
        <HeadTitle title={"About Us"} />
        <TopHeading title={"About Us"} />

        <AboutMiicon />
        <BestService />
        <OurTeams />
      </HorizontalLayout>

      <VerticalLayout>
        <HeadTitle title={"About Us"} />
        <TopHeading title={"About Us"} />

        <AboutMiicon />
        <BestService />
        <OurTeams />
      </VerticalLayout>
    </>
  );
};

export default AboutUs;
