import '../Footer/Footer.scss'

export const Footer = () => {
    return (
        <footer className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column">
                <img className="mx-auto mb-4" src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/aorusLogoFooter.svg?alt=media&token=05a0cb2a-2154-489d-a78d-faed98246b65" alt="" width="90px" />
                <span data-v-1c95e756="" data-text="TEAM UP. FIGHT ON."
                    className="footer-text-glitch glitch footer-glitch fs-5 f-ars mb-2">
                    TEAM
                    UP. FIGHT ON. </span>
            </div>
            <div className="text-white fs-3">
                <a href="#"><i className="p-1 fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="p-1 fa-brands fa-twitter"></i></a>
                <a href="#"><i className="p-1 fa-brands fa-youtube"></i></a>
                <a href="#"><i className="p-1 fa-brands fa-instagram"></i></a>
                <a href="#"><i className="p-1 fa-brands fa-twitch"></i></a>
            </div>
        </footer>
    )
}
