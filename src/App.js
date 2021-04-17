
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import DisplayCard from './components/DisplayCard/DisplayCard';
import AmountWithdrawal from './components/AmountWithdrawal/AmountWithdrawal';
import TransactionComplete from "./components/TransactionComplete/TransactionComplete";

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
          <Route path="/AmountWithdrawal">
            <AmountWithdrawal />
          </Route>
          <Route path="/TransactionComplete">
            <TransactionComplete />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
