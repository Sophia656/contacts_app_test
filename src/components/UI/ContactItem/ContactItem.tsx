import { FC } from 'react';
import { IContact } from '../../../redux/models/IContact';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { AccountCircle } from '@mui/icons-material';
import { contactAPI } from '../../../redux/store/contactApi';
import { useState } from 'react';
import ModalUpdate from '../ModalForm/ModalUpdate';

interface ContactItemProps {
    contact: IContact,
}

const ContactItem: FC<ContactItemProps> = ({contact}) => {
    const [dense, setDense] = useState(false);

    // delete contact
    const [deleteContact, {}] = contactAPI.useDeleteContactMutation();
    const handleDeleteContact = (contact: IContact) => {
        deleteContact(contact)
    }
    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        handleDeleteContact(contact)
    }

    return (
        <List dense={dense} sx={{display: 'flex', justifyContent: 'center', padding: 0}}>
            <ListItem
                sx={{width: '80%', height: '10vh', color: 'rgb(5, 31, 39)', borderBottom: '1px solid #83969b'}}
                secondaryAction={
                <IconButton
                sx={{color: 'rgb(5, 31, 39)', background: 'radial-gradient( #c2b995 10%, #5691a0 15%, #375e68 95%)'}}
                onClick={handleRemove}
                color="primary"
                edge="end"
                aria-label="delete"
                >
                    <DeleteIcon />
                </IconButton>
                }
                >
                <ListItemAvatar>
                <Avatar sx={{background: '#375e68', color: '#e6dcbc'}}>
                    <AccountCircle />
                </Avatar>
                </ListItemAvatar>
                <ListItemText
                primary={contact.name}
                secondary={contact.phone}
                />
                <ModalUpdate contact={contact} />
            </ListItem>
        </List>
        
    );
};

export default ContactItem;