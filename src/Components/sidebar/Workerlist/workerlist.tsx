import React from 'react';
import { MdGroups } from "react-icons/md";



export default function Workerlist() {
  return (
    <>
      <div className='border mt-5'>
        <div className='border bg-success d-flex text-white'>
          <MdGroups className='fs-1 ms-3 me-3' />
          <h2>Workers List</h2>
        </div>
        <div className="container">
          <div className="row">
            <p className='mt-3'>Search Workers By Name</p>
            <div className="col-12  mt-3  serch">
              <div className="col-3 ">
                <input type="text" />
                <button>Name</button>
              </div>
            </div>
            <div className="col-12 mt-4">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">ID#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Pics</th>
                    <th scope="col">Adress</th>
                    <th scope="col">Number</th>
                    <th scope="col">Status</th>
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
