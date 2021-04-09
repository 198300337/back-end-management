import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,Redirect,
  Switch,
  Route,
  Link, useLocation, useHistory
} from "react-router-dom";
import Login from './Pages/Login'
import AdminMain from './Components/AdminMain.jsx'
import ProductList from './Pages/products/List'
import CategorieList from './Pages/categories/List'
import OrderList from './Pages/ordres/List'
import UserList from './Pages/users/List'
import { isLogined } from './utils/tools'

function App() {
  const { pathname } = useLocation()
  const { push } = useHistory()
  //如果没有登录进行拦截登录
  if (pathname.indexOf('admin') > -1 && !isLogined()) {
    push("/login");
  }
  return (
    <>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <AdminMain>
          <Route path="/admin/categories/list" exact>
            <CategorieList />
          </Route>
          <Route path="/admin/products/list" >
            <ProductList />
          </Route>
          <Route path="/admin/ordres/list">
            <OrderList />
          </Route>
          <Route path="/admin/users/list">
            <UserList />
          </Route>
        </AdminMain>
      </Switch>
      <Redirect from="/" to="/admin/categories/list" />
    </>
  );
}

export default App;
