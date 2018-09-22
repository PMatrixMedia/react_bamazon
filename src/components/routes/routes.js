import React from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';


const Routes = () => (
    <Router>
        <React.Fragment>
            <Link to="/"></Link>
            <Route exact path="/" component={store}/>
            <Route exact path="/products" component={inventory}/>
        </React.Fragment>
    </Router>
  )

  export default Routes