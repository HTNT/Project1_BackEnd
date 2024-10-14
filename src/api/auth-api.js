
// eslint-disable-next-line
'use strict';
import { axiosClient, baseURL } from "./axios-client";

const authAPI = {
    login(user) {
        const url = `${baseURL}/auth`;
        // console.log(baseURL);
        return axiosClient.post(url, user);
    },
    register(user) {
        const url = `${baseURL}/users/register`;
        // console.log(url);
        return axiosClient.post(url, user);
    },
    getCurrentLogin(data) {
        // console.log(data);
        const url = `${baseURL}/auth`;
        // console.log(url);
        return axiosClient.get(url, {
            headers: {
                'x-auth-token': data
            }
        });
    },













    forgotPassword(email) {
        const url = `${baseURL}/v1.0.0/user/forgot-password`;
        return axiosClient.put(url, email);
    },
    logout() {
        const url = `${baseURL}/v1.0.0/user/logout`;
        return axiosClient.put(url);
    },
    resetPassword(data) {
        const url = `${baseURL}/v1.0.0/user/reset-password`;
        return axiosClient.put(url, data);
    },
    reActiveAccount(email) {
        const url = `${baseURL}/v1.0.0/user/reactive`;
        return axiosClient.put(url, email);
    },
    checkEmailExisted(email) {
        const url = `${baseURL}/v1.0.0/user/check-email`;
        return axiosClient.put(url, email);
    },
    checkUserActive(UserID) {
        const url = `${baseURL}/v1.0.0/user/check-active`;
        return axiosClient.put(url, UserID);
    },
    searchUser(param) {
        const url = `${baseURL}/v1.0.0/user/search`;
        return axiosClient.put(url, param);
    },
    inviteUser(Email) {
        const url = `${baseURL}/v1.0.0/user/invite`;
        return axiosClient.put(url, Email);
    },
    acceptInvitation(param) {
        const url = `${baseURL}/v1.0.0/user/accept`;
        return axiosClient.put(url, param);
    },
    newPassword(param) {
        const url = `${baseURL}/v1.0.0/user/new-password`;
        return axiosClient.put(url, param);
    },
    checkExpiredResetLink(param) {
        const url = `${baseURL}/v1.0.0/user/check-reset`;
        return axiosClient.put(url, param);
    },
    changePassword(param) {
        const url = `${baseURL}/v1.0.0/user/change-password`;
        return axiosClient.put(url, param);
    }
}

export default authAPI;
