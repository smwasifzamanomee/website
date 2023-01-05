import VerticalFooter from "../components/shared/VerticalLayout/VerticalFooter"
import VerticalNavbar from "../components/shared/VerticalLayout/VerticalNavbar"

const VerticalLayout = ({children}) => {
  return (
    <div className={'xl:hidden block'}>
        <VerticalNavbar />
        {children}
        <VerticalFooter />
    </div>
  )
}

export default VerticalLayout