import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import img from './images/0ab2a47a-0b9f-45af-b31f-0fa492e123ca-removebg-preview.png';
export default function About() {
  return (
    <div className='container mt-5 mb-5'>
      <div className='row'>
        <div className='col-md-6'>
          <form>
            <h2 className='mb-4' style={{ fontWeight: '900' }}>Contact Us</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Send us a message</label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div><div class="text-box">
    <button className="btn btn-warning btn-animate" >Sumbit</button>
</div>
          </form>
        </div>
        <div className='col-md-6'>
          <img src={img} alt='contact-us' className='w-100' />
        </div>
      </div>
    </div>
  );
}
