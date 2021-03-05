import { NEW_USER, PASSWORD } from './types';

export const newUser = (user) => ({
    type: NEW_USER,
    data: user
});

export const password = (pw) => ({
    type: PASSWORD,
    data: pw
});