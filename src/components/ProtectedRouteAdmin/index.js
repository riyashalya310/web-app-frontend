import Cookies from 'js-cookie'
import {Route} from 'react-router-dom'

const ProtectedRouteAdmin=(props)=>{
    const jwt=Cookies.get('jwt-token-admin');
    if (jwt===undefined){
        const {history}=props
        history.replace('/admin-login')
    }
    return <Route {...props}/>
}

export default ProtectedRouteAdmin