import { BorderColor } from '@mui/icons-material';
import { Button, createTheme, Dialog, DialogActions, DialogContent, DialogTitle, TextField, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { FC } from 'react';
import { IContact } from '../../../../redux/models/IContact';
import { contactAPI } from '../../../../redux/store/contactApi';
import s from './ModalUpdate.module.css';

interface ModalUpdateProprs {
    contact: IContact
}

const themeLogin = createTheme({
    palette: {
        primary: {
            main: '#375e68',
        },
        background: {
            paper: '#fff'
        },
        text: {
            primary: 'rgb(5, 31, 39)'
        },
    },
})

const ModalUpdate: FC<ModalUpdateProprs> = ({contact}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [phone, setPhone] = useState<number>(contact.phone)
    const [name, setName] = useState<string>(contact.name);

    const [updateContact, {}] = contactAPI.useUpdateContactMutation();
    const update = (contact: IContact) => {
        updateContact(contact)
    }
    const handleChange = (event: React.MouseEvent) => {
        update({...contact, name: name, phone: phone})
        setOpen(false)
    }

    return (
        <div>
            <ThemeProvider theme={themeLogin}>
            <BorderColor className={s.icon} onClick={() => setOpen(true)} />
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Change data contact</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="filled"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phone"
                        label="Phone"
                        type="tel"
                        fullWidth
                        variant="standard"
                        value={phone}
                        onChange={e => setPhone(Number(e.target.value))}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={handleChange}>Save</Button>
                </DialogActions>
                  </Dialog>
                  </ThemeProvider>
        </div>
    );
};

export default ModalUpdate;