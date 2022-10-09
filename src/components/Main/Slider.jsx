import "../Main/Slider.scss"
import { Link } from "react-router-dom"

export const Slider = () => {
    return (
        <>
            <div className="slider-bg"></div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/sliderMobile-13.jpg?alt=media&token=e4de7111-d2c5-4ad6-b7c8-eeae550d1ff2" className="d-block d-md-none w-100" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/sliderMobile-3.jpg?alt=media&token=8005ea0c-3b30-4e89-a562-c80b14c91ec2" className="d-none d-md-block w-100" alt="" />
                        <div className="carousel-text animate__animated animate__fadeInUp ">
                            <h1>Reshape the Game</h1>
                            <h4>AORUS 17 &17X GAMING LAPTOP</h4>
                            <button className="btn-seeMore"><Link className="nav-link text-white" to="/categoria/motherboards">SEE MORE</Link></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/sliderMobile-12.jpg?alt=media&token=3ca8e849-a936-4607-803f-45b700a39753" className="d-block d-md-none w-100" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/sliderMobile-2.jpg?alt=media&token=194c2362-cddb-4b0c-af54-e3e63bb8b72c" className="d-none d-md-block w-100" alt="" />
                        <div className="carousel-text-two animate__animated animate__fadeInRight">
                            <h1>Less is More</h1>
                            <h4>Aorus Project Stealth</h4>
                            <button className="btn-seeMore"><Link className="nav-link text-white" to="/categoria/motherboards">SEE MORE</Link></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/SliderMobile11.jpg?alt=media&token=4a0dd4a6-c957-4d91-a8f4-1af149e2bb69" className="d-block d-md-none w-100" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/SliderMobile1.jpg?alt=media&token=0b8b17dd-059b-49d9-805d-3aae7987a89f" className="d-none d-md-block w-100" alt="" />
                        <div className="carousel-text-three animate__animated animate__fadeInLeft">
                            <h1>Apex of Cooling</h1>
                            <h5>AORUS GeForce RTX® 40 Series Graphics Cards</h5>
                            <button className="btn-seeMore"><Link className="nav-link text-white" to="/categoria/motherboards">SEE MORE</Link></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/SliderMobile14.jpg?alt=media&token=bb4333a2-d976-45d6-b873-8d8e52569e61" className="d-block d-md-none w-100" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/SliderMobile4.jpg?alt=media&token=e66c3426-e3a3-4d3c-8f8d-8cd9acc7f3c9" className="d-none d-md-block w-100" alt="" />
                        <div className="carousel-text-four animate__animated animate__fadeInRight">
                            <h1>4K Pro Gaming On!</h1>
                            <h5>GIGABYTE AORUS 4K Monitors</h5>
                            <button className="btn-seeMore"><Link className="nav-link text-white" to="/categoria/motherboards">SEE MORE</Link></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/SliderMobile15.jpg?alt=media&token=c2b6d859-d01c-46f9-8b41-4aa653bbbb4f" className="d-block d-md-none w-100" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/SliderMobile5.jpg?alt=media&token=fd692abb-ec6e-4949-8a9f-251b3aa5c112" className="d-none d-md-block w-100" alt="" />
                        <div className="carousel-text-five animate__animated animate__fadeInLeft">
                            <h1>Absolute Matter</h1>
                            <h5>AORUS X670 | B650 Gaming Motherboards</h5>
                            <button className="btn-seeMore"><Link className="nav-link text-white" to="/categoria/motherboards">SEE MORE</Link></button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
