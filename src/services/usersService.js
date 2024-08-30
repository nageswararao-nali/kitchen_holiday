import apiRequest from '../utils/api';
import { TOTAL_USERS, ADD_USER, GET_USERS, ADD_USER_ADDRESS, GET_USER_ADDRESSES, GET_USER_ADDRESS, UPDATE_USER_IMAGE } from '../utils/apiRoutes'


const getTotalUsers = async (reqObj, userToken) => {
  return await apiRequest(TOTAL_USERS, 'POST', reqObj, userToken);
};

const addUser = async (user, userToken) => {
    return await apiRequest(ADD_USER, 'POST', user, userToken);
};

const getUsers = async (reqObj, userToken) => {
    return await apiRequest(GET_USERS, 'POST', reqObj, userToken);
};

const addUserAddress = async (reqObj, userToken) => {
  return await apiRequest(ADD_USER_ADDRESS, 'POST', reqObj, userToken);
};

const getUserAddresses = async (reqObj, userToken) => {
  return await apiRequest(GET_USER_ADDRESSES, 'POST', reqObj, userToken);
};
  
const getUserAddress = async (reqObj, userToken) => {
  return await apiRequest(GET_USER_ADDRESS, 'POST', reqObj, userToken);
};

const updateUserImage = async (reqObj, userToken) => {
  return await apiRequest(UPDATE_USER_IMAGE, 'POST', reqObj, userToken, true);
};



const usersService = {
    getTotalUsers,
    addUser,
    getUsers,
    addUserAddress,
    getUserAddresses,
    getUserAddress,
    updateUserImage
};

export default usersService;
