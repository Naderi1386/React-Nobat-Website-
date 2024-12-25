import { Outlet, ScrollRestoration } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import ScrollBtn from "./ScrollBtn"


const Applayout = () => {
  
 
  return (
    <>
    <ScrollBtn/>
    <ScrollRestoration/>
    <div className="grid h-dvh grid-rows-[auto,1fr,auto]">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
    
    </>
  )
}

export default Applayout