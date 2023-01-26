import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Error } from '@/components/Error';
import { Layout } from '@/components/Layout';
import ROUTES from '@/constants/routes';
import { Detail, List } from '@/pages/Characters';

const ROUTER = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.CHARACTERS,
        element: <List />
      },
      {
        path: `${ROUTES.CHARACTERS}/:id`,
        element: <Detail />
      }
    ],
    errorElement: <Error />
  },
  {
    path: '*',
    element: <Navigate to={ROUTES.CHARACTERS} replace />
  }
]);

export { ROUTER };
