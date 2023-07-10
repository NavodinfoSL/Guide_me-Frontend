import { SET_USER_ID } from "../constants/action-types"

const initialState = {
    userId : ""
}

export const UserReducer = (state,action) =>{

    switch(action.type){
        case SET_USER_ID:
            state=action.payload
            console.log("payload"+action.payload);
            return {...state,userId:action.payload}
        default :
        state =initialState
        return state;       
    }
    console.log(action);
}