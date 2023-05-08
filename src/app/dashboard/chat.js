import React, { useEffect, useState } from "react";
import FormTag from '../Component/FormTag';
import FormTag1 from '../Component/FormTag1';
import FormTag3 from '../Component/FormTag3';
import GaugeChart from "react-gauge-chart";
import { useSelector, useDispatch } from 'react-redux'

export default function App() {
    const [gauge, setGauge] = useState(0.1);
    const { AAAO1, AAAO2, EEEO1, MMMO1, CCCO1, EEEO3, EEEO2, CCCO2, GGGO1, IIIO1, JJJO1 } = useSelector((state) => state.InputValue);
    //HHHO2 EO1*EO2*MO1
    const [HO2, setHO2] = useState(0);

    //IIIO2 HO2*IO1*0.01*-1
    const [IO2, setIO2] = useState(0);

    //JJJO2 EO1*EO2*JO1*MO1
    const [JO2, setJO2] = useState(0);

    //KKKO1 EO1-IO1*EO1
    const [KO1, setKO1] = useState(0);

    //KKKO2 EO1+(EO1*JO2/HO2)
    const [KO2, setKO2] = useState(0);

    //GGGO2 (EO2*GO1-EO2*EO1)*MO1
    const [GO2, setGO2] = useState(0);

    //HHHO3 GO2/CO1
    const [HO3, setHO3] = useState(0);

    useEffect(() => {
        setHO2(EEEO1 * MMMO1 * EEEO2);
        setIO2(HO2 * IIIO1 * 0.01 * -1);
        setJO2(EEEO1 * MMMO1 * EEEO2 * JJJO1 * 0.01);
        setKO1(EEEO1 - IIIO1 * 0.01 * EEEO1);
        setKO2(EEEO1 * 1 + (EEEO1 * JO2 / HO2));
        setGO2((EEEO2 * GGGO1 - EEEO2 * EEEO1) * MMMO1);
        setHO3(GO2 / CCCO1);
    },);

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
                            <div className="row" style={{ marginTop: '60px' }}>
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
                                <div className="col-md-3 pr-2 d-none d-md-block text-right">
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
                                            <h4 className="text-center mt-4">HHHO3 = {HO3} = GO2 / CCCO1</h4>
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
                                            <FormTag color="red" title="CCCO1" value={"$ " + CCCO1} />
                                        </div>
                                        <div className="col-6">
                                            <FormTag color="green" title="CCCO2" value={"$" + CCCO2} />
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
                                            <FormTag1 color="red" title="HHHO2" value={"$ " + HO2} />
                                        </div>
                                        <div className="col-6">
                                            <FormTag1 color="blue" title="MMMO1" value={MMMO1} />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-6">
                                            <FormTag1 color="red" title="IIIO2" value={"$ " + IO2} />
                                        </div>
                                        <div className="col-6">
                                            <FormTag1 color="green" title="JJJO2" value={"$ " + JO2} />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-6">
                                            <FormTag1 color="red" title="KKKO1" value={"$ " + KO1} />
                                        </div>
                                        <div className="col-6">
                                            <FormTag1 color="green" title="KKKO2" value={"$ " + KO2} />
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
