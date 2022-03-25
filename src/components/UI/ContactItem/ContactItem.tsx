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
import ModalUpdate from '../ModalForm/ModalUpdate/ModalUpdate';
import s from './ContactItem.module.css';

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
        <List dense={dense} sx={{bg: 'transparent'}} className={s.wrapper}>
            <ListItem
            className={s.list__wrapper}
                secondaryAction={
                <IconButton
                className={s.btn__delete}
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
                <Avatar className={s.avatar}>
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