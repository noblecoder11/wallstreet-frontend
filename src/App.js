// import './App.css'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Navbar
import NavIt from './Components/Navbar/Navbar'

// Leaderboard
import Search from './Components/CompanyList/Search'
import DisplayList from './Components/CompanyList/DisplayList'
// import { Nav, Navbar, Container,Card } from 'react-bootstrap'

// Login Page
import LoginHome from './Components/LoginPage/login';

// Rules
import Rules from './Components/Rules/Rules'

// News
import NewsPage from './Components/NewsList/NewsPage'

// Buysell
import StocksList from './Components/NewsList/stocks-list';
import BuySell from './Components/BuySell/BuySell'

// Leaderboard
import Table from './Components/Leaderboard/Table'

// Transactions
import Transaction from './Components/Transaction/transaction'
import {
  pendingTransactionList,
  completedTransactionList
} from './Components/Transaction/transactionsList'



function App() {
  const [keyword, setkeyword] = useState('')

  return (
    <>


      {/* <div className='container'>
        <div className='main_container'>
          <div className='Header'>COMPANY TABLE</div>
          <Search keywordHandler={setkeyword} />
          <DisplayList keyword={keyword}/>
        </div>
      </div> */}

      {/* <div className='my_container'>
        <Card.Header className="my_rules_header">Rules</Card.Header>
        <div class="rulesContainer">
          <Rules className='my_rules' /> 
          <div className='bgImage'></div>
        </div>
      </div> */}

      {/* <LoginHome/> */}

      {/* <Router>
        <NavIt/>
        <Switch>
          <Route path='/' exact component={DisplayList} />
          <Route path='/reports' component={Rules} />
        </Switch>
      </Router>
      
      
    

      <div className='footer'>Footer</div> */}
      {/* <Transaction
          type={'COMPLETED TRANSACTION'}
          list={pendingTransactionList}
        />
        <Transaction
          type={'PENDING TRANSACTION'}
          list={completedTransactionList}
        /> */}

      <Router>
        <div>
          <nav>
            <NavIt />
            {/* <ul>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/buysell-company-list">Buy / Sell</Link>
              </li>
              <li>
                <Link to="/transactions">Transactions</Link>
              </li>
              <li>
                <Link to="/company-list">Company List</Link>
              </li>
              <li>
                <Link to="/homepage">HOME 1</Link>
              </li>
              <li>
                <Link to="/homepage2">HOME 2</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/transact">Buy / Sell</Link>
              </li>

            </ul> */}
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>

            {/* login */}
            <Route path="/login">
              <LoginHome />
            </Route>

            {/* Company info */}
            <Route path="/company-list">
              {/* <Search/>
              <DisplayList/> */}
              <div className='container'>
                <div className='main_container'>
                  <div className='Header'>COMPANY TABLE</div>
                  <Search keywordHandler={setkeyword} />
                  <DisplayList keyword={keyword} />
                </div>
              </div>
            </Route>

            {/* Buysell */}
            <Route path="/buysell/:id">
              <BuySell />
            </Route>
            <Route path="/buysell">
              <StocksList />
            </Route>

            {/* News */}
            <Route path="/news">
              <NewsPage />
            </Route>

            {/* Transactions */}
            <Route path="/transactions">
              <Transaction
                type={'COMPLETED TRANSACTION'}
                list={pendingTransactionList}
              />
              <Transaction
                type={'PENDING TRANSACTION'}
                list={completedTransactionList}
              />
            </Route>

            {/* Leaderboard */}
            <Route path="/leaderboard">
              <Table />
            </Route>
            
            <Route path="/login">
              <LoginHome/>
            </Route>


            {/* Homepage */}
            <Route path="/">
              {/* <Rules></Rules> */}
              <div className='my_container'>
                <Card.Header className="my_rules_header">Rules</Card.Header>
                <div class="rulesContainer">
                  <Rules className='my_rules' />
                  <div className='bgImage'></div>
                </div>
              </div>
            </Route>

            {/* Error 404 page */}
            <Route>
              ERROR 404
              Please enter valid url
            </Route>

          </Switch>
        </div>
      </Router>
    </>
  )
}
export default App
