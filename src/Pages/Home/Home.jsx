import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../../Components";
import { SideBarData } from "../../Components/SideBar/SideBarData";
import './home.css'
function Home() {

  console.log('from home');

  return (
    <>
      <SideBar data={SideBarData}></SideBar>
      <div className='routes-container'>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default Home;
