import React, { useState } from "react";
const person = props => {
    const [count, setCount] = useState(0);
    const _onClick = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <p onClick={_onClick}>
                I'm a person and My name is {props.name} and I am {props.age} years old
      </p>
            <p> {props.children}</p>
            <p >{count}</p>
            <p id="para">100</p>
            <input type="text" onChange={props.changed} />
        </div>
    );
};
export default person;
