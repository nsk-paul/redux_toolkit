const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

//this is the initialState of the slice
const initialState = {
    loading: false,
    users: [],
    error: ''
}

//this is using the createAsyncThunk to perform the async function and a callback funciton to return a promise
const fetchUsers = createAsyncThunk('user/fetchUser',() => {
    return axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => response.data.map((user) => user.id))
})

//inside the extraReducers, using builder to addCase and getting the promise of fetchUsers, pending, fulfilled and rejected are the status of the promise
//getting the result and update the state

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state,action) => {
            state.loading = false,
            state.users = action.payload,
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state,action) => {
            state.loading = false,
            state.users = [],
            state.error = action.error.message
        })
    }
})

//export the reducer
//export the fetchUsers function and will used in the index.js

//inside the store, will add the reducer
//const userReducer = required('userSlice')
//user: userReducers

//inside index.js
//since there is no reducer, we will only export the function
//const fetchUsers = required('userSlice').fetchUsers
module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers