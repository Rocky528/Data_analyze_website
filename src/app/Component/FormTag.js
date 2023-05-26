import React, { Component, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { NumericFormat } from 'react-number-format'
import { useSelector, useDispatch } from 'react-redux'
import { InputCurrency } from '../../reducers/InputSlice'


const FormTag = (props) => {

    const { Currency } = useSelector((state) => state.InputValue);

    const dispatch = useDispatch();
    const [currency, setCurrency] = useState(Currency);
    const renderSwitch = (param) => {
        switch (param) {
            case 'green':
                return { color: '#71DD37', backgroundColor: '#313B3F', fontSize: 12, textAlign: 'center', borderRadius: 20 };
            case 'red':
                return { color: '#FF3E1D', backgroundColor: '#3F3131', fontSize: 12, textAlign: 'center', borderRadius: 20 };
            case 'blue':
                return { color: '#03C3EC', backgroundColor: '#313B3F', fontSize: 12, textAlign: 'center', borderRadius: 20 };
            case 'yellow':
                return { color: '#FA8C26', backgroundColor: '#313B3F', fontSize: 12, textAlign: 'center', borderRadius: 20 };
            case 'input_yellow':
                return { color: '#FA8C26', backgroundColor: '#313B3F', fontSize: 12, textAlign: 'center', borderRadius: 20 };
            case 'input_red':
                return { color: '#FF3E1D', backgroundColor: '#3F3131', fontSize: 12, textAlign: 'center', borderRadius: 20 };
            case 'input_green':
                return { color: '#71DD37', backgroundColor: '#313B3F', fontSize: 12, textAlign: 'center', borderRadius: 20 };
            case 'input_white':
                return { color: '#FCF9F7', backgroundColor: '#313B3F', fontSize: 12, textAlign: 'center', borderRadius: 20 };
            case 'input_blue':
                return { color: '#03C3EC', backgroundColor: '#06324C', fontSize: 12, textAlign: 'center', borderRadius: 20 };
            default:
                return 'foo';
        }
    }
    const CurrencyChange = (event) => {
        setCurrency(event.target.value);
    }
    const options = ["$", "£", "฿", '€', '¥', '₣', '₹'].map((item, index) => (
        <option key={index} value={item}>{item}</option>
    ));
    useEffect(() => {
        dispatch(InputCurrency(currency));
    }, [currency])

    return (
        <>
            {props.color === 'input_yellow' || props.color === 'input_green' || props.color === 'input_red' || props.color === 'input_white' || props.color === 'input_blue' ?
                <div style={{ width: "80%", marginLeft: '10%' }}>
                    <label className='px-1 ' style={renderSwitch(props.color)}>{props.title}</label>
                    {props.val === "%" ?
                        <div className="input-group" >
                            <NumericFormat thousandSeparator={true} onKeyPress={props.onKeyPress}
                                ref={props.ref}
                                value={props.value}
                                style={{ color: "white", backgroundColor: "#3B4758", borderColor: "#3B4758" }}
                                className="form-control"
                                aria-describedby="basic-addon1"
                                onKeyDown={props.onKeyDown}
                                onChange={props.onChange}
                                name={props.name}
                            />
                            <div className="input-group-prepend">
                                <span className="input-group-text " style={{ fontSize: 14, borderRadius: '0px 6px 6px 0px', color: '#BAC4D1', backgroundColor: "#3B4758", borderColor: "#3B4758" }}>{props.val}</span>
                            </div>
                        </div>
                        :
                        <div className="input-group" >
                            {props.val === "m" ? <NumericFormat thousandSeparator={true} onKeyPress={props.onKeyPress}
                                ref={props.ref}
                                value={props.value}
                                style={{ color: "white", borderRadius: '6px 6px 6px 6px', backgroundColor: "#3B4758", borderColor: "#3B4758" }}
                                className="form-control"
                                aria-describedby="basic-addon1"
                                onKeyDown={props.onKeyDown}
                                onChange={props.onChange}
                                name={props.name}

                            /> : <>
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
                                    name={props.name}

                                />
                            </>}

                        </div> }
                </div> : <div className="">
                    <span className="px-2" style={renderSwitch(props.color)}>{props.title}</span>
                    <div className="mt-2" style={{ fontSize: 13, color: "#CBCBE2" }}>{props.value}</div>
                </div>}

        </>
    )


}

export default FormTag;
