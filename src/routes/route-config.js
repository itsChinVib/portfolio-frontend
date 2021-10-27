import { ComingSoonPage } from 'pages/ComingSoon';
import { ComponentListPage } from 'pages/ComponentList';
import { HomePage } from 'pages/Home';
import { ProjectsPage } from 'pages/Projects';
import { TopcoderProfilePage } from 'pages/Topcoder';
import { WorkExperiencePage } from 'pages/WorkExperience';

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
  {
    name: 'Work Experience',
    path: '/work-experience',
    exact: true,
    component: WorkExperiencePage,
  },
  {
    name: 'Projects',
    path: '/projects',
    exact: true,
    component: ProjectsPage,
  },
  {
    name: 'Topcoder',
    path: '/topcoder',
    exact: true,
    component: TopcoderProfilePage,
  },
  {
    name: 'Open Source Contributions',
    path: '/oss-contributions',
    exact: true,
    component: ComingSoonPage,
  },
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
