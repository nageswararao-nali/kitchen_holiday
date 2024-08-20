import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import orderService from '../services/orderService';
import { handleAuthApiCall } from '../utils/apiUtils';

const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
export const addOrder = createAsyncThunk('orders/addOrder', async (order, thunkAPI) => {
  return handleAuthApiCall(orderService.addOrder, order, thunkAPI);
});

export const getOrders = createAsyncThunk('orders/getOrders', async (reqObj, thunkAPI) => {
  return handleAuthApiCall(orderService.getOrders, reqObj, thunkAPI);
});

export const getOrder = createAsyncThunk('orders/getOrder', async (reqObj, thunkAPI) => {
  return handleAuthApiCall(orderService.getOrder, reqObj, thunkAPI);
});

export const updateOrderStatus = createAsyncThunk('orders/updateOrderStatus', async (order, thunkAPI) => {
    return handleAuthApiCall(orderService.updateOrderStatus, order, thunkAPI);
  });


const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    loading: false,
    orders: [],
    order: null,
    orderDetails: orderDetails ? orderDetails : {},
    error: null
  },
  reducers: {
    setOrderData: (state, action) => {
      state.orderDetails = action.payload
      localStorage.setItem('orderDetails', JSON.stringify(action.payload))
    },
    clearOrders: (state) => {
      state.orders = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        if(!action.payload.success) {
          state.error = action.payload.message
        }
        localStorage.removeItem('orderDetails');
        localStorage.removeItem('selectedItem');
        localStorage.removeItem('selectedSubscription');
        state.loading = false;
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        console.log(action.payload)
        if(action.payload.success) {
            state.orders = action.payload.data.items
            console.log(action.payload.data.items)
        } else {
          state.error = action.payload.message
          state.orders = []
        }
        state.loading = false;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        if(action.payload.success) {
            state.order = action.payload.data
        } else {
          state.error = action.payload.message
        }
        state.loading = false;
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(updateOrderStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        if(action.payload.success) {
            // state.order = action.payload.data
        } else {
          state.error = action.payload.message
        }
        state.loading = false;
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.loading = false;
      })
      
  },
});

export const { setOrderData, clearOrders } = orderSlice.actions;

export default orderSlice.reducer;
