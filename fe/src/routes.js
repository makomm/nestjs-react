import { useRoutes } from 'react-router-dom';
import Login from './Login/Login';
import Case from './Case/Case';

export default function Router() {
    return useRoutes([
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/case',
        element: <Case />
      },
    ]);
  }