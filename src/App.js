import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Status from "./pages/status/Status";
import Schedule from "./pages/schedule/Schedule";
import Scheduler from "./pages/scheduler/Scheduler";
import Create from "./pages/create/Create";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/*
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          */}

          <Route path="/products">


            <ProductList />


          </Route>

          {/* <Route path="/products" render={()=>
          <fregment>
            <Create/>
            <ProductList/>
          </fregment>
          /> */}

          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/schedule/:scheduleId">
            <Schedule />
          </Route>
          <Route path="/status" component={Status} />

          <Route path="/scheduler">
            <Scheduler />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;