import React from 'react'

export default function stdp() {
  return (
    <div>
      <h2 className="sp mx-3"> Student profile</h2>
      <div class="container my-3">
        <div class="row">
          <div class="col-sm">
            <div className="row">
              <div class="col-sm">
                <img
                  src="https://p.kindpng.com/picc/s/557-5575988_student-hd-png-download.png"
                  style={{ width: "180px" }}
                  alt=""
                />
              </div>
              <div class="col-sm my-5">
                <h4 class="card1">Raj Anadkat</h4>
                <h6>Student ID : TIPSG5882</h6>
                <h6>Gender : Female</h6>
              </div>
            </div>
          </div>
          <div class="col-sm"></div>
          <div class="col-sm">
            <div className="att">
            <h4 class="card1">Attendance</h4>
            <h1 className="per">85 %</h1>
            <h6 className="total">
              <span className="mark">85</span>/100
            </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
