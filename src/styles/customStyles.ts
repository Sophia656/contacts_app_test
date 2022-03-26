import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(5, 31, 39)',
        },
        secondary: {
            main: '#c23521'
        },
        background: {
            default: '#c2b995',
            paper: 'transparent'
        },
        text: {
            secondary: '#375e68'
        },
        action: {
            hover: '#c2b995'
        },
    },
    typography: {
        fontSize: 16, 
    },
})