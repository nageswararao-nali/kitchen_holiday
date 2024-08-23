
import apiRequest from '../utils/api';
import { ADD_SUBSCRIPTION, GET_SUBSCRIPTIONS, ADD_ZONE, GET_ZONES, GET_MY_SUBSCRIPTIONS, UPDATE_MY_SUBSCRIPTION, GET_DELIVERY_ORDER_DATES } from '../utils/apiRoutes'


const addSubscription = async (reqObj, userToken) => {
    return await apiRequest(ADD_SUBSCRIPTION, 'POST', reqObj, userToken);
  };

const getSubscriptions = async (reqObj, userToken) => {
    return await apiRequest(GET_SUBSCRIPTIONS, 'POST', reqObj, userToken);
};

const addZone = async (reqObj, userToken) => {
    return await apiRequest(ADD_ZONE, 'POST', reqObj, userToken);
  };

const getZones = async (reqObj, userToken) => {
    return await apiRequest(GET_ZONES, 'POST', reqObj, userToken);
};

const getMySubscriptions = async (reqObj, userToken) => {
  return await apiRequest(GET_MY_SUBSCRIPTIONS, 'POST', reqObj, userToken);
};

const updateMySubscription = async (reqObj, userToken) => {
  return await apiRequest(UPDATE_MY_SUBSCRIPTION, 'POST', reqObj, userToken);
};

const getOrderDates = async (reqObj, userToken) => {
  return await apiRequest(GET_DELIVERY_ORDER_DATES, 'POST', reqObj, userToken);
};

const usersService = {
    addSubscription,
    getSubscriptions,
    addZone,
    getZones,
    getMySubscriptions,
    updateMySubscription,
    getOrderDates
};

export default usersService;
