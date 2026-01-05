import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button.jsx"
import ButtonModule from "./ButtonModule/ButtonModule.jsx"
import Student from "./Student.jsx"

function App() {

  return(
    //We have to enclose our components in a fragment tag as we can only return one element
    //child elements dont count as additional elements
    <>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={34} isStudent={false}/>
      <Student/>
    </>
  );
}

export default App
