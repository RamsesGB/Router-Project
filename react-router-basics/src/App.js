import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Contact" component={Contact} />
        <Route path="/About" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

// Alternate syntax where you can nest the component inside the route instead of passing it as a prop
// <Route path="/About">
//     <About />
// </Route>

export default App;
