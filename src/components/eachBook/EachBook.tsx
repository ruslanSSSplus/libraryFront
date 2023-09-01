import React from 'react';

import { bookType } from '../../Types/Types';
import EditBookPage from '../../pages/book/editBookPage/EditBookPage';
import './EachBook.css'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'

interface AppProps {
    book: bookType,
    deleteBook: (id: number) => void
    newTargetFunc: (id: number) => void
    targetToEdit: number
}


const EachBook: React.FC<AppProps> = ({book, deleteBook, newTargetFunc, targetToEdit}) => {
   
    return ( targetToEdit === book.id ? 
        <div> <EditBookPage  book={book}/> </div> :
        <div className="wrapper__book">

            <div className="wrapper__picture">
            <img src={book.picture} alt="pic" className="picture" />
            </div>

        <div className="wrapper__info"> 
           
        
         <div className="info">

            <div className="tags tags__names">
                <div>
                    Книга №
                </div>
                <div>
                    Название
                </div>                    
                <div>
                    Выпущена в 
                </div>                  
                <div>
                    Жанры:
                </div>
                <div>
                    Автор
                </div>
            </div>
            <div className="tags tags__values">
                <div className="id">
                    {book.id}
                </div>
                <div className="name">
                    {book.name}
                </div>
                <div className="year">
                    {book.year}
                </div>
                <div className="genre">
                    {book.genre}
                </div>
                <div className="author">
                    {book.author}
                </div>
            </div>
           
         </div>



         <div className="wrapper__btns">
         <button className="edit" onClick={() => newTargetFunc(book.id)}>
            <EditOutlined />
            </button>
            <button className="delete" onClick={() => deleteBook(book.id)}>
            <DeleteOutlined />
            </button>
         </div>
          
        </div>
             
        </div>
    
      
    );
}

export default EachBook