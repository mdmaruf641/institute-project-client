import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home/Home";
import About from "./components/pages/About/About";
import AllCourses from "./components/pages/AllCourses/AllCourses";
import Cart from "./components/pages/Cart/Cart";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import NotFound from "./components/pages/NotFound/NotFound";
import Header from "./components/shared/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import DashboardHome from "./components/pages/Dashboard/DashboardHome/DashboardHome";
import ResetPass from "./components/pages/ResetPass/ResetPass";
import AddCourses from "./components/pages/Dashboard/AddCourses/AddCourses";
import CourseDetails from "./components/pages/CourseDetails/CourseDetails";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route exact path="/allCourses">
              <AllCourses></AllCourses>
            </Route>
            <PrivateRoute path="/cart">
              <Cart></Cart>
            </PrivateRoute>
            <Route path="/dashboard">
              <DashboardHome></DashboardHome>
            </Route>
            <Route path="/addCourses">
              <AddCourses></AddCourses>
            </Route>
            <Route path="/courseDetails/:_id">
              <CourseDetails></CourseDetails>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/reset">
              <ResetPass></ResetPass>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
