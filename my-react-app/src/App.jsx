import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button.jsx"
import ButtonModule from "./ButtonModule/ButtonModule.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import ButtonClick from "./ButtonClick.jsx"
import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter.jsx"

function App() {

  /*
  const fruits = [{id: 1, name: "Apple", calories: 95}, 
                    {id: 2, name: "Orange", calories: 45}, 
                    {id: 3, name: "Banana", calories: 105}, 
                    {id: 4, name: "Coconut", calories: 159}, 
                    {id: 5, name: "Pineapple", calories: 37}];

  const vegetables = [{id: 1, name: "Potatoes", calories: 110}, 
                    {id: 2, name: "Celery", calories: 15}, 
                    {id: 3, name: "Carrots", calories: 25}, 
                    {id: 4, name: "Sweetcorn", calories: 63}, 
                    {id: 5, name: "Broccoli", calories: 50}];

  return(
    //We have to enclose our components in a fragment tag as we can only return one element
    //child elements dont count as additional elements
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
    </>
    // both statements are logically equivalent
  );

  */

  return(
    <>
      <MyComponent />

      <Counter />
    </>
  );
}

export default App



/*
  React Hooks = Special function that allows functional components to use
                React features without writing class components
                (useState, useEffect, useContext, useReducer, useCallback, and more...)

  useState() = A react hook that allows the creation of a stateful variable
               AND a setter function to update its value in the Virtual DOM. [namme, setName]
*/