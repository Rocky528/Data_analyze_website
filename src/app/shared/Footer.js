import React, { Component } from 'react';
// import { Trans } from 'react-i18next';
class Footer extends Component {
  render() {
    return (
      <footer className="footer" style={{ marginTop: '-30px' }}>
        <div className="container-fluid">
          <div className='row px-5'>
            <div className="col">
              <div className="float-left text-muted">
                <h5>
                  ©2023 Candlestick TradePal. All Rights Reserved
                </h5>
              </div>
              <div className="float-right">
                <a href="" target="_blank" rel="noopener noreferrer">www.candlesticktradepal.com </a>
              </div>

            </div>
          </div>
          {/* <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">

            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Candlestick TradePal ©
              <a href="" target="_blank" rel="noopener noreferrer">www.candlesticktradepal.com </a>
              <a href=""> Help</a> </span>
          </div> */}
        </div>
      </footer>
    );
  }
}

export default Footer;