import { AppBar, Toolbar } from '@mui/material';

import Box from '@mui/material/Box';

export default function Menu({children}) {

    return (
    <>
    <AppBar component="nav">
        <Toolbar sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <Box sx={{ textAlign: 'center', display:'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', width: '30%' }}>
                {children}
            </Box>
        </Toolbar>
    </AppBar>
    </>
    )
}