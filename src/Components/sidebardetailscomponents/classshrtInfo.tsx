import React from 'react'
import { BsFillInfoCircleFill } from "react-icons/bs";


export default function ClassshrtInfo() {
    const data = [
        { id: 1, class: 'Class One', student: '70%', stdinmon: '50%', std: '39' },
        { id: 2, class: 'Class Two', student: '86%', stdinmon: '90%', std: '68' },
        { id: 3, class: 'Class Three', student: '45%', stdinmon: '80%', std: '58' },
        { id: 4, class: 'Class Four', student: '89%', stdinmon: '40%', std: '45' },
        { id: 5, class: 'Class Five', student: '76%', stdinmon: '60%', std: '23' },
    ]
    return (
        <div className='border mb-5'>
            <h2 className='d-flex align-items-center border p-2 bg-warning text-white'>
                <BsFillInfoCircleFill className='me-3' />
                Class Short Information
            </h2>
            <table className="table">
                <thead className="table-light">

                    <tr>
                        <th>#</th>
                        <th>Class Name</th>
                        <th>Student Amount</th>
                        <th>Daily Attandence In %</th>
                        <th>Monthly Attandence In %</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val: any, i: any) => {
                        return (
                            <tr key={i}>
                                <th>{val.id}</th>
                                <td>{val.class}</td>
                                <td>{val.std}</td>
                                <td>{val.student}</td>
                                <td>{val.stdinmon}</td>

                            </tr>
                        )
                    })}
                    <tr className='bg-info'></tr>
                </tbody>
            </table>
        </div>
    )
}
