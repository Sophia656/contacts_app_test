import { FC } from 'react';
import { IContact } from '../../redux/models/IContact';
interface ContactsTableProps {
    contacts: IContact[];
    currentContacts: IContact[];
}
declare const ContactsTable: FC<ContactsTableProps>;
export default ContactsTable;
