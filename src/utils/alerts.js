import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'

export const alertError = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: '<p class="f-rad m-0 text-uppercase">Los datos ingresados no son correctos.</p>',
        showConfirmButton: false,
        timer: 2000,
        toast: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
}