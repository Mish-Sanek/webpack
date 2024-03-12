import { createRoot } from 'react-dom/client';
import { App } from '@/components/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ShopLazy } from '@/pages/shop/ShopLazy';
import { AboutLazy } from '@/pages/about/About.lazy';
import { Suspense } from 'react';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/about',
        element: <Suspense><AboutLazy /></Suspense>
      },
      {
        path: '/shop',
        element: <Suspense><ShopLazy /></Suspense>
      }
    ]
  },
]);

root.render(
  <RouterProvider router={router} />
);
