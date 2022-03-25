import { Alert, AlertTitle, Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { IUser } from '../../redux/models/IUser';
import { loginSlice } from '../../redux/store/loginSlice';
import { usersAPI } from '../../redux/store/usersApi';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FC } from 'react';
import s from './LoginPage.module.css';

const LoginPage: FC = () => {
    const theme = createTheme();
    const {data: users} = usersAPI.useFetchAllUsersQuery('');
    const [currentLogin, setCurrentLogin] = useState('');
    const [currentPassword, setCurrentPassowrd] = useState('');
    const {error} = useAppSelector(state => state.loginReducer);
    const {loginFail, loginSuccess} = loginSlice.actions
    const dispatch = useAppDispatch()

    const handleSubmit = (event: React.MouseEvent) => {
        event.preventDefault()
        const even = (element: IUser) => element.login === currentLogin && element.password === currentPassword
        users?.some(even) === true ? dispatch(loginSuccess()) : dispatch(loginFail('error'))
    }
    
    return (
        <div className={s.wrapper}>
            <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className={s.box}>
          <Avatar sx={{ m: 1}} className={s.avatar}>
            <LockOutlinedIcon className={s.avatar__icon} />
          </Avatar>
          <Typography className={s.typography} component="h1" variant="h5">
            Enter
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Login"
              name="login"
              autoComplete="login"
              autoFocus
              value={currentLogin}
              onChange={e => setCurrentLogin(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={currentPassword}
              onChange={e => setCurrentPassowrd(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={s.button__enter}
              onClick={handleSubmit}
            >
              ENTER
            </Button>
            {error && <Alert severity="error" className={s.error}>
                <AlertTitle>Error</AlertTitle>
                Invalid username or password
            </Alert>}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
        </div>
    );
};

export default LoginPage;