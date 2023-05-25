const store = require('./app/store')
const redux = require('redux')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('initial store', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Update state', store.getState())
})

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(1))
// store.dispatch(cakeActions.restocked(2))
// store.dispatch(iceCreamActions.ordered(1))
// store.dispatch(iceCreamActions.ordered(2))
// store.dispatch(iceCreamActions.ordered(3))
// store.dispatch(iceCreamActions.restocked(1))
// store.dispatch(iceCreamActions.restocked(2))

// unsubscribe()