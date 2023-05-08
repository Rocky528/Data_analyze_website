import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement } from '../../reducers/counterSlice'
import { AAAO1, AAAO2, EEEO1, MMMO1, CCCO1, EEEO3, EEEO2, CCCO2, GGGO1, IIIO1, JJJO1 } from '../../reducers/InputSlice'
import FormTag from '../Component/FormTag';
import FormTag1 from '../Component/FormTag1';
import GaugeChart from "react-gauge-chart";
import ButtonTag from '../Component/ButtonTag';

const Dashboard = () => {

  // const count = useSelector((state) => state.counter.value);
  // const { InputAAAO1, InputAAAO2, InputMMMO1, InputCCCO1, InputEEEO3 } = useSelector((state) => state.InputValue);
  const dispatch = useDispatch();
  //BBBO1 AO1*AO2
  const [AO1, setAO1] = useState(0);
  const [AO2, setAO2] = useState(0);
  const [BO1, setBO1] = useState(0);
  const handleAAAO1 = (evt) => {
    setAO1(evt.target.value);
  }

  const handleAAAO2 = (evt) => {
    setAO2(evt.target.value);
  }

  //BBBO2 BO1/EO1/MO1
  const [BO2, setBO2] = useState(0);
  const [EO1, setEO1] = useState(0);
  const [MO1, setMO1] = useState(0);

  const handleMMMO1 = (evt) => {
    setMO1(evt.target.value);
  }
  const handleEEEO1 = (evt) => {
    setEO1(evt.target.value);
  }

  //DDDO1 (CO1/(EO1-EO3)/MO1)*EO1*MO1
  const [DO1, setDO1] = useState(0);
  const [CO1, setCO1] = useState(0);
  const [EO3, setEO3] = useState(0);
  const handleCCCO1 = (evt) => {
    setCO1(evt.target.value);
  }
  const handleEEEO3 = (evt) => {
    setEO3(evt.target.value);
  }

  //DDDO2 (CO1/(EO1-EO3)/MO1)
  const [DO2, setDO2] = useState(0);

  //HHHO2 EO1*EO2*MO1
  const [HO2, setHO2] = useState(0);
  const [EO2, setEO2] = useState(0);
  const handleEEEO2 = (evt) => {
    setEO2(evt.target.value);
  }

  //FFFO1 HO2-(EO3/EO1*HO2)
  const [FO1, setFO1] = useState(0);

  //FFFO2 EO1-(CO1/EO2)/MO1
  const [FO2, setFO2] = useState(0);

  //FFFO3 EO1+(EO1*CO2/HO2)
  const [FO3, setFO3] = useState(0);
  const [CO2, setCO2] = useState(0);
  const handleCCCO2 = (evt) => {
    setCO2(evt.target.value);
  }

  //GGGO2 (EO2*GO1-EO2*EO1)*MO1
  const [GO2, setGO2] = useState(0);
  const [GO1, setGO1] = useState(0);
  const handleGGGO1 = (evt) => {
    setGO1(evt.target.value);
  }

  //HHHO1 GO2/HO2
  const [HO1, setHO1] = useState(0);

  //IIIO2 HO2*IO1*0.01*-1
  const [IO2, setIO2] = useState(0);
  const [IO1, setIO1] = useState(0);
  const handleIIIO1 = (evt) => {
    setIO1(evt.target.value);
  }

  //JJJO2 EO1*EO2*JO1*MO1
  const [JO2, setJO2] = useState(0);
  const [JO1, setJO1] = useState(0);
  const handleJJJO1 = (evt) => {
    setJO1(evt.target.value);
  }

  //KKKO1 EO1-IO1*EO1
  const [KO1, setKO1] = useState(0);

  //KKKO2 EO1+(EO1*JO2/HO2)
  const [KO2, setKO2] = useState(0);

  //HHHO3 GO2/CO1
  const [HO3, setHO3] = useState(0);

  //LLLO1 EO3-EO1

  //LLLO2 GO1-EO1

  //LLLO3 GO1-EO3

  //LLLO4 GO2-100

  useEffect(() => {
    // Update the document title using the browser API
    dispatch(AAAO1(AO1));
    dispatch(AAAO2(AO2));
    dispatch(EEEO1(EO1));
    dispatch(MMMO1(MO1));
    dispatch(CCCO1(CO1));
    dispatch(EEEO3(EO3));
    dispatch(EEEO2(EO2));
    dispatch(CCCO2(CO2));
    dispatch(GGGO1(GO1));
    dispatch(IIIO1(IO1));
    dispatch(JJJO1(JO1));
    setBO1(AO1 * 0.01 * AO2);
    setBO2(BO1 / EO1 / MO1);
    setDO1((CO1 / (EO1 - EO3) / MO1) * EO1 * MO1);
    setDO2((CO1 / (EO1 - EO3) / MO1));
    setHO2(EO1 * EO2 * MO1);
    setFO1(HO2 - (EO3 / EO1 * HO2));
    setFO2(EO1 - (CO1 / EO2) / MO1);
    setFO3(EO1 + (EO1 * CO2 / HO2));
    setGO2((EO2 * GO1 - EO2 * EO1) * MO1);
    setHO1(GO2 / HO2);
    setIO2(HO2 * IO1 * 0.01 * -1);
    setJO2(EO1 * EO2 * JO1 * MO1);
    setKO1(EO1 - IO1 * EO1);
    setKO2(EO1 + (EO1 * JO2 / HO2));
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
                  <div className="row mt-5">
                    <div className="col-6 col-sm-6">
                      <FormTag color="green" title="BBBO1" value={"$ " + BO1} />
                    </div>
                    <div className="col-6 col-sm-6">
                      <FormTag color="green" title="BBBO2" value={"$ " + BO2} />
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
                      <FormTag color="input_yellow" title="AAAO1($)" val="$" onChange={handleAAAO1} />
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-12">
                      <FormTag color="input_yellow" title="AAAO2(%)" val="%" onChange={handleAAAO2} />
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-12">
                      <FormTag color="input_red" title="CCCO1($)" val="$" onChange={handleCCCO1} />
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-12">
                      <FormTag color="input_green" title="CCCO2($)" onChange={handleCCCO2} val="$" />
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-12">
                      <FormTag color="input_white" title="MMMO1($)" onChange={handleMMMO1} val="$" />
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
                      <h4 className="text-center mt-4">HHHO3 = {HO3}= GGGO2/CCCO1</h4>
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
                      <FormTag color="red" title="FFFO1" value={"$" + FO1} />
                    </div>
                    <div className="col-6">
                      <FormTag color="blue" title="DDDO2" value={"$" + DO2} />
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
                  <div className="row mt-4">
                    <div className="col-6">
                      <FormTag color="yellow" title="DDDO1" value={"$ " + DO1} />
                    </div>
                    <div className="col-6">
                      <FormTag color="green" title="HHHO1" value={"$ " + HO1} />
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
                      <FormTag color="input_yellow" val="$" onChange={handleEEEO1} title="EEEO1($)" />
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-12">
                      <FormTag color="input_blue" val="$" title="EEEO2($)" onChange={handleEEEO2} />
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-12">
                      <FormTag color="input_red" val="$" onChange={handleEEEO3} title="EEEO3($)" />
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-12">
                      <FormTag color="input_green" val="$" title="GGGO1($)" onChange={handleGGGO1} />
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
                      <FormTag1 color="red" title="HHHO1" value={HO1 + " K"} />
                    </div>
                    <div className="col-6">
                      <FormTag1 color="blue" title="MMMO1" value={MO1} />
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
          <div className='row'>
            <div className='col-sm-12'>
              <div className="card" style={{ borderRadius: '8px' }}>
                <div className="card-body">
                  <h4 style={{ color: "#CBCBE2" }}>Percentitle Trading</h4>
                  <div className="row mt-4">
                    <div className="col-12">
                      <FormTag color="input_yellow" val="$" title="EEEO1($)" onChange={handleEEEO1} />
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-12">
                      <FormTag color="input_blue" val="$" title="EEEO2($)" onChange={handleEEEO2} />
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-12">
                      <FormTag color="input_red" val="%" title="IIIO1($)" onChange={handleIIIO1} />
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div className="col-12">
                      <FormTag color="input_green" val="%" title="JJJO1($)" onChange={handleJJJO1} />
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
export default Dashboard;