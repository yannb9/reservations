import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function GoBack(){
    return (
        <Fab variant="extended" color="primary" className="arrow-back go-back" sx={{position:'absolute', left:'5%', top: '5%'}}>
            <ArrowBackIcon />
        </Fab>
    )
}