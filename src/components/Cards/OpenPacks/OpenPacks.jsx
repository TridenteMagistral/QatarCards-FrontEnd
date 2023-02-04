/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import packImg from "../../../Image/pack.png"
import Pack from "./Pack"
import "./OpenPacks.css"

export default function OpenPacks() {

    const [packs, SetPacks] = useState([]);

    useEffect(() => {

        SetPacks([{
            img: packImg,
            price: "USD 5",
            description: "Sobre que contiene 5 cartas",
            name: "Pack World Cup"
        }, {
            img: packImg,
            price: "USD 5",
            description: "Sobre que contiene 5 cartas",
            name: "Pack World Cup"
        }, {
            img: packImg,
            price: "USD 5",
            description: "Sobre que contiene 5 cartas",
            name: "Pack World Cup"
        }, {
            img: packImg,
            price: "USD 5",
            description: "Sobre que contiene 5 cartas",
            name: "Pack World Cup"
        }, {
            img: packImg,
            price: "USD 5",
            description: "Sobre que contiene 5 cartas",
            name: "Pack World Cup"
        }, {
            img: packImg,
            price: "USD 5",
            description: "Sobre que contiene 5 cartas",
            name: "Pack World Cup"
        }, {
            img: packImg,
            price: "USD 5",
            description: "Sobre que contiene 5 cartas",
            name: "Pack World Cup"
        }, {
            img: packImg,
            price: "USD 5",
            description: "Sobre que contiene 5 cartas",
            name: "Pack World Cup"
        }, {
            img: packImg,
            price: "USD 5",
            description: "Sobre que contiene 5 cartas",
            name: "Pack World Cup"
        }, {
            img: packImg,
            price: "USD 5",
            description: "Sobre que contiene 5 cartas",
            name: "Pack World Cup"
        }, {
            img: packImg,
            price: "USD 5",
            description: "Sobre que contiene 5 cartas",
            name: "Pack World Cup"
        }, {
            img: packImg,
            price: "USD 5",
            description: "Sobre que contiene 5 cartas",
            name: "Pack World Cup"
        }])

    }, [])

    return (

        <div className="wallpaperOpenPacks">
            <h2 className="w-100">Packs</h2>
            {packs.map((pack) => (
                <Pack pack={pack} />
            ))
            }
        </div>
    )

}
