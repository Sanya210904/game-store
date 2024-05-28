import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import {
  CartPage,
  GameDetailsPage,
  HomePage,
  SearchPage,
  DashboardPage,
} from '../pages';
import ProtectedRoutes from '../components/ProtectedRoute/ProtectedRoute';
import { useAppSelector } from '../hooks/useAppSelector';

const AppRouter = () => {
  const { isAuth, role } = useAppSelector((state) => state.user);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/game/:gameId" element={<GameDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search/:search?/:genres?" element={<SearchPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes toPass={role === 'admin'}>
              <DashboardPage />
            </ProtectedRoutes>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
