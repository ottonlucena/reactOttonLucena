import React from 'react';
import logotipoico from '../logo/logotipoico.ico';
import { Link } from "react-router-dom"

export default function Logo (){
    return <Link to="/home"><img className='logo' src={logotipoico} alt="logo" /></Link>
}