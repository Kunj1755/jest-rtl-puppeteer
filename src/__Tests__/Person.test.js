import React from "react";
import TestRenderer from "react-test-renderer";
import { cleanup, fireEvent, render } from '@testing-library/react';
import Person from "../Person";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

const personCompProps = {
    name: "Ram",
    age: "30",
    handleOnClick: jest.fn(),
    handleOnChange: jest.fn()

};

test("Person renders without crashing", () => {
    const testRenderer = TestRenderer.create(<Person>I am a person</Person>);
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
});

test("Person renders without crashing 2", () => {
    const testRenderer = TestRenderer.create(<Person>I am a person</Person>);
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
});

test("Person renders with name and age props", () => {
    const testRenderer = TestRenderer.create(<Person name={personCompProps.name}
        age={personCompProps.age}>I am a person</Person>);
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
});

test.only("onClick handler called", () => {
    // const handleOnClick = jest.fn();
    const testRenderer = TestRenderer.create(<Person name={personCompProps.name}
        age={personCompProps.age} click={personCompProps.handleOnClick}>I am a person</Person>);
    // const tree = testRenderer.toJSON();
    // console.log(testRenderer.toJSON());
    // tree.props.onClick();
    // expect(tree).toMatchSnapshot();
});
