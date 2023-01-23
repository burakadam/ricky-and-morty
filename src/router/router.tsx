import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Layout } from '@/components/Layout';
import ROUTES from '@/constants/routes';
import { Characters } from '@/pages/Characters';
import { Detail as ChacterDetail } from '@/pages/Characters/Detail';

const ROUTER = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.CHARACTERS,
        element: <Characters />
      },
      {
        path: `${ROUTES.CHARACTERS}/:id`,
        element: <ChacterDetail />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to={ROUTES.CHARACTERS} replace />
  }
]);

export { ROUTER };
