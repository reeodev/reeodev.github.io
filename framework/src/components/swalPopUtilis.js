import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function successCopySwal(success = true){

    MySwal.fire({
      position: 'top-end',
      icon: success ? 'success' : 'error',
      backdrop: false,
      title: success ? 'Success to copy.' : 'Falied to copy.',
      showConfirmButton: false,
      timer: 1500
    });
}

export { successCopySwal }