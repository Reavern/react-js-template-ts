import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { AuthContext } from './store/Context';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NotFoundPage from './components/NotFoundPage';

const Routes: React.FC = () => {

    const { loggedIn } = useContext(AuthContext);

    return (
        <BrowserRouter>
            {
                !loggedIn ?
                    (
                        <Switch>
                            <Route exact path='/' component={LoginPage} />
                            <Route exact path='/register' component={RegisterPage} />
                            <Route exact path='*' component={NotFoundPage} />
                        </Switch>
                    ) : (
                        <Switch>
                            <Route exact path='/' component={HomePage} />
                            <Route exact path='/about' component={AboutPage} />
                            <Route path='/about/:id' component={AboutPage} />
                            <Route exact path='*' component={NotFoundPage} />
                        </Switch>
                    )
            }
        </BrowserRouter >
    );
}

export default Routes;