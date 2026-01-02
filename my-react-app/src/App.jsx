import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"

function App() {

  return(
    //We have to enclose our components in a fragment tag as we can only return one element
    //child elements dont count as additional elements
    <>
      <Header/>
      <Food/>
      <Food/>
      <Footer/>
    </>
  );
}

export default App
