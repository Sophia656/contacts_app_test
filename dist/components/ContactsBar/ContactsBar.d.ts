import { FC } from 'react';
interface ContacBarProps {
    searchString: string;
    setSearchString: (searchString: string) => void;
    resultId: boolean;
    setIdResult: (resultId: boolean) => void;
}
declare const ContactBar: FC<ContacBarProps>;
export default ContactBar;
