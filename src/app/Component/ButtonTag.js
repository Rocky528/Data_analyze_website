import React, { Component } from 'react';

export class ButtonTag extends Component {

    renderSwitch(param) {
        switch (param) {
            case 'Price':
                return {
                    borderRadius: 6, boxShadow: '0px 1px 20px 1px #434568'
                };
            case 'Percent':
                return {
                    borderRadius: 6, boxShadow: '0px 1px 20px 1px #434568'
                };
            default:
                return 'foo';
        }
    }

    render() {
        return (
            <>
                <button type="button" onClick={this.props.onClick} style={this.renderSwitch(this.props.title)} className="btn btn-outline-info btn-md px-2.5 py-2">{this.props.value}</button>
            </>
        )
    }
}

export default ButtonTag;
