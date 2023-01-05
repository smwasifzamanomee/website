import HorizontalLayout from "../../layouts/HorizontalLayout";
import VerticalLayout from "../../layouts/VerticalLayout";
import Main from "./main";

const Blog = () => {
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

export default Blog;
