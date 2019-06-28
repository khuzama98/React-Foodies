
const INITIAL_STATE = {
    menu: null,
    orders:null
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_MENU": {
            return {
                ...state,
                menu: action.payload
            }
        }
        case "SET_ORDERS": {
            return {
                ...state,
                orders: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer