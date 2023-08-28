import {InferActionsTypes} from "../reduxStore";
import {Dispatch} from 'redux';
import {loginType} from "../../Types/Types";
import { authAPI, loginAPI } from "../../API/ApiAuth";

const LOGIN_USER = 'AUTH/LOGIN_USER';



let initialState = {
  user: ''
}

export type initialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>

const authReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
     
            case LOGIN_USER:
                return {...state, user: action.user}
        
        default:
            return state;
    }
}





export const authThunkCreater = (data: loginType) => {
    
    return async (dispatch: Dispatch) => {
       try {
        const response = await authAPI(data)
        localStorage.setItem("user", JSON.stringify(response))
        dispatch(actions.loginUser(response))
        return true
      } catch (error) {
        alert('Такой пользователь уже зарегестрирован!')
        console.log('There was an error', error);
        return false
      }
    }
}


export const loginThunkCreater = (data: loginType) => {
  
    return async (dispatch: Dispatch) => {
        try {
            const response = await loginAPI(data)
            localStorage.setItem("user", JSON.stringify(response))
            dispatch(actions.loginUser(response))
            return true
          } catch (error) {
            alert('Такой пользователь не зарегистрирован!')
            console.log('There was an error', error);
            return false
          }
      
    }
}





export const actions = {
   

    loginUser: (user: string ) => ({
        type: LOGIN_USER, user
    } as const),
    
}


export default authReducer;