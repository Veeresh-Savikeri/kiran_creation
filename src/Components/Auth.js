import React from 'react'
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Auth() {
    const navigate = useNavigate();
    let name = localStorage.getItem("username");
    let password = localStorage.getItem("password");
  return (
    <div>
      {name === "admin" && password === "admin" ? (<Outlet/>) : navigate('/')}
    </div>
  )
}
