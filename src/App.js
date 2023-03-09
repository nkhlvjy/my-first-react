import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newexpense/NewExpense";
import ChatGPT from "./components/ChatGPT";
import Dictaphone from "./components/VoiceAssist";

const App = () => {
  let items = [
    {
      title: 'Clothes',
      amount: 2500,
      date: new Date(2023,1,5)
    },
    {
      title: 'Shoes',
      amount: 5000,
      date: new Date(2023,1,5)
    },
    {
      title: 'Food',
      amount: 500,
      date: new Date(2023,1,5)
    },
    {
      title: 'Stationary',
      amount: 1200,
      date: new Date(2023,1,5)
    }
  ]
  return (
    <div>
      <Dictaphone></Dictaphone>
    </div>
  );
}

export default App;
