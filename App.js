import React from "react";
import {BrowserRouter as Router,Route, Redirect} from 'react-router-dom';
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

import MainNavigation from "./Shared/componenet/Navigation/MainNavigation";
import Home from "./Shared/componenet/UIElements/Home";
import Resume from "./Places/page/Resume";
import Projects from "./Places/page/Projects";
import Contact from "./Places/page/Contact"
const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
      <Switch>
     
     
      <Route path="/" exact>    
        <Home/> 
      </Route>

      <Route path="/:userId/places" exact>
        <Resume/>
      </Route>
      
      <Route path="/Places/new" exact>    
        <Projects/>  
      </Route>
      <Route path="/Places/Contact" exact>    
        <Contact/>  
      </Route>
      <Redirect to="/"/>


      </Switch>
      </main>
    </Router>
  );
};

export default App;












