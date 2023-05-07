import React, { Component } from 'react';
import FormTag from '../Component/FormTag';
import FormTag1 from '../Component/FormTag1';
import FormTag2 from '../Component/FormTag2';
import ButtonTag from '../Component/ButtonTag';
import GaugeChart from "react-gauge-chart";

const mapData = {
    "BZ": 75.00,
    "US": 56.25,
    "AU": 15.45,
    "GB": 25.00,
    "RO": 10.25,
    "GE": 33.25
}

export class Tab2 extends Component {

    transactionHistoryData = {
        labels: ["Paypal", "Stripe", "Cash"],
        datasets: [{
            data: [55, 25, 20],
            backgroundColor: [
                "#111111", "#00d25b", "#ffab00"
            ]
        }
        ]
    };

    transactionHistoryOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 70,
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: true
        }
    }

    sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    toggleProBanner() {
        document.querySelector('.proBanner').classList.toggle("hide");
    }
    render() {
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
                                                <FormTag color="green" title="BBBO2" value="$286" />
                                            </div>
                                            <div className="col-6 col-sm-6">
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
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 style={{ color: "#CBCBE2" }}>Price Position Trading</h4>
                                            <div className="row mt-5">
                                                <div className="col-6">
                                                    <FormTag color="red" title="FFFO1" value="$ 546" />
                                                </div>
                                                <div className="col-6">
                                                    <FormTag color="blue" title="DDDO2" value="$ 286" />
                                                </div>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col-6">
                                                    <FormTag color="red" title="FFFO2" value="$ 546" />
                                                </div>
                                                <div className="col-6">
                                                    <FormTag color="green" title="FFFO3" value="$ 286" />
                                                </div>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col-6">
                                                    <FormTag color="yellow" title="HHHO2" value="$ 546" />
                                                </div>
                                                <div className="col-6">
                                                    <FormTag color="green" title="GGGO2" value="$ 286" />
                                                </div>
                                            </div>
                                            <div className="row mt-4 mb-5">
                                                <div className="col-6">
                                                    <FormTag color="yellow" title="DDDO1" value="$ 546" />
                                                </div>
                                                <div className="col-6 mb-4">
                                                    <FormTag color="green" title="HHHO1" value="$ 286" />
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
                                                <h4 className="text-center mt-4">HHHO3 = 102.93 = C20/C9</h4>
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
                                        <div className="row mt-4 mb-3">
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
                    {/* 3 */}
                    <div className="col-sm-4">
                        <div className='row mb-4'>
                            <div className='col-sm-12'>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 style={{ color: "#CBCBE2" }}>My Price Trading Plan</h4>
                                        <ul className="p-0 mt-5">
                                            <li className="d-flex mb-4 pb-1">
                                                <FormTag2 color="yellow" title="EEEO1" value="82.5k" img="a1" />
                                            </li>
                                            <li className="d-flex mb-4 pb-1">
                                                <FormTag2 color="blue" title="EEEO2" value="23.8k" img="a2" />
                                            </li>
                                            <li className="d-flex mb-4 pb-1">
                                                <FormTag2 color="red" title="FFFO2" value="849k" img="a3" />
                                            </li>
                                            <li className="d-flex pb-1">
                                                <FormTag2 color="green" title="FFFO3" value="99k" img="a1" />
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
                                                <FormTag2 color="yellow" title="EEEO1" value="82.5k" img="a1" />
                                            </li>
                                            <li className="d-flex mb-4 pb-1">
                                                <FormTag2 color="blue" title="EEEO2" value="23.8k" img="a2" />
                                            </li>
                                            <li className="d-flex mb-4 pb-1">
                                                <FormTag2 color="red" title="FFFO2" value="849k" img="a3" />
                                            </li>
                                            <li className="d-flex mb-4 pb-1">
                                                <FormTag2 color="green" title="FFFO3" value="99k" img="a1" />
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
                                                <FormTag2 color="yellow" title="EEEO1" value="82.5k" img="a1" />
                                            </li>
                                            <li className="d-flex mb-4 pb-1">
                                                <FormTag2 color="blue" title="EEEO2" value="23.8k" img="a2" />
                                            </li>
                                            <li className="d-flex mb-4 pb-1">
                                                <FormTag2 color="red" title="FFFO2" value="849k" img="a3" />
                                            </li>
                                            <li className="d-flex ">
                                                <FormTag2 color="green" title="FFFO3" value="99k" img="a1" />
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
}

export default Tab2;