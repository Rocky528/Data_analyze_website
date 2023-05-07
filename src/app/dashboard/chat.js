import React, { useState } from "react";
// import React, { Component } from "react";
import FormTag from '../Component/FormTag';
import FormTag1 from '../Component/FormTag1';
import FormTag3 from '../Component/FormTag3';
import GaugeChart from "react-gauge-chart";

export default function App() {
    const [gauge, setGauge] = useState(0.1);

    const gaugeContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <div className="app">
            <div className='row'>
                <div className="col-sm-8 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="mb-5" style={{ color: "#CBCBE2" }}>Summary Strategy</h4>
                            <div className="row" style={{marginTop:'60px'}}>
                                <div className="col-md-3 pl-5 d-none d-md-block">
                                    <div style={{ marginTop: "64px" }}>
                                        <FormTag3 color="white1" value="Alto" />
                                    </div>
                                    <div style={{ marginTop: "190px" }}>
                                        <FormTag3 color="white1" value="Beta" />

                                    </div>
                                    <div style={{ marginTop: "97px" }}>
                                        <FormTag3 color="white1" value="Alpha" />

                                    </div>
                                    <div style={{ marginTop: "132px" }}>
                                        <FormTag3 color="white1" value="Theta" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="row">
                                        <div className="col-sm-12" style={{
                                            textAlign: 'center', marginBottom: '110px'
                                        }}>
                                            <img src={require('../../assets/images/Group 49.png')} alt="profile" className="profile-pic just-content-center" style={{ width: '250px', height: '600px' }} />

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pr-5 d-none d-md-block text-right">
                                    <div style={{ marginTop: "38px" }}>
                                        <FormTag3 color="white1" value="Alto1" />
                                    </div>
                                    <div style={{ marginTop: "12px" }}>
                                        <FormTag3 color="white1" value="Alto2" />
                                    </div>
                                    <div style={{ marginTop: "142px" }}>
                                        <FormTag3 color="white1" value="Beta1" />
                                    </div>
                                    <div style={{ marginTop: "12px" }}>
                                        <FormTag3 color="white1" value="Beta2" />
                                    </div>
                                    <div style={{ marginTop: "210px" }}>
                                        <FormTag3 color="white1" value="Theta1" />
                                    </div>
                                    <div style={{ marginTop: "6px", }}>
                                        <FormTag3 color="white1" value="Theta2" />
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
                                    <h6 style={{ color: '#7071A4' }}>Risk Reward (%)</h6>
                                    <div className="row mt-4">
                                        <div className="col-sm-12">
                                            <div style={gaugeContainerStyle}>
                                                <GaugeChart
                                                    textColor="#FFFF"
                                                    nrOfLevels={4}
                                                    colors={["#7E0000", "#FF0000", "#0EFF00", "#0A5D00"]}
                                                    formatTextValue={(value) => '3X'}
                                                    percent={gauge}
                                                    arcsLength={[0.2, 0.1, 0.2, 0.5]}
                                                />
                                            </div>
                                            <h4 className="text-center mt-4">HHHO3 = 102.93 = C20/C9</h4>
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
    );
}
