
import Main from "../../components/pages/career/main";
import HorizontalLayout from "../../layouts/HorizontalLayout";
import VerticalLayout from "../../layouts/VerticalLayout";

const Career = () => {
  return (
    <>
      <HorizontalLayout classname={'xl:block hidden'}>
        <Main />
      </HorizontalLayout>
      <VerticalLayout classname={'xl:hidden block'}>
        <Main />
      </VerticalLayout>
    </>
  );
};

export default Career;
