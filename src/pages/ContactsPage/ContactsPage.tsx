import { IContact } from '../../redux/models/IContact';
import { contactAPI } from '../../redux/store/contactApi';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FC } from 'react';
import { CircularProgress, Table, TableContainer } from '@mui/material';
import ContactsBar from '../../components/ContactsBar/ContactsBar';
import ContactsTable from '../../components/ContactsTable/ContactsTable';
import s from './ContactsPage.module.css';

interface ContactsPageProps {
    data: IContact[],
    contacts: IContact[],
    isLoading: boolean,
    error: any,
}
interface AuthProps {
    resultId: boolean,
    setIdResult: (resultId: boolean) => void
}

const ContactsPage: FC<AuthProps> = ({resultId, setIdResult}) => {
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
        isLoading
        ?
        <div className={s.loading__wrapper}>
            <CircularProgress sx={{w: '10vw', h: '10vw'}} />
        </div>
        :
            <div className={s.wrapper}>
                <TableContainer>
                    <Table className={s.table}>
                        <ContactsBar
                         resultId={resultId}
                         setIdResult={setIdResult}
                        searchString={searchString}
                        setSearchString={setSearchString}
                        />
                        <ContactsTable
                        contacts={contacts}
                        currentContacts={currentContacts}
                        />
                    </Table>
                </TableContainer>
            </div>
    );
};

export default ContactsPage;