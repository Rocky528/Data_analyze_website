import React, { useEffect, useState } from 'react';
import FormTag from '../Component/FormTag';
import FormTag1 from '../Component/FormTag1';
import FormTag2 from '../Component/FormTag2';
import ButtonTag from '../Component/ButtonTag';
import GaugeChart from "react-gauge-chart";
import { useSelector, useDispatch } from 'react-redux'




const Tab2 = () => {
    const { AAAO1, AAAO2, EEEO1, MMMO1, CCCO1, EEEO3, EEEO2, CCCO2, GGGO1, IIIO1, JJJO1 } = useSelector((state) => state.InputValue);
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
    //LLLO1 EO3-EO1
    const [LO1, setLO1] = useState(0);

    //LLLO2 GO1-EO1
    const [LO2, setLO2] = useState(0);

    //LLLO3 GO1-EO3
    const [LO3, setLO3] = useState(0);

    //LLLO4 GO2-100
    const [LO4, setLO4] = useState(0);

    useEffect(() => {
        setBO1(AAAO1 * 0.01 * AAAO2);
        setBO2(BO1 / EEEO1 / MMMO1);
        setHO2(EEEO1 * EEEO2 * MMMO1);
        setFO1(HO2 - (EEEO3 / EEEO1 * HO2));
        setDO2((CCCO1 / (EEEO1 - EEEO3) / MMMO1));
        setFO2(EEEO1 - (CCCO1 / EEEO2) / MMMO1);
        setFO3(EEEO1 + (EEEO1 * CCCO2 / HO2));
        setGO2((EEEO2 * GGGO1 - EEEO2 * EEEO1) * MMMO1);
        setDO1((CCCO1 / (EEEO1 - EEEO3) / MMMO1) * EEEO1 * MMMO1);
        setHO1(GO2 * 100 / HO2);
        setHO3(GO2 / CCCO1);
        setIO2(HO2 * IIIO1 * 0.01 * -1);
        setJO2(EEEO1 * EEEO2 * JJJO1 * MMMO1);
        setKO1(EEEO1 - IIIO1 * EEEO1);
        setKO2(EEEO1 + (EEEO1 * JO2 / HO2));
        setLO1(EEEO3 - EEEO1);
        setLO2(GGGO1 - EEEO1);
        setLO3(GGGO1 - EEEO3);
        setLO4(GO2 - 100);
    },);
    return (
        <div>
            <div className="row">
                {/* 1 */}
                <div className="col-sm-4">
                    <div className='row mb-4'>
                        <div className='col-sm-12'>
                            <div className="card" style={{ borderRadius: '8px' }}>
                                <div className="card-body">
                                    <h4 style={{ color: "#CBCBE2" }}>My Portfolio Management</h4>
                                    <div className="row mt-5 mb-4">
                                        <div className="col-6 col-sm-6">
                                            <FormTag color="green" title="BBBO1" value={"$ " + BO1} />
                                        </div>
                                        <div className="col-6 col-sm-6">
                                            <FormTag color="green" title="BBBO2" value={BO2} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-sm-12'>
                            <div className="card" style={{ borderRadius: '8px' }}>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 style={{ color: "#CBCBE2" }}>Price Position Trading</h4>
                                        <div className="row mt-5">
                                            <div className="col-6">
                                                <FormTag color="red" title="FFFO1" value={"$ " + FO1} />
                                            </div>
                                            <div className="col-6">
                                                <FormTag color="blue" title="DDDO2" value={DO2} />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-6">
                                                <FormTag color="red" title="FFFO2" value={"$ " + FO2} />
                                            </div>
                                            <div className="col-6">
                                                <FormTag color="green" title="FFFO3" value={"$ " + FO3} />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-6">
                                                <FormTag color="yellow" title="HHHO2" value={"$ " + HO2} />
                                            </div>
                                            <div className="col-6">
                                                <FormTag color="green" title="GGGO2" value={"$ " + GO2} />
                                            </div>
                                        </div>
                                        <div className="row mt-4 mb-5">
                                            <div className="col-6">
                                                <FormTag color="yellow" title="DDDO1" value={"$ " + DO1} />
                                            </div>
                                            <div className="col-6 mb-4">
                                                <FormTag color="green" title="HHHO1" value={HO1 + "%"} />
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
                    <div className='row mb-4'>
                        <div className='col-sm-12'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 style={{ color: "#CBCBE2" }}>Summary Strategy</h4>
                                    <h6 style={{ color: '#7071A4' }}>Risk Reward (%)</h6>
                                    <div className="row mt-4">
                                        <div className="col-sm-12">
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                                <GaugeChart
                                                    textColor="#FFFF"
                                                    nrOfLevels={4}
                                                    colors={["#7E0000", "#FF0000", "#0EFF00", "#0A5D00"]}
                                                    formatTextValue={(value) => '3X'}
                                                    percent={0.3}
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
                                    <div className="row mt-4 mb-3">
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
                {/* 3 */}
                <div className="col-sm-4">
                    <div className='row mb-4'>
                        <div className='col-sm-12'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 style={{ color: "#CBCBE2" }}>My Price Trading Plan</h4>
                                    <ul className="p-0 mt-5">
                                        <li className="d-flex mb-4 pb-1">
                                            <FormTag2 color="yellow" title="EEEO1" value={EEEO1 + " $"} img="a1" />
                                        </li>
                                        <li className="d-flex mb-4 pb-1">
                                            <FormTag2 color="blue" title="EEEO2" value={EEEO2} img="a2" />
                                        </li>
                                        <li className="d-flex mb-4 pb-1">
                                            <FormTag2 color="red" title="FFFO2" value={"$ " + FO2} img="a3" />
                                        </li>
                                        <li className="d-flex pb-1">
                                            <FormTag2 color="green" title="FFFO3" value={"$ " + FO3} img="a1" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-sm-12'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 style={{ color: "#CBCBE2" }}>My Percentile Trade Plane</h4>
                                    <ul className="p-0 mt-5">
                                        <li className="d-flex mb-4 pb-1">
                                            <FormTag2 color="yellow" title="EEEO1" value={"$ " + EEEO1} img="a1" />
                                        </li>
                                        <li className="d-flex mb-4 pb-1">
                                            <FormTag2 color="blue" title="EEEO2" value={EEEO2} img="a2" />
                                        </li>
                                        <li className="d-flex mb-4 pb-1">
                                            <FormTag2 color="red" title="KKKO1" value={"$ " + KO1} img="a3" />
                                        </li>
                                        <li className="d-flex mb-4 pb-1">
                                            <FormTag2 color="green" title="KKKO2" value={"$ " + KO2} img="a1" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4 */}
            <div className='row'>
                <div className="col-sm-8 mb-5">
                    <div className="card">
                        <div className="card-body">
                            <div class="row">
                                <div class="col">
                                    <h4 className="card-title">Responsive Table</h4>
                                </div>
                                <div class="col text-right" style={{ marginTop: "-7px" }}>
                                    <ButtonTag color="input_green" title="Percent" value="Log Plan" />
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-sm-12'>
                                    <div className="table-responsive">
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
                                                    <td>Jacob</td>
                                                    <td>53275531</td>
                                                    <td>12 May 2017</td>
                                                    <td>Pending</td>
                                                    <td>Pending</td>
                                                    <td>Pending</td>
                                                    <td>Pending</td>
                                                </tr>
                                                <tr>
                                                    <td>Jacob</td>
                                                    <td>53275531</td>
                                                    <td>12 May 2017</td>
                                                    <td>Pending</td>
                                                    <td>Pending</td>
                                                    <td>Pending</td>
                                                    <td>Pending</td>
                                                </tr>
                                                <tr>
                                                    <td>Messsy</td>
                                                    <td>53275532</td>
                                                    <td>15 May 2017</td>
                                                    <td>In progress</td>
                                                    <td>In progress</td>
                                                    <td>In progress</td>
                                                    <td>In progress</td>

                                                </tr>
                                                <tr>
                                                    <td>John</td>
                                                    <td>53275533</td>
                                                    <td>14 May 2017</td>
                                                    <td>Fixed</td>
                                                    <td>53275533</td>
                                                    <td>14 May 2017</td>
                                                    <td>Fixed</td>
                                                </tr>
                                                <tr>
                                                    <td>John</td>
                                                    <td>53275533</td>
                                                    <td>14 May 2017</td>
                                                    <td>Fixed</td>
                                                    <td>53275533</td>
                                                    <td>14 May 2017</td>
                                                    <td>Fixed</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 style={{ color: "#CBCBE2" }}>Percentitle Trading</h4>
                                    <ul className="p-0 mt-5">
                                        <li className="d-flex mb-4 pb-1">
                                            <FormTag2 color="white" title="LLLO1" value={"$ " + LO1} img="a1" />
                                        </li>
                                        <li className="d-flex mb-4 pb-1">
                                            <FormTag2 color="white" title="LLLO2" value={"$ " + LO2} img="a2" />
                                        </li>
                                        <li className="d-flex mb-4 pb-1">
                                            <FormTag2 color="white" title="LLLO3" value={"$ " + LO3} img="a3" />
                                        </li>
                                        <li className="d-flex ">
                                            <FormTag2 color="white" title="HHHO2" value={"$ " + HO2} img="a1" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Tab2;