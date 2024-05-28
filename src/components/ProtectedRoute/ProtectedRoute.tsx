import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRoutesProp {
  children?: any;
  toPass: boolean;
}

const ProtectedRoutes: FC<ProtectedRoutesProp> = (props) => {
  const { children, toPass } = props;

  if (!toPass) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoutes;
