import React, { useState } from 'react';
import { FaAddressCard } from "react-icons/fa6";
import './addstudent.css';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";


export default function Addstudents() {
  const [arrowup, setarrow] = useState(true);

  return (
    <div className='border border-3 mt-4'>
      <div className='hediv d-flex align-items-center justify-content-between text-white '>
        <div className='  d-flex align-items-center p-2'>
          <FaAddressCard className='fs-1 me-3' />
          <h3>Add Students</h3>
        </div>
        <div className='fs-1 pe-4' onClick={() => { setarrow(!arrowup) }}>
          {arrowup ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
      </div>
      {arrowup &&
        <div className="container">
          
          <div className="row pt-5 pb-5 ">
            <div className="col-12 d-flex justify-content-center ">
              <div className="inpt">
                Full Name <span> * </span>
                <input type="text" placeholder='enter full name' />
              </div>
              <div className="inpt">
                FAther Name <span> * </span>
                <input type="text" placeholder='enter father name....' />
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center mt-3">
              <div className="inpt">
                Enter Email  <span> * </span>
                <input type="email" placeholder='enter email' />
              </div>
              <div className="inpt">
                Enter Number <span> * </span>
                <input type="number" placeholder='enter  number' />
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center mt-3">
            
              <div className="inpt">
                Enter father Number <span> * </span>
                <input type="number" placeholder='enter  number' />
              </div>
              <div className="inpt d-flex justify-content-around">
                <div>
                Select Class  <span> * </span>
                </div>
                <select >
                  <option value="" selected>Select Class</option>
                  <option value="">Class One</option>
                  <option value="">Class Two</option>
                  <option value="">Class Three</option>
                  <option value="">Class Four</option>
                  <option value="">Class Five</option>
                </select>
              </div>
            </div>
            

            <div className="col-12 d-flex mt-3 align-items-center">
              <div className="col-8  adresdiv d-flex align-items-center ">
                Adress <span> * </span>
                <textarea name="" id="" placeholder='Enter student adress'></textarea>
              </div>
              <div className="col-4">
                Enter Date of Birth <span> * </span>
                <input type="date" />
              </div>
            </div>

            <div className="btn">
            <button className='btn btn-success mt-5'>Submit</button>
            </div>


          </div>
        </div>}
    </div>
  )
}

