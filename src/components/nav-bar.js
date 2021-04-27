import React from 'react'
import logo from  '../images/logo.png'
import './nav-bar.css'

export default ({acao}) =>

    <nav className={acao ? 'mudarNav' : ''}>
        <div className="nav-container">
            <img src={logo} className="App-logo" alt="logo"/>
            <ul>
                <li><a href="#empresa">EMPRESA</a></li>
                <li><a href="#camisaria">CAMISARIA</a></li>
                <li><a href="#alfaiataria">ALFAIATARIA</a></li>
                <li><a href="#depoimentos">DEPOIMENTOS</a></li>
                <li><a href="#contato">CONTATO</a></li>
            </ul>
        </div>
    </nav>