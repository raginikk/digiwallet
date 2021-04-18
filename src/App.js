
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DisplayCard from './components/DisplayCard/DisplayCard';
import AmountWithdrawal from './components/AmountWithdrawal/AmountWithdrawal';
import TransactionComplete from "./components/TransactionComplete/TransactionComplete";
import HomePage from './components/HomePage/HomePage';
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <div className="wrapper">
      
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <HomePage />
          </Route>
          <Route exact path="/home">
          <DisplayCard />
          </Route>
          <Route exact path="/amountWithdrawal">
            <AmountWithdrawal />
          </Route>
          <Route exact path="/transactionComplete">
            <TransactionComplete />
          </Route>
          <Route exact path="/*">
            <PageNotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
