import React, { Component, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { NumericFormat } from 'react-number-format'
import { useSelector, useDispatch } from 'react-redux'
import { InputCurrency } from '../../reducers/InputSlice'



const FormTag4 = (props) => {


    const { Currency } = useSelector((state) => state.InputValue);
    const dispatch = useDispatch();
    const [currency, setCurrency] = useState(Currency);

    const CurrencyChange = (event) => {
        setCurrency(event.target.value);
    }
    const options = ["$", "£", "฿", '€', '¥', '₣', '₹'].map((item, index) => (
        <option key={index} value={item}>{item}</option>
    ));

    useEffect(() => {
        dispatch(InputCurrency(currency));
    }, [currency])

    const renderSwitch = (param) => {
        switch (param) {
            case 'green':
                return { width: '160px', height: '26.3px', color: '#71DD37', backgroundColor: '#313B3F', fontSize: '16px', textAlign: 'center', borderRadius: '4.38329px' };
            case 'input_white':
                return { color: '#FFFFFF', fontSize: 14, textAlign: 'center' };
            case 'blue':
                return { width: '160px', height: '26.3px', color: '#03C3EC', backgroundColor: '#06324C', fontSize: '16px', textAlign: 'center', borderRadius: '4.38329px' };
            case 'red':
                return { width: '160px', height: '26.3px', color: '#FF3E1D', backgroundColor: '#3F3131', fontSize: '16px', textAlign: 'center', borderRadius: '4.38329px' };
            default:
                return 'foo';
        }
    }

    return (
        <>
            {props.color === 'input_white' ?
                <div style={{ width: "80%", marginLeft: '10%' }}>

                    <div className="input-group" >
                        {props.val === "m" ? <>
                            <NumericFormat thousandSeparator={true} onKeyPress={props.onKeyPress}
                                ref={props.ref}
                                value={props.value}
                                style={{ color: "white", borderRadius: '6px 6px 6px 6px', backgroundColor: "#3B4758", borderColor: "#3B4758" }}
                                className="form-control"
                                aria-describedby="basic-addon1"
                                onKeyDown={props.onKeyDown}
                                onChange={props.onChange}
                                name={props.name} />
                        </> : <>
                            <div className="input-group-prepend">
                                <select className="input-group-text " onChange={CurrencyChange} style={{ fontSize: 14, borderRadius: '6px 0px 0px 6px', color: '#BAC4D1', backgroundColor: "#3B4758", borderColor: "#3B4758" }} value={Currency}>{options} </select>
                            </div>
                            <NumericFormat thousandSeparator={true} onKeyPress={props.onKeyPress}
                                ref={props.ref}
                                value={props.value}
                                style={{ color: "white", borderRadius: '0px 6px 6px 0px', backgroundColor: "#3B4758", borderColor: "#3B4758" }}
                                className="form-control"
                                aria-describedby="basic-addon1"
                                onKeyDown={props.onKeyDown}
                                onChange={props.onChange}
                                name={props.name} />
                        </>}

                    </div>
                    <label className='px-1' style={renderSwitch(props.color)}>{props.title}</label>
                </div> : <div>
                    <div className="text-center mb-3" style={renderSwitch(props.color)}>{props.value}</div>
                    <div className="mt-2" style={{ fontSize: 14, color: "#FFFFF" }}>{props.title}</div>
                </div>}

        </>
    )
}

export default FormTag4;
