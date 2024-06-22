import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import AdminLayout from './Layout/AdminLayout';
import AuthLayout from './Layout/AuthLayout';

const App = () => {

  const menuTitle = useSelector((state) => state.menu.menuTitle);
  const themeColor = useSelector((state) => state.theme.themeColor);
  const layout = useSelector((state) => state.layout.layout);
  const borderStroke = useSelector((state) => state.stroke.borderStroke);
  const borderLayout = useSelector((state) => state.borderLayout.borderLayout);
  const boxLayout = useSelector((state) => state.boxLayout.boxLayout);
  const monochrome = useSelector((state) => state.monochrome.monochrome);
  const borderRadius = useSelector((state) => state.borderRadius.borderRadius);
  const iconColor = useSelector((state) => state.iconColor.iconColor);
  const themeMode = useSelector((state) => state.themeMode.themeMode);
  
  const location = useLocation();
  const pathname = location.pathname;

  const authTitleMapping = {
    "/signin": "Signin",
    "/signup": "Signup",
    "/password-reset": "PasswordReset",
    "/two-step": "TwoStep",
    "/lockscreen": "Lockscreen",
    "/maintenance": "Maintenance",
    "/404": "NoPage",
  };

  const isAuthRoute = authTitleMapping[pathname];
  
  return (
    <>
      {isAuthRoute ? (
        <AuthLayout />
      ) : (
        <AdminLayout 
          menuTitle={menuTitle} 
          themeColor={themeColor} 
          layout={layout} 
          borderStroke={borderStroke} 
          borderLayout={borderLayout} 
          boxLayout={boxLayout} 
          monochrome={monochrome}
          borderRadius={borderRadius}
          iconColor={iconColor}
          themeMode={themeMode}
        />
      )}
    </>
  );
};

export default App