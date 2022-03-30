

import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Create from './components/Create.js';
import Blogdetails from './components/Blogdetails.js';
import NotFound from './components/NotFound.js';
function App() {

  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/'>
      <Home></Home>
      </Route>
      <Route exact path='/create'>
      <Create></Create>
      </Route>
      <Route path='/blogs/:id'>
      <Blogdetails></Blogdetails>
      </Route>
      <Route path='*'>
        <NotFound></NotFound>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
