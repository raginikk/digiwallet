
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import DisplayCard from './components/DisplayCard/DisplayCard';

function App() {
  return (
    <div className="wrapper">
      
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <DisplayCard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;