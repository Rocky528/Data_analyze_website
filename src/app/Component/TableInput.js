
import React from 'react';
import { NumericFormat } from 'react-number-format'
import { Form } from 'react-bootstrap';

function NumberInput(props) {
    console.log(props.type)
    return (
        props.type === 'text' ? <Form.Control
            type="text"
            style={{ color: "white", backgroundColor: "#3B4758" }}
            className="form-control"
        /> : < NumericFormat thousandSeparator={true}
            style={{ color: "white", backgroundColor: "#3B4758", borderColor: "#3B4758" }
            }
            className="form-control"
        />

    );
}

export default NumberInput;
