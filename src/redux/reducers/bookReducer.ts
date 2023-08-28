import {InferActionsTypes} from "../reduxStore";
import {Dispatch} from 'redux';
import {bookType, sendedBookType} from "../../Types/Types";
import { deteleBookFromApi, editBookFromApi, getBooksFromApi, postBookToApi } from "../../API/ApiBooks";

const PUSH_BOOKS = 'BOOK/PUSH_BOOKS';
const TARGET_TO_EDIT = 'BOOK/TARGET_TO_EDIT';


let initialState = {
    books: [] as Array<bookType>,
    targetToEdit: 0 
}

export type initialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>

const bookReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
     
        
            case PUSH_BOOKS:
                return {...state, books: action.books}
            case TARGET_TO_EDIT:
                return {...state, targetToEdit: action.id}
        default:
            return state;
    }
}

export const getBooksThunkCreater = () => {
    return async (dispatch: Dispatch) => {
        try{
            const response = await getBooksFromApi()
            dispatch(actions.pushBooks(response))
        }
        catch(e) {
            alert('Ошибка '+ e)
            console.log('There was an error'+ e);
        }
      
    }
}

export const deleteBookThunkCreater = (id: number) => {
    return async (dispatch: Dispatch) => {
        try{
            const response = await deteleBookFromApi(id)
            dispatch(actions.pushBooks(response))
        }
        catch(e) {
            alert('Ошибка '+ e)
            console.log('There was an error'+ e);
        }
    }
}

export const addBookThunkCreater = (book: sendedBookType) => {
   
    return async (dispatch: Dispatch) => {
        try{
        const response = await postBookToApi(book)
        dispatch(actions.pushBooks(response))
    }
    catch(e) {
        alert('Ошибка '+ e)
        console.log('There was an error'+ e);
    }
    }
}

export const editBookThunkCreater = (book: bookType) => {
    return async (dispatch: Dispatch) => {
        try{
        const response = await editBookFromApi(book)
        dispatch(actions.pushBooks(response))
    }
    catch(e) {
        alert('Ошибка '+ e)
        console.log('There was an error'+ e);
    }
    }
}

export const targerThunkCreater = (id: number) => {
    return  (dispatch: Dispatch) => {
        dispatch(actions.newTargetToEdit(id))
    }
}

export const actions = {
   

    pushBooks: (books: Array<bookType> ) => ({
        type: PUSH_BOOKS, books
    } as const),
    newTargetToEdit: (id: number ) => ({
        type: TARGET_TO_EDIT, id
    } as const),
    

    
}


export default bookReducer;