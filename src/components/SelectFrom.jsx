import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function SelectFrom({label, value, options, onChange}) {

    return (
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={value}
                onChange={e=>onChange(e)}
            >
                <MenuItem value="none"><em>None</em></MenuItem>
                {options.map((option, index)=>{
                    return(
                        <MenuItem key={index} value={option}>{option}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}