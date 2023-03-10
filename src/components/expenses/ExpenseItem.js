import ExpenseDate from "./ExpenseDate";
import Card from '../ui/Card';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">Rs {props.amount}</div>
      <button>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
