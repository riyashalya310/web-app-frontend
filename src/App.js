import { BrowserRouter,Switch, Route } from 'react-router-dom';
import './App.css';
import AdminLogin from './components/AdminLogin';
import StudentLogin from './components/StudentLogin';
import Profile from './components/Profile';
import Performance from './components/Performance';
import AdminSignup from './components/AdminSignup';
import StudentSignup from './components/StudentSignup';
import ProtectedRouteAdmin from './components/ProtectedRouteAdmin';
import ProtectedRouteStudent from './components/ProtectedRouteStudent';
import AdminEditDetails from './components/AdminEditDetails';

const App=()=> {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/admin-login' component={AdminLogin}/>
        <Route exact path='/admin-signup' component={AdminSignup}/>
        <Route exact path='/student-login' component={StudentLogin}/>
        <Route exact path='/student-signup' component={StudentSignup}/>
        <ProtectedRouteAdmin exact path='/admin-edit-details' component={AdminEditDetails}/>
        <ProtectedRouteStudent exact path='/student-profile' component={Profile}/>
        <ProtectedRouteStudent exact path='/student-performance' component={Performance}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
