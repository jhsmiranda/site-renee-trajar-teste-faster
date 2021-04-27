import React from 'react'
import './footer.css'
import logo2 from '../images/logo2.png'
import botaotop from '../images/botaotop.png'

export default props =>
    <>
        <div id="footer">
            <div className="logo-cnpj">
                <img src={logo2} alt="logo"/>
                <p>CNPJ:<span>04.487.685/0001-01</span></p>
            </div>
            <div className="copyright">
                <p>Copyright: 2021 © Renee Trajar - Todos os direitos reservados.</p>
            </div>
            <div className="botao-topo">
                <a href="#home"><img src={botaotop} alt="botao-topo"/></a>
            </div>
        </div>
    </>