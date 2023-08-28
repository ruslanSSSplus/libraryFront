import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {useTypedDispatch} from "../../../redux/reduxStore";
import { addBookThunkCreater } from "../../../redux/reducers/bookReducer";
import BookForm from "../../../components/bookForm/BookForm";


interface AppProps {

}

interface handleProps {
    target: {
        value: string,
        name: string
    }

}



const AddBookPage: React.FC<AppProps> = () => {

    const dispatch = useTypedDispatch()
    const navigate = useNavigate();
    



    const [values, setValues] = useState({
        picture: '',
        name: '',
        year:  '',
        genre:  '',
        author:  '',
    });


    const handleChange = ({ target: { value , name } }: handleProps) => {
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        const isNotEmpty = Object.values(values).every((val) => val);

        if (!isNotEmpty) return;
       
        dispatch(addBookThunkCreater( values )) 
        
        navigate("/");
    };

    return (
        <div>
              
           <BookForm handleSubmit={handleSubmit}  handleChange={handleChange} values={values}/>

        </div>
    );
}

export default AddBookPage