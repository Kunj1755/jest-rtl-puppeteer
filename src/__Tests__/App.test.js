import React from "react";
import { cleanup, fireEvent, render } from '@testing-library/react';
import App from "../App";

afterEach(cleanup)

test('fire click event from App.js to Count.js and read the count value change', () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('count-button');
    expect(button.textContent).toBe('0');
    fireEvent.click(button);
    expect(button.textContent).toBe('1');
});
test('fire click event from App.js to Count.js and read the count value change 1', () => {
    const { queryByRole } = render(<App />);
    const button = queryByRole('button');
    expect(button.textContent).toBe('0');
    fireEvent.click(button);
    expect(button.textContent).toBe('1');
});