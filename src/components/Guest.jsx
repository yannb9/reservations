
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

export default function Guest({guest, name, starter, main, dessert, deleteGuest, openEditModal}) {

    return (
        <TableRow>
            <TableCell align="left">{name}</TableCell>
            <TableCell align="left">{starter}</TableCell>
            <TableCell align="left">{main}</TableCell>
            <TableCell align="left">{dessert}</TableCell>
            <TableCell align="right">
                <EditTwoToneIcon onClick={()=>openEditModal(guest)}/>
                <DeleteTwoToneIcon onClick={()=>deleteGuest(guest)}/>
            </TableCell>
        </TableRow>
    )
}