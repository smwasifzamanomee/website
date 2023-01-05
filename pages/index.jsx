
import AboutMiicon from '../components/pages/aboutus/AboutMiicon'
import Hero from '../components/pages/home/Hero'
import OurVision from '../components/pages/home/OurVision'
import WhyUs from '../components/pages/home/WhyUs'
import HeadTitle from '../components/UI/HeadTitle'
import HorizontalLayout from '../layouts/HorizontalLayout'
import VerticalLayout from '../layouts/VerticalLayout'
import ServiceItems from './services/ServiceItems'
import OurTeams from './team'

export default function Home() {
  return (
    <>
    <HorizontalLayout >
      <HeadTitle title={'Home'} />
      
      <Hero />
      <AboutMiicon />
      <ServiceItems />
      <WhyUs />
      <OurVision />
      <OurTeams />

    </HorizontalLayout>

    <VerticalLayout>
    <HeadTitle title={'Home'} />
      
      <Hero />
      <AboutMiicon />
      <ServiceItems />
      <WhyUs />
      <OurVision />
      <OurTeams />

    </VerticalLayout>
    </>
  )
}
