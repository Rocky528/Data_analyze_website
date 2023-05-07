import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


export class FormTag1 extends Component {

    renderSwitch(param) {
        switch (param) {
            case 'green':
                return { color: '#71DD37', fontSize: 26, borderRadius: 20 };
            case 'red':
                return { color: '#FF3E1D', fontSize: 26, borderRadius: 20 };
            case 'blue':
                return { color: '#03C3EC', fontSize: 26, borderRadius: 20 };

            default:
                return 'foo';
        }
    }

    render() {
        return (
            <>
                <div>
                    <span className="px-2" style={{ fontSize: 15, color: "#CBCBE2", textAlign: 'center' }} >{this.props.title}</span>
                    <div className="mt-2 ml-2" style={this.renderSwitch(this.props.color)}>{this.props.value}</div>
                </div>

            </>
        )
    }
}

export default FormTag1;
