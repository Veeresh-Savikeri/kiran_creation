import React from 'react'
export default function CheckTrack(props) {
   
  return (
    <div>
       <div
        className="position-fixed top-50 start-50 p-3 rounded-3 border border-2 border-light shadow-lg login"
        style={{
          zIndex: 1,
          backgroundColor: "rgba(0,0,0, 0.8)", // Transparent white background
          transform: "translate(-50%, -50%)", // Center the form
        }}
      >
        <form>         
          <h3 className="text-center text-white mb-4 fw-bold">Login To Track Your Order</h3>
          <div data-mdb-input-init className="form-outline mb-4">
            <label
              className="form-label text-white fs-3"
              htmlFor="form2Example1"
            >
             Phone No
            </label>
            <input
              type="number"
              id="form2Example1"
              className="form-control"
              onChange={(e) => {
                props.setPhone(e.target.value);
                
              }}
            />
          </div>

          <div data-mdb-input-init className="form-outline mb-4">
            <label
              className="form-label text-white fs-3"
              htmlFor="form2Example2"
            >
              Password
            </label>
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              onChange={(e) => {
                props.setPassword(e.target.value);
               
              }}
            />
          </div>

          <button
            type="button"
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-primary btn-block mb-4"
            onClick={() => {
             props.trackOrd()
             props.setTrack(false);
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
