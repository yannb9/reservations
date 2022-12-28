import {Dialog, DialogTitle} from '@mui/material'

export default function Modal({children, open, onClose, title}) {
    return (
        <>
         <Dialog onClose={onClose} open={open} fullWidth={true}>
            <DialogTitle>{title}</DialogTitle>
            {children}
         </Dialog>
        </>
    )
}