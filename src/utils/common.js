import { userVerifyToken } from '../api/users.api';
import router from '@/router';

const redirectToPath = (path) => {
    router.push({ path: path });
};

const getLocalStorageData = (key) => {
    if (isJsonString(localStorage.getItem(key))) {
        return JSON.parse(localStorage.getItem(key));
    }

    return localStorage.getItem(key);
}

const setLocalStorageData = (key, data) => {
    if (typeof data !== 'string') {
        data = JSON.stringify(data)
    }

    localStorage.setItem(key, data);
}

const removeLocalStorageData = (arrayKeys) => {
    arrayKeys.forEach(key => {
        localStorage.removeItem(key);
    });
}

const logOut = (next, url) => {
    removeLocalStorageData(['token', 'userDetail']);
    if (url) {
        redirectToPath(url);
    }

    next();
}

const verifyUserToken = async function(to, from, next) {
    try {
        const response = await userVerifyToken();
        
        if (response && response.data && response.data.user) {
            setLocalStorageData('userDetail', response.data.user);
        } else {
            removeLocalStorageData(['token', 'userDetail']);
        }

        next();
    } catch(err) {
        removeLocalStorageData(['token', 'userDetail']);
        next();
    }
};

const isJsonString = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export {
    redirectToPath,
    getLocalStorageData,
    setLocalStorageData,
    removeLocalStorageData,
    logOut,
    verifyUserToken
}