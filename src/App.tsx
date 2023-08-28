import React, { useEffect } from 'react';
import { Layout, theme } from 'antd';
import AppRoutes from './components/routes/Routes';
import './index.css'
import { AppStateType, useTypedDispatch, useTypedSelector } from './redux/reduxStore';
import { actions } from './redux/reducers/authReducer';
import FooterComponent from './components/footer/FooterComponent';
import HeaderComponent from './components/header/HeaderComponent';
const { Content } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const {user} = useTypedSelector((state: AppStateType) => state.auth)
 
  useEffect(() => {
    if (!!localStorage.getItem("user"))  {
      let loginUser = JSON.parse(localStorage.getItem("user") || '')
      dispatch(actions.loginUser(loginUser))
    }

}, [])


  const dispatch = useTypedDispatch()

  const logOut = () => {
    localStorage.clear()
    dispatch(actions.loginUser(''))
  }

  return (
    <Layout className="layout">
      <HeaderComponent logOut={logOut} user={user} />
      <Content style={{ padding: '0 20px' }}>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>

          <AppRoutes />

        </div>
      </Content>
     <FooterComponent />
    </Layout>
  );
};

export default App;