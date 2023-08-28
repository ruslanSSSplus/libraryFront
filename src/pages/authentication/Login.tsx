import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {useTypedDispatch} from "../../redux/reduxStore";
import LoginForm from "../../components/loginForm/LoginForm";
import { loginThunkCreater } from "../../redux/reducers/authReducer";

interface AppProps {
    
}

interface handleProps {
    target: {
        value: string,
        name: string
    }

}



const Login: React.FC<AppProps> = () => {

    const dispatch = useTypedDispatch()

    const navigate = useNavigate();


    const [values, setValues] = useState({
        login: '',
        password: '',
    });


    const handleChange = ({ target: { value , name } }: handleProps) => {
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        const isNotEmpty = Object.values(values).every((val) => val);

        if (!isNotEmpty) return;
        let access = await dispatch(loginThunkCreater(values))
        
        if(access){
            navigate("/");
        }
        
    };

    return (
        <div>
             <h1 className="login__text">
                Войдите
            </h1>
              <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} values={values}/>
        </div>
    );
}

export default Login