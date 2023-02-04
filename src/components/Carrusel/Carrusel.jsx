/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import "./Carrusel.css"
import Carousel from 'react-bootstrap/Carousel';
import Sobre from "../../Image/sobre1.png"

export default function Carrusel() {

    return (
        <Carousel className="w-50 m-auto py-5" >
            <Carousel.Item>
                <img
                    className="d-block w-100 sobre"
                    src={Sobre}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Sobre}
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Sobre}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}