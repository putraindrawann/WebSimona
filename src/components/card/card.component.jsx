import React from 'react';
import './card.style.css';
import { Link } from "react-router-dom";



export const Card = props => (
    <div className='card-container' >
        <img alt="employee" src={`https://robohash.org/${props.employee.id}?set=set5&size=200x200`}/>
        <h5><Link to={"/" + props.employee.id}>{props.employee.name}</Link></h5>
    </div>

);