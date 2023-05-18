import React, { Component } from 'react';
// import { Trans } from 'react-i18next';
class Footer extends Component {
  render() {
    return (
      <footer className="footer" style={{ marginTop: '-50px' }}>
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Candlestick TradePal © <a href="" target="_blank" rel="noopener noreferrer">www.candlesticktradepal.com </a>  <a href=""> Help</a> </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;