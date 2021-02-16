import httpClient from './httpClient';

const USER_END_POINT = '/users';
const SIGN_UP_END_POINT = `${USER_END_POINT}/signup/`;
const LOGIN_END_POINT = `${USER_END_POINT}/login/`;
const VERIFY_END_POINT = `${USER_END_POINT}/verifyToken/`;

const userSignUp = (formData) => httpClient.post(SIGN_UP_END_POINT, formData);
const userLogin = (formData) => httpClient.post(LOGIN_END_POINT, formData);
const userVerifyToken = () => httpClient.post(VERIFY_END_POINT);

export {
    userSignUp,
    userLogin,
    userVerifyToken
}