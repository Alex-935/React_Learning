
function ButtonClick() {

    /*
    const handleClick = () => {
        console.log("Ouch.");
    }

    const handleClick2 = (name) => {
        console.log(`${name}, stop clicking me.`);
    }

    return(
        // Adding brackets after a function causes the function to be called right away
        // by wrapping it in an arrow function, we prevent the immediate call
        <button onClick={() => handleClick2("Bro")}>Click Me</button>
    );
    */

    const handleClick = (e) => e.target.textContent = "ouch";

    return(
        <button onClick={(e) => handleClick(e)}></button>
    );
}
export default ButtonClick