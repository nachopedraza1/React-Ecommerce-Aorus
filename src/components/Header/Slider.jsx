import "../Header/Slider.scss"
import { Preloader } from "../Main/Preloader"

export const Slider = () => {
    return (
        <>
            <Preloader />
            <div className="slider-bg"></div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="banner-bg-cover"></div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/sliderMobile-13.jpg?alt=media&token=e4de7111-d2c5-4ad6-b7c8-eeae550d1ff2" className="d-block d-md-none w-100" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/sliderMobile-3.jpg?alt=media&token=8005ea0c-3b30-4e89-a562-c80b14c91ec2" className="d-none d-md-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/sliderMobile-12.jpg?alt=media&token=3ca8e849-a936-4607-803f-45b700a39753" className="d-block d-md-none w-100" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/sliderMobile-2.jpg?alt=media&token=194c2362-cddb-4b0c-af54-e3e63bb8b72c" className="d-none d-md-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/sliderMobile-11.jpg?alt=media&token=8342cff5-e554-4fd8-a383-1eaba3ee2d34" className="d-block d-md-none w-100" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/sliderMobile-1.jpg?alt=media&token=86813264-dc64-40a4-b988-b59144b71d54" className="d-none d-md-block w-100" alt="" />
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
