import { FC } from 'react';
import { IContact } from '../../../../redux/models/IContact';
interface ModalUpdateProprs {
    contact: IContact;
}
declare const ModalUpdate: FC<ModalUpdateProprs>;
export default ModalUpdate;
