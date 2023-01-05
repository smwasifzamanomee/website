import HorizontalFooter from "../components/shared/HorizontalLayout/HorizontalFooter"
import HorizontalNavbar from "../components/shared/HorizontalLayout/HorizontalNavbar"

const HorizontalLayout = ({children}) => {
  return (
    <div className={'xl:block hidden'}>
    <HorizontalNavbar/>
    {children}
    <HorizontalFooter />
    </div>
  )
}

export default HorizontalLayout