import React, { useEffect, useState } from "react";
import FormTag from '../Component/FormTag';
import FormTag4 from '../Component/FormTag4';
import ButtonTag from '../Component/ButtonTag';
import GaugeChart from "react-gauge-chart";
import './style.css';
import { useSelector, useDispatch } from 'react-redux'
import { InputAAAO1, InputAAAO2, InputEEEO1, InputMMMO1, InputCCCO1, InputEEEO3, InputEEEO2, InputCCCO2, InputGGGO1 } from '../../reducers/InputSlice';

export default function App() {
    let num = Intl.NumberFormat('en-US');
    const [countII, setCountII] = useState(2)
    const handleKeyPress = (target) => {
        if (target.charCode == 13) {
            if (countII < 9)
                setCountII(countII + 1);
            else {
                setCountII(1);
            }
            const nextSibling = document.querySelector(
                `input[name=CIIO${countII}]`
            );
            // If found, focus the next field
            if (nextSibling !== null) {
                nextSibling.focus();
            }
        }
    }
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
    let CCCO1temp = (CCCO1 === 0) ? "" : CCCO1;
    const [CO1, setCO1] = useState(CCCO1temp);
    const [FO2, setFO2] = useState(0);
    const [FO3, setFO3] = useState(0);
    let CCCO2temp = (CCCO2 === 0) ? "" : CCCO2;
    const [CO2, setCO2] = useState(CCCO2temp);
    const [DO1, setDO1] = useState(0);
    const [HO1, setHO1] = useState(0);
    let GGGO1temp = (GGGO1 === 0) ? "" : GGGO1;
    const [GO1, setGO1] = useState(GGGO1temp);
    let EEEO1temp = (EEEO1 === 0) ? "" : EEEO1;
    const [EO1, setEO1] = useState(EEEO1temp);
    let EEEO3temp = (EEEO3 === 0) ? "" : EEEO3;
    const [EO3, setEO3] = useState(EEEO3temp);
    const [BO1, setBO1] = useState(0);
    let AAAO1temp = (AAAO1 === 0) ? "" : AAAO1;
    const [AO1, setAO1] = useState(AAAO1temp);
    let AAAO2temp = (AAAO2 === 0) ? "" : AAAO2;
    const [AO2, setAO2] = useState(AAAO2temp);
    const [BO2, setBO2] = useState(0);
    let EEEO2temp = (EEEO2 === 0) ? "" : EEEO2;
    const [EO2, setEO2] = useState(EEEO2temp);
    const handleMMMO1 = (evt) => {
        if (evt.target.value <= 1000)
            setMO1(parseFloat(evt.target.value));
    }
    const handleCCCO1 = (evt) => {
        if (evt.target.value <= 100000)
            setCO1(evt.target.value);
    }
    const handleCCCO2 = (evt) => {
        if (evt.target.value <= 100000)
            setCO2(parseFloat(evt.target.value));
    }
    const handleAAAO2 = (evt) => {
        if (evt.target.value <= 100000)
            setAO2(parseFloat(evt.target.value));
    }
    const handleAAAO1 = (evt) => {
        if (evt.target.value <= 10000000)
            setAO1(parseFloat(evt.target.value));
    }
    const handleEEEO3 = (evt) => {
        if (evt.target.value <= 100000)
            setEO3(parseFloat(evt.target.value));
    }
    const handleEEEO1 = (evt) => {
        if (evt.target.value <= 100000)
            setEO1(parseFloat(evt.target.value));
    }
    const handleGGGO1 = (evt) => {
        if (evt.target.value <= 100000)
            setGO1(parseFloat(evt.target.value));
    }
    const handleEEEO2 = (evt) => {
        if (evt.target.value <= 100000)
            setEO2(parseFloat(evt.target.value));
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
        !(AO1 * 0.01 * AO2) || (AO1 * 0.01 * AO2 === Infinity) || (AO1 * 0.01 * AO2 === -Infinity) ? setBO1(0) : setBO1(AO1 * 0.01 * AO2);

        !(BO1 / EO1 / MO1) || (BO1 / EO1 / MO1 === Infinity) || (BO1 / EO1 / MO1 === -Infinity) ? setBO2(0) : setBO2(BO1 / EO1 / MO1);

        !((CO1 / (EO1 - EO3) / MO1) * EO1 * MO1) || ((CO1 / (EO1 - EO3) / MO1) * EO1 * MO1 == Infinity) || ((CO1 / (EO1 - EO3) / MO1) * EO1 * MO1 === -Infinity) ? setDO1(0) : setDO1((CO1 / (EO1 - EO3) / MO1) * EO1 * MO1);

        !((CO1 / (EO1 - EO3) / MO1)) || ((CO1 / (EO1 - EO3) / MO1) === Infinity) || ((CO1 / (EO1 - EO3) / MO1) === -Infinity) ? setDO2(0) : setDO2((CO1 / (EO1 - EO3) / MO1));

        !(EO1 * EO2 * MO1) || (EO1 * EO2 * MO1 === Infinity) || (EO1 * EO2 * MO1 === -Infinity) ? setHO2(0) : setHO2(EO1 * EO2 * MO1);

        !(HO2 - (EO3 / EO1 * HO2)) || (HO2 - (EO3 / EO1 * HO2) === Infinity) || (HO2 - (EO3 / EO1 * HO2) === -Infinity) ? setFO1(0) : setFO1(HO2 - (EO3 / EO1 * HO2));

        !(EO1 - (CO1 / EO2) / MO1) || (EO1 - (CO1 / EO2) / MO1 === Infinity) || (EO1 - (CO1 / EO2) / MO1 === -Infinity) ? setFO2(0) : setFO2(EO1 - (CO1 / EO2) / MO1);

        !(EO1 * 1 + (EO1 * CO2) / HO2) || (EO1 * 1 + (EO1 * CO2) / HO2 === Infinity) || (EO1 * 1 + (EO1 * CO2) / HO2 === -Infinity) ? setFO3(0) : setFO3(EO1 * 1 + (EO1 * CO2) / HO2);

        !((EO2 * GO1 - EO2 * EO1) * MO1) || ((EO2 * GO1 - EO2 * EO1) * MO1 === Infinity) || ((EO2 * GO1 - EO2 * EO1) * MO1 === -Infinity) ? setGO2(0) : setGO2((EO2 * GO1 - EO2 * EO1) * MO1);

        !(GO2 * 100 / CCCO1) || (GO2 * 100 / CCCO1 === Infinity) || (GO2 * 100 / CCCO1 === -Infinity) ? setHO1(0) : setHO1(GO2 * 100 / CCCO1);

        !(HO2 * IIIO1 * 0.01 * -1) || (HO2 * IIIO1 * 0.01 * -1 === Infinity) || (HO2 * IIIO1 * 0.01 * -1 === -Infinity) ? setIO2(0) : setIO2(HO2 * IIIO1 * 0.01 * -1);

        !(EO1 * EO2 * JJJO1 * 0.01 * MO1) || (EO1 * EO2 * JJJO1 * 0.01 * MO1 === Infinity) || (EO1 * EO2 * JJJO1 * 0.01 * MO1 === -Infinity) ? setJO2(0) : setJO2(EO1 * EO2 * JJJO1 * 0.01 * MO1);

        !(EO1 - IIIO1 * 0.01 * EO1) || (EO1 - IIIO1 * 0.01 * EO1 === Infinity) || (EO1 - IIIO1 * 0.01 * EO1 === -Infinity) ? setKO1(0) : setKO1(EO1 - IIIO1 * 0.01 * EO1);

        !(EO1 * 1 + (EO1 * JO2 / HO2)) || (EO1 * 1 + (EO1 * JO2 / HO2) === Infinity) || (EO1 * 1 + (EO1 * JO2 / HO2) === -Infinity) ? setKO2(0) : setKO2(EO1 * 1 + (EO1 * JO2 / HO2));

        !(GO2 / CO1) || (GO2 / CO1 === Infinity) || (GO2 / CO1 === -Infinity) ? setHO3(0) : setHO3(GO2 / CO1);

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
                <div className="col-sm-8 mb-1">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="" style={{ color: "#CBCBE2" }}>Summary Strategy</h4>
                            <div className="row" style={{ marginTop: '0px' }}>
                                <div className="col-md-3 d-none d-md-block">
                                    <div className="row mt-5 " style={{ marginBottom: '150px' }}>
                                        <div className="col-12">
                                            <FormTag4 value={GGGO1} color="input_white" title="Alto-GGGO1" onChange={handleGGGO1} val="$" onKeyPress={handleKeyPress} name="CIIO1" />
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginBottom: '80px' }}>
                                        <div className="col-12">
                                            <FormTag4 value={EEEO2} color="input_white" title="Beta EEEO2" onChange={handleEEEO2} onKeyPress={handleKeyPress} name="CIIO2" />
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginBottom: '70px' }}>
                                        <div className="col-12">
                                            <FormTag4 value={EEEO1} color="input_white" title="Alpha EEEO1" onChange={handleEEEO1} val="$" onKeyPress={handleKeyPress} name="CIIO3" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <FormTag4 value={EEEO3} color="input_white" title="Theta EEEO3" onChange={handleEEEO3} val="$" onKeyPress={handleKeyPress} name="CIIO4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="row">
                                        <div className="col-sm-12" style={{
                                            textAlign: 'center'
                                        }}>
                                            <img src={require('../../assets/images/Group 149.png')} alt="profile" style={{ height: '650px' }} className="profile-pic just-content-center" />

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-none d-md-block">
                                    <div className="row mt-3 " style={{ marginBottom: '10px' }}>
                                        <div className="col-12">
                                            <FormTag4 value={"$ " + num.format(FO3.toFixed(2))} color="green" title="Alto 1-FFFO3" />
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginBottom: '60px' }}>
                                        <div className="col-12">
                                            <FormTag4 value={"$ " + num.format(GO2.toFixed(2))} color="green" title="Alto 2" />
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginBottom: '50px' }}>
                                        <div className="col-12">
                                            <FormTag4 value={num.format(DO2.toFixed(2))} color="blue" title="Beta 1" />
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginBottom: '160px' }}>
                                        <div className="col-12">
                                            <FormTag4 value={"$ " + num.format(DO1.toFixed(2))} color="blue" title="Beta 2" />
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <div className="col-12">
                                            <FormTag4 value={"$ " + num.format(FO2.toFixed(2))} color="red" title="Theta 1" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <FormTag4 value={"$ " + num.format(FO1.toFixed(2))} color="red" title="Theta 2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="col-sm-4">
                    <div className='row mb-1'>
                        <div className='col-sm-12'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 style={{ color: "#CBCBE2" }}>Trade Rating</h4>
                                    <h6 style={{ color: '#7071A4' }}>Rol <span style={{ color: '#CBCBE2' }}>{HO1.toFixed(0)}</span></h6>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                                <GaugeChart style={{ height: '' }}
                                                    hideText
                                                    textColor="#FFFF"
                                                    colors={["#7E0000", "#FF0000", "#0EFF00", "#0A5D00"]}
                                                    percent={HO1 ? HO1 * 0.01 : 0}
                                                    arcsLength={[0.2, 0.1, 0.2, 0.5]}
                                                />
                                            </div>
                                            <h6 className="text-center" style={{ color: '#CBCBE2' }}>{HO1.toFixed(0)}<span style={{ fontSize: '20px' }}> X</span> </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-1'>
                        <div className='col-sm-12'>
                            <div className="card" style={{ borderRadius: '8px' }}>
                                <div className="card-body">
                                    <h4 className='ml-5' style={{ color: "#CBCBE2" }}>My Portfolio Management</h4>
                                    <div className="row text-center" >
                                        <div className="col-sm-6">
                                            <FormTag color="green" title="Bbbo1" value={"$ " + num.format(BO1.toFixed(2))} />
                                        </div>
                                        <div className="col-sm-6">
                                            <FormTag color="green" title="Bbbo2" value={num.format(BO2.toFixed(2))} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-1'>
                        <div className='col-sm-12'>
                            <div className="card" style={{ borderRadius: '8px' }}>
                                <div className="card-body">
                                    <h4 style={{ color: "#CBCBE2" }}>My Portfolio Management</h4>
                                    <div className="row">
                                        <div className="col-6">
                                            <FormTag id="text-1" value={AAAO1} color="input_yellow" title="aaao1" val="$" onChange={handleAAAO1} onKeyPress={handleKeyPress} name="CIIO5" />
                                        </div>
                                        <div className="col-6">
                                            <FormTag id="text-2" onkeydown="focusNext(event, 'text-1')" value={AAAO2} color="input_yellow" title="aaao2" val="%" onChange={handleAAAO2} onKeyPress={handleKeyPress} name="CIIO6" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <FormTag value={CCCO1} color="input_red" title="ccco1" val="$" onChange={handleCCCO1} onKeyPress={handleKeyPress} name="CIIO7" />
                                        </div>
                                        <div className="col-6">
                                            <FormTag value={CCCO2} color="input_green" title="ccco2" onChange={handleCCCO2} val="$" onKeyPress={handleKeyPress} name="CIIO8" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <FormTag value={MMMO1} color="input_white" title="mmmo1" onChange={handleMMMO1} onKeyPress={handleKeyPress} name="CIIO9" />
                                        </div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-6">
                                            <ButtonTag color="input_green" title="Price" value="Clear data" />
                                        </div>
                                        <div className="col-6">
                                            <ButtonTag color="input_green" title="Price" value="Show Plan" />
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
