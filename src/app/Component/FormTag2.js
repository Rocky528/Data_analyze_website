import React, { Component } from 'react';

export class FormTag2 extends Component {

    renderSwitch(param) {
        switch (param) {
            case 'yellow':
                return { color: '#FA8C26', fontSize: 15 };
            case 'blue':
                return { color: '#87DFE9', fontSize: 15 };
            case 'red':
                return { color: '#FF3E1D', fontSize: 15 };
            case 'green':
                return { color: '#71DD37', fontSize: 15 };
            case 'white':
                return { color: '#FFFFFF', fontSize: 15 };
            default:
                return 'foo';
        }
    }

    render() {
        return (
            <>
                <div className="avatar flex-shrink-0 ">
                    {/* <img
                        src={require(`../../assets/images/${this.props.img}.png`)}
                        alt="User" className="rounded" /> */}
                </div>
                <div className="d-flex w-100  flex-wrap align-items-center justify-content-between " >
                    <div className="">
                        <h6 className="mb-0 px-2 py-2">{this.props.title}</h6>
                    </div>
                    <div className="user-progress d-flex align-items-center">
                        <h6 className="mb-0" style={this.renderSwitch(this.props.color)}>{this.props.value}</h6>
                    </div>
                </div>
            </>
        )
    }
}

export default FormTag2;
