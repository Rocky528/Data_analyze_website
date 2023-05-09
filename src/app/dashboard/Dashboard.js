import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { InputAAAO1, InputAAAO2, InputEEEO1, InputMMMO1, InputCCCO1, InputEEEO3, InputEEEO2, InputCCCO2, InputGGGO1, InputIIIO1, InputJJJO1 } from '../../reducers/InputSlice'
import FormTag from '../Component/FormTag';
import FormTag1 from '../Component/FormTag1';
import GaugeChart from "react-gauge-chart";
import ButtonTag from '../Component/ButtonTag';
import './style.css';
const Dashboard = () => {
  const focusNext = (e) => p => {
    alert("w")
    console.log(e.target.value, p)
  }
  const { AAAO1, AAAO2, EEEO1, MMMO1, CCCO1, EEEO3, EEEO2, CCCO2, IIIO1, JJJO1, GGGO1 } = useSelector((state) => state.InputValue);
  const dispatch = useDispatch();
  //BBBO1 AO1*AO2
  const [AO1, setAO1] = useState(AAAO1);
  const [AO2, setAO2] = useState(AAAO2);
  const [BO1, setBO1] = useState(0);
  const handleAAAO1 = (evt) => {
    setAO1(evt.target.value);
  }

  const handleAAAO2 = (evt) => {
    setAO2(evt.target.value);
  }

  //BBBO2 BO1/EO1/MO1
  const [BO2, setBO2] = useState(0);
  const [EO1, setEO1] = useState(EEEO1);
  const [MO1, setMO1] = useState(MMMO1);

  const handleMMMO1 = (evt) => {
    setMO1(evt.target.value);
  }
  const handleEEEO1 = (evt) => {
    setEO1(evt.target.value);
  }

  //DDDO1 (CO1/(EO1-EO3)/MO1)*EO1*MO1
  const [DO1, setDO1] = useState(0);
  const [CO1, setCO1] = useState(CCCO1);
  const [EO3, setEO3] = useState(EEEO3);
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
  const [EO2, setEO2] = useState(EEEO2);
  const handleEEEO2 = (evt) => {
    setEO2(evt.target.value);
  }

  //FFFO1 HO2-(EO3/EO1*HO2)
  const [FO1, setFO1] = useState(0);

  //FFFO2 EO1-(CO1/EO2)/MO1
  const [FO2, setFO2] = useState(0);

  //FFFO3 EO1+(EO1*CO2/HO2)
  const [FO3, setFO3] = useState(0);
  const [CO2, setCO2] = useState(CCCO2);
  const handleCCCO2 = (evt) => {
    setCO2(evt.target.value);
  }

  //GGGO2 (EO2*GO1-EO2*EO1)*MO1
  const [GO2, setGO2] = useState(0);
  const [GO1, setGO1] = useState(GGGO1);
  const handleGGGO1 = (evt) => {
    setGO1(evt.target.value);
  }

  //HHHO1 GO2/HO2
  const [HO1, setHO1] = useState(0);

  //IIIO2 HO2*IO1*0.01*-1
  const [IO2, setIO2] = useState(0);
  const [IO1, setIO1] = useState(IIIO1);
  const handleIIIO1 = (evt) => {
    setIO1(evt.target.value);
  }

  //JJJO2 EO1*EO2*JO1*MO1
  const [JO2, setJO2] = useState(0);
  const [JO1, setJO1] = useState(JJJO1);
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
    dispatch(InputAAAO1(AO1));
    dispatch(InputAAAO2(AO2));
    dispatch(InputEEEO1(EO1));
    dispatch(InputMMMO1(MO1));
    dispatch(InputCCCO1(CO1));
    dispatch(InputEEEO3(EO3));
    dispatch(InputEEEO2(EO2));
    dispatch(InputCCCO2(CO2));
    dispatch(InputGGGO1(GO1));
    dispatch(InputIIIO1(IO1));
    dispatch(InputJJJO1(JO1));
    setBO1(AO1 * 0.01 * AO2);
    setBO2(BO1 / EO1 / MO1);
    setDO1((CO1 / (EO1 - EO3) / MO1) * EO1 * MO1);
    setDO2((CO1 / (EO1 - EO3) / MO1));
    setHO2(EO1 * EO2 * MO1);
    setFO1(HO2 - (EO3 / EO1 * HO2));
    setFO2(EO1 - (CO1 / EO2) / MO1);
    setFO3(EO1 * 1 + (EO1 * CO2) / HO2);
    setGO2((EO2 * GO1 - EO2 * EO1) * MO1);
    setHO1(GO2 * 100 / HO2);
    setIO2(HO2 * IO1 * 0.01 * -1);
    setJO2(EO1 * EO2 * JO1 * 0.01 * MO1);
    setKO1(EO1 - IO1 * 0.01 * EO1);
    setKO2(EO1 * 1 + (EO1 * JO2 / HO2));
    setHO3(GO2 / CO1);
  },);

  return (
    <div>
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
                      <FormTag color="green" title="Bbbo1" value={"$ " + BO1.toFixed(2)} />
                    </div>
                    <div className="col-sm-6">
                      <FormTag color="green" title="Bbbo2" value={"$ " + BO2.toFixed(2)} />
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
                      <FormTag id="text-1" max={10000000} onKeyDown={e => focusNext('text-2')} value={AAAO1} color="input_yellow" title="aaao1($)" val="$" onChange={handleAAAO1} />
                    </div>
                    <div className="col-6">
                      <FormTag id="text-2" max={100000} onkeydown="focusNext(event, 'text-1')" value={AAAO2} color="input_yellow" title="aaao2(%)" val="%" onChange={handleAAAO2} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <FormTag value={CCCO1} max={100000} color="input_red" title="ccco1($)" val="$" onChange={handleCCCO1} />
                    </div>
                    <div className="col-6">
                      <FormTag value={CCCO2} max={100000} color="input_green" title="ccco2($)" onChange={handleCCCO2} val="$" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <FormTag value={MMMO1} max={1000} color="input_white" title="mmmo1" onChange={handleMMMO1} />
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
        </div>
        {/* 2 */}
        <div className="col-sm-4">
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
              <div className="card" style={{ borderRadius: '8px' }}>
                <div className="card-body">
                  <h4 style={{ color: "#CBCBE2" }}>Price Position Trading</h4>
                  <div className="row mt-4">
                    <div className="col-6">
                      <FormTag max={100000} value={EEEO1} color="input_yellow" val="$" onChange={handleEEEO1} title="eeeo1($)" />
                    </div>
                    {/* </div>
                  <div className="row mt-1"> */}
                    <div className="col-6">
                      <FormTag max={100000} value={EEEO2} color="input_blue" title="eeeo2" onChange={handleEEEO2} />
                    </div>
                    {/* </div>
                  <div className="row mt-1"> */}
                    <div className="col-6">
                      <FormTag max={100000} value={EEEO3} color="input_red" val="$" onChange={handleEEEO3} title="eeeo3($)" />
                    </div>
                  {/* </div>
                  <div className="row mt-1"> */}
                    <div className="col-6">
                      <FormTag max={100000} value={GGGO1} color="input_green" val="$" title="gggo1($)" onChange={handleGGGO1} />
                    </div>
                  </div>
                  <div className="row mt-2 text-center">
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
        {/* 3 */}
        <div className="col-sm-4">
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
                      <FormTag1 color="blue" title="Mmmo1" value={MO1.toFixed(1)} />
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
          <div className='row'>
            <div className='col-sm-12'>
              <div className="card" style={{ borderRadius: '8px' }}>
                <div className="card-body">
                  <h4 style={{ color: "#CBCBE2" }}>Percentitle Trading</h4>
                  <div className="row mt-3">
                    <div className="col-6">
                      <FormTag max={100000} value={EEEO1} color="input_yellow" val="$" title="eeeo1($)" onChange={handleEEEO1} />
                    </div>
                    {/* </div>
                  <div className="row mt-1"> */}
                    <div className="col-6">
                      <FormTag max={100000} value={EEEO2} color="input_blue" title="Eeeo2" onChange={handleEEEO2} />
                    </div>
                    {/* </div>
                  <div className="row mt-1"> */}
                    <div className="col-6">
                      <FormTag max={100000} value={IIIO1} color="input_red" val="%" title="iiio1(%)" onChange={handleIIIO1} />
                    </div>
                    {/* </div>
                  <div className="row mt-1"> */}
                    <div className="col-6">
                      <FormTag max={100000} value={JJJO1} color="input_green" val="%" title="jjjo1(%)" onChange={handleJJJO1} />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col">
                      <div className="float-right">
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