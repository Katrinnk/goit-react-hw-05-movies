import { Outlet } from 'react-router-dom';

const { default: Header } = require('components/Header/Header');

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default Layout;
