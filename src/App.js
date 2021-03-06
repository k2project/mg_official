import React, { Component } from 'react';
import './App.scss';

//list pages imports before router
// import Holdingpage from './pages/Holdingpage';
import Home from './pages/Home/Home';
import Bio from './pages/Bio/Bio';
import Endorsements from './pages/Endorsements/Endorsements';
import Press from './pages/Press/Press';
import Masterclasses from './pages/Masterclasses/Masterclasses';
import Choreography from './pages/Choreography/Choreography';
import Contact from './pages/Contact/Contact';
import Cookies from './pages/Cookies/Cookies';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//Google Anlitics: pages viewed
import Analytics from 'react-router-ga';
import {analiticsID} from './api/appData';

class App extends Component {
  render() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Analytics id={analiticsID} debug>
                <Switch>
                    {/* <Route exact path='/' component={Holdingpage}/> */}
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/biography' component={Bio}/>
                    <Route exact path='/press' component={Press}/>
                    <Route exact path='/masterclasses' component={Masterclasses}/>
                    <Route exact path='/choreography' component={Choreography}/>
                    <Route exact path='/endorsements' component={Endorsements}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Route exact path='/cookies_policy' component={Cookies}/>
                    <Redirect from='*' to='/' />
                </Switch>
            </Analytics>
       </BrowserRouter>

    );
  }
}

export default App;
