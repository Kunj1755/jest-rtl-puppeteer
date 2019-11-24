import React from "react";
import TestRenderer from "react-test-renderer";
import { cleanup, fireEvent, render } from '@testing-library/react';
import App from "../App";
import Person from "../Person";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

// const personCompProps = {
//     name: "Ram",
//     age: "30",
//     handleOnClick: jest.fn(),
//     handleOnChange: jest.fn()

// };

test("App renders without crashing", () => {
    const testRenderer = TestRenderer.create(<App />);
    const testInstance = testRenderer.root;
    // console.log(testRenderer);
    // console.log(testInstance);
    expect(testInstance.findByType(Person).props.name).toBe('Shyam');
    expect(testInstance.findByType(Person).props.age).toBe('25');
    expect(testInstance.findByProps({ id: "para" }).children).toEqual(['100']);
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
});

