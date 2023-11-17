import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import FetchData from "./components/FetchData";
import { Home } from "./components/Home";
import Dashboard from './components//Dashboard';


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
  },
  {
    path: '/dashboard',
    requireAuth: true,
    element: <Dashboard />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
