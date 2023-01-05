
import { useRouter } from "next/router";
import Requirements from "../../components/pages/career/Requirements";
import HeadTitle from "../../components/UI/HeadTitle";
import TopHeading from "../../components/UI/TopHeading";
import { careerpositionData } from "../../data/data";
import HorizontalLayout from "../../layouts/HorizontalLayout";
import VerticalLayout from "../../layouts/VerticalLayout";

const PositionDetails = () => {

  const { careerId } = useRouter().query;
  const filteredData = careerpositionData.find(
    (item) => item.id === Number(careerId)
  );

  return (
    <>
      <HorizontalLayout>
        <HeadTitle title={`Career ${filteredData?.title}`} />
        <TopHeading title={"Career"} />
        <Requirements />
      </HorizontalLayout>
      <VerticalLayout>
        <HeadTitle title={`Career ${filteredData?.title}`} />
        <TopHeading title={"Career"} />
      <Requirements />
      </VerticalLayout>
    </>
  );
};

export default PositionDetails;
