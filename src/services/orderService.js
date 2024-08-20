
import apiRequest from '../utils/api';
import { ADD_USER_ORDER, GET_ORDERS, GET_ORDER, UPDATE_ORDER} from '../utils/apiRoutes'


const addOrder = async (reqObj, userToken) => {
    return await apiRequest(ADD_USER_ORDER, 'POST', reqObj, userToken);
  };

const getOrders = async (reqObj, userToken) => {
    return await apiRequest(GET_ORDERS, 'POST', reqObj, userToken);
};

const getOrder = async (reqObj, userToken) => {
    return await apiRequest(GET_ORDER, 'POST', reqObj, userToken);
};

const updateOrderStatus = async (reqObj, userToken) => {
    return await apiRequest(UPDATE_ORDER, 'POST', reqObj, userToken);
  };


const usersService = {
    getOrder,
    getOrders,
    addOrder,
    updateOrderStatus
};

export default usersService;
