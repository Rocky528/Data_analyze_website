/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


export class FormTag3 extends Component {

    renderSwitch(param) {
        switch (param) {
            case 'white1':
                return { color: '#FFFFFF', fontSize: '125%' };
            case 'green1':
                return { color: '#87DFE9', fontSize: '100%' };
            case 'blue':
                return { color: '#FF3E1D', fontSize: '100%' };
            case 'blue1':
                return { color: '#FF3E1D', fontSize: '100%' };
            case 'red':
                return { color: '#FF3E1D', fontSize: '100%' };
            case 'red1':
                return { color: '#FF3E1D', fontSize: '100%' };
            case 'green':
                return { color: '#71DD37', fontSize: '100%' };
            default:
                return 'foo';
        }
    }

    render() {
        return (
            <>
                <div>
                    <span style={this.renderSwitch(this.props.color)} >{this.props.value}</span>
                    {/* <div className="mt-2 ml-2" style={this.renderSwitch(this.props.color)}>{this.props.value}</div> */}
                </div>
            </>
        )
    }
}

export default FormTag3;
