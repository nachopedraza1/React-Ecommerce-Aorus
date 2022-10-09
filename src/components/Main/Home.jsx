import './Home.scss'
import { OwlMarcas } from "./OwlMarcas";
import { Preloader } from "./Preloader";
import { Slider } from "./Slider";

export const Home = () => {
    return (
        <div className='home-container'>
            <Preloader />
            <Slider />
            <OwlMarcas />
        </div>
    )
}
