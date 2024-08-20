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
  


const subscriptionSlice = createSlice({
  name: 'items',
  initialState: {
    loading: false,
    subscriptions: [],
    zones: [],
    selectedItem: selectedItem ? selectedItem : {},
    selectedSubscription: selectedSubscription ? selectedSubscription : {},
    error: null
  },
  reducers: {
    setOrderDetails: (state, action) => {
      // console.log(action)
      state.selectedItem = action.payload.item
      state.selectedSubscription = action.payload.sub
      localStorage.setItem('selectedItem', JSON.stringify(action.payload.item))
      localStorage.setItem('selectedSubscription', JSON.stringify(action.payload.sub))
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
      
  },
});

export const { setOrderDetails } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
