import { NEW_USER, PASSWORD, SEARCH } from './types';

export const newUser = (user) => ({
    type: NEW_USER,
    data: user
});

export const password = (pw) => ({
    type: PASSWORD,
    data: pw
});

export const newSearch = (query) => ({
    type: SEARCH,
    data: query
})