import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from'./components/layout/Navbar';
import Landing from'./components/layout/Landing';
import React, { Fragment } from 'react';
import'./App.css'; 

const App= () => (
  <Router>
    <Fragment>
      <Navbar/>
      <section>
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/register' component={Register} />;
        <Route exact path='/login' component={Login} />;
      </Routes>
      </section>
    </Fragment>)
  </Router>
);
  
export default App;