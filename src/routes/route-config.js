import { ComponentListPage } from 'pages/ComponentList';
import { HomePage } from 'pages/Home';

export const routes = [
  {
    name: 'ComponentList',
    path: '/components',
    exact: true,
    component: ComponentListPage,
  },
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: HomePage,
  },
  // {
  //   name: 'Projects',
  //   path: '/projects',
  //   exact: true,
  //   component: ProjectsPage,
  // },
  //   {
  //     name: "Blog",
  //     path: "/blog",
  //     exact: true,
  //   },
  //   {
  //     name: "View Blog",
  //     path: "/blog/:id",
  //     exact: true,
  //   },
];
