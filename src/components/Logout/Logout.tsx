import React from 'react';
import { FC } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { loginSlice } from '../../redux/store/loginSlice';
import LogoutIcon from '@mui/icons-material/Logout';

const Logout: FC = () => {
    const {logout} = loginSlice.actions
    const dispatch = useAppDispatch()

    const handleExit = () => {
        dispatch(logout())
        localStorage.clear()
    }

    return (
        <LogoutIcon sx={{m: '0 -5vw 0 2vw', color: '#375e68', background: '#5691a0'}} onClick={handleExit} />
    );
};

export default Logout;