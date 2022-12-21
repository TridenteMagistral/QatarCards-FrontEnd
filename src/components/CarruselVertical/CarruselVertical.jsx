/* eslint-disable jsx-a11y/alt-text */
import "./CarruselVertical.css"
import LionelMessi from "../../Image/leo-messi.jpg"
import CritianoRonaldo from "../../Image/Cristiano-ronaldo.jpg"
import HarryKane from "../../Image/Harry-kane.jpg"
import Mbappe from "../../Image/Mbappe.jpg"
import LukaModric from "../../Image/luka-modric.jpg"
import NeymarJr from "../../Image/neymar-jr.jpg"
import musiala from "../../Image/musiala.jpg"
import gavi from "../../Image/gavi.jpg"
import bonoMarruecos from "../../Image/bono-marruecos.jpg"

export default function CarruselVertical() {
    return (

        <div class="container">
            <div class="carrusel">
                <div class="carousel__face"><span><img src={LionelMessi} /></span></div>
                <div class="carousel__face"><span><img src={CritianoRonaldo} /></span></div>
                <div class="carousel__face"><span><img src={HarryKane} /></span></div>
                <div class="carousel__face"><span><img src={Mbappe} /></span></div>
                <div class="carousel__face"><span><img src={LukaModric} /></span></div>
                <div class="carousel__face"><span><img src={NeymarJr} /></span></div>
                <div class="carousel__face"><span><img src={musiala} /></span></div>
                <div class="carousel__face"><span><img src={gavi} /></span></div>
                <div class="carousel__face"><span><img src={bonoMarruecos} /></span></div>
            </div>
        </div>
    )
}
