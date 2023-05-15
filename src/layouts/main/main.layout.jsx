import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header.component';
import { styled, Box } from '@mui/material';
import Footer from '../../components/footer/footer.component';

const MainPage = styled(Box)(() => ({
  widtg: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

const OutletPage = styled(Box)(() => ({
  width: '100%',
  flex: 1,
  //   backgroundColor: "red",
  overflowX: 'hidden',
}));

const MainLayout = () => {
  return (
    <MainPage>
      <OutletPage>
        <Header />

        <Outlet />

        <Footer />
      </OutletPage>
    </MainPage>
  );
};

export default MainLayout;
