import { createStore } from 'vuex';
import axios from 'axios';

export const state = {
    isLoggedIn: false,
    userInfo: null,
};

export const mutations = {
    setLogin(state, isLoggedIn) {
        state.isLoggedIn = isLoggedIn;
    },
    setUserInfo(state, userInfo) {
        state.userInfo = userInfo;
    },
};
const BASE_URL = 'http://192.168.1.5:3000/api'; // Thay thế bằng URL API của bạn

export const actions = {
    login: async ({commit},{email, password}) => {
        console.log(email);
        console.log(password);

        // Gọi API login và xử lý kết quả
        const response = await axios.post(`${BASE_URL}/login`, {
            email,
            password,
        });
        const {data} = response; // Giả sử response trả về data: { token, userInfo }
        if (response.status === 200) {
            // Lưu token vào localStorage hoặc sessionStorage
            // localStorage.setItem('token', data.token);

            // Cập nhật trạng thái đăng nhập và thông tin người dùng
            commit('setLogin', true);
            commit('setUserInfo', data.userInfo);

            // Xử lý sau khi đăng nhập thành công (chuyển hướng trang, v.v.)
        } else {
            throw new Error('Đăng nhập thất bại');
        }
    },
    logout: async ({ commit }) => {
        // Xóa token khỏi localStorage hoặc sessionStorage
        localStorage.removeItem('token');

        // Cập nhật trạng thái đăng nhập và thông tin người dùng
        commit('setLogin', false);
        commit('setUserInfo', null);

        // Xử lý sau khi đăng xuất (chuyển hướng trang, v.v.)
    },
};




export default createStore({
    state,
    mutations,
    actions,
});