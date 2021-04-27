import React, { useState } from 'react'
import './depoimentos.css'
import fundo4 from '../images/fundo4.png'
import left from '../images/left.png'
import right from '../images/right.png'
import cliente1 from '../images/cliente1.png'
import cliente2 from '../images/cliente2.png'
import cliente3 from '../images/cliente3.png'
import cliente4 from '../images/cliente4.png'

export default props => {

    const [current, setCurrent] = useState(1);

    const nextDepoiment = () => {
        setCurrent(current === 4 ? 1 : current + 1);
    };

    const prevDepoiment = () => {
        setCurrent(current === 1 ? 4 : current - 1);
    };

    const primeiro = () => {
        setCurrent(current =>1);
    };
    const segundo = () => {
        setCurrent(current =>2);
    };
    const terceiro = () => {
        setCurrent(current =>3);
    };
    const quarto = () => {
        setCurrent(current => 4);
    };

    return(

        <div id="depoimentos">

            <div className="fundo-depoimentos">
                <img src={fundo4} className="fundo4" alt="fundo4"/>
            </div>
    
            <div className="depoimentos-clientes">
    
                <h1>Depoimentos</h1>
    
                <button className="left" onClick={prevDepoiment}><img src={left} alt="left"/></button>
                <button className="right" onClick={nextDepoiment}><img src={right} alt="right"/></button>
    
                <div id="cliente1">
                    <div className={current === 1 ? `ativo` : `inativo`}>
                        <div className="avatar-cliente">
                            <div className="fundo-avatar"></div>
                            <img src={cliente1} alt="cliente"/>
                        </div>
                        <div className="depoimento-cliente">
                            <p>“Sou cliente do Renee há uns 12 anos. Nosso primeiro contato foi por intermédio de meu pai, que já tem uma história de décadas com o querido Renee.</p>
                            <p>O excelente atendimento antes e pós venda e a alta qualidade dos materiais usados colocam a Renee Trajar em um patamar acima dos demais do ramo.”</p>
                            <h2>'William H. M. Garey'</h2>
                            <h3>'Advogado   |    Nelson Garey Advogados Associados'</h3>
                        </div>
                    </div>
                    <div className={current === 1 ? `elemento-ativo` : `elemento-inativo`}>
                        <div className="elemento-1">
                            <button onClick={primeiro}><div className="elemento-cheio"></div></button>
                        </div>
                        <div className="elemento-2">
                            <button onClick={segundo}><div className="elemento-vazado"></div></button>
                        </div>
                        <div className="elemento-3">
                        <button onClick={terceiro}><div className="elemento-vazado"></div></button>
                        </div>
                        <div className="elemento-4">
                            <button onClick={quarto}><div className="elemento-vazado"></div></button>
                        </div>
                    </div>
                </div>

                <div id="cliente2">
                    <div className={current === 2 ? `ativo` : `inativo`}>
                        <div className="avatar-cliente">
                            <div className="fundo-avatar"></div>
                            <img src={cliente2} alt="cliente"/>
                        </div>
                        <div className="depoimento-cliente">
                            <p>“Seu corte tanto de camisas, bem como de ternos são impecáveis, muitos dos meus amigos tem elogiado a vestimenta.</p>
                            <p>Recomendo para quem gosta de perfeição. Estamos nos servindo do trabalho do Renee Trajar há mais de vinte anos.”</p>
                            <h2>Domingos Orestes Chiomento</h2>
                            <h3>DOC Contabilidade Empresarial</h3>
                        </div>
                    </div>
                    <div className={current === 2 ? `elemento-ativo` : `elemento-inativo`}>
                        <div className="elemento-1">
                            <button onClick={primeiro}><div className="elemento-vazado"></div></button>
                        </div>
                        <div className="elemento-2">
                            <button onClick={segundo}><div className="elemento-cheio"></div></button>
                        </div>
                        <div className="elemento-3">
                        <button onClick={terceiro}><div className="elemento-vazado"></div></button>
                        </div>
                        <div className="elemento-4">
                            <button onClick={quarto}><div className="elemento-vazado"></div></button>
                        </div>
                    </div>
                </div>
                
                <div id="cliente3">
                    <div className={current === 3 ? `ativo` : `inativo`}>
                        <div className="avatar-cliente">
                            <div className="fundo-avatar"></div>
                            <img src={cliente3} alt="cliente"/>
                        </div>
                        <div className="depoimento-cliente">
                            <p>“Tenho a honra de afirmar que enquanto nossas vidas perdurarem o meu conceito é sempre melhor em relação ao Renee Trajar, sua pessoa, ao profissional competente e idôneo, sempre pontual, atencioso e preocupado em atender da melhor maneira os anseios de seus clientes, incluindo este signatário.”</p>
                            <h2>José Mauro Marques</h2>
                            <h3>Advogado</h3>
                        </div>
                    </div>
                    <div className={current === 3 ? `elemento-ativo` : `elemento-inativo`}>
                        <div className="elemento-1">
                            <button onClick={primeiro}><div className="elemento-vazado"></div></button>
                        </div>
                        <div className="elemento-2">
                            <button onClick={segundo}><div className="elemento-vazado"></div></button>
                        </div>
                        <div className="elemento-3">
                        <button onClick={terceiro}><div className="elemento-cheio"></div></button>
                        </div>
                        <div className="elemento-4">
                            <button onClick={quarto}><div className="elemento-vazado"></div></button>
                        </div>
                    </div>
                </div>
                
                <div id="cliente4">
                    <div className={current === 4 ? `ativo` : `inativo`}>
                        <div className="avatar-cliente">
                            <div className="fundo-avatar"></div>
                            <img src={cliente4} alt="cliente"/>
                        </div>
                        <div className="depoimento-cliente">
                            <p>“Conheço o excelente e qualificado trabalho do Renee Trajar e sua equipe há décadas. Para camisas e ternos, o Renee é imbatível, sempre com preços justos, produtos de excelente qualidade e especialmente tudo é feito com muito cuidado e qualidade. Cumpre os prazos com atendimento de alto nível. O Renee trabalha com perfeição nos detalhes.”</p>
                            <h2>Custódio Pereira</h2>
                            <h3>Membro do CONSOCIAL - Conselho Superior de Responsabilidade Social da FIESP-SP</h3>
                        </div>
                    </div>
                    <div className={current === 4 ? `elemento-ativo` : `elemento-inativo`}>
                        <div className="elemento-1">
                            <button onClick={primeiro}><div className="elemento-vazado"></div></button>
                        </div>
                        <div className="elemento-2">
                            <button onClick={segundo}><div className="elemento-vazado"></div></button>
                        </div>
                        <div className="elemento-3">
                        <button onClick={terceiro}><div className="elemento-vazado"></div></button>
                        </div>
                        <div className="elemento-4">
                            <button onClick={quarto}><div className="elemento-cheio"></div></button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

