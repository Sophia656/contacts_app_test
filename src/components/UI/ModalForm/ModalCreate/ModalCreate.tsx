import { Box, Button, Drawer, TextField } from '@mui/material';
import React, { useState } from 'react';
import { FC } from 'react';
import { IContact } from '../../../../redux/models/IContact';
import { contactAPI } from '../../../../redux/store/contactApi';
import s from './ModalCreate.module.css';

const ModalCreate: FC = () => {
    const [state, setState] = useState(false)

    const [phone, setPhone] = useState<number | null>(null)
    const [name, setName] = useState<string>('');
    const [createContact, {}] = contactAPI.useCreateContactMutation();
    const handleAddContact = async (event: React.MouseEvent) => {
        setState(false)
        setPhone(null)
        setName('')
        await createContact({name: name, phone: phone} as IContact)
    }

    return (
        <React.Fragment>
            <Button onClick={() => setState(true)} className={s.btn__create} variant="outlined">
                Create Contact
            </Button>
            <Drawer
            anchor={'top'}
            open={state}
            onClose={() => setState(false)}
            >
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: '5vh 0 5vh 13vw', width: '25ch' },
                    background: 'linear-gradient(to left, #5691a0, #c2b995)'
                }}
                noValidate
                autoComplete="off"
                >
                    <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <TextField
                    id="filled-basic"
                    label="Phone"
                    variant="outlined"
                    value={phone}
                    onChange={e => setPhone(Number(e.target.value))}
                    />
                    <Button onClick={handleAddContact} className={s.btn__add} variant="contained">
                        ADD NEW CONTACT
                    </Button>
                </Box>
            </Drawer>
        </React.Fragment>
    );
};

export default ModalCreate;