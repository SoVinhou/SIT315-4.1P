import React from "react";
import Card from "./Card";
import{ faker } from "@faker-js/faker";
import './Card.css'
import FreelacersLists from "./FreelancersLists";
import Freelancers from "./Freelancers";

function cardComponent (staff, index) {
    return <Card
    key = {Freelancers.key}
    avatar = {staff.avatar}
    name = {staff.name}
    position = {staff.position}
    rating = {staff.rating}/> 
}



const CardsLists = () =>
{
    return <div className="row">
    {FreelacersLists.map( (Freelancers) => 
    <Card 
        key = {Freelancers.key}
        avatar = {Freelancers.avatar}
        name = {Freelancers.name}
        position = {Freelancers.position}
        rating = {Freelancers.rating}
    />)} 
        
    </div>
}

export default CardsLists;