import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Toaster } from 'react-hot-toast'

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
 <Toaster/>
  </>
  )
}

export default App
