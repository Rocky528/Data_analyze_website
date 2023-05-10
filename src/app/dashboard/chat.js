import React, { useEffect, useState } from "react";
import FormTag from '../Component/FormTag';
import FormTag1 from '../Component/FormTag1';
import FormTag3 from '../Component/FormTag3';
import FormTag4 from '../Component/FormTag4';
import GaugeChart from "react-gauge-chart";
import './style.css';
import { useSelector, useDispatch } from 'react-redux'
import { InputAAAO1, InputAAAO2, InputEEEO1, InputMMMO1, InputCCCO1, InputEEEO3, InputEEEO2, InputCCCO2, InputGGGO1, InputIIIO1, InputJJJO1 } from '../../reducers/InputSlice';

export default function App() {
    const [gauge, setGauge] = useState(0.1);
    const { AAAO1, AAAO2, EEEO1, MMMO1, CCCO1, EEEO3, EEEO2, CCCO2, GGGO1, IIIO1, JJJO1 } = useSelector((state) => state.InputValue);
    const dispatch = useDispatch();

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
    const [DO2, setDO2] = useState(0);
    const [MO1, setMO1] = useState(MMMO1);
    const [CO1, setCO1] = useState(CCCO1);
    const [FO2, setFO2] = useState(0);
    const [FO3, setFO3] = useState(0);
    const [CO2, setCO2] = useState(CCCO2);
    const [DO1, setDO1] = useState(0);
    const [HO1, setHO1] = useState(0);
    const [GO1, setGO1] = useState(GGGO1);
    const [EO1, setEO1] = useState(EEEO1);
    const [EO3, setEO3] = useState(EEEO3);
    const [BO1, setBO1] = useState(0);
    const [AO1, setAO1] = useState(AAAO1);
    const [AO2, setAO2] = useState(AAAO2);
    const [BO2, setBO2] = useState(0);
    const handleMMMO1 = (evt) => {
        if (evt.target.value <= 1000)
            setMO1(evt.target.value);
    }
    const handleCCCO1 = (evt) => {
        if (evt.target.value <= 100000)
            setCO1(evt.target.value);
    }
    const handleCCCO2 = (evt) => {
        if (evt.target.value <= 100000)
            setCO2(evt.target.value);
    }
    const handleAAAO2 = (evt) => {
        if (evt.target.value <= 100000)
            setAO2(evt.target.value);
    }
    const handleAAAO1 = (evt) => {
        if (evt.target.value <= 10000000)
            setAO1(evt.target.value);
    }
    const handleEEEO3 = (evt) => {
        if (evt.target.value <= 100000)
            setEO3(evt.target.value);
    }
    const handleEEEO1 = (evt) => {
        if (evt.target.value <= 100000)
            setEO1(evt.target.value);
    }
    const handleGGGO1 = (evt) => {
        if (evt.target.value <= 100000)
            setGO1(evt.target.value);
    }
    const [EO2, setEO2] = useState(EEEO2);
    const handleEEEO2 = (evt) => {
        if (evt.target.value <= 100000)
            setEO2(evt.target.value);
    }

    useEffect(() => {
        dispatch(InputAAAO1(AO1));
        dispatch(InputAAAO2(AO2));
        dispatch(InputEEEO1(EO1));
        dispatch(InputMMMO1(MO1));
        dispatch(InputCCCO1(CO1));
        dispatch(InputEEEO3(EO3));
        dispatch(InputEEEO2(EO2));
        dispatch(InputCCCO2(CO2));
        dispatch(InputGGGO1(GO1));
        setBO1(AO1 * 0.01 * AO2);
        setBO2(BO1 / EO1 / MO1);
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
                            <div className="row" style={{ marginTop: '0px' }}>
                                <div className="col-md-3 d-none d-md-block">
                                    <div className="row mt-5 " style={{ marginBottom: '220px' }}>
                                        <div className="col-12">
                                            <FormTag4 value={GGGO1} color="input_white" title="Alto-GGGO1" onChange={handleGGGO1} val="$" />
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginBottom: '140px' }}>
                                        <div className="col-12">
                                            <FormTag4 value={EEEO2} color="input_white" title="Beta EEEO1" onChange={handleEEEO2} />
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginBottom: '120px' }}>
                                        <div className="col-12">
                                            <FormTag4 value={EEEO1} color="input_white" title="Alpha EEEO1" onChange={handleEEEO1} val="$" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <FormTag4 value={EEEO3} color="input_white" title="Theta EEEO3" onChange={handleEEEO3} val="$" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="row">
                                        <div className="col-sm-12" style={{
                                            textAlign: 'center'
                                        }}>
                                            <img src={require('../../assets/images/Group 149.png')} alt="profile" className="profile-pic just-content-center" />

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-none d-md-block">
                                    <div className="row mt-3 " style={{ marginBottom: '40px' }}>
                                        <div className="col-12">
                                            <FormTag4 value={"$ " + FO3.toFixed(2)} color="green" title="Alto 1-FFFO3" />
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginBottom: '140px' }}>
                                        <div className="col-12">
                                            <FormTag4 value={"$ " + GO2.toFixed(2)} color="green" title="Alto 2" />
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginBottom: '50px' }}>
                                        <div className="col-12">
                                            <FormTag4 value={DO2.toFixed(2)} color="blue" title="Beta 1" />
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginBottom: '300px' }}>
                                        <div className="col-12">
                                            <FormTag4 value={"$ " + DO1.toFixed(2)} color="blue" title="Beta 2" />
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <div className="col-12">
                                            <FormTag4 value={"$ " + FO2.toFixed(2)} color="red" title="Theta 1" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <FormTag4 value={"$ " + FO1.toFixed(2)} color="red" title="Theta 2" />
                                        </div>
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
                            <div className="card" style={{ borderRadius: '8px' }}>
                                <div className="card-body">
                                    <h4 className='ml-5' style={{ color: "#CBCBE2" }}>My Portfolio Management</h4>
                                    <div className="row mt-3 text-center" >
                                        <div className="col-sm-6">
                                            <FormTag color="green" title="Bbbo1" value={"$ " + BO1.toFixed(2)} />
                                        </div>
                                        <div className="col-sm-6">
                                            <FormTag color="green" title="Bbbo2" value={BO2.toFixed(2)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-sm-12'>
                            <div className="card" style={{ borderRadius: '8px' }}>
                                <div className="card-body">
                                    <h4 style={{ color: "#CBCBE2" }}>My Portfolio Management</h4>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <FormTag id="text-1" value={AAAO1} color="input_yellow" title="aaao1" val="$" onChange={handleAAAO1} />
                                        </div>
                                        <div className="col-6">
                                            <FormTag id="text-2" onkeydown="focusNext(event, 'text-1')" value={AAAO2} color="input_yellow" title="aaao2" val="%" onChange={handleAAAO2} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <FormTag value={CCCO1} color="input_red" title="ccco1" val="$" onChange={handleCCCO1} />
                                        </div>
                                        <div className="col-6">
                                            <FormTag value={CCCO2} color="input_green" title="ccco2" onChange={handleCCCO2} val="$" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <FormTag value={MMMO1} color="input_white" title="mmmo1" onChange={handleMMMO1} />
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
