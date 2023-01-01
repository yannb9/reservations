import { useState, useEffect } from "react"
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom"
import { Home } from "./pages/Home"
import { Reservation } from "./pages/Reservation"
import Menu from "./components/Menu"
import { GoBack } from "./components/GoBack"
import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Switch from '@mui/material/Switch';

function App() {
  const [theme, colorMode] = useMode();
  const [checked, setChecked] = useState(false)
  let location = useLocation();

  const handleChange = () =>{
    setChecked(!checked);
    colorMode.toggleMode()
  }

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Menu theme={theme}>
          {location.pathname == '/reservation' && <NavLink to="/"><GoBack /></NavLink>}
          <NavLink to="/" className='nav'>Home</NavLink>
          <NavLink to="/reservation" className='nav'>Reservations</NavLink>
          <Switch checked={checked} onChange={handleChange} />
        </Menu>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  )
}

export default App