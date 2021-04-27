import React from 'react'
import './camisaria-alfaiataria.css'
import vetorlist from '../images/vetorlist.png'
import camisaria from '../images/camisaria.png'
import alfaiataria from '../images/alfaiataria.png'

export default props =>
    <>
        <div className="camisariaalfaiataria">
            <div id="camisaria">
                <div className="camisaria-conteudo">
                    <h1>CAMISARIA</h1>
                    <div className="descricao">
                        <img src={vetorlist} className="vetorlist" alt="vetorlist"/>
                        <p>CONFECCIONADAS ARTESANALMENTE</p>
                    </div>
                    <div className="lista">
                        <ul className="lista1">
                            <li>100% Algodaão</li>
                            <li>Monograma</li>
                            <li>Slim</li>
                        </ul>
                        <ul className="lista2">
                            <li>Nacionais e Importados</li>
                            <li>Tradicionais e Esportivas</li>
                            <li>Casamentos</li>
                        </ul>
                    </div>
                    <button className="orcamento-camisaria">Quero um orçamento</button>
                </div>
                <div className="zoom">
                    <img src={camisaria} className="camisaria-imagem" alt="camisaria"/>
                    <div className="fundo-hiden"></div>
                </div>
                <div className="borda-superior"></div>
                <div className="borda-direita"></div>
                <div className="borda-inferior"></div>
                <div className="borda-esquerda"></div>
            </div>
            <div id="alfaiataria">
                <div className="alfaiataria-conteudo">
                    <h1>ALFAIATARIA</h1>
                    <div className="descricao">
                        <img src={vetorlist} className="vetorlist" alt="vetorlist"/>
                        <p>TOTALMENTE FEITO A MÃO SOB MEDIDA</p>
                    </div>
                    <div className="lista">
                        <ul className="lista1">
                            <li>Fio Super 120 e 130</li>
                            <li>Lã fria Australiana</li>
                            <li>Botões Importados</li>
                        </ul>
                        <ul className="lista2">
                            <li>Ternos e Calças</li>
                            <li>Paletós e Smokings</li>
                            <li>Sociais e Esportivos</li>
                        </ul>
                    </div>
                    <button className="orcamento-alfaiataria">Quero um orçamento</button>
                </div>
                <div className="zoom">
                    <img src={alfaiataria} className="alfaiataria-imagem" alt="alfaiataria"/>
                    <div className="fundo-hiden"></div>
                </div>
                <div className="borda-superior"></div>
                <div className="borda-direita"></div>
                <div className="borda-inferior"></div>
                <div className="borda-esquerda"></div>
            </div>
        </div>
    </>