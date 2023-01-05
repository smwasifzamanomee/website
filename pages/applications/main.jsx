import Table from "../../components/pages/career/Table"
import Container from "../../components/UI/Container"
import HeadTitle from "../../components/UI/HeadTitle"
import TopHeading from "../../components/UI/TopHeading"

const Main = () => {
  return (
    <>
    <TopHeading title={'Applications'}/>
    <HeadTitle title={'Applications'}/>

    <Container bgColor={'bg-dark'} height='min-h-screen'>
    <Table/>
    </Container>
    </>
  )
}

export default Main