import React from 'react';
import './card-list-style.css';
import { Card } from '../card/card.component'


export const CardList = props => {
    return <div className='card-list'> 
    {props.employee.map(employee => (
              <Card key={employee.id} employee={employee} /> 
              ))}
    
    </div>;
};