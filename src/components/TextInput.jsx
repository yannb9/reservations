import TextField from '@mui/material/TextField';


export default function TextInput({label, onChange, value}) {
    return (
        <>
            <TextField id="filled-basic" variant="filled" label={label} value={value} onChange={onChange} sx={{ m: 1, minWidth: 120 }}/>
        </>
    )
}