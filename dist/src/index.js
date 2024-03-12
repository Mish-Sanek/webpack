import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { App } from '@/components/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ShopLazy } from '@/pages/shop/ShopLazy';
import { AboutLazy } from '@/pages/about/About.lazy';
import { Suspense } from 'react';
var root = createRoot(document.getElementById('root'));
var router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        children: [
            {
                path: '/about',
                element: _jsx(Suspense, { children: _jsx(AboutLazy, {}) })
            },
            {
                path: '/shop',
                element: _jsx(Suspense, { children: _jsx(ShopLazy, {}) })
            }
        ]
    },
]);
root.render(_jsx(RouterProvider, { router: router }));
