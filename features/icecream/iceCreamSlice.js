const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIceCream: 20
}

const iceCreamSlice = createSlice({
    name: 'ice cream',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIceCream -= action.payload
        },
        restocked: (state, action) => {
            state.numOfIceCream += action.payload
        }
    }, 
    // extraReducers:{
    //     ['cake/ordered']: (state, action) => {
    //         state.numOfIceCream --
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIceCream --
        })
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions