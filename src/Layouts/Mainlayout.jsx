import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
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
