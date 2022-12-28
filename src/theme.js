import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
    ...(mode === 'dark'
    ?{
        primary: {
            100: "#d3d3d3",
            200: "#a8a8a8",
            300: "#7c7c7c",
            400: "#515151",
            500: "#252525",
            600: "#1e1e1e",
            700: "#161616",
            800: "#0f0f0f",
            900: "#070707"
        }
    }:{
        primary: {
            100: "#070707",
            200: "#0f0f0f",
            300: "#161616",
            400: "#1e1e1e",
            500: "#252525",
            600: "#515151",
            700: "#7c7c7c",
            800: "#a8a8a8",
            900: "#d3d3d3"
        }
    })
})

export const themeSettings = (mode) =>{
    const colors = tokens(mode);

    return {
        palette :{
            mode: mode,
            ...(mode === 'dark'
            ? {
                primary :{
                    main: colors.primary[500]
                },
                secondary :{
                    main: colors.primary[500]
                },
                neutral :{
                    dark:colors.primary[800],
                    main:colors.primary[500],
                    light:colors.primary[300]
                },
                background :{
                    default: colors.primary[500]
                }
            }: {
                primary :{
                    main: colors.primary[500]
                },
                secondary :{
                    main: colors.primary[500]
                },
                neutral :{
                    dark:colors.primary[800],
                    main:colors.primary[500],
                    light:colors.primary[300]
                },
                background :{
                    default: '#fcfcfc'
                }
            })
        }
    }
}

export const colorModeContext = createContext({
    toggleColorMode: ()=>{}
});

export const useMode = () =>{
    const [mode, setMode] = useState('dark');
    const colorMode = useMemo(()=>(
        {
            toggleMode: ()=> setMode(prev=>(prev === 'light' ? 'dark' : 'light'))
        }
    ))
    const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])
    return [theme, colorMode];
}

