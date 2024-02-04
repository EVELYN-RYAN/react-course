import './App.css';
import { Button } from './components/Button';
import { FoodList } from './components/FoodList';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: 'Berry',
    last: 'Allen'
  }
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
  const foodList = ['Apple','Pizza','HotDog']
  return (
    <div className="App">
      <Greet name='Ryan' messageCount={35} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <FoodList foods={foodList}/>
      <Status status='success'/>
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      <Greet name="Ryan" isLoggedIn={false}></Greet>
      <Button id={4} handleClick={(event,id)=> console.log('Button Clicked',event,id)}/>
      <Input value=""/>
    </div>
  );
}

export default App;
