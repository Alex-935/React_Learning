import React, {useState} from 'react';

function MyComponent() {

    //const [var, setter] = useState("defaultValue");
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    // automatically updates DOM
    const updateName = () => {
        setName("Steve");
    }
    const updateAge = () => {
        setAge(age+1);
    }
    const updateEmployed = () => {
        setIsEmployed(!isEmployed);
    }


    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Name: {age}</p>
            <button onClick={updateAge}>Increment Age</button>

            <p>Name: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={updateEmployed}>Increment Age</button>
        </div>
    );
}
export default MyComponent