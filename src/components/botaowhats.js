import React from 'react'
import './botaowhats.css'
import whats from '../images/whats.png'

export default props =>
    <>
        <div className="whats">
            <a href="https://api.whatsapp.com/send?phone=5511958156528&text=Ol%C3%A1%2C+voc%C3%AA+est%C3%A1+contratado!" target="_blank" className="botao-whats"><img src={whats} alt="botao-whatsapp"/></a>
        </div>
    </>