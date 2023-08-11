import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import NavBar from './NavBar';
import Cover from './Cover';
import Freelancers from './Freelancers';
import CardsLists from './CardsLists';
import Customers from './Customers';
import CustomersCardsLists from './CustomersCardsLists';
import Button from './Button';
import EmailBox from './EmailBox';
import Bottom from './Bottom';

ReactDOM.render(<div>
    <NavBar />
    <Cover />
    <Freelancers 
        text = "Featured Freelancers"
    />
    <CardsLists />
    <Button/>
    <Customers 
        text = "Featured Customers"
    />
    <CustomersCardsLists />
    <Button/>
    <EmailBox />
    <Bottom />
</div>
, document.getElementById('root'));
