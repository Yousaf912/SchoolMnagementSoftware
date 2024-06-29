
import React, { useState } from 'react';
import { FaAddressCard } from "react-icons/fa6";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";


export default function Addworker() {
    const [arrowup, setarrow] = useState(true);

    return (
        <div className='border border-3 mt-4'>
            <div className='hediv d-flex align-items-center justify-content-between text-white '>
                <div className='  d-flex align-items-center p-2'>
                    <FaAddressCard className='fs-1 me-3' />
                    <h3>Add Teachers</h3>
                </div>
                <div className='fs-1 pe-4' onClick={() => { setarrow(!arrowup) }}>
                    {arrowup ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </div>
            </div>
            {arrowup &&
                <div className="container">

                    <div className="row pt-5 pb-5 ">
                        <div className="col-8 inpt text-center">
                            Name <span> * </span>
                            <input type="text" />
                        </div>
                        <div className="col-8 inpt text-center mt-3">
                            Email <span> * </span>
                            <input type="email" />
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-3">
                            <div className='me-3'>
                                NUmber <span> * </span>
                                <input type="number" />
                            </div>
                            <div className='me-3'>
                                Qualification <span> * </span>
                                <input type="number" />
                            </div>
                            <div>
                                Date Of birth <span> * </span>
                                <input type="date" />
                            </div>

                        </div>
                        <div className="col-8 inpt justify-content-center mt-3 d-flex align-items-center" >
                            Address <span> * </span>
                            <textarea name="" id=""></textarea>
                        </div>
                        <div className="col-9  mt-3 d-flex justify-content-center">
                            <div className=''>
                                Gender <span> * </span>
                            </div>
                            <form className='ms-5 '>
                                <label htmlFor="male">Male</label>
                                <input type="radio" id="male" name="gender" />

                                <label htmlFor="female">Female</label>
                                <input type="radio" id="female" name="gender" />

                                <label htmlFor="other">Other</label>
                                <input type="radio" id="other" name="gender" />
                            </form>

                        </div>


                    </div>
                    <div className='col-12 mt-5 text-center mb-5'>
              <button className='btn col-4 btn-primary' >Submit</button>
            </div>
                </div>}
        </div>
    )
}
