import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import ContactItem from '../UI/ContactItem/ContactItem';
import { FC } from 'react';
import { IContact } from '../../redux/models/IContact';
import s from './ContactsTable.module.scss';
import React from 'react';


interface ContactsTableProps {
    contacts: IContact[],
    currentContacts: IContact[],
}

const ContactsTable: FC<ContactsTableProps> = ({contacts, currentContacts}) => {

    return (
        <Paper className={s.wrapper}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableBody>
                            {currentContacts.length !== 0
                            ?
                            currentContacts?.map(contact =>
                                <ContactItem
                                key={contact.id}
                                contact={contact}
                                />
                            )
                            :
                            contacts?.map(contact =>
                                <ContactItem
                                key={contact.id}
                                contact={contact}
                                />
                            )
                            }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default ContactsTable;