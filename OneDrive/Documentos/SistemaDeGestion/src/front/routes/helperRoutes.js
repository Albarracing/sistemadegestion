import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({componen, ...options}) => {
    const isAuth = false;
    if (!isAuth) return <Route {...options} component={componen}/>
    return <Redirect to="/"/>
}

export default PublicRoute;