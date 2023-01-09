import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001'
    }),
    endpoints: (builder) => ({
        //get phone
        getPhone: builder.mutation({
            query: (phone) => ({
                
            }),
        }),
    }),
});

export const { getPhone } = appApi;

export default appApi;
