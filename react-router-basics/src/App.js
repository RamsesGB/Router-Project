import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import NavBar from './Components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Profile from './Components/Profile';
import EditProfile from './Components/EditProfile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Contact" component={Contact} />
        <Route path="/About" component={About} />
        <Route exact path="/Profile" component={Profile} />
        <Route path="/Profile/:id" component={EditProfile} />
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
