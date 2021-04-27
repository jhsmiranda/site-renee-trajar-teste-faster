import React from 'react'
import './empresa.css'
import reneetrajar from '../images/renee-trajar.png'
import aspas from '../images/aspas.png'
import fundoimagem from '../images/fundo1.png'
import nelsongarey1 from '../images/nelson-garey-1.png'
import nelsongarey2 from '../images/nelson-garey-2.png'
import maquinacostura from '../images/maquina-costura.png'
import medalha from '../images/medalha.png'
import linhaagulha from '../images/linha-agulha.png'
import fundo2 from '../images/fundo2.png'
import vetorlist from '../images/vetorlist.png'
import terno1 from '../images/terno-1.png'


export default props =>
    <>
        <div id="empresa">
            <div className="apresentacao">
                <div className="imagem-apresentacao">
                    <img src={reneetrajar} className="renee-trajar" alt="renee-trajar"/>
                </div>
                <div className="conteudo-apresentacao">
                    <h3>Renee Trajar</h3>
                    <div className="linha"></div>
                    <div className="texto-apresentacao">
                        <p>Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, possuímos profissionais experientes e altamente qualificados.</p>
                        <p>Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo através das medidas tiradas pelo próprio Sr. Renee, no escritório ou residência do cliente.</p>
                    </div>
                    <div className="citacao-apresentacao">
                        <p>&nbsp;<em>“Nosso objetivo é superar a expectativa do cliente proporcionando-lhe satisfação ao usar nossos produtos, aliado a um relacionamento franco e honesto, valorizando o ser humano.”</em></p>
                    </div>
                    <img src={aspas} className="aspas" alt="aspas"/>
                    <p className="assinatura">Renee Trajar</p>
                    <button className="agendar-visita">Agende uma visita!</button>
                </div>
            </div>
            <div className="cliente">
                <div className="container-depoimento">
                    <img src={fundoimagem} className="fundo-imagem" alt="fundo-imagem"/>
                    <div className="fundo-depoimento"></div>
                    <div className="informacoes-nelson-garey">
                        <p className="depoimento-nelson-garey">“Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é impecável em todos os detalhes, desde a  costura ao caimento. O Renee tem uma equipe de mestre!”</p>
                        <p className="nelson-garey">Nelson Garey</p>
                        <p className="profissao-nelson-garey">Advogado | Nelson Garey Advogados Associados</p>
                    </div>
                </div>
                <div className="container-imagem">
                    <img src={nelsongarey1} className="nelson-garey-img1" alt="nelson-garey-1"/>
                    <div className="fundo-nelson-garey-1"></div>
                </div>
                <img src={nelsongarey2} className="nelson-garey-img2" alt="nelson-garey-2"/>
                <div className="fundo-nelson-garey-2"></div>
            </div>
            <div className="valores">
                <div className="qualidade">
                    <img src={maquinacostura} className="maquina-costura" alt="maquina-costura"/>
                    <h2>QUALIDADE</h2>
                    <p>Camisaria e Alfaiataria 100% artesanal.</p>
                </div>
                <div className="confianca">
                    <img src={medalha} className="medalha" alt="medalha"/>
                    <h2>CONFIANÇA</h2>
                    <p>Atendimento personalizado no escritório ou residência.</p></div>
                <div className="experiencia">
                    <img src={linhaagulha} className="linha-agulha" alt="linha-agulha"/>
                    <h2>EXPERIÊNCIA</h2>
                    <p>Tradição e modernidade e proporcionando elegância.</p>
                </div>
            </div>
            <div className="oferta">
                <img src={fundo2} className="fundo2" alt="fundo2"/>
                <div className="fundo-oferta"></div>
                <div className="conteudo-oferta">
                    <h1>CONDIÇÃO IMPERDÍVEL</h1>
                    <h3>Compre hoje e garanta:</h3>
                    <div className="lista">
                        <div className="item-lista">
                            <img src={vetorlist} className="vetorlist" alt="vetorlist"/>
                            <p>12% de desconto e pagamento em até <span>3x sem juros</span>;</p>
                        </div>
                        <div className="item-lista">
                            <img src={vetorlist} className="vetorlist" alt="vetorlist"/>
                            <p>Até <span>10 meses</span> para confeccionar sua roupa. Não se preocupe se suas medidas aumentaram ou diminuíram, estará sempre elegante;</p>
                        </div>
                        <div className="item-lista">
                            <img src={vetorlist} className="vetorlist" alt="vetorlist"/>
                            <p>Condição muito especial por <span>tempo limitado</span>;</p>
                        </div>
                        <div className="item-lista">
                            <img src={vetorlist} className="vetorlist" alt="vetorlist"/>
                            <p>Poder presentear alguém com uma roupa de alta costura, <span>exclusiva</span>.</p>
                        </div>
                    </div>
                    <img src={terno1} className="terno1" alt="terno1"/>
                    <button className="garantir-condicao">Garanta essa confição especial!</button>
                </div>
            </div>
        </div>
    </>