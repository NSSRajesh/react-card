import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  const user=[
      {
          name:"Veg Briyani",
          prize:3.4,
          time:"34mins",
          special:"India,Chinese,Thuraipakkam"
      },
      {
          name:"Veg Rice",
          prize:3.2,
          time:"24mins",
          special:"Fast Food,Rice"
      },
      {
        name:"Nooduls",
        prize:4.2,
        time:"30mins",
        special:"India,Chinese,Koyampedu"
    },
    {
        name:"Mottun Briyani",
        prize:5.5,
        time:"43mins",
        special:"Indian,Chinese,Briyani"
    },
    {
      name:"Egg Rice",
      prize:3.4,
      time:"24mins",
      special:"India,Chinese,Madurai"
  },
  {
      name:"Idli",
      prize:2.7,
      time:"31mins",
      special:"Tenksi"
  },
  {
    name:"Dosa",
    prize:2.4,
    time:"12mins",
    special:"Thirunelveli"
  },
  {
      name:"Oyalo Pizza",
      prize:4.5,
      time:"21mins",
      special:"Pizza,Fast Food,Desserts"
  },
  {
    name:"Banana Leaf",
    prize:4.2,
    time:"17mins",
    special:"North Indian,Muglai,Fast Food"
  },
  {
    name:"Sulthan Briyani",
    prize:3.7,
    time:"24mins",
    special:"Briyani,Chinese,South Indian"
  }
  ];
  return (
    <div className="App">
        <Card userData={user} />
      
    </div>
  );
}

export default App;
