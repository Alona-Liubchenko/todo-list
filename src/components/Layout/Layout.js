import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MenuAppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';

// const Layout = ({ children }) => {
//   return <main>{children}</main>;
// };
const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <MenuAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
export default Layout;
