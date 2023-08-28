import React, {useEffect} from 'react';

import EachBook from '../../components/eachBook/EachBook'
import {AppStateType, useTypedDispatch, useTypedSelector} from "../../redux/reduxStore";
import { deleteBookThunkCreater, getBooksThunkCreater, targerThunkCreater } from '../../redux/reducers/bookReducer';


interface AppProps {

}


const Main: React.FC<AppProps> = () => {
    const dispatch = useTypedDispatch()

    const {books, targetToEdit} = useTypedSelector((state: AppStateType) => state.book)
    

    useEffect(() => {
      dispatch(getBooksThunkCreater())
   }, [])


   let newTargetFunc = (id: number) => {
    dispatch(targerThunkCreater(id))
   }
 

   let deleteBook = (id: number) =>{
    dispatch(deleteBookThunkCreater(id))
   }




    return (
        <div className="App">
           
            
            {books.map((item) => (
                  <EachBook book={item} key={item.id} deleteBook={deleteBook} newTargetFunc={newTargetFunc} targetToEdit={targetToEdit} />
            ))}
       
        </div>
    );
}

export default Main