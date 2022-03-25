import { IContact } from '../../redux/models/IContact';
import { contactAPI } from '../../redux/store/contactApi';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FC } from 'react';
import { Table, TableContainer } from '@mui/material';
import ContactsBar from '../../components/ContactsBar/ContactsBar';
import ContactsTable from '../../components/ContactsTable/ContactsTable';
import s from './ContactsPage.module.css';

interface ContactsPageProps {
    data: IContact[],
    contacts: IContact[],
    isLoading: boolean,
    error: any,
}

const ContactsPage: FC = () => {
    const { data: contacts, isLoading, error} = contactAPI.useFetchAllContactsQuery<ContactsPageProps>([]);
    const [currentContacts, setCurrentContacts] = useState<IContact[]>([]) // for search

    // Search contacts
    const [searchString, setSearchString] = useState('')
    function unique(arr: IContact[]) {
        return Array.from(new Set(arr));
    }
    useEffect(() => {
        const current: IContact[] = [];
        if (searchString) {
            contacts?.forEach(contact => {
                if (contact.name?.toLowerCase().includes(searchString.toLowerCase()) === true) {
                    current.push(contact)
                    setCurrentContacts(unique(current))
                }
            })
        }
        return function() {
            setCurrentContacts([])
        }
    }, [searchString])


    return (
            <TableContainer className={s.wrapper}>
                
                <Table className={s.table}>
                    <ContactsBar
                    searchString={searchString}
                    setSearchString={setSearchString}
                    />
                    <ContactsTable
                    contacts={contacts}
                    currentContacts={currentContacts}
                    />
                </Table>
            </TableContainer>
    );
};

export default ContactsPage;