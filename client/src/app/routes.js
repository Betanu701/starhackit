import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Login from 'views/login';
import Signup from 'views/signup';
import Forgot from 'views/forgot';

import Account from 'views/account';
import Application from 'views/application';
import Logout from 'views/logout';
import MainLanding from 'views/mainLanding';
import RegistrationComplete from 'views/registrationComplete';
import ResetPassword from 'views/resetPassword';
import MyProfile from 'views/myProfile';
import Authenticated from 'components/authenticatedComponent';
import UsersView from 'parts/admin/usersView';

let routes = (
    <Route component={Application} name="home" path="/">
        <IndexRoute component={MainLanding}/>
        <Route component={Login} path="login"/>
        <Route component={Signup} path="signup"/>
        <Route component={Logout} path="logout"/>
        <Route component={Forgot} path="forgot"/>

        <Route component={RegistrationComplete} name="verifyEmail" path="verifyEmail/:code"/>
        <Route component={ResetPassword} name="ResetPasswordToken" path="resetPassword/:token"/>

        <Route path="/admin" component={Authenticated}>
            <IndexRoute component={UsersView}/>
            <Route component={UsersView} path="users"/>
        </Route>

        <Route path="/app" component={Authenticated}>
            <IndexRoute component={Account}/>
            <Route component={Account} name="account" path="my">
                <Route component={MyProfile} path="profile"/>
            </Route>
        </Route>
    </Route>
);

export default routes;
