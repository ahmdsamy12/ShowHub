import FooterApp from "../components/FooterApp/FooterApp";
import HeaderApp from "../components/HeaderApp/HeaderApp";
import { Outlet } from 'react-router-dom';


const LayoutApp = () => {
  return (
    <div className="layout">
        <HeaderApp />
        <Outlet />
        <FooterApp />
    </div>
  )
}

export default LayoutApp;