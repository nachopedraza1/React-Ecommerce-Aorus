import './OwlMarcas.scss'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const OwlMarcas = () => {
    return (
        <OwlCarousel
            items="7"
            autoplay
            autoWidth
            center={true}
            loop={true}
            margin={40}
            dots={false}>
            <div className="item-box">
                <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/amd.png?alt=media&token=e2997da3-8f19-4031-a46e-3ce89416960e" alt="" />
            </div>
            <div className="item-box">
                <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/intel.png?alt=media&token=5be0c548-3775-434e-a930-4139dbd44c25" alt="" />
            </div>
            <div className="item-box">
                <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/asus.png?alt=media&token=ee6549e5-de7e-4ad6-ad75-82285dd887dd" alt="" />
            </div>
            <div className="item-box">
                <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/aorus.webp?alt=media&token=c5f6d70f-1dad-4b6b-870a-dc1ffa9a76a7" alt="" />
            </div>
            <div className="item-box">
                <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/nvidia.png?alt=media&token=6a5716a5-e3ff-40fd-8837-8efd7df57f6f" alt="" />
            </div>
            <div className="item-box">
                <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/msi.png?alt=media&token=66dfbbd2-dedd-4d59-a153-2397ba36e747" alt="" />
            </div>
            <div className="item-box">
                <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/gigabyte.png?alt=media&token=e92d2c54-f52e-46f0-ad25-f9fae9d368f6" alt="" />
            </div>
            <div className="item-box">
                <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/corsair.png?alt=media&token=23b19128-a4dd-402e-88bd-c4ffa1f57fa7" alt="" />
            </div>
            <div className="item-box">
                <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/logitech.png?alt=media&token=1f95e43c-82ba-40a9-b0d1-609b3fe0de77" alt="" />
            </div>
            <div className="item-box">
                <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/hyperx.png?alt=media&token=d7dd21f4-479d-4736-9741-7e06768a93e5" alt="" />
            </div>
        </OwlCarousel>
    )
}
