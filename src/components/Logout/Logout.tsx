import React from 'react';
import { FC } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { loginSlice } from '../../redux/store/loginSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import s from './Logout.module.css';

const Logout: FC = () => {
    const {logout} = loginSlice.actions
    const dispatch = useAppDispatch()

    const handleExit = () => {
        dispatch(logout())
        localStorage.clear()
    }

    return (
        <LogoutIcon className={s.icon} onClick={handleExit} />
    );
};

export default Logout;