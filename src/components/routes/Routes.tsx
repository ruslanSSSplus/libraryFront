import React from 'react';
import {Routes, Route} from "react-router-dom";

import Main from '../../pages/mainPage/Main';
import AddBookPage from '../../pages/book/addBookPage/AddBookPage'
import Auth from '../../pages/authentication/Auth';
import Login from '../../pages/authentication/Login';



const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Main/>}/>
            <Route path='/' element={<Main/>}/>
            <Route path='newBook' element={<AddBookPage/>}/>
            <Route path='auth' element={<Auth/>}/>
            <Route path='login' element={<Login/>}/>
        </Routes>
    );
};

export default AppRoutes;