import React from "react";

const Count = ({ clicked, countVal }) => {

    return (
        <button data-testid="count-button" style={{ "width": "40px", "height": "20px" }} onClick={clicked}>{countVal}</button>
    );
};
export default Count;
