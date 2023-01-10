import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"
import './layout.css'

export default function Layout() {
    return (
        <div className="wallpaper-layout">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
