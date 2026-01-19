import { lazy } from 'react';

export type RouteType = {
  path?: string;
  element: ReturnType<typeof lazy>;
  index?: boolean;
  children?: RouteType[];
};

export const routes: RouteType[] = [
  {
    path: '/',
    element: lazy(() => import('@/lectures/Home')),
  },
  {
    path: 'lecture01',
    element: lazy(() => import('@/lectures/lecture01/Lecture01')),
  },
  {
    path: 'lecture03Ex',
    element: lazy(() => import('@/lectures/lecture03-exercise/Lecture03Ex')),
  },
  {
    path: 'lecture04',
    element: lazy(() => import('@/lectures/lecture04/Lecture04')),
  },
  {
    path: 'lecture05/*',
    element: lazy(() => import('@/lectures/lecture05/components/Layout')),
    children: [
      { index: true, element: lazy(() => import('@/lectures/lecture05/pages/Home')) },
      { path: 'about', element: lazy(() => import('@/lectures/lecture05/pages/About')) },
      { path: 'my-info', element: lazy(() => import('@/lectures/lecture05/pages/MyInfo')) },
      { path: 'etc', element: lazy(() => import('@/lectures/lecture05/pages/Etc')) },
      {
        path: 'concerts/*',
        element: lazy(() => import('@/lectures/lecture05/components/Layout02')),
        children: [
          { index: true, element: lazy(() => import('@/lectures/lecture05/pages/ConcertsHome')) },
          { path: 'trending', element: lazy(() => import('@/lectures/lecture05/pages/Trending')) },
          { path: 'city/:city', element: lazy(() => import('@/lectures/lecture05/pages/City')) },
        ],
      },
    ],
  },
  { path: 'lecture06', element: lazy(() => import('@/lectures/lecture06/Lecture06')) },
  { path: 'lecture07', element: lazy(() => import('@/lectures/lecture07/Lecture07')) },
  { path: 'lecture09', element: lazy(() => import('@/lectures/lecture09/Lecture09')) },
  { path: 'lecture09Ex', element: lazy(() => import('@/lectures/lecture09-exercise/Lecture09Ex')) },
  { path: 'lecture15', element: lazy(() => import('@/lectures/lecture15/pages/ContextPage')) },
  { path: 'lecture15Ex', element: lazy(() => import('@/lectures/lecture15-exercise/ThemeApp')) },
  {
    path: 'lecture15Ex02',
    element: lazy(() => import('@/lectures/lecture15-exercise02/ThemeApp')),
  },
] as const;
