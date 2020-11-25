// auth.service.js
// Authentication Service
import axios from 'axios';

const API_URL = 'https://localhost:44300/api/user/authenticate';
class AuthService {
    login(user) {
        return axios.post(API_URL, {
            email: user.email,
            password: user.password
        })
            .then(response => {
                if (response.data.token) {
                    console.log(`user: ${response.data}`);
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('user');
    }
    register(user) {
        return axios.post(API_URL + 'sign-up', {
            firstName: user.name,
            lastName: user.lastname,
            username: user.email,
            password: user.password
        });
    }
}

export default new AuthService();
