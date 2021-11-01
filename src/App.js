import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import CosNav from './components/Nav/Nav';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import AddAplan from './pages/AddAplan/AddAplan';
import AllOrders from './pages/AllOrders/AllOrders';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import MyOrders from './pages/MyOrders/MyOrders';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>

          <CosNav></CosNav>

          <Switch>

              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route path="/home">
                <Home></Home>
              </Route>

              <PrivateRoute path="/service/:serviceId">
                {/* <SingleService></SingleService> */}
              </PrivateRoute>

              <PrivateRoute path="/myorders">
                <MyOrders></MyOrders>
              </PrivateRoute>

              <PrivateRoute path="/allorders">
                <AllOrders></AllOrders>
              </PrivateRoute>

              <PrivateRoute path="/addaplan">
                <AddAplan></AddAplan>
              </PrivateRoute>
              
              <Route path="/login">
                <Login></Login>
              </Route>

              <Route path="/register">
                {/* <Register></Register> */}
              </Route>
              
              <Route path="*">
                <NotFound></NotFound>
              </Route>
              

          </Switch>

          <Footer></Footer>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
