import Cookies from 'js-cookie';
import {Route,Redirect} from 'react-router-dom'

const ProtectedRouteStudent=(props)=>{
    const jwt=Cookies.get('jwt-token-student');
    if (jwt===undefined){
        return <Redirect to='/student-login'/>
    }
    return <Route {...props}/>
}

export default ProtectedRouteStudent