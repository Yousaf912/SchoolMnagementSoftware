import React, { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './Components/sidebar/Sidebar';
import { Contex } from './contextStore';
import Header from './Components/header';
import { useLocation } from 'react-router-dom';
import Addstudents from './Components/sidebar/addstudent/Addstudents';
import Addteachers from './Components/sidebar/Addteachers/Addteachers';
import Dashboard from './Components/sidebardetailscomponents/Dashboard';
import Map from './Components/chart/chartone';
import StudentsDetails from './Components/sidebar/Studentslist/Studentsdetail';
import Addworker from './Components/sidebar/Addworker/Addworker';
import TeacherList from './Components/sidebar/teacherlist/TeacherList';
import Workerlist from './Components/sidebar/Workerlist/workerlist';

export default function App() {
    const name = useLocation();
    const name2 = name.pathname.split('/')[1];
    const [urlname, setulrname] = useState<any>();
    const [open, setopen] = useState(true);
    const obj = {
        open, setopen, urlname
    }

    const setinptval = () => {
        setulrname(name2)
    }
    useEffect((
        setinptval
    ), [name])
console.log(name2);



    return (
        <Contex.Provider value={obj}>

            <div className='container-fluid'>
                <div className="row pt-2 ">
                    <div className={`${open ? 'col-3' : 'col-1'}`}>
                        <Sidebar></Sidebar>
                    </div>
                    <div className='col-9'>
                        <Header></Header>
                        { name2 == 'Workerlist'?<Workerlist/>: name2 == 'Teacherlist'? <TeacherList/>: name2 == 'add-worker' ? <Addworker /> : name2 == 'dashboard' ?
                            <Dashboard /> : name2 == 'add-students' ? <Addstudents /> :
                                name2 == 'add-teachers' ? <Addteachers /> : name2 == 'classOne' ? <StudentsDetails /> : name2 == 'classTwo' ? <StudentsDetails /> :
                                name2 =='classThree'? <StudentsDetails/>:name2 =='classFour'? <StudentsDetails/>:name2 =='classFive'? <StudentsDetails/>:
                                    <Dashboard />}

                    </div>


                </div>



            </div>
        </Contex.Provider>
    )
}
