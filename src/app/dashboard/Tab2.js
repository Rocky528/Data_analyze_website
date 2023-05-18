import React, { useEffect, useState } from 'react';
import FormTag from '../Component/FormTag';
import FormTag1 from '../Component/FormTag1';
import FormTag2 from '../Component/FormTag2';
import ButtonTag from '../Component/ButtonTag';
import GaugeChart from "react-gauge-chart";
import { useSelector, useDispatch } from 'react-redux'
import TableInput from '../Component/TableInput';
import './style.css';
import { InputEEEO1, InputEEEO3, InputEEEO2 } from '../../reducers/InputSlice'

const Tab2 = () => {

    let num = Intl.NumberFormat('en-US');
    const { AAAO1, AAAO2, EEEO1, MMMO1, CCCO1, EEEO3, EEEO2, CCCO2, GGGO1, IIIO1, JJJO1 } = useSelector((state) => state.InputValue);
    const dispatch = useDispatch();

    const [EO1, setEO1] = useState(EEEO1);
    const [EO2, setEO2] = useState(EEEO2);
    const [EO3, setEO3] = useState(EEEO3);
    const [BO1, setBO1] = useState(0);
    const [BO2, setBO2] = useState(0);
    const [HO2, setHO2] = useState(0);
    const [FO1, setFO1] = useState(0);
    const [DO2, setDO2] = useState(0);
    const [FO2, setFO2] = useState(0);
    const [FO3, setFO3] = useState(0);
    const [GO2, setGO2] = useState(0);
    const [DO1, setDO1] = useState(0);
    const [HO1, setHO1] = useState(0);
    const [HO3, setHO3] = useState(0);
    const [IO2, setIO2] = useState(0);
    const [JO2, setJO2] = useState(0);
    const [KO1, setKO1] = useState(0);
    const [KO2, setKO2] = useState(0);
    const [CO1, setCO1] = useState(CCCO1);
    const [MO1, setMO1] = useState(MMMO1);

    //LLLO1 EO3-EO1
    const [LO1, setLO1] = useState(0);

    //LLLO2 GO1-EO1
    const [LO2, setLO2] = useState(0);

    //LLLO3 GO1-EO3
    const [LO3, setLO3] = useState(0);

    //LLLO4 GO2-100
    const [LO4, setLO4] = useState(0);

    const [TEO1, setTEO1] = useState(0);
    const [TEO2, setTEO2] = useState(0);
    const [TEO3, setTEO3] = useState(0);
    const [TFO2, setTFO2] = useState(0);
    const [TFO3, setTFO3] = useState(0);
    const [TKO1, setTKO1] = useState(0);
    const [TKO2, setTKO2] = useState(0);


    useEffect(() => {
        !(AAAO1 * 0.01 * AAAO2) || (AAAO1 * 0.01 * AAAO2 === Infinity) || (AAAO1 * 0.01 * AAAO2 === -Infinity) ? setBO1(0) : setBO1(AAAO1 * 0.01 * AAAO2);

        !(BO1 / EO1 / MO1) || (BO1 / EO1 / MO1 === Infinity) || (BO1 / EO1 / MO1 === -Infinity) ? setBO2(0) : setBO2(BO1 / EO1 / MO1);

        !((CO1 / (EO1 - EO3) / MO1) * EO1 * MO1) || ((CO1 / (EO1 - EO3) / MO1) * EO1 * MO1 == Infinity) || ((CO1 / (EO1 - EO3) / MO1) * EO1 * MO1 === -Infinity) ? setDO1(0) : setDO1((CO1 / (EO1 - EO3) / MO1) * EO1 * MO1);

        !((CO1 / (EO1 - EO3) / MO1)) || ((CO1 / (EO1 - EO3) / MO1) === Infinity) || ((CO1 / (EO1 - EO3) / MO1) === -Infinity) ? setDO2(0) : setDO2((CO1 / (EO1 - EO3) / MO1));

        !(EO1 - (CO1 / EO2) / MO1) || (EO1 - (CO1 / EO2) / MO1 === Infinity) || (EO1 - (CO1 / EO2) / MO1 === -Infinity) ? setFO2(0) : setFO2(EO1 - (CO1 / EO2) / MO1);

        !(EO1 * 1 + (EO1 * CCCO2) / HO2) || (EO1 * 1 + (EO1 * CCCO2) / HO2 === Infinity) || (EO1 * 1 + (EO1 * CCCO2) / HO2 === -Infinity) ? setFO3(0) : setFO3(EO1 * 1 + (EO1 * CCCO2) / HO2);

        !(EO1 * EO2 * MO1) || (EO1 * EO2 * MO1 === Infinity) || (EO1 * EO2 * MO1 === -Infinity) ? setHO2(0) : setHO2(EO1 * EO2 * MO1);

        !((EO2 * GGGO1 - EO2 * EO1) * MO1) || ((EO2 * GGGO1 - EO2 * EO1) * MO1 === Infinity) || ((EO2 * GGGO1 - EO2 * EO1) * MO1 === -Infinity) ? setGO2(0) : setGO2((EO2 * GGGO1 - EO2 * EO1) * MO1);

        !(GO2 / HO2) || (GO2 / HO2 === Infinity) || (GO2 / HO2 === -Infinity) ? setHO1(0) : setHO1(GO2 / HO2);

        !(EO1 - IIIO1 * 0.01 * EO1) || (EO1 - IIIO1 * 0.01 * EO1 === Infinity) || (EO1 - IIIO1 * 0.01 * EO1 === -Infinity) ? setKO1(0) : setKO1(EO1 - IIIO1 * 0.01 * EO1);

        !(EO1 * 1 + (EO1 * JO2 / HO2)) || (EO1 * 1 + (EO1 * JO2 / HO2) === Infinity) || (EO1 * 1 + (EO1 * JO2 / HO2) === -Infinity) ? setKO2(0) : setKO2(EO1 * 1 + (EO1 * JO2 / HO2));

        !(HO2 * IIIO1 * 0.01 * -1) || (HO2 * IIIO1 * 0.01 * -1 === Infinity) || (HO2 * IIIO1 * 0.01 * -1 === -Infinity) ? setIO2(0) : setIO2(HO2 * IIIO1 * 0.01 * -1);
        !(HO2 - (EO3 / EO1 * HO2)) || (HO2 - (EO3 / EO1 * HO2) === Infinity) || (HO2 - (EO3 / EO1 * HO2) === -Infinity) ? setFO1(0) : setFO1(HO2 - (EO3 / EO1 * HO2));
        !(GO2 / CO1) || (GO2 / CO1 === Infinity) || (GO2 / CO1 === -Infinity) ? setHO3(0) : setHO3(GO2 / CO1);
        !(EO1 * EO2 * JJJO1 * 0.01 * MO1) || (EO1 * EO2 * JJJO1 * 0.01 * MO1 === Infinity) || (EO1 * EO2 * JJJO1 * 0.01 * MO1 === -Infinity) ? setJO2(0) : setJO2(EO1 * EO2 * JJJO1 * 0.01 * MO1);
        setLO1(EO3 - EO1);
        setLO2(GGGO1 - EO1);
        setLO3(GGGO1 - EO3);
        setLO4(GO2 - 100);
    },);

    const LogPlan = (p) => {
        setTEO1(EO1);
        setTEO2(EO2);
        setTEO3(EO3);
        if (p === 1) {
            setTFO2(FO2);
            setTFO3(FO3);
        }
        else if (p === 2) {
            setTKO1(KO1);
            setTKO2(KO2);
        }

    }
    const PriceDelete = (p) => {
        if (p === 1) {
            setEO1(0);
            setEO2(0);
            setEO3(0);
            setFO2(0);
            setFO3(0);
            dispatch(InputEEEO1(EO1));
            dispatch(InputEEEO3(EO3));
            dispatch(InputEEEO2(EO2));
        }
        else if (p === 2) {
            setEO1(0);
            setEO2(0);
            setEO3(0);
            setKO1(0);
            setKO2(0);
            dispatch(InputEEEO1(EO1));
            dispatch(InputEEEO3(EO3));
            dispatch(InputEEEO2(EO2));

        }
        else if (p === 3) {
            setTEO1(0);
            setTEO2(0);
            setTEO3(0);
            setTFO2(0);
            setTFO3(0);
            setTKO1(0);
            setTKO2(0);
        }
    }
    return (
        <div className='cursor-pointer'>
            <div className="row">
                {/* 1 */}
                <div className="col-sm-4">
                    <div className='row mb-1'>
                        <div className='col-sm-12'>
                            <div className="card" style={{ borderRadius: '8px' }}>
                                <div className="card-body">
                                    <h4 className='ml-5' style={{ color: "#CBCBE2" }}>My Portfolio Management</h4>
                                    <div className="row text-center" >
                                        <div className="col-sm-6">
                                            <FormTag color="green" title="Maximum Risk Per Trade($)" value={"$ " + num.format(BO1.toFixed(2))} />
                                        </div>
                                        <div className="col-sm-6">
                                            <FormTag color="green" title="Quantity" value={"$ " + num.format(BO2.toFixed(2))} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-1'>
                        <div className='col-sm-12'>
                            <div className="card" style={{ borderRadius: '8px' }}>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className='ml-5' style={{ color: "#CBCBE2" }}>Price Position Trading</h4>
                                        <div className="row text-center">
                                            <div className="col-6 mb-4">
                                                <FormTag color="red" title="Fffo1" value={"$" + num.format(FO1.toFixed(2))} />
                                            </div>
                                            <div className="col-6  mb-4">
                                                <FormTag color="blue" title="Dddo2" value={num.format(DO2.toFixed(1))} />
                                            </div>

                                            <div className="col-6 mb-4 ">
                                                <FormTag color="red" title="Fffo2" value={"$ " + num.format(FO2.toFixed(2))} />
                                            </div>
                                            <div className="col-6 mb-4">
                                                <FormTag color="green" title="Fffo3" value={"$ " + num.format((FO3 * 1).toFixed(2))} />
                                            </div>

                                            <div className="col-6 mb-4">
                                                <FormTag color="yellow" title="Hhho2" value={"$ " + num.format(HO2.toFixed(2))} />
                                            </div>
                                            <div className="col-6 mb-4">
                                                <FormTag color="green" title="Gggo2" value={"$ " + num.format(GO2.toFixed(2))} />
                                            </div>

                                            <div className="col-6 mb-4">
                                                <FormTag color="yellow" title="Dddo1" value={"$ " + num.format(DO1.toFixed(2))} />
                                            </div>
                                            <div className="col-6">
                                                <FormTag color="green" title="Hhho1" value={(HO1 * 100).toFixed(0) + "%"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="col-sm-4 ">
                    <div className='row mb-1'>
                        <div className='col-sm-12'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 style={{ color: "#CBCBE2" }}>Trade Rating</h4>
                                    <h6 style={{ color: '#7071A4' }}>Rol <span style={{ color: '#CBCBE2' }}>{HO1.toFixed(2)} %</span></h6>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                                <GaugeChart
                                                    hideText
                                                    textColor="#FFFF"
                                                    colors={["#FF0000", "#0A5D00", "#0EFF00"]}
                                                    percent={HO1 ? HO1.toFixed(2) : 0}
                                                    arcsLength={[0.15, 0.35, 0.5]}
                                                />
                                            </div>
                                            <h6 className="text-center" style={{ color: '#CBCBE2' }}>{HO3.toFixed(2)}<span style={{ fontSize: '20px' }}> X</span> </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-1'>
                        <div className='col-sm-12'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className='ml-4' style={{ color: "#CBCBE2" }}>Percentile Trading</h4>
                                    <div className="row text-center">
                                        <div className="col-4 mb-4">
                                            <FormTag1 color="red" title="Hhho2" value={"$ " + HO2.toFixed(0)} />
                                        </div>
                                        <div className="col-4 mb-4">
                                            <FormTag1 color="blue" title="Mmmo1" value={num.format(MO1)} />
                                        </div>
                                        <div className="col-4 mb-4 ">
                                            <FormTag1 color="red" title="Iiio2" value={"$ " + num.format(IO2.toFixed(2))} />
                                        </div>
                                        <div className="col-4 mb-4">
                                            <FormTag1 color="green" title="Jjjo2" value={"$ " + num.format(JO2.toFixed(2))} />
                                        </div>
                                        <div className="col-4 mb-4">
                                            <FormTag1 color="red" title="Kkko1" value={"$ " + num.format(KO1.toFixed(2))} />
                                        </div>
                                        <div className="col-4">
                                            <FormTag1 color="green" title="Kkko2" value={"$ " + num.format((KO2 * 1).toFixed(2))} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="col-sm-4">
                    <div className='row mb-1'>
                        <div className='col-sm-12'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 style={{ color: "#CBCBE2" }}>My Price Trading Plan</h4>
                                    <ul className="p-0 ">
                                        <li className="d-flex mb-1">
                                            <FormTag2 color="yellow" title="EO1" value={"$ " + (!EO1 || EO1 === Infinity || EO1 === -Infinity ? "0" : (num.format(parseFloat(EO1).toFixed(2))))} img="a1" />
                                        </li>
                                        <li className="d-flex mb-1">
                                            <FormTag2 color="blue" title="EO2" value={!EO2 || EO2 === Infinity || EO2 === -Infinity ? "0" : num.format(parseFloat(EO2).toFixed(1))} img="a2" />
                                        </li>
                                        <li className="d-flex mb-1">
                                            <FormTag2 color="red" title="FFFO2" value={"$ " + num.format(FO2.toFixed(2))} img="a3" />
                                        </li>
                                        <li className="d-flex">
                                            <FormTag2 color="green" title="FFFO3" value={"$ " + num.format((FO3 * 1).toFixed(2))} img="a1" />
                                        </li>
                                    </ul>
                                    <div className="row mt-2 text-center">
                                        <div className="col-6">
                                            <ButtonTag color="input_green" title="Price" onClick={() => PriceDelete(1)} value="Clear data" />
                                        </div>
                                        <div className="col-6">
                                            <ButtonTag color="input_green" title="Price" onClick={() => LogPlan(1)} value="Log Plan" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-1'>
                        <div className='col-sm-12'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 style={{ color: "#CBCBE2" }}>My Percentile Trade Plane</h4>
                                    <ul className="p-0">
                                        <li className="d-flex mb-1">
                                            <FormTag2 color="yellow" title="EO1" value={"$ " + (!EO1 || EO1 === Infinity || EO1 === -Infinity ? "0" : (num.format(parseFloat(EO1).toFixed(2))))} img="a1" />
                                        </li>
                                        <li className="d-flex mb-1">
                                            <FormTag2 color="blue" title="EO2" value={!EO2 || EO2 === Infinity || EO2 === -Infinity ? "0" : num.format(parseFloat(EO2).toFixed(1))} img="a2" />
                                        </li>
                                        <li className="d-flex mb-1">
                                            <FormTag2 color="red" title="KKKO1" value={"$ " + num.format(KO1.toFixed(2))} img="a3" />
                                        </li>
                                        <li className="d-flex mb-1">
                                            <FormTag2 color="green" title="KKKO2" value={"$ " + num.format((KO2 * 1).toFixed(2))} img="a1" />
                                        </li>
                                    </ul>
                                    <div className="row mt-2 text-center">
                                        <div className="col-6">
                                            <ButtonTag color="input_green" title="Price" onClick={() => PriceDelete(2)} value="Clear data" />
                                        </div>
                                        <div className="col-6">
                                            <ButtonTag color="input_green" title="Price" onClick={() => LogPlan(2)} value="Log Plan" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4 */}
            <div className='row'>
                <div className="col-md-8 mb-1 d-none d-md-block" style={{ marginTop: '-30px' }}>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h4 className="card-title">Responsive Table</h4>
                                </div>
                                <div className="col text-right" style={{ marginTop: "-7px" }}>
                                    <ButtonTag color="input_green" onClick={() => PriceDelete(3)} title="Percent" value="Clear Plan" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <div className="table-responsive text-center">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>TICKER HEADING</th>
                                                    <th>BUY PRICE</th>
                                                    <th>POSITION SIZE</th>
                                                    <th>STOP PRICE</th>
                                                    <th>SELL PRICE</th>
                                                    <th>TRADE RATING</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td><TableInput /></td>
                                                    <td>{num.format(TEO1.toFixed(2))}</td>
                                                    <td>{num.format(TEO2.toFixed(2))}</td>
                                                    <td>{num.format(TFO2.toFixed(2))}</td>
                                                    <td>{num.format(TFO3.toFixed(2))}</td>
                                                    <td>Pending</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td> <TableInput /> </td>
                                                    <td>{num.format(TEO1.toFixed(2))}</td>
                                                    <td>{num.format(TEO2.toFixed(2))}</td>
                                                    <td>{num.format(TKO1.toFixed(2))}</td>
                                                    <td>{num.format(TKO2.toFixed(2))}</td>
                                                    <td>Fixed</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td> <TableInput /> </td>
                                                    <td><TableInput /></td>
                                                    <td><TableInput /></td>
                                                    <td><TableInput /></td>
                                                    <td><TableInput /></td>
                                                    <td><TableInput /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 style={{ color: "#CBCBE2" }}>Percentile Trading</h4>
                                    <ul className="p-0">
                                        <li className="d-flex mb-1">
                                            <FormTag2 color="white" title="LLLO1" value={"$ " + num.format(parseFloat(LO1.toFixed(2)))} img="a1" />
                                        </li>
                                        <li className="d-flex mb-1">
                                            <FormTag2 color="white" title="LLLO2" value={"$ " + num.format(parseFloat(LO2.toFixed(2)))} img="a2" />
                                        </li>
                                        <li className="d-flex mb-1">
                                            <FormTag2 color="white" title="LLLO3" value={"$ " + num.format(parseFloat(LO3.toFixed(2)))} img="a3" />
                                        </li>
                                        <li className="d-flex ">
                                            <FormTag2 color="white" title="HHHO2" value={"$ " + num.format(parseFloat(HO2.toFixed(2)))} img="a1" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}
export default Tab2;

