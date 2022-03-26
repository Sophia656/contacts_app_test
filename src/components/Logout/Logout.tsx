import React from 'react';
import { FC } from 'react';
import { useAppDispatch} from '../../redux/hooks';
import { loginSlice } from '../../redux/store/loginSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import s from './Logout.module.css';

interface ILogout {
    resultId: boolean,
    setIdResult: (resultId: boolean) => void
}

const Logout: FC<ILogout> = ({resultId, setIdResult}) => {
    const {logout} = loginSlice.actions
    const dispatch = useAppDispatch()

    const handleExit = () => {
        dispatch(logout())
        setIdResult(!resultId)
        localStorage.clear()
    }

    return (
        <LogoutIcon className={s.icon} onClick={handleExit} />
    );
};

export default Logout;