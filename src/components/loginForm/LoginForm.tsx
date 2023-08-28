import React from "react";

import { Input } from 'antd'
import './LoginForm.css'


interface AppProps {
    handleSubmit: (e: any) => void 
    values: {
        login: string
        password: string
    }
    handleChange: (target: handleProps) => void 
}

interface handleProps {
    target: {
        value: string,
        name: string
    }

}



const LoginForm: React.FC<AppProps> = ({handleSubmit, values, handleChange}) => {


    return (
        <div>
              <form  onSubmit={handleSubmit} className="wrapper__loginForm">       
                <div > Логин
                    <Input
                        type="text"
                        placeholder="login"
                        name="login"
                        value={values.login}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                        className="input__field"
                    />
                </div>
                <div > Пароль
                    <Input
                        type="text"
                        placeholder="password"
                        name="password"
                        value={values.password}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                        className="input__field"
                    />
                </div>


                <button type="submit" className='save__btn'>
                Продолжить
                </button>
            </form>

        </div>
    );
}

export default LoginForm