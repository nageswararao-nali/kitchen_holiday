import apiRequest from '../utils/api';
import { TOTAL_USERS, ADD_USER, GET_USERS, ADD_USER_ADDRESS, GET_USER_ADDRESSES } from '../utils/apiRoutes'

const userToken = localStorage.getItem('userToken');

const getTotalUsers = async (reqObj) => {
  return await apiRequest(TOTAL_USERS, 'POST', reqObj, userToken);
};

const addUser = async (user) => {
    return await apiRequest(ADD_USER, 'POST', user, userToken);
};

const getUsers = async (reqObj) => {
    return await apiRequest(GET_USERS, 'POST', reqObj, userToken);
};

const addUserAddress = async (reqObj, userToken) => {
  return await apiRequest(ADD_USER_ADDRESS, 'POST', reqObj, userToken);
};

const getUserAddresses = async (reqObj) => {
  return await apiRequest(GET_USER_ADDRESSES, 'POST', reqObj, userToken);
};
  

const usersService = {
    getTotalUsers,
    addUser,
    getUsers,
    addUserAddress,
    getUserAddresses
};

export default usersService;
