import { lazy } from 'react';

export type RouteType = {
  path?: string;
  element: React.ComponentType;
  providers?: React.ComponentType<{ children: React.ReactNode }>[];
  index?: boolean;
  children?: RouteType[];
  label?: string;
  hideInNav?: boolean;
};

export const routes: RouteType[] = [
  {
    path: '/',
    element: lazy(() => import('@/lectures/Home')),
    label: 'Home',
  },
  {
    path: 'lecture01',
    element: lazy(() => import('@/lectures/lecture01/Lecture01')),
    label: 'lecture01',
  },
  {
    path: 'lecture03-ex',
    element: lazy(() => import('@/lectures/lecture03-exercise/Lecture03Ex')),
    label: 'lecture03Ex',
  },
  {
    path: 'lecture04',
    element: lazy(() => import('@/lectures/lecture04/Lecture04')),
    label: 'lecture04',
  },
  {
    path: 'lecture05/*',
    element: lazy(() => import('@/lectures/lecture05/components/Layout')),
    label: 'lecture05',
    children: [
      {
        index: true,
        element: lazy(() => import('@/lectures/lecture05/pages/Home')),
        hideInNav: true,
      },
      {
        path: 'about',
        element: lazy(() => import('@/lectures/lecture05/pages/About')),
        hideInNav: true,
      },
      {
        path: 'my-info',
        element: lazy(() => import('@/lectures/lecture05/pages/MyInfo')),
        hideInNav: true,
      },
      {
        path: 'etc',
        element: lazy(() => import('@/lectures/lecture05/pages/Etc')),
        hideInNav: true,
      },
      {
        path: 'concerts/*',
        element: lazy(() => import('@/lectures/lecture05/components/Layout02')),
        hideInNav: true,
        children: [
          {
            index: true,
            element: lazy(() => import('@/lectures/lecture05/pages/ConcertsHome')),
            hideInNav: true,
          },
          {
            path: 'trending',
            element: lazy(() => import('@/lectures/lecture05/pages/Trending')),
            label: 'trending',
          },
          {
            path: 'city/:city',
            element: lazy(() => import('@/lectures/lecture05/pages/City')),
            hideInNav: true,
          },
        ],
      },
    ],
  },
  {
    path: 'lecture06',
    element: lazy(() => import('@/lectures/lecture06/Lecture06')),
    label: 'lecture06',
  },
  {
    path: 'lecture07',
    element: lazy(() => import('@/lectures/lecture07/Lecture07')),
    label: 'lecture07',
  },
  {
    path: 'lecture09',
    element: lazy(() => import('@/lectures/lecture09/Lecture09')),
    label: 'lecture09',
  },
  {
    path: 'lecture09-ex',
    element: lazy(() => import('@/lectures/lecture09-exercise/Lecture09Ex')),
    label: 'lecture09Ex',
  },
  {
    path: 'lecture15',
    element: lazy(() => import('@/lectures/lecture15/pages/ContextPage')),
    label: 'lecture15',
  },
  {
    path: 'lecture15-ex',
    element: lazy(() => import('@/lectures/lecture15-exercise/ThemeApp')),
    label: 'lecture15Ex',
  },
  {
    path: 'lecture15-ex02',
    element: lazy(() => import('@/lectures/lecture15-exercise02/ThemeApp')),
    label: 'lecture15Ex02',
  },
  {
    path: 'lecture16',
    element: lazy(() => import('@/lectures/lecture16/Lecture16')),
    label: 'lecture16',
  },
  {
    path: 'lecture20',
    element: lazy(() => import('@/lectures/lecture20/Lecture20')),
    label: 'lecture20',
  },
  {
    path: 'lecture22',
    element: lazy(() => import('@/lectures/lecture22/Lecture22')),
    label: 'lecture22',
  },
  {
    path: 'lecture22-ex',
    element: lazy(() => import('@/lectures/lecture22-exercise/Lecture22Ex')),
    label: 'lecture22Ex',
  },
  {
    path: 'lecture26-ex/*',
    element: lazy(() => import('@/lectures/lecture26-exercise/components/layout/Layout')),
    label: 'lecture26Ex',
    children: [
      {
        index: true,
        element: lazy(() => import('@/lectures/lecture26-exercise/pages/product')),
        hideInNav: true,
      },
      {
        path: 'cart',
        element: lazy(() => import('@/lectures/lecture26-exercise/pages/cart')),
        hideInNav: true,
      },
      {
        path: 'order',
        element: lazy(() => import('@/lectures/lecture26-exercise/pages/order')),
        hideInNav: true,
      },
    ],
  },
] as const;
