const initialState = {
    cartTotal : 0,
}

const UPDATE_TOTAL = 'UPDATE_TOTAL'

export function addRecykleBrand(price){
    return {
        type: UPDATE_TOTAL,
        payload: price
    }
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_TOTAL:
        let newTotal = state.cartTotal + action.payload
        return Object.assign({},state, {cartTotal : newTotal})
        default: return state
    }
}