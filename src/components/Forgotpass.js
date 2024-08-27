import React from "react";
export default function Forgotpass(){
    return (
        <div className="container mt-0 mb-5">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-xl-10"> 
              <div className="carde p-5 bigger-card" style={{ background: 'linear-gradient(135deg, #f5af1993, #f1271175)' }}>
                <h3 className="mb-4 text-center" style={{fontWeight:'900'}}>Forgot your password!</h3>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <button className="btn btn-dark w-100 mb-3">Send Email</button>
              </div>
            </div>
          </div>
        </div>
      );
}