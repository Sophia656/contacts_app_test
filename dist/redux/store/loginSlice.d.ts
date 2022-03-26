import { ILogin } from '../models/ILogin';
export declare const loginSlice: import("@reduxjs/toolkit").Slice<ILogin, {
    loginSuccess: (state: import("immer/dist/internal").WritableDraft<ILogin>) => void;
    loginFail: (state: import("immer/dist/internal").WritableDraft<ILogin>, { payload }: {
        payload: any;
        type: string;
    }) => void;
    logout: (state: import("immer/dist/internal").WritableDraft<ILogin>) => void;
}, "login">;
export declare const loginSuccess: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, loginFail: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, logout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
declare const _default: import("redux").Reducer<ILogin, import("redux").AnyAction>;
export default _default;
