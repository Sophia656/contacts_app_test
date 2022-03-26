import { AccountCircle } from '@mui/icons-material';
import { createTheme, ListItemAvatar, ThemeProvider } from '@mui/material';
import React from 'react';

const avatarTheme = createTheme({
    typography: {
        fontSize: 20, 
    }
})

const MyAvatar = () => {
    return (
        <ThemeProvider theme={avatarTheme}>
            <ListItemAvatar>
                    <AccountCircle />
            </ListItemAvatar>
        </ThemeProvider>
    );
};

export default MyAvatar;