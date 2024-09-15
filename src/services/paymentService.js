import apiRequest from '../utils/api';
import { GET_PAYMENTS, GET_REFUNDS } from '../utils/apiRoutes'

// const userToken = localStorage.getItem('userToken');

const getPayments = async (reqObj, userToken) => {
  return await apiRequest(GET_PAYMENTS, 'POST', reqObj, userToken);
};

const getRefunds = async (reqObj, userToken) => {
    return await apiRequest(GET_REFUNDS, 'POST', reqObj, userToken);
};

const paymentService = {
    getPayments,
    getRefunds,
};

export default paymentService;
