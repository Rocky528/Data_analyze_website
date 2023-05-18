import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { InputAAAO1, InputAAAO2, InputEEEO1, InputMMMO1, InputCCCO1, InputEEEO3, InputEEEO2, InputCCCO2, InputGGGO1, InputIIIO1, InputJJJO1 } from '../../reducers/InputSlice'
import FormTag from '../Component/FormTag';
import FormTag1 from '../Component/FormTag1';
import GaugeChart from "react-gauge-chart";
import ButtonTag from '../Component/ButtonTag';
import './style.css';

const Dashboard = () => {

  let num = Intl.NumberFormat('en-US');
  const [countI, setCountI] = useState(2);
  const handleKeyPress = (target) => {
    if (target.charCode == 13) {
      if (countI < 14)
        setCountI(countI + 1);
      else {
        setCountI(1);
      }
      const nextSibling = document.querySelector(
        `input[name=CIO${countI}]`
      );
      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
  }

  const { AAAO1, AAAO2, EEEO1, MMMO1, CCCO1, EEEO3, EEEO2, CCCO2, IIIO1, JJJO1, GGGO1 } = useSelector((state) => state.InputValue);
  const dispatch = useDispatch();
  //BBBO1 AO1*AO2
  let AAAO1temp = (AAAO1 === 0) ? "" : AAAO1;
  const [AO1, setAO1] = useState(AAAO1temp);
  let AAAO2temp = (AAAO2 === 0) ? "" : AAAO2;
  const [AO2, setAO2] = useState(AAAO2temp);
  const [BO1, setBO1] = useState(0);

  const handleAAAO1 = (evt) => {
    let EAO1 = evt.target.value;
    let MAO1 = Number(EAO1.replace(/,/g, ''));
    if (MAO1 <= 10000000)
      setAO1(parseFloat(MAO1));
  }


  const handleAAAO2 = (evt) => {
    let EAO2 = evt.target.value;
    let MAO2 = Number(EAO2.replace(/,/g, ''));
    if (MAO2 <= 100000)
      setAO2(parseFloat(MAO2));
  }

  //BBBO2 BO1/EO1/MO1
  const [BO2, setBO2] = useState(0);
  let EEEO1temp = (EEEO1 === 0) ? "" : EEEO1;
  const [EO1, setEO1] = useState(EEEO1temp);
  // let MMMO1temp = (MMMO1 === 1) ? "" : MMMO1;
  const [MO1, setMO1] = useState(MMMO1);

  const handleMMMO1 = (evt) => {
    let EMO1 = evt.target.value;
    let MMO2 = Number(EMO1.replace(/,/g, ''));
    if (MMO2 <= 1000)
      setMO1(parseFloat(MMO2));
  }
  const handleEEEO1 = (evt) => {
    let EEO1 = evt.target.value;
    let MEO1 = Number(EEO1.replace(/,/g, ''));
    if (MEO1 <= 100000)
      setEO1(parseFloat(MEO1));
  }

  //DDDO1 (CO1/(EO1-EO3)/MO1)*EO1*MO1
  const [DO1, setDO1] = useState(0);
  let CCCO1temp = (CCCO1 === 0) ? "" : CCCO1;
  const [CO1, setCO1] = useState(CCCO1temp);

  let EEEO3temp = (EEEO3 === 0) ? "" : EEEO3;
  const [EO3, setEO3] = useState(EEEO3temp);
  const handleCCCO1 = (evt) => {
    let ECO1 = evt.target.value;
    let MCO1 = Number(ECO1.replace(/,/g, ''));
    if (MCO1 <= 100000)
      setCO1(parseFloat(MCO1));
  }
  const handleEEEO3 = (evt) => {
    let EEO3 = evt.target.value;
    let MEO3 = Number(EEO3.replace(/,/g, ''));
    if (MEO3 <= 100000)
      setEO3(parseFloat(MEO3));
  }

  //DDDO2 (CO1/(EO1-EO3)/MO1)
  const [DO2, setDO2] = useState(0);

  //HHHO2 EO1*EO2*MO1
  const [HO2, setHO2] = useState(0);

  let EEEO2temp = (EEEO2 === 0) ? "" : EEEO2;
  const [EO2, setEO2] = useState(EEEO2temp);
  const handleEEEO2 = (evt) => {
    let EEO2 = evt.target.value;
    let MEO2 = Number(EEO2.replace(/,/g, ''));
    if (MEO2 <= 100000)
      setEO2(parseFloat(MEO2));
  }

  //FFFO1 HO2-(EO3/EO1*HO2)
  const [FO1, setFO1] = useState(0);

  //FFFO2 EO1-(CO1/EO2)/MO1
  const [FO2, setFO2] = useState(0);

  //FFFO3 EO1+(EO1*CO2/HO2)
  const [FO3, setFO3] = useState(0);
  let CCCO2temp = (CCCO2 === 0) ? "" : CCCO2;
  const [CO2, setCO2] = useState(CCCO2temp);
  const handleCCCO2 = (evt) => {
    let ECO2 = evt.target.value;
    let MCO2 = Number(ECO2.replace(/,/g, ''));
    if (MCO2 <= 100000)
      setCO2(parseFloat(MCO2));
  }

  //GGGO2 (EO2*GO1-EO2*EO1)*MO1
  const [GO2, setGO2] = useState(0);
  let GGGO1temp = (GGGO1 === 0) ? "" : GGGO1;
  const [GO1, setGO1] = useState(GGGO1temp);
  const handleGGGO1 = (evt) => {
    let EGO1 = evt.target.value;
    let MGO1 = Number(EGO1.replace(/,/g, ''));
    if (MGO1 <= 100000)
      setGO1(parseFloat(MGO1));
  }

  //HHHO1 GO2/CO1
  const [HO1, setHO1] = useState(0);

  //IIIO2 HO2*IO1*0.01*-1
  const [IO2, setIO2] = useState(0);
  let IIIO1temp = (IIIO1 === 0) ? "" : IIIO1;
  const [IO1, setIO1] = useState(IIIO1temp);
  const handleIIIO1 = (evt) => {
    let EIO1 = evt.target.value;
    let MIO1 = Number(EIO1.replace(/,/g, ''));
    if (MIO1 <= 100000)
      setIO1(parseFloat(MIO1));
  }

  //JJJO2 EO1*EO2*JO1*MO1
  const [JO2, setJO2] = useState(0);
  let JJJO1temp = (JJJO1 === 0) ? "" : JJJO1;
  const [JO1, setJO1] = useState(JJJO1temp);
  const handleJJJO1 = (evt) => {
    let EJO1 = evt.target.value;
    let MJO1 = Number(EJO1.replace(/,/g, ''));
    if (MJO1 <= 100000)
      setJO1(MJO1);
  }

  //KKKO1 EO1-IO1*EO1
  const [KO1, setKO1] = useState(0);

  //KKKO2 EO1+(EO1*JO2/HO2)
  const [KO2, setKO2] = useState(0);

  //HHHO3 GO2/CO1
  const [HO3, setHO3] = useState(0);

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
    !(AO1 * 0.01 * AO2) || (AO1 * 0.01 * AO2 === Infinity) || (AO1 * 0.01 * AO2 === -Infinity) ? setBO1(0) : setBO1(AO1 * 0.01 * AO2);

    !(BO1 / EO1 / MO1) || (BO1 / EO1 / MO1 === Infinity) || (BO1 / EO1 / MO1 === -Infinity) ? setBO2(0) : setBO2(BO1 / EO1 / MO1);

    !((CO1 / (EO1 - EO3) / MO1) * EO1 * MO1) || ((CO1 / (EO1 - EO3) / MO1) * EO1 * MO1 == Infinity) || ((CO1 / (EO1 - EO3) / MO1) * EO1 * MO1 === -Infinity) ? setDO1(0) : setDO1((CO1 / (EO1 - EO3) / MO1) * EO1 * MO1);

    !((CO1 / (EO1 - EO3) / MO1)) || ((CO1 / (EO1 - EO3) / MO1) === Infinity) || ((CO1 / (EO1 - EO3) / MO1) === -Infinity) ? setDO2(0) : setDO2((CO1 / (EO1 - EO3) / MO1));

    !(EO1 * EO2 * MO1) || (EO1 * EO2 * MO1 === Infinity) || (EO1 * EO2 * MO1 === -Infinity) ? setHO2(0) : setHO2(EO1 * EO2 * MO1);

    !(HO2 - (EO3 / EO1 * HO2)) || (HO2 - (EO3 / EO1 * HO2) === Infinity) || (HO2 - (EO3 / EO1 * HO2) === -Infinity) ? setFO1(0) : setFO1(HO2 - (EO3 / EO1 * HO2));

    !(EO1 - (CO1 / EO2) / MO1) || (EO1 - (CO1 / EO2) / MO1 === Infinity) || (EO1 - (CO1 / EO2) / MO1 === -Infinity) ? setFO2(0) : setFO2(EO1 - (CO1 / EO2) / MO1);

    !(EO1 * 1 + (EO1 * CO2) / HO2) || (EO1 * 1 + (EO1 * CO2) / HO2 === Infinity) || (EO1 * 1 + (EO1 * CO2) / HO2 === -Infinity) ? setFO3(0) : setFO3(EO1 * 1 + (EO1 * CO2) / HO2);

    !((EO2 * GO1 - EO2 * EO1) * MO1) || ((EO2 * GO1 - EO2 * EO1) * MO1 === Infinity) || ((EO2 * GO1 - EO2 * EO1) * MO1 === -Infinity) ? setGO2(0) : setGO2((EO2 * GO1 - EO2 * EO1) * MO1);

    !(GO2 / HO2) || (GO2 / HO2 === Infinity) || (GO2 / HO2 === -Infinity) ? setHO1(0) : setHO1(GO2 / HO2);

    !(HO2 * IO1 * 0.01 * -1) || (HO2 * IO1 * 0.01 * -1 === Infinity) || (HO2 * IO1 * 0.01 * -1 === -Infinity) ? setIO2(0) : setIO2(HO2 * IO1 * 0.01 * -1);

    !(EO1 * EO2 * JO1 * 0.01 * MO1) || (EO1 * EO2 * JO1 * 0.01 * MO1 === Infinity) || (EO1 * EO2 * JO1 * 0.01 * MO1 === -Infinity) ? setJO2(0) : setJO2(EO1 * EO2 * JO1 * 0.01 * MO1);

    !(EO1 - IO1 * 0.01 * EO1) || (EO1 - IO1 * 0.01 * EO1 === Infinity) || (EO1 - IO1 * 0.01 * EO1 === -Infinity) ? setKO1(0) : setKO1(EO1 - IO1 * 0.01 * EO1);

    !(EO1 * 1 + (EO1 * JO2 / HO2)) || (EO1 * 1 + (EO1 * JO2 / HO2) === Infinity) || (EO1 * 1 + (EO1 * JO2 / HO2) === -Infinity) ? setKO2(0) : setKO2(EO1 * 1 + (EO1 * JO2 / HO2));

    !(GO2 / CO1) || (GO2 / CO1 === Infinity) || (GO2 / CO1 === -Infinity) ? setHO3(0) : setHO3(GO2 / CO1);
  },);

  const PricePostionDelete = (p) => {
    if (p === 1) {
      setEO1('');
      setEO2('');
      setEO3('');
      setGO1('');
    }
    else if (p === 2) {
      setEO1('');
      setEO2('');
      setEO3('');
      setGO1('');
    }

  }

  return (
    <div>
      <div className="row ">
        {/* 1 */}
        <div className="col-sm-4">
          <div className='row mb-1'>
            <div className='col-sm-12'>
              <div className="card" style={{ borderRadius: '8px' }}>
                <div className="card-body">
                  <h4 className='' style={{ color: "#CBCBE2" }}>My Portfolio Risk</h4>
                  <div className="row text-center" >
                    <div className="col-sm-6">
                      <FormTag color="green" title="Risk Per Trade" value={"$ " + num.format(BO1.toFixed(2))} />
                    </div>
                    <div className="col-sm-6">
                      <FormTag color="blue" title="Dddo2" value={num.format(DO2.toFixed(1))} />
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
                  <h4 style={{ color: "#CBCBE2" }}>Trade Risk Management</h4>
                  <div className="row">
                    <div className="col-6">
                      <FormTag value={AAAO1} color="input_yellow" title="aaao1" val="$" onChange={handleAAAO1} onKeyPress={handleKeyPress} name="CIO1" />
                    </div>
                    <div className="col-6">
                      <FormTag onKeyPress={handleKeyPress} value={AAAO2} color="input_yellow" title="aaao2" val="%" onChange={handleAAAO2} name="CIO2" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <FormTag value={CCCO1} onKeyPress={handleKeyPress} color="input_red" title="ccco1" val="$" onChange={handleCCCO1} name="CIO3" />
                    </div>
                    <div className="col-6">
                      <FormTag value={CCCO2} onKeyPress={handleKeyPress} color="input_green" title="ccco2" onChange={handleCCCO2} val="$" name="CIO4" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <FormTag value={MMMO1} color="input_white" onChange={handleMMMO1} title="mmmo1" val="" onKeyPress={handleKeyPress} name="CIO5" />
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
                  <h4 style={{ color: "#CBCBE2" }}>Trade Rating</h4>
                  <h6 style={{ color: '#7071A4' }}>Rol <span style={{ color: '#CBCBE2' }}>{(HO1 * 100).toFixed(2)} %</span></h6>
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
        </div>
        {/* 2 */}
        <div className="col-sm-4">
          <div className='row mb-2'>
            <div className='col-sm-12'>
              <div className="card">
                <div className="card-body">
                  <h4 className='' style={{ color: "#CBCBE2" }}>Risk Metrics</h4>
                  <div className="row mt-3 text-center">
                    <div className="col-6">
                      <FormTag color="red" title="Fffo1" value={"$" + num.format(FO1.toFixed(2))} />
                    </div>
                    <div className="col-6 mb-4">
                      <FormTag color="green" title="Equivalent Qty" value={BO2.toFixed(2)} />
                    </div>
                    <div className="col-6 ">
                      <FormTag color="red" title="Fffo2" value={"$ " + num.format(FO2.toFixed(2))} />
                    </div>
                    <div className="col-6 mb-4" >
                      <FormTag color="green" title="Fffo3" value={"$ " + num.format(FO3.toFixed(2))} />
                    </div>
                    <div className="col-6">
                      <FormTag color="yellow" title="Hhho2" value={"$ " + num.format(HO2.toFixed(2))} />
                    </div>
                    <div className="col-6 mb-4">
                      <FormTag color="green" title="Gggo2" value={"$ " + num.format(GO2.toFixed(2))} />
                    </div>
                    <div className="col-6">
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
          <div className='row mb-2'>
            <div className='col-sm-12'>
              <div className="card" style={{ borderRadius: '8px' }}>
                <div className="card-body">
                  <h4 style={{ color: "#CBCBE2" }}>Price Position Trading</h4>
                  <div className="row mt-4">
                    <div className="col-6">
                      <FormTag max={100000} value={EEEO1} color="input_yellow" val="$" onChange={handleEEEO1} title="eeeo1" onKeyPress={handleKeyPress} name="CIO6" />
                    </div>
                    <div className="col-6">
                      <FormTag max={100000} value={EEEO2} color="input_blue" title="eeeo2" onChange={handleEEEO2} onKeyPress={handleKeyPress} name="CIO7" />
                    </div>
                    <div className="col-6">
                      <FormTag max={100000} value={EEEO3} color="input_red" val="$" onChange={handleEEEO3} title="eeeo3" onKeyPress={handleKeyPress} name="CIO8" />
                    </div>
                    <div className="col-6">
                      <FormTag max={100000} value={GGGO1} color="input_green" val="$" title="gggo1" onChange={handleGGGO1} onKeyPress={handleKeyPress} name="CIO9" />
                    </div>
                  </div>
                  <div className="row mt-2 text-center">
                    <div className="col-6">
                      <ButtonTag color="input_green" title="Price" onClick={() => PricePostionDelete(1)} value="Clear data" />
                    </div>
                    <div className="col-6">
                      <Link to="detailed_report1">
                        <ButtonTag color="input_green" title="Price" value="Show Plan" />
                      </Link>
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
                  <h4 className='F' style={{ color: "#CBCBE2" }}>Percentile Metrics</h4>
                  <div className="row mt-3 text-center">
                    <div className="col-4">
                      <FormTag1 color="red" title="Hhho2" value={"$ " + num.format(HO2.toFixed(0))} />
                    </div>
                    <div className="col-4">
                      <FormTag1 color="blue" title="Mmmo1" value={num.format((MO1 * 1).toFixed(1))} />
                    </div>
                    <div className="col-4 mb-4">
                      <FormTag1 color="red" title="Iiio2" value={"$ " + num.format(IO2.toFixed(2))} />
                    </div>
                    <div className="col-4">
                      <FormTag1 color="green" title="Jjjo2" value={"$ " + num.format(JO2.toFixed(2))} />
                    </div>
                    <div className="col-4">
                      <FormTag1 color="red" title="Kkko1" value={"$ " + num.format(KO1.toFixed(2))} />
                    </div>
                    <div className="col-4">
                      <FormTag1 color="green" title="Kkko2" value={"$ " + num.format(KO2.toFixed(2))} />
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
                  <h4 style={{ color: "#CBCBE2" }}>Percentitle Trading</h4>
                  <div className="row mt-3">
                    <div className="col-6">
                      <FormTag max={100000} value={EEEO1} color="input_yellow" val="$" title="eeeo1" onChange={handleEEEO1} onKeyPress={handleKeyPress} name="CIO10" />
                    </div>
                    <div className="col-6">
                      <FormTag max={100000} value={EEEO2} color="input_blue" title="Eeeo2" onChange={handleEEEO2} onKeyPress={handleKeyPress} name="CIO11" />
                    </div>
                    <div className="col-6">
                      <FormTag max={100000} value={IIIO1} color="input_red" val="%" title="iiio1" onChange={handleIIIO1} onKeyPress={handleKeyPress} name="CIO12" />
                    </div>
                    <div className="col-6">
                      <FormTag max={100000} value={JJJO1} color="input_green" val="%" title="jjjo1" onChange={handleJJJO1} onKeyPress={handleKeyPress} name="CIO13" />
                    </div>
                  </div>
                  <div className="row mt-2 text-center">
                    <div className="col-6">
                      <ButtonTag color="input_green" title="Price" onClick={() => PricePostionDelete(2)} value="Clear data" />
                    </div>
                    <div className="col-6">
                      <Link to="detailed_report1">
                        <ButtonTag color="input_green" title="Price" value="Show Plan" />
                      </Link>
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

