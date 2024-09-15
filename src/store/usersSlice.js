import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersService from '../services/usersService';
import { handleAuthApiCall } from '../utils/apiUtils';

export const getTotalUsers = createAsyncThunk('users/getTotalUsers', async (thunkAPI) => {
  return handleAuthApiCall(usersService.getTotalUsers, {}, thunkAPI);
});

export const getTotalCustomers = createAsyncThunk('users/getTotalCustomers', async (thunkAPI) => {
    return handleAuthApiCall(usersService.getTotalUsers, {searchQuery: {user_type: 'customer'}}, thunkAPI);
  });

export const getTotalDrivers = createAsyncThunk('users/getTotalDrivers', async (thunkAPI) => {
    return handleAuthApiCall(usersService.getTotalUsers, {searchQuery: {user_type: 'driver'}}, thunkAPI);
});

export const addUser = createAsyncThunk('users/addUser', async (user, thunkAPI) => {
    return handleAuthApiCall(usersService.addUser, user, thunkAPI);
});

export const getUsers = createAsyncThunk('users/getUsers', async (searchQuery, thunkAPI) => {
    return handleAuthApiCall(usersService.getUsers, {searchQuery}, thunkAPI);
});

export const addUserAddress = createAsyncThunk('users/addUserAddress', async (userAddress, thunkAPI) => {
  return handleAuthApiCall(usersService.addUserAddress, userAddress, thunkAPI);
});

export const getUserAddresses = createAsyncThunk('users/getUserAddresses', async (reaObj, thunkAPI) => {
  return handleAuthApiCall(usersService.getUserAddresses, reaObj, thunkAPI);
});

export const getUserAddress = createAsyncThunk('users/getUserAddress', async (reaObj, thunkAPI) => {
  return handleAuthApiCall(usersService.getUserAddress, reaObj, thunkAPI);
});

export const updateUserImage = createAsyncThunk('users/updateUserImage', async (reaObj, thunkAPI) => {
  return handleAuthApiCall(usersService.updateUserImage, reaObj, thunkAPI);
});

export const updateUserDetails = createAsyncThunk('users/updateUserDetails', async (reaObj, thunkAPI) => {
  return handleAuthApiCall(usersService.updateUserDetails, reaObj, thunkAPI);
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    totalUsers: 0,
    totalCustomers: 0,
    totalDrivers: 0,
    users: [],
    userAddresses: [],
    address: {},
    userAddress: {},
    error: null
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTotalUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTotalUsers.fulfilled, (state, action) => {
        if(action.payload.success) {
            state.totalUsers = action.payload.data.count
        }
        state.loading = false;
      })
      .addCase(getTotalUsers.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getTotalCustomers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTotalCustomers.fulfilled, (state, action) => {
        if(action.payload.success) {
            state.totalCustomers = action.payload.data.count
        }
        state.loading = false;
      })
      .addCase(getTotalCustomers.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getTotalDrivers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTotalDrivers.fulfilled, (state, action) => {
        if(action.payload.success) {
            state.totalDrivers = action.payload.data.count
        }
        state.loading = false;
      })
      .addCase(getTotalDrivers.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(addUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        if(!action.payload.success) {
            state.error = action.payload.message
        }
        state.loading = false;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        if(action.payload.success) {
            state.users = action.payload.data.users
        }
        state.loading = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
      .addCase(addUserAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUserAddress.fulfilled, (state, action) => {
        if(action.payload.success) {
            state.address = action.payload.data
        }
        state.loading = false;
      })
      .addCase(addUserAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
      .addCase(getUserAddresses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserAddresses.fulfilled, (state, action) => {
        if(action.payload.success) {
            state.userAddresses = action.payload.data.users
        }
        state.loading = false;
      })
      .addCase(getUserAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
      .addCase(getUserAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserAddress.fulfilled, (state, action) => {
        if(action.payload.success) {
            state.userAddress = action.payload.data
        }
        state.loading = false;
      })
      .addCase(getUserAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
      
      
      
  },
});

export const {  } = usersSlice.actions;

export default usersSlice.reducer;
