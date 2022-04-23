import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function successCopySwal(){
    MySwal.fire({
      position: 'top-end',
      icon: 'success',
      backdrop: false,
      title: 'Success to copy!',
      showConfirmButton: false,
      timer: 1500
    });
}

export { successCopySwal }