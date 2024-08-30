import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import subscriptionService from '../services/subscriptionService';
import { handleAuthApiCall } from '../utils/apiUtils';

const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
const selectedSubscription = JSON.parse(localStorage.getItem('selectedSubscription'));
export const addSubscription = createAsyncThunk('subscriptions/addSubscription', async (reqObj, thunkAPI) => {
  return handleAuthApiCall(subscriptionService.addSubscription, reqObj, thunkAPI);
});

export const getSubscriptions = createAsyncThunk('subscriptions/getSubscriptions', async (reqObj, thunkAPI) => {
  return handleAuthApiCall(subscriptionService.getSubscriptions, reqObj, thunkAPI);
});

export const addZone = createAsyncThunk('subscriptions/addZone', async (reqObj, thunkAPI) => {
    return handleAuthApiCall(subscriptionService.addZone, reqObj, thunkAPI);
  });
  
export const getMySubscriptions = createAsyncThunk('subscriptions/getMySubscriptions', async (reqObj, thunkAPI) => {
  return handleAuthApiCall(subscriptionService.getMySubscriptions, reqObj, thunkAPI);
});

export const updateMySubscription = createAsyncThunk('subscriptions/updateMySubscription', async (reqObj, thunkAPI) => {
  return handleAuthApiCall(subscriptionService.updateMySubscription, reqObj, thunkAPI);
});

export const getOrderDates = createAsyncThunk('subscriptions/getOrderDates', async (reqObj, thunkAPI) => {
  return handleAuthApiCall(subscriptionService.getOrderDates, reqObj, thunkAPI);
});

export const getZones = createAsyncThunk('subscriptions/getZones', async (reqObj, thunkAPI) => {
  return handleAuthApiCall(subscriptionService.getZones, reqObj, thunkAPI);
});

export const deleteMySubscription = createAsyncThunk('subscriptions/deleteMySubscription', async (reqObj, thunkAPI) => {
  return handleAuthApiCall(subscriptionService.deleteMySubscription, reqObj, thunkAPI);
});


const subscriptionSlice = createSlice({
  name: 'items',
  initialState: {
    loading: false,
    subscriptions: [],
    mySubscriptions: [],
    zones: [],
    selectedItem: selectedItem ? selectedItem : {},
    selectedSubscription: selectedSubscription ? selectedSubscription: {},
    error: null,
    lastSubDate: ''
  },
  reducers: {
    setOrderDetails: (state, action) => {
      // console.log(action)
      state.selectedItem = action.payload.item
      state.selectedSubscription = action.payload.sub
      localStorage.setItem('selectedItem', JSON.stringify(action.payload.item))
      localStorage.setItem('selectedSubscription', JSON.stringify(action.payload.sub))
    },
    clearData: (state) => {
      state.lastSubDate = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addSubscription.pending, (state) => {
        state.loading = true;
      })
      .addCase(addSubscription.fulfilled, (state, action) => {
        if(!action.payload.success) {
          state.error = action.payload.message
        }
        state.loading = false;
      })
      .addCase(addSubscription.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getSubscriptions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSubscriptions.fulfilled, (state, action) => {
        if(action.payload.success) {
            state.subscriptions = action.payload.data.items
        } else {
          state.error = action.payload.message
          state.subscriptions = []
        }
        state.loading = false;
      })
      .addCase(getSubscriptions.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(addZone.pending, (state) => {
        state.loading = true;
      })
      .addCase(addZone.fulfilled, (state, action) => {
        if(!action.payload.success) {
          state.error = action.payload.message
        }
        state.loading = false;
      })
      .addCase(addZone.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getMySubscriptions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMySubscriptions.fulfilled, (state, action) => {
        if(action.payload.success) {
            state.mySubscriptions = action.payload.data.items
        } else {
          state.error = action.payload.message
          state.mySubscriptions = []
        }
        state.loading = false;
      })
      .addCase(getMySubscriptions.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(updateMySubscription.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateMySubscription.fulfilled, (state, action) => {
        if(action.payload.success) {
            // state.mySubscriptions = action.payload.data
        } else {
          state.error = action.payload.message
          // state.mySubscriptions = []
        }
        state.loading = false;
      })
      .addCase(updateMySubscription.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getOrderDates.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrderDates.fulfilled, (state, action) => {
        if(action.payload.success) {
          let orderDates = action.payload.data
            state.lastSubDate = orderDates[orderDates.length -1]
        } else {
          state.error = action.payload.message
          // state.mySubscriptions = []
        }
        state.loading = false;
      })
      .addCase(getOrderDates.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getZones.pending, (state) => {
        state.loading = true;
      })
      .addCase(getZones.fulfilled, (state, action) => {
        if(action.payload.success) {
            state.zones = action.payload.data.items
        } else {
          state.error = action.payload.message
          state.zones = []
        }
        state.loading = false;
      })
      .addCase(getZones.rejected, (state, action) => {
        state.loading = false;
      })
      
  },
});

export const { setOrderDetails, clearData } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
