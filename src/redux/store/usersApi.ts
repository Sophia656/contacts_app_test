import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IUser } from '../models/IUser';

export const usersAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['User'],
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUser[], any>({
            query: () => ({
                url: '/users'
            }),
            providesTags: result => ['User']
        })
    })
})