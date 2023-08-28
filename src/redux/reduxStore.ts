import {applyMiddleware, combineReducers, legacy_createStore as createStore, AnyAction} from "redux";
import thunkMiddleware from 'redux-thunk'


import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import  {ThunkDispatch } from 'redux-thunk';
import bookReducer from "./reducers/bookReducer";
import authReducer from "./reducers/authReducer";


let rootReducer = combineReducers({
    book: bookReducer,
    auth: authReducer
})

type RootReducersType = typeof rootReducer
export type AppStateType = ReturnType<RootReducersType>


export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never

export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store
