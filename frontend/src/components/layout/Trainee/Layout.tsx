import React from 'react';
import { Link, Router, useLocation, useNavigate } from 'react-router-dom';
//import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { IoMdHome, IoIosArrowBack } from 'react-icons/io';
import TraineeNavbar from '../common/navbar/trainee/TraineeNavbar';
const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const location = useLocation();

  return (
    <div>
      <TraineeNavbar />
      <div className="bg-gray-100 min-h-screen pt-16">
        <div className="mx-auto md:max-w-[70%] xl:max-w-[80%] px-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
