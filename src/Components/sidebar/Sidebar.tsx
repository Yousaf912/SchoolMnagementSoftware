import React, { useContext, useState } from 'react';
import './Sidebar.module.css'
import style from './Sidebar.module.css';
import logo from '../../assets/download-removebg-preview.png'
import { Contex } from '../../contextStore';
import { FaArrowLeft, FaArrowRight, FaClipboardList, FaChalkboardTeacher } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrUserWorker, } from "react-icons/gr";
import { HiMiniUserGroup } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdChecklist, MdFormatListNumbered } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FcBusinessman } from "react-icons/fc";




const Sidebar = () => {
  const a = useContext(Contex);
  const [studentlist, setstudentlist] = useState(false);
  const [stdattandence, setstattandence] = useState(false);



  return (
    <div className={` position-fixed border-0 rounded-4 ${style.sidebar} `}>

      <div className={`rounded-circle ps-1  position-absolute top-50 ${style.sidebarclosebtn}`} onClick={() => a.setopen(!a.open)}>
        {a.open ? <FaArrowLeft className='fs-4' /> : <FaArrowRight className='fs-4 ' />}
      </div>

      <div className={` ${a.open ? '' : style.imgdiv} text-center p-2`}>
        <img src={logo} width={100} />
      </div>
      {a.open ?
        <div className={`${style.lst} ${style.sid} `}>
          <ul className=''>


            <Link to={'/dashboard'}>
              <li>
                <div className={`${style.licon}`}>
                  <IoHomeOutline className={ ` ${style.icn} fs-4 me-3 `} />
                  DashBoard
                </div>
              </li>
            </Link>
            <Link to={'/dashboard'}>
              <li>
                <div className={`${style.licon}`}>
                  < FcBusinessman className={ ` ${style.icn} fs-4 me-3 `} />
                  Principle
                </div>
              </li>
            </Link>
            <Link to={'/add-students'}>
              <li>
                <div className={`${style.licon}`}>
                  <PiStudentBold className={ ` ${style.icn} fs-4 me-3 `} />
                  Add Students
                </div>
              </li>
            </Link>
            <Link to={'/add-teachers'}>
              <li>
                <div className={`${style.licon}`}>
                  <FaPeopleGroup className={ ` ${style.icn} fs-4 me-3 `} />
                  Add Teachers
                </div>
              </li>
            </Link>
            <Link to={'/add-worker'}>
              <li>
                <div className={`${style.licon}`}>
                  <GrUserWorker className={ ` ${style.icn} fs-4 me-3 `} />
                  Add Workers
                </div>
              </li>
            </Link>
            <li onClick={() => setstudentlist(!studentlist)}>
              <div className='d-flex justify-content-between align-items-center'>
                <div className={`${style.licon}`}>
                  < HiMiniUserGroup className={ ` ${style.icn} fs-4 me-3 `} />
                  Students
                </div>
                {studentlist ?
                  <IoIosArrowBack /> : <IoIosArrowForward />}
              </div>
            </li>
            {studentlist ?
              <ul>
                <Link to={'/classOne'}>
                  <li>Class One</li>
                </Link>
                <Link to={'/classTwo'}>
                  <li>Class Two</li>
                </Link>
                <Link to={'/classThree'}>
                  <li>Class Three</li>
                </Link>
                <Link to={'/classFour'}>
                  <li>Class Four</li>
                </Link>
                <Link to={'/classFive'}>
                  <li>Class Five</li>
                </Link>
              </ul> : ''}

              <Link to={'/Teacherlist'}>
            <li>
              <div className={`${style.licon}`}>
                <FaChalkboardTeacher className={ ` ${style.icn} fs-4 me-3 `} />
                Teachers List
              </div>
            </li>
              </Link>
              <Link to={'/Workerlist'}>
            <li>
              <div className={`${style.licon}`}>
                <HiOutlineUserGroup className={ ` ${style.icn} fs-4 me-3 `} />
                Workers List
              </div>
            </li>
              </Link>
            <li onClick={() => setstattandence(!stdattandence)}>
              <div className='d-flex justify-content-between align-items-center'>
                <div className={`${style.licon}`}>
                  <MdChecklist className={ ` ${style.icn} fs-4 me-3 `} />
                  Students Attandence
                </div>
                {stdattandence ?
                  <IoIosArrowBack /> : <IoIosArrowForward />}
              </div>
            </li>
            {stdattandence ?
              <ul>
                <li>Class One</li>
                <li>Class Two</li>
                <li>Class Three</li>
                <li>Class Four</li>
                <li>Class Five</li>
              </ul> : ''}
            <li>
              <div className={`${style.licon}`}>
                <FaClipboardList className={ ` ${style.icn} fs-4 me-3 `} />
                Teachers Attandence
              </div>
            </li>
            <li>
              <div className={`${style.licon}`}>
                <MdFormatListNumbered className={ ` ${style.icn} fs-4 me-3 `} />
                Worker Attandence
              </div>
            </li>
            <li></li>
          </ul>
        </div>
        : ''}
    </div>
  )
}

export default Sidebar