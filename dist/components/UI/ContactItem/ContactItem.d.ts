import { FC } from 'react';
import { IContact } from '../../../redux/models/IContact';
interface ContactItemProps {
    contact: IContact;
}
declare const ContactItem: FC<ContactItemProps>;
export default ContactItem;
