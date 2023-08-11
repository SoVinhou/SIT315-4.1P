import React from "react";
import Card from "./Card";
import{ faker } from "@faker-js/faker";
import './Card.css'
import CustomersLists from "./CustomersLists";
import Customers from "./Customers";

function cardComponent (staff, index) {
    return <Card
    key = {Customers.key}
    avatar = {staff.avatar}
    name = {staff.name}
    position = {staff.position}/> 
}



const CustomersCardsLists = () =>
{
    return <div className="row">
    {CustomersLists.map( (Customers) => 
    <Card 
        key = {Customers.key}
        avatar = {Customers.avatar}
        name = {Customers.name}
        position = {Customers.position}
    />)} 
        
    </div>
}

export default CustomersCardsLists;