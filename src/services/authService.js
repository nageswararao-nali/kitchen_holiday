import apiRequest from '../utils/api';
import { LOGIN, GET_USER } from '../utils/apiRoutes'

const register = async (userData) => {
  return await apiRequest('register', 'POST', userData);
};

const login = async (userData) => {
  return await apiRequest(LOGIN, 'POST', userData);
};

const getUserData = async (token) => {
  return await apiRequest('user', 'GET', null, token);
};

const getUser = async (userData, token) => {
  return await apiRequest(GET_USER, 'POST', userData, token);
};

const authService = {
  register,
  login,
  getUserData,
  getUser
};

export default authService;
