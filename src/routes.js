import * as Containers from './containers';


export const routes = [
  {
    component: Containers.HomeContainer,
    exact: true,
    path: '/',
  },
  {
    component: Containers.DeployContainer,
    path: '/contract/deploy',
  },
  {
    component: Containers.ExplorerContainer,
    path: '/contract/explorer',
  },
  {
    component: Containers.TestQueryContainer,
    path: '/test',
  }
];
