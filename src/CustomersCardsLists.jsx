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
    position = {staff.position}
    rating = {staff.rating}/> 
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
        rating = {Customers.rating}
    />)} 
        
    </div>
}

export default CustomersCardsLists;