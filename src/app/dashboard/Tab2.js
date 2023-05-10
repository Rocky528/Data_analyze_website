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
        <div className='cursor-pointer'>
            <div className="row">
                {/* 1 */}
                <div className="col-sm-4">
                    <div className='row mb-2'>
                        <div className='col-sm-12'>
                            <div className="card" style={{ borderRadius: '8px' }}>
                                <div className="card-body">
                                    <h4 className='ml-5' style={{ color: "#CBCBE2" }}>My Portfolio Management</h4>
                                    <div className="row mt-3 text-center" >
                                        <div className="col-sm-6">
                                            <FormTag color="green" title="Maximum Risk Per Trade($)" value={"$ " + BO1.toFixed(2)} />
                                        </div>
                                        <div className="col-sm-6">
                                            <FormTag color="green" title="Quantity" value={"$ " + BO2.toFixed(2)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-sm-12'>
                            <div className="card" style={{ borderRadius: '8px' }}>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className='ml-5' style={{ color: "#CBCBE2" }}>Price Position Trading</h4>
                                        <div className="row mt-3 text-center">
                                            <div className="col-6">
                                                <FormTag color="red" title="Fffo1" value={"$" + FO1.toFixed(2)} />
                                            </div>
                                            <div className="col-6 mb-4">
                                                <FormTag color="blue" title="Dddo2" value={DO2.toFixed(1)} />
                                            </div>

                                            <div className="col-6 ">
                                                <FormTag color="red" title="Fffo2" value={"$ " + FO2.toFixed(2)} />
                                            </div>
                                            <div className="col-6 mb-4">
                                                <FormTag color="green" title="Fffo3" value={"$ " + (FO3 * 1).toFixed(2)} />
                                            </div>

                                            <div className="col-6">
                                                <FormTag color="yellow" title="Hhho2" value={"$ " + HO2.toFixed(2)} />
                                            </div>
                                            <div className="col-6 mb-4">
                                                <FormTag color="green" title="Gggo2" value={"$ " + GO2.toFixed(2)} />
                                            </div>

                                            <div className="col-6">
                                                <FormTag color="yellow" title="Dddo1" value={"$ " + DO1.toFixed(2)} />
                                            </div>
                                            <div className="col-6 mb-4">
                                                <FormTag color="green" title="Hhho1" value={HO1.toFixed(0) + "%"} />
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
                                            <FormTag1 color="green" title="Kkko2" value={"$ " + (KO2 * 1).toFixed(2)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="col-sm-4">
                    <div className='row mb-2'>
                        <div className='col-sm-12'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 style={{ color: "#CBCBE2" }}>My Price Trading Plan</h4>
                                    <ul className="p-0 mt-4">
                                        <li className="d-flex mb-2">
                                            <FormTag2 color="yellow" title="EEEO1" value={parseFloat(EEEO1).toFixed(2) + " $"} img="a1" />
                                        </li>
                                        {/*  */}
                                        <li className="d-flex mb-2">
                                            <FormTag2 color="blue" title="EEEO2" value={parseFloat(EEEO2).toFixed(1)} img="a2" />
                                        </li>
                                        <li className="d-flex mb-2">
                                            <FormTag2 color="red" title="FFFO2" value={"$ " + FO2.toFixed(2)} img="a3" />
                                        </li>
                                        <li className="d-flex">
                                            <FormTag2 color="green" title="FFFO3" value={"$ " + (FO3 * 1).toFixed(2)} img="a1" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-sm-12'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 style={{ color: "#CBCBE2" }}>My Percentile Trade Plane</h4>
                                    <ul className="p-0 mt-4">
                                        <li className="d-flex mb-2">
                                            <FormTag2 color="yellow" title="EEEO1" value={"$ " + parseFloat(EEEO1).toFixed(2)} img="a1" />
                                        </li>
                                        <li className="d-flex mb-2">
                                            <FormTag2 color="blue" title="EEEO2" value={parseFloat(EEEO2).toFixed(1)} img="a2" />
                                        </li>
                                        <li className="d-flex mb-2">
                                            <FormTag2 color="red" title="KKKO1" value={"$ " + KO1.toFixed(2)} img="a3" />
                                        </li>
                                        <li className="d-flex mb-2">
                                            <FormTag2 color="green" title="KKKO2" value={"$ " + (KO2 * 1).toFixed(2)} img="a1" />
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
                <div className="col-sm-8 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h4 className="card-title">Responsive Table</h4>
                                </div>
                                <div className="col text-right" style={{ marginTop: "-7px" }}>
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
                                    <ul className="p-0 mt-4">
                                        <li className="d-flex mb-2">
                                            <FormTag2 color="white" title="LLLO1" value={"$ " + LO1.toFixed(2)} img="a1" />
                                        </li>
                                        <li className="d-flex mb-2">
                                            <FormTag2 color="white" title="LLLO2" value={"$ " + LO2.toFixed(2)} img="a2" />
                                        </li>
                                        <li className="d-flex mb-2">
                                            <FormTag2 color="white" title="LLLO3" value={"$ " + LO3.toFixed(2)} img="a3" />
                                        </li>
                                        <li className="d-flex ">
                                            <FormTag2 color="white" title="HHHO2" value={"$ " + HO2.toFixed(2)} img="a1" />
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