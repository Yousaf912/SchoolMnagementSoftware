import React from 'react';
import { MdGroups } from "react-icons/md";
import './class.css';
import style from './class.css'


export default function StudentsDetails() {
  return (
    <>
      <div className='border mt-5'>
        <div className='border bg-success d-flex text-white'>
          <MdGroups className='fs-1 ms-3 me-3' />
          <h2>Students Details</h2>
        </div>
        <div className="container">
          <div className="row">
            <p>Search Students By</p>
            <h6> Name/Rool Number/Class Name</h6>
            <div className="col-12 d-flex justify-content-around mt-3 serch">
              <div className="col-3 ">
                <input type="text" />
                <button>Name</button>
              </div>
              <div className="col-3 ">
                <input type="text" />
                <button>CLass</button>
              </div>
              <div className="col-3 ">
                <input type="text" />
                <button>Roll #</button>
              </div>
            </div>
            <div className="col-12 mt-4">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Roll#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Father Name</th>
                    <th scope="col">Pics</th>
                    <th scope="col">Adress</th>
                    <th scope="col">Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td >Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
