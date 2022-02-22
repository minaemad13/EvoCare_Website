import React from "react";
import "./edit.css";
export default function edit() {
  return (
    <div className="body1">
      <br/><br/>
      <div className="container emp-profile">
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="profile-head">
                <h5 className="text-center">Mariam Adel</h5>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      User Info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Old Password</label>
                    </div>
                    <div className="col-md-6">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Old Password"
                          aria-label="Old Password"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>New Password</label>
                    </div>
                    <div className="col-md-6">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="New Password"
                          aria-label="New Password"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Confirm New Password</label>
                    </div>

                    <div className="col-md-6">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Confirm New Password"
                          aria-label="Confirm New Password"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>E-Mail</label>
                    </div>
                    <div className="col-md-6">
                      <div className="col-md-6">
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="E-Mail"
                            aria-label="E-Mail"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone Number</label>
                    </div>
                    <div className="col-md-6">
                      <div className="col-md-6">
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Phone Number"
                            aria-label="Phone Number"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <input
              type="button"
              className="btn btn-outline-info me-md-2"
              name="save"
              value="Save"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
