import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css'
// import { Container } from './styles';
import logo from '../assets/logo.jpg';
import camera from '../assets/camera.jpg'


export default function Header() {
    return ( <
        header id = "main-header" >
        <
        div className = "header-content" >
        <
        Link to = "/" >
        <
        img src = { logo }
        alt = "InstaRocket" / >
        <
        /Link>  <
        Link to = "/new" >
        <
        img src = { camera }
        alt = "Enviar publicação" / >
        <
        /Link> <
        /div> <
        /header>
    );
}