
import React from 'react';
import { NumericFormat } from 'react-number-format'

function NumberInput() {
    return (
        <NumericFormat thousandSeparator={true}
            style={{ color: "white", backgroundColor: "#3B4758", borderColor: "#3B4758" }}
            className="form-control"
            aria-describedby="basic-addon1"
        />
    );
}

export default NumberInput;
