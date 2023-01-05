import HorizontalLayout from "../../layouts/HorizontalLayout";
import VerticalLayout from "../../layouts/VerticalLayout";
import Main from "./main";

const OurWork = () => {
  return (
    <>
      <HorizontalLayout>
        <Main />
      </HorizontalLayout>
      <VerticalLayout>
        <Main />
      </VerticalLayout>
    </>
  );
};

export default OurWork;
