
const INITIAL_STATE={
    user: null
}

const reducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case "SET_USER":{
            return{
                ...state,
                user: action.payload
            }
        }
        case "REMOVE_USER":{
            return{
                ...state,
                user: null
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer