import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


export class FormTag extends Component {

    renderSwitch(param) {
        switch (param) {
            case 'green':
                return { width: '85.91px', height: '26.3px', color: '#71DD37', backgroundColor: '#313B3F', fontSize: '16px', textAlign: 'center', borderRadius: '4.38329px' };
            case 'input_white':
                return { color: '#FFFFFF', fontSize: 14, textAlign: 'center' };
            case 'blue':
                return { width: '85.91px', height: '26.3px', color: '#03C3EC', backgroundColor: '#06324C', fontSize: '16px', textAlign: 'center', borderRadius: '4.38329px' };
            case 'red':
                return { width: '85.91px', height: '26.3px', color: '#FF3E1D', backgroundColor: '#3F3131', fontSize: '16px', textAlign: 'center', borderRadius: '4.38329px' };
            default:
                return 'foo';
        }
    }

    render() {
        return (
            <>
                {this.props.color == 'input_white' ?
                    <div style={{ width: "80%", marginLeft: '10%' }}>
                        <Form.Group >
                            <div className="input-group" >
                                <div className="input-group-prepend">
                                    <span className="input-group-text " style={{ fontSize: 14, borderRadius: '6px 0px 0px 6px', color: '#BAC4D1', backgroundColor: "#3B4758", borderColor: "#3B4758" }}>{this.props.val}</span>
                                </div>
                                <Form.Control
                                    onKeyPress={this.props.onKeyPress}
                                    value={this.props.value}
                                    type="number"
                                    style={{ color: "white", borderRadius: '0px 6px 6px 0px', backgroundColor: "#3B4758", borderColor: "#3B4758" }}
                                    className="form-control"
                                    aria-describedby="basic-addon1"
                                    onChange={this.props.onChange}
                                    name = {this.props.name}
                                />

                            </div>
                        </Form.Group>
                        <label className='px-1' style={this.renderSwitch(this.props.color)}>{this.props.title}</label>
                    </div> : <div>
                        <div className="text-center" style={this.renderSwitch(this.props.color)}>{this.props.value}</div>
                        <div className="mt-2" style={{ fontSize: 14, color: "#FFFFF" }}>{this.props.title}</div>
                    </div>}

            </>
        )
    }
}

export default FormTag;
