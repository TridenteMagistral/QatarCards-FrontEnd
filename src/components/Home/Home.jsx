import "./Home.css"
import CajaConSobres from "../../Image/caja-con-sobres.png"
import CajaYSobres from "../../Image/caja-y-sobres.png"
import MuchasCajas from "../../Image/muchas-cajas.png"
import Sobre from "../../Image/sobre.png"

export default function Home() {
    return (
        <div className="wallpaper-mundial   ps-5">
            <div className="row d-flex align-items-center">
                <div className="novedades-principales col-12 col-sm-3  ">
                    <img src={CajaConSobres} alt="" srcset="" />
                </div>

                <div className="novedades-secundarias col-12 col-sm-3">
                    <img src={MuchasCajas} alt="" srcset="" />
                </div>
            </div>
            <div className="row  d-flex align-items-center">
                <div className="novedades-terciarias col-12 col-sm-3">
                    <img src={CajaYSobres} alt="" srcset="" />
                </div>

                <div className="novedades col-12 col-sm-3 ">
                    <img src={Sobre} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}
