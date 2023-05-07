import React, { Component } from 'react';
import FormTag from '../Component/FormTag';
import FormTag1 from '../Component/FormTag1';
import GaugeChart from "react-gauge-chart";
import ButtonTag from '../Component/ButtonTag';

const mapData = {
  "BZ": 75.00,
  "US": 56.25,
  "AU": 15.45,
  "GB": 25.00,
  "RO": 10.25,
  "GE": 33.25
}

export class Dashboard extends Component {

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
                    <div className="row mt-5">
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
                  <div className="card-body">
                    <h4 style={{ color: "#CBCBE2" }}>My Portfolio Management</h4>
                    <div className="row mt-4">
                      <div className="col-12">
                        <FormTag color="input_yellow" title="AAAO1($)" />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-12">
                        <FormTag color="input_yellow" title="AAAO2(%)" />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-12">
                        <FormTag color="input_red" title="CCCO1($)" />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-12">
                        <FormTag color="input_green" title="CCCO2($)" />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-12">
                        <FormTag color="input_white" title="MMMO1($)" />
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
          </div>
          {/* 2 */}
          <div className="col-sm-4">
            <div className='row mb-4'>
              <div className='col-sm-12'>
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
                    <div className="row mt-4">
                      <div className="col-6">
                        <FormTag color="yellow" title="DDDO1" value="$ 546" />
                      </div>
                      <div className="col-6">
                        <FormTag color="green" title="HHHO1" value="$ 286" />
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
                    <h4 style={{ color: "#CBCBE2" }}>Price Position Trading</h4>
                    <div className="row mt-4">
                      <div className="col-12">
                        <FormTag color="input_yellow" title="EEEO1($)" />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-12">
                        <FormTag color="input_blue" title="EEEO2($)" />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-12">
                        <FormTag color="input_red" title="EEEO3($)" />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-12">
                        <FormTag color="input_green" title="GGGO1($)" />
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col">
                        <div class="float-right">
                          <ButtonTag color="input_green" title="Price" value="Show Plan" />
                        </div>
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
            <div className='row'>
              <div className='col-sm-12'>
                <div className="card" style={{ borderRadius: '8px' }}>
                  <div className="card-body">
                    <h4 style={{ color: "#CBCBE2" }}>Percentitle Trading</h4>
                    <div className="row mt-4">
                      <div className="col-12">
                        <FormTag color="input_yellow" title="EEEO1($)" />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-12">
                        <FormTag color="input_blue" title="EEEO2($)" />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-12">
                        <FormTag color="input_red" title="IIIO1($)" />
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-12">
                        <FormTag color="input_green" title="JJJO1($)" />
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col">
                        <div class="float-right">
                          <ButtonTag color="input_green" title="Percent" value="Log Plan" />
                        </div>
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
}

export default Dashboard;