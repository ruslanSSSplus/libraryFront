import React, { useState } from "react";

import { useTypedDispatch} from "../../../redux/reduxStore";
import { editBookThunkCreater, targerThunkCreater } from "../../../redux/reducers/bookReducer";
import { bookType } from "../../../Types/Types";
import BookForm from "../../../components/bookForm/BookForm";
import { Button } from 'antd';


interface AppProps {
    book: bookType
}

interface handleProps {
    target: {
        value: string,
        name: string
    }

}



const EditBookPage: React.FC<AppProps> = ({book}) => {

    const dispatch = useTypedDispatch()
 

    const [values, setValues] = useState({
        picture: book.picture,
        name: book.name,
        year:  book.year,
        genre:  book.genre,
        author:  book.author,
        id: book.id 
    });


    const handleChange = ({ target: { value , name } }: handleProps) => {
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        const isNotEmpty = Object.values(values).every((val) => val);

        if (!isNotEmpty) return;
       
      dispatch(editBookThunkCreater(values))
      dispatch(targerThunkCreater(0))
        
    };

    const cancel = () => {
        dispatch(targerThunkCreater(0))
      }

    return (
        <div>

            <BookForm handleSubmit={handleSubmit}  handleChange={handleChange} values={values}/>
            <Button danger onClick ={ () => cancel()} style={{marginLeft: '20px'}}>Отмена</Button>
          
        </div>
    );
}

export default EditBookPage