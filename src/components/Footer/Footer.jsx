import '../Footer/Footer.scss'

export const Footer = () => {
    return (
        <footer class="d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex flex-column">
                <img class="mx-auto mb-4" src="../img/icons/logo_svg.2fc451ee.svg" alt="" width="90px" />
                <span data-v-1c95e756="" data-text="TEAM UP. FIGHT ON."
                    class="footer-text-glitch glitch footer-glitch fs-5 f-ars mb-2">
                    TEAM
                    UP. FIGHT ON. </span>
            </div>
            <div class="text-white fs-3">
                <a href="#"><i class="p-1 fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="p-1 fa-brands fa-twitter"></i></a>
                <a href="#"><i class="p-1 fa-brands fa-youtube"></i></a>
                <a href="#"><i class="p-1 fa-brands fa-instagram"></i></a>
                <a href="#"><i class="p-1 fa-brands fa-twitch"></i></a>
            </div>
        </footer>
    )
}
