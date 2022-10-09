import './OwlCategories.scss'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const OwlCategories = () => {
    return (
        < OwlCarousel
            className='pt-5 animate__animated animate__fadeInDown'
            items="6"
            autoplay
            autoWidth
            center={true}
            loop={true}
            margin={40}
            dots={false}
        >
            <div className='product-line-div'>
                <div className="product-div">
                    <div className="box">
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/categoryMothers.webp?alt=media&token=24925b9d-15c6-4e42-ba05-6724e0948a2c" width="200" height="200" />
                        <div className="name active">
                            <span ></span>
                            MOTHERBOARDS
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-line-div'>
                <div className="product-div">
                    <div className="box">
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/categoryCards.webp?alt=media&token=36be9435-76c4-497b-be68-9a43f2fa1752" width="200" height="200" />
                        <div className="name active">
                            <span ></span>
                            GRAFICAS
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-line-div'>
                <div className="product-div">
                    <div className="box">
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/categoryMonitors.webp?alt=media&token=c784bf4f-48fc-46f0-a135-242ac3989cc9" width="200" height="200" />
                        <div className="name active">
                            <span ></span>
                            MONITORES
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-line-div'>
                <div className="product-div">
                    <div className="box">
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/categoryRefri.webp?alt=media&token=b7e75e90-b08d-4d3a-9ec3-a551297d8010" width="200" height="200" />
                        <div className="name active">
                            <span ></span>
                            WATER COOLING
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-line-div'>
                <div className="product-div">
                    <div className="box">
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/categoryCases.webp?alt=media&token=ed4777ea-15bb-46e9-abff-f2938ae74eb9" width="200" height="200" />
                        <div className="name active">
                            <span ></span>
                            GABINETES
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-line-div'>
                <div className="product-div">
                    <div className="box">
                        <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/categoryRams.png?alt=media&token=3a3997e2-9cfb-4525-9c6d-0ccf00eb7a75" width="200" height="200" />
                        <div className="name active">
                            <span ></span>
                            MEMORIAS RAM
                        </div>
                    </div>
                </div>
            </div>

        </OwlCarousel >
    )
}

