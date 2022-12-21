import "./Home.css"
import CajaConSobres from "../../Image/caja-con-sobres.png"
import CajaYSobres from "../../Image/caja-y-sobres.png"
import MuchasCajas from "../../Image/muchas-cajas.png"
import Sobre from "../../Image/sobre.png"
import CarruselVertical from "../CarruselVertical/CarruselVertical"
import Carrusel from "../Carrusel/Carrusel"

export default function Home() {
    return (
        <div className="wallpaper-mundial container-fluid ps-5  mx-0">
            <div className="row ">
                <div className="novedades-principales col-12 col-sm-2  ">
                    <img src={CajaConSobres} alt="" />
                </div>

                <div className="novedades-secundarias col-12 col-sm-2">
                    <img src={MuchasCajas} alt="" />
                </div>
                <div className="col-sm-4" >
                    <CarruselVertical />
                </div>
            </div>
            <div className="row">
                <div className="novedades-terciarias col-12 col-sm-2">
                    <img src={CajaYSobres} alt="" />
                </div>

                <div className="novedades col-12 col-sm-2 ">
                    <img src={Sobre} alt="" />
                </div>
            </div>
             <div className="container-carrusel">
                    <Carrusel />
                </div> 
              
        </div>
    )
}
