import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}
 // const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
 // const [amount, setAmount] = useState(props.amount);
//  const [date, setDate] = useState(props.date);

  const [state, setState] = useState({
    title: props.title,
    amount: props.amount,
    date: props.date
  });
  
  const clickHandler = () => {
    // setTitle('Updated!');
    console.log(state.title);
    setState({
      ...state,
      title: 'updated'
    })
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{state.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
