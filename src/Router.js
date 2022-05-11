import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import UserSign from './pages/UserSign/UserSign';
import ProductList from './pages/ProductList/ProductList';
import Map from './pages/ProductList/common/Map';
import Footer from './components/Footer/Footer';
import Social from './pages/Social/Social';
import Mypage from './pages/Mypage/Mypage';
import Reservation from './pages/Reservation/Reservation';
import Detail from './pages/Detail/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users/sign_in" element={<UserSign page="signIn" />} />
        <Route path="/users/sign_up" element={<UserSign page="signUp" />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/map" element={<Map />} />
        <Route path="/oauth/callback/kakao" element={<Social />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/products/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
