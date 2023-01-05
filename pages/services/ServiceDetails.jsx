import Container from "../../components/UI/Container";
import HeadTitle from "../../components/UI/HeadTitle";
import TopHeading from "../../components/UI/TopHeading";

const ServiceDetails = ({ item }) => {
  return (
    <>
      <TopHeading title={item?.title} />
      <HeadTitle title={item?.title} />
      <Container bgColor={"bg-dark"} height="min-h-screen">

      </Container>
    </>
  );
};

export default ServiceDetails;
