import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const location = useLocation();
  const includesSnippetRoute = location.pathname.split('/').includes('snippet')
  return (<>
  <Navbar/>
  <Outlet/>
 {
  includesSnippetRoute ? null :
  <Footer/>
 }
  </>
  )
}

export default App
