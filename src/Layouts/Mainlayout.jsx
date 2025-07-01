import Navbar from "../components/Navbar";
import Contact from "../Components/Contact";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Contact/>
    </>
  )
}
