import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { FC } from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from './StyledContactsBar';
import CallIcon from '@mui/icons-material/Call';
import ModalCreate from '../UI/ModalForm/ModalCreate/ModalCreate';
import Logout from '../Logout/Logout';
import React from 'react';
import s from './ContactsBar.module.css';

interface ContacBarProps {
    searchString: string,
    setSearchString: (searchString: string) => void,
    resultId: boolean,
    setIdResult: (resultId: boolean) => void
}

const ContactBar: FC<ContacBarProps> = ({searchString, setSearchString, resultId, setIdResult}) => {

    return (
        <AppBar position="fixed" className={s.appbar}>
            <Toolbar>
                <CallIcon className={s.callicon} />
            <Typography
                variant="h5"
                noWrap
                component="div"
                className={s.typography}
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
                CONTACTS
            </Typography>
            <ModalCreate />     
            <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchString}
                onChange={e => setSearchString(e.target.value)}
                />
            </Search>
            <Logout resultId={resultId} setIdResult={setIdResult} />
            </Toolbar>
        </AppBar>
    );
};

export default ContactBar;