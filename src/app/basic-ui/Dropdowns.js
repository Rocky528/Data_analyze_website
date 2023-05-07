import React, { Component } from 'react';
import { Dropdown, ButtonGroup } from 'react-bootstrap';

export class Dropdowns extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Dropdowns
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
              <li className="breadcrumb-item active" aria-current="page">Dropdowns</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic dropdown</h4>
                <p className="card-description">
                  Wrap the dropdown’s toggle (your button or link) and the dropdown menu within <code>.dropdown</code>
                </p>
                <div className="template-demo">
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-primary" id="dropdownMenuButton1">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-secondary" id="dropdownMenuButton2">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-danger" id="dropdownMenuButton3">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-warning" id="dropdownMenuButton4">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-success" id="dropdownMenuButton5">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-info" id="dropdownMenuButton6">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title">Dropdown outline</h4>
                <p className="card-description">
                  Add class <code>.btn-outline-&#123;color&#125;</code> to the button inside <code>.dropdown</code>
                </p>
                <div className="template-demo">
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-outline-primary" id="dropdownMenuOutlineButton1">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-outline-secondary" id="dropdownMenuOutlineButton2">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-outline-danger" id="dropdownMenuOutlineButton3">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-outline-warning" id="dropdownMenuOutlineButton4">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-outline-success" id="dropdownMenuOutlineButton5">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-outline-info" id="dropdownMenuOutlineButton6">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Split button dropdowns</h4>
                <p className="card-description">
                  Wrap two buttons in <code>.btn-group</code> and add <code>.dropdown-toggle-split</code> to the toggling button
                </p>
                <div className="template-demo">
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-primary">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-primary dropdown-toggle-split" id="dropdownMenuSplitButton1">
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-danger">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-danger dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton2">
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-success">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-success dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton3">
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-secondary">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton4">
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-info">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-info dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton5">
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown as={ButtonGroup}>
                    <button type="button" className="btn btn-warning">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-warning dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton6">
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Icon dropdowns</h4>
                <p className="card-description">
                  Add icon tags instead of text
                </p>
                <div className="row">
                  <div className="col-12">
                    <div className="template-demo d-flex flex-wrap justify-content-between">
                      <Dropdown>
                        <Dropdown.Toggle>
                          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="14" viewBox="0 0 4 14" fill="none">
                            <path d="M2.1875 5.45249C1.76823 5.45249 1.40885 5.60223 1.10938 5.90171C0.809896 6.20119 0.660156 6.56056 0.660156 6.97983C0.660156 7.39911 0.809896 7.75848 1.10938 8.05796C1.40885 8.35744 1.76823 8.50718 2.1875 8.50718C2.60677 8.50718 2.96615 8.35744 3.26562 8.05796C3.5651 7.75848 3.71484 7.39911 3.71484 6.97983C3.71484 6.56056 3.5651 6.20119 3.26562 5.90171C2.96615 5.60223 2.60677 5.45249 2.1875 5.45249ZM2.1875 0.85249C1.76823 0.85249 1.40885 1.00223 1.10938 1.30171C0.809896 1.60119 0.660156 1.96056 0.660156 2.37983C0.660156 2.7991 0.809896 3.15848 1.10938 3.45796C1.40885 3.75744 1.76823 3.90718 2.1875 3.90718C2.60677 3.90718 2.96615 3.75744 3.26562 3.45796C3.5651 3.15848 3.71484 2.7991 3.71484 2.37983C3.71484 1.96056 3.5651 1.60119 3.26562 1.30171C2.96615 1.00223 2.60677 0.85249 2.1875 0.85249ZM2.1875 10.0525C1.76823 10.0525 1.40885 10.2022 1.10938 10.5017C0.809896 10.8012 0.660156 11.1606 0.660156 11.5798C0.660156 11.9991 0.809896 12.3585 1.10938 12.658C1.40885 12.9574 1.76823 13.1072 2.1875 13.1072C2.60677 13.1072 2.96615 12.9574 3.26562 12.658C3.5651 12.3585 3.71484 11.9991 3.71484 11.5798C3.71484 11.1606 3.5651 10.8012 3.26562 10.5017C2.96615 10.2022 2.60677 10.0525 2.1875 10.0525Z" fill="#A3A4CC" />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>




                      sss
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-danger" id="dropdownMenuIconButton2">
                          <i className="mdi mdi-trophy-outline"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-outline-info" id="dropdownMenuIconButton3">
                          <i className="mdi mdi-clock"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-success" id="dropdownMenuIconButton4">
                          <i className="mdi mdi-heart"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-warning" id="dropdownMenuIconButton5">
                          <i className="mdi mdi-logout"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-primary" id="dropdownMenuIconButton6">
                          <i className="mdi mdi-security"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-dark" id="dropdownMenuIconButton7">
                          <i className="mdi mdi-account"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-info" id="dropdownMenuIconButton8">
                          <i className="mdi mdi-bell"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="btn btn-success" id="dropdownMenuIconButton7">
                          <i className="mdi mdi-account"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Dropup variation</h4>
                <p className="card-description">
                  Add class <code>.dropup</code>
                </p>
                <div className="template-demo">
                  <Dropdown drop="up" as={ButtonGroup}>
                    <button type="button" className="btn btn-primary">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-primary" id="dropupMenuSplitButton1">
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown drop="up" as={ButtonGroup}>
                    <button type="button" className="btn btn-danger">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-danger" id="dropupMenuSplitButton2">
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown drop="up" as={ButtonGroup}>
                    <button type="button" className="btn btn-success">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-success" id="dropupMenuSplitButton3">
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown drop="up" as={ButtonGroup}>
                    <button type="button" className="btn btn-secondary">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-secondary" id="dropupMenuSplitButton4">
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown drop="up" as={ButtonGroup}>
                    <button type="button" className="btn btn-info">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-info" id="dropupMenuSplitButton5">
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown drop="up" as={ButtonGroup}>
                    <button type="button" className="btn btn-warning">Dropdown</button>
                    <Dropdown.Toggle variant="btn btn-warning" id="dropupMenuSplitButton6">
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Dropdown sizes</h4>
                <p className="card-description">
                  Add class <code>.btn-&#123;size&#125;</code> to dropdown buttons
                </p>
                <div className="template-demo mt-5">
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-danger btn-lg" id="dropdownMenuSizeButton1">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-danger" id="dropdownMenuSizeButton2">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="btn btn-danger btn-sm" id="dropdownMenuSizeButton3">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Settings</Dropdown.Header>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider></Dropdown.Divider>
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dropdowns
