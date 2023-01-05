import { useRouter } from "next/router"
import Container from "../../components/UI/Container";
import HeadTitle from "../../components/UI/HeadTitle";
import TopHeading from "../../components/UI/TopHeading";
import { servicesData } from "../../data/data";
import HorizontalLayout from "../../layouts/HorizontalLayout";
import VerticalLayout from "../../layouts/VerticalLayout";
import ServiceDetails from "./ServiceDetails";

const index = () => {
    const {serviceId} = useRouter().query;
    
    const result = servicesData.find(item => Number(item.id )=== Number(serviceId));
    console.log(result);

  return (
    <>
   <HorizontalLayout>
    <ServiceDetails item={result}/>
   </HorizontalLayout>
   <VerticalLayout>
    <ServiceDetails item={result}/>
   </VerticalLayout>
    </>
  )
}

export default index