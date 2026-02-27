import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

interface AlertProps {
    type: 'error' | 'warn' | 'info' | 'success';
    message: string;
}

export function Alert( { type, message }: AlertProps ) {

    switch (type) {

        case 'error':

            return toast.error(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

        case 'warn':

            return toast.warn(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        case 'info':

            return toast.info(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        case 'success':

            return toast.success(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

        default:
            return 'Tipo da mensagem especificada fora do padrão'

    }
}