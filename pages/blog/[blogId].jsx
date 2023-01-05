import Container from "../../components/UI/Container"
import HeadTitle from "../../components/UI/HeadTitle"
import TopHeading from "../../components/UI/TopHeading"
import HorizontalLayout from "../../layouts/HorizontalLayout"

const BlogDetails = () => {
  return (
    <HorizontalLayout>
      <HeadTitle title={`Blog Details`}/>
      <TopHeading title={'Blog Details'}/>
     <Container bgColor='bg-dark' height='min-h-screen'>
     BlogDetails
     </Container>
    </HorizontalLayout>
  )
}

export default BlogDetails