import { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amt, setAmt] = useState('');
  const [date, setDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   title:'',
  //   amount:'',
  //   date:''
  // })

  const changeTitlehandler = (event) => {
    setTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return {...prevState, title: event.target.value}
    // })
    // console.log(userInput)
  };

  const changeAmthandler = (event) => {
    setAmt(event.target.value);
    // setUserInput((prevState) => {
    //   return {...prevState, amount: event.target.value}
    // })
    // console.log(userInput)
  };

  const changeDatehandler = (event) => {
    setDate(event.target.value);
    // setUserInput((prevState) => {
    //   return {...prevState, date: event.target.value}
    // })
    // console.log(userInput)
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={changeTitlehandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeAmthandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            onChange={changeDatehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
