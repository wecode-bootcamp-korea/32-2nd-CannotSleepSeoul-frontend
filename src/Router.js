import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import UserSign from './pages/UserSign/UserSign';
import ProductList from './pages/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import Social from './pages/Social/Social';
import Mypage from './pages/Mypage/Mypage';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users/sign_in" element={<UserSign page="signIn" />} />
        <Route path="/users/sign_up" element={<UserSign page="signUp" />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/oauth/callback/kakao" element={<Social />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
