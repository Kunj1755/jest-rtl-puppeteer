import React, { useState } from "react";

const person = props => {

    return (
        <div>
            <p data-testid="intro" onClick={props.clicked}>
                My name is <h3> {props.name} </h3> and I am {props.age} years old
      </p>
            <p> {props.children}</p>
            <p data-testid="count">{props.count}</p>
            <p data-testid="para">100</p>
            <input type="text" onChange={props.changed} />
        </div>
    );
};
export default person;
