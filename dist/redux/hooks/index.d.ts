import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/store";
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<import("redux").CombinedState<{
    loginReducer: import("../models/ILogin").ILogin;
    contactAPI: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        fetchAllContacts: import("@reduxjs/toolkit/dist/query").QueryDefinition<import("../models/IContact").IContact[], import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, "Contact", import("../models/IContact").IContact[], "contactAPI">;
        createContact: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("../models/IContact").IContact, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, "Contact", import("../models/IContact").IContact, "contactAPI">;
        updateContact: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("../models/IContact").IContact, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, "Contact", import("../models/IContact").IContact, "contactAPI">;
        deleteContact: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("../models/IContact").IContact, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, "Contact", import("../models/IContact").IContact, "contactAPI">;
    }, "Contact", "contactAPI">;
    userAPI: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        fetchAllUsers: import("@reduxjs/toolkit/dist/query").QueryDefinition<any, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/dist/query").FetchBaseQueryMeta>, "User", import("../models/IUser").IUser[], "userAPI">;
    }, "User", "userAPI">;
}>, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
