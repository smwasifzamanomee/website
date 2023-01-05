import { useRouter } from "next/router";
import { ourteamsData } from "../../data/data";
import HorizontalLayout from "../../layouts/HorizontalLayout";
import VerticalLayout from "../../layouts/VerticalLayout";
import { SingleMember } from "../../components/pages/team/SingleMember";

const MemberDetails = () => {
  const { memberId } = useRouter().query;
  const filderedItem = ourteamsData?.find((item) =>  item?.name ===  memberId);
  return (
    <>
      <HorizontalLayout>
        <SingleMember item={filderedItem} />
      </HorizontalLayout>
      <VerticalLayout>
        <SingleMember item={filderedItem} />
      </VerticalLayout>
    </>
  );
};

export default MemberDetails;
