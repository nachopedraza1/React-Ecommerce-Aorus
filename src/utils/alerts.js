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

export const alertSuccess = () => {
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: '<p class="f-rad m-0 text-uppercase">Pago realizado con exito.</p>',
        showConfirmButton: false,
        timer: 3000,
        allowOutsideClick: false,
    });
}


export const alertSubmit = (setStep, vaciarCarrito) => {
    let timerInterval
    Swal.fire({
        title: '<p class="f-rad m-0 text-uppercase">PROCESANDO PAGO</p>',
        timer: 6000,
        allowOutsideClick: false,
        /*  timerProgressBar: true, */
        didOpen: () => {
            Swal.showLoading()
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            alertSuccess();
            setTimeout(() => {
                setStep(3)
                vaciarCarrito();
            }, 3000);
        }
    })
}