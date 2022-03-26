import { FC } from 'react';
interface ILogout {
    resultId: boolean;
    setIdResult: (resultId: boolean) => void;
}
declare const Logout: FC<ILogout>;
export default Logout;
