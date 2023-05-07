import React, { Component } from "react";
import FormTag from '../Component/FormTag';
import FormTag1 from '../Component/FormTag1';
import FormTag3 from '../Component/FormTag3';

export class Tab1 extends Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div className="col-sm-8 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mb-5" style={{ color: "#CBCBE2" }}>Summary Strategy</h4>
                                <div className="row ">
                                    <div style={{ backgroundColor: 'green' }} className="col-sm-3 d-none d-sm-block">
                                        <div className="row " style={{ marginTop: '52%' }}>
                                            <div className="col-sm-12 text-center">
                                                <FormTag3 color="white1" value="Alto" />
                                            </div>
                                        </div>
                                        <div className="row ml-2" style={{ marginTop: '157%' }}>
                                            <div className="col-sm-12 text-center">
                                                <FormTag3 color="white1" value="Beta" />
                                            </div>
                                        </div>
                                        <div className="row ml-2" style={{ marginTop: '82%' }}>
                                            <div className="col-sm-12 text-center">
                                                <FormTag3 color="white1" value="Alpha" />
                                            </div>
                                        </div>
                                        <div className="row ml-2" style={{ marginTop: '213px' }}>
                                            <div className="col-sm-12 text-center">
                                                <FormTag3 color="white1" value="Alpha" />
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: 'black' }} className="col-sm-6">
                                        <div className="row">
                                            {/* <div className="col-sm-3">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <FormTag3 color="green1" value="GGGO1" />
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="col-sm-12" style={{
                                                textAlign: 'center'
                                            }}>
                                                <img src={require('../../assets/images/Group 49.png')} alt="profile" className="profile-pic just-content-center" style={{ width: '100%', height: '100%' }} />

                                            </div>
                                            {/* <div className="col-sm-3">
                                                <FormTag3 color="green1" value="Alpha" />
                                            </div> */}
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: 'blue' }} className="col-sm-3">
                                        <div className="row">
                                            <div className="col-sm-12" style={{ textAlign: 'right' }}>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className='row mb-4'>
                            <div className='col-sm-12'>
                                <div className="card" style={{ borderRadius: '8px' }}>
                                    <div className="card-body">
                                        <h4 style={{ color: "#CBCBE2" }}>Summary Strategy</h4>
                                        <div className="row mt-4">
                                            <div className="col-6">
                                                <FormTag color="green" title="BBBO2" value="$286" />
                                            </div>
                                            <div className="col-6">
                                                <FormTag color="red" title="BBBO2" value="$546" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-4'>
                            <div className='col-sm-12'>
                                <div className="card" style={{ borderRadius: '8px' }}>
                                    <div className="card-body">
                                        <h4 style={{ color: "#CBCBE2" }}>My Portfolio Management</h4>
                                        <div className="row mt-4">
                                            <div className="col-6">
                                                <FormTag color="green" title="BBBO2" value="$286" />
                                            </div>
                                            <div className="col-6">
                                                <FormTag color="red" title="BBBO2" value="$546" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-4'>
                            <div className='col-sm-12'>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 style={{ color: "#CBCBE2" }}>Percentitle Trading</h4>
                                        <div className="row mt-5">
                                            <div className="col-6">
                                                <FormTag1 color="red" title="HHHO1" value="1K" />
                                            </div>
                                            <div className="col-6">
                                                <FormTag1 color="blue" title="MMMO1" value="42.9" />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-6">
                                                <FormTag1 color="red" title="IIIO2" value="$ 45.5" />
                                            </div>
                                            <div className="col-6">
                                                <FormTag1 color="green" title="JJJO2" value="$ 42.9" />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-6">
                                                <FormTag1 color="red" title="KKKO1" value="$ 5.4" />
                                            </div>
                                            <div className="col-6">
                                                <FormTag1 color="green" title="KKKO2" value="$ 444.4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Tab1;