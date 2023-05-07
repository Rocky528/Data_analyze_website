import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


export class FormTag extends Component {

    renderSwitch(param) {
        switch (param) {
            case 'green':
                return { color: '#71DD37', backgroundColor: '#313B3F', fontSize: 15, textAlign: 'center', borderRadius: 20 };
            case 'red':
                return { color: '#FF3E1D', backgroundColor: '#3F3131', fontSize: 15, textAlign: 'center', borderRadius: 20 };
            case 'blue':
                return { color: '#03C3EC', backgroundColor: '#313B3F', fontSize: 15, textAlign: 'center', borderRadius: 20 };
            case 'yellow':
                return { color: '#FA8C26', backgroundColor: '#313B3F', fontSize: 15, textAlign: 'center', borderRadius: 20 };
            case 'input_yellow':
                return { color: '#FA8C26', backgroundColor: '#313B3F', fontSize: 15, textAlign: 'center', borderRadius: 20 };
            case 'input_red':
                return { color: '#FF3E1D', backgroundColor: '#3F3131', fontSize: 15, textAlign: 'center', borderRadius: 20 };
            case 'input_green':
                return { color: '#71DD37', backgroundColor: '#313B3F', fontSize: 15, textAlign: 'center', borderRadius: 20 };
            case 'input_white':
                return { color: '#03C3EC', backgroundColor: '#06324C', fontSize: 15, textAlign: 'center', borderRadius: 20 };
            case 'input_blue':
                return { color: '#03C3EC', backgroundColor: '#06324C', fontSize: 15, textAlign: 'center', borderRadius: 20 };
            default:
                return 'foo';
        }
    }

    render() {
        return (
            <>
                {this.props.color == 'input_yellow' || this.props.color == 'input_green' || this.props.color == 'input_red' || this.props.color == 'input_white' || this.props.color == 'input_blue' ?
                    <div className='mt-3' style={{ width: "80%", marginLeft: '10%' }}>
                        <label className='px-2 mb-2' style={this.renderSwitch(this.props.color)}>{this.props.title}</label>
                        <Form.Group >
                            <div className="input-group mb-2" >
                                <Form.Control type="text" style={{ color: "white", borderRadius: '6px 0px 0px 6px', backgroundColor: "#3B4758", borderColor: "#3B4758" }} className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                                <div className="input-group-prepend">
                                    <span className="input-group-text " style={{ fontSize: 14, borderRadius: '0px 6px 6px 0px', color: '#BAC4D1', backgroundColor: "#3B4758", borderColor: "#3B4758" }}>$</span>
                                </div>
                            </div>
                        </Form.Group>
                    </div> : <div>
                        <span className="px-2" style={this.renderSwitch(this.props.color)}>{this.props.title}</span>
                        <div className="mt-2" style={{ fontSize: 26, color: "#CBCBE2" }}>{this.props.value}</div>
                    </div>}

            </>
        )
    }
}

export default FormTag;
