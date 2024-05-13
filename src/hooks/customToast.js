import { toast } from 'react-toastify';

const customToast = {
    success(msg, options = {}) {
        return toast.success(msg, {
            ...options,
            // theme: "colored",
            // className: 'toast-success-container toast-success-container-after',
            // progressClassName: css({
            //     background: '#161522',
            // }),
        });
    },
    error(msg, options = {}) {
        return toast.error(msg, {
            ...options,
            // theme: "colored",
            // className: 'toast-error-container toast-error-container-after',
            // progressClassName: css({
            //     background: '#EE0022',
            // }),
        });
    },
    info(msg, options = {}) {
        return toast.info(msg, {
            ...options,
            // className: 'toast-info-container toast-info-container-after',
            // progressClassName: css({
            //     background: '#07F',
            // }),
        });
    },
};


export default customToast;