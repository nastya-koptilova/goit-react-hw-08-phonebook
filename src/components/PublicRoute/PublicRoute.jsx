import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectToken } from 'redux/User/userSelectors';

export const PublicRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  return token && isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />;
};
