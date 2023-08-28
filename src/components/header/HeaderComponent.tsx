import React from 'react';
import { Layout } from 'antd';

import { Link } from 'react-router-dom';
import './Header.css'

const { Header, Content, Footer } = Layout;

interface AppProps {
  user: string,
  logOut: () => void
}


const HeaderComponent: React.FC<AppProps> = ({logOut, user }) => {

  return (
    <Header className='wrapper__header' >
   
    <div className="links" >
    <Link to='/'> 
            Главная
    </Link>
    <Link to='/newBook'> 
            Добавить
    </Link>
    {!!user ? <button className='userName' onClick={() => logOut()}> {user} </button>: <div >
         <Link to='/auth' className="auth"> 
            auth
    </Link>
    <Link to='/login'> 
            login
    </Link></div>}
  
    </div>
   
  </Header>
  );
};

export default HeaderComponent;