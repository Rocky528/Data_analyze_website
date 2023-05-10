import React, { useEffect, useState } from "react";
import FormTag from '../Component/FormTag';
import FormTag1 from '../Component/FormTag1';
import FormTag3 from '../Component/FormTag3';
import GaugeChart from "react-gauge-chart";
import { useSelector } from 'react-redux'

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
    const [FO1, setFO1] = useState(0);
    const [EO3, setEO3] = useState(EEEO3);
    const [EO1, setEO1] = useState(EEEO1);
    const [DO2, setDO2] = useState(0);
    const [MO1, setMO1] = useState(MMMO1);
    const [CO1, setCO1] = useState(CCCO1);
    const [FO2, setFO2] = useState(0);
    const [FO3, setFO3] = useState(0);
    const [EO2, setEO2] = useState(EEEO2);
    const [CO2, setCO2] = useState(CCCO2);
    const [DO1, setDO1] = useState(0);
    const [HO1, setHO1] = useState(0);


    useEffect(() => {
        setDO1((CO1 / (EO1 - EO3) / MO1) * EO1 * MO1);
        setHO1(GO2 * 100 / HO2);
        setDO2((CO1 / (EO1 - EO3) / MO1));
        setFO2(EO1 - (CO1 / EO2) / MO1);
        setFO3(EO1 * 1 + (EO1 * CO2) / HO2);
        setHO2(EEEO1 * MMMO1 * EEEO2);
        setIO2(HO2 * IIIO1 * 0.01 * -1);
        setJO2(EEEO1 * MMMO1 * EEEO2 * JJJO1 * 0.01);
        setKO1(EEEO1 - IIIO1 * 0.01 * EEEO1);
        setKO2(EEEO1 * 1 + (EEEO1 * JO2 / HO2));
        setGO2((EEEO2 * GGGO1 - EEEO2 * EEEO1) * MMMO1);
        setHO3(GO2 / CCCO1);
        setFO1(HO2 - (EO3 / EO1 * HO2));

    },);

    const gaugeContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div className="app cursor-pointer">
            <div className='row'>
                {/* 1 */}
                <div className="col-sm-8 mb-2">
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
                {/* 2 */}
                <div className="col-sm-4">
                    <div className='row mb-2'>
                        <div className='col-sm-12'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 style={{ color: "#CBCBE2" }}>Summary Strategy</h4>
                                    <h6 style={{ color: '#7071A4' }}>Risk Reward  <span style={{ color: '#CBCBE2' }}>{GO2 / CO1} %</span></h6>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                                <GaugeChart
                                                    hideText
                                                    textColor="#FFFF"
                                                    // nrOfLevels={4}
                                                    colors={["#7E0000", "#FF0000", "#0EFF00", "#0A5D00"]}
                                                    // formatTextValue={(value) => '3X'}
                                                    // percent={0.3}
                                                    arcsLength={[0.2, 0.1, 0.2, 0.5]}
                                                />
                                            </div>
                                            <h6 className="text-center" style={{ color: '#CBCBE2' }}>{HO3}  <span style={{ fontSize: '25px' }}>(X)</span> </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-sm-12'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className='' style={{ color: "#CBCBE2" }}>Price Position Trading</h4>
                                    <div className="row mt-3 text-center">
                                        <div className="col-4">
                                            <FormTag color="red" title="Fffo1" value={"$" + FO1.toFixed(2)} />
                                        </div>
                                        <div className="col-4">
                                            <FormTag color="blue" title="Dddo2" value={DO2.toFixed(1)} />
                                        </div>
                                        {/* </div> */}
                                        {/* <div className="row mt-4"> */}
                                        <div className="col-4 mb-4">
                                            <FormTag color="red" title="Fffo2" value={"$ " + FO2.toFixed(2)} />
                                        </div>
                                        <div className="col-4">
                                            <FormTag color="green" title="Fffo3" value={"$ " + FO3.toFixed(2)} />
                                        </div>
                                        {/* </div>
                  <div className="row mt-4"> */}
                                        <div className="col-4">
                                            <FormTag color="yellow" title="Hhho2" value={"$ " + HO2.toFixed(2)} />
                                        </div>
                                        <div className="col-4 mb-4">
                                            <FormTag color="green" title="Gggo2" value={"$ " + GO2.toFixed(2)} />
                                        </div>
                                        {/* </div>
                  <div className="row mt-4"> */}
                                        <div className='col-2'></div>
                                        <div className="col-4">
                                            <FormTag color="yellow" title="Dddo1" value={"$ " + DO1.toFixed(2)} />
                                        </div>
                                        <div className="col-4">
                                            <FormTag color="green" title="Hhho1" value={HO1.toFixed(0) + "%"} />
                                        </div>
                                        <div className='col-2'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-sm-12'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className='ml-4' style={{ color: "#CBCBE2" }}>Percentitle Trading</h4>
                                    <div className="row mt-3 text-center">
                                        <div className="col-4">
                                            <FormTag1 color="red" title="Hhho2" value={HO1.toFixed(0) + "%"} />
                                        </div>
                                        <div className="col-4">
                                            <FormTag1 color="blue" title="Mmmo1" value={MO1} />
                                        </div>
                                        {/* </div>
                  <div className="row mt-4"> */}
                                        <div className="col-4 mb-4">
                                            <FormTag1 color="red" title="Iiio2" value={"$ " + IO2.toFixed(2)} />
                                        </div>
                                        <div className="col-4">
                                            <FormTag1 color="green" title="Jjjo2" value={"$ " + JO2.toFixed(2)} />
                                        </div>
                                        {/* </div>
                  <div className="row mt-4"> */}
                                        <div className="col-4">
                                            <FormTag1 color="red" title="Kkko1" value={"$ " + KO1.toFixed(2)} />
                                        </div>
                                        <div className="col-4">
                                            <FormTag1 color="green" title="Kkko2" value={"$ " + KO2.toFixed(2)} />
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
