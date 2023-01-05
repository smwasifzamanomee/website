import OurVision from "../../components/pages/home/OurVision"
import Container from "../../components/UI/Container"
import HeadTitle from "../../components/UI/HeadTitle"
import TopHeading from "../../components/UI/TopHeading"
import HorizontalLayout from "../../layouts/HorizontalLayout"
import VerticalLayout from "../../layouts/VerticalLayout"
import ServiceItems from "./ServiceItems"
import Steps from "./Steps"

const Services = () => {
  return (
    <>
    <HorizontalLayout>
      <HeadTitle title={'Services'}/>
      <TopHeading title={'Services'} />
      <Container bgColor={'bg-dark'}>
        <ServiceItems />
        <Steps />
        <OurVision />
      </Container>
    </HorizontalLayout>

    <VerticalLayout>
    <HeadTitle title={'Services'}/>
      <TopHeading title={'Services'} />
      <Container bgColor={'bg-dark'}>
        <ServiceItems />
        <Steps />
        <OurVision />
      </Container>
    </VerticalLayout>

    </>
  )
}

export default Services