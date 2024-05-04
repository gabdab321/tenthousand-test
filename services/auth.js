import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { setUser, setToken, clearAuth } from '../store/slices/authSlice';
import * as SecureStore from "expo-secure-store"

const api = axios.create({
    baseURL: 'https://dummyjson.com',
});

const refreshAuthLogic = async (failedRequest) => {
    const token = await SecureStore.getItemAsync("authToken");
    if (!token) {
        throw new Error('No token available');
    }

    try {
        const response = await api.post('/auth/refresh', {
            token,
        });
        const newToken = response.data.token;

        await SecureStore.setItemAsync('authToken', newToken);
        failedRequest.response.config.headers['Authorization'] = `Bearer ${newToken}`;
        return Promise.resolve();
    } catch (error) {
        clearAuth();
        throw error;
    }
};

createAuthRefreshInterceptor(api, refreshAuthLogic);

export const authenticate = async (dispatch, email, password) => {
    try {
        const response = await api.post('/auth/login', {
            username: email,
            password: password,
        }, {headers: {'Content-Type': 'application/json'}});
        const { user, token } = response.data;

        await SecureStore.setItemAsync('authToken', token);

        dispatch(setUser(user));
        dispatch(setToken(token));

        return true
    } catch (error) {
        console.log('Authentication failed:', error);
        console.log(error)
        return false
    }
};

export const logout = async (dispatch) => {
    await SecureStore.deleteItemAsync("authToken");
    dispatch(clearAuth());
};
