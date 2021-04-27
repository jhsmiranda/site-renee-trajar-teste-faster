import React, { useState } from 'react'
import './contato.css'

export default props => {
    const [inputFocusName, showName] = useState(false);

    const focusInputName = () => {
        showName(inputFocusName => true);
    };

    const blurInputName = () => {
        showName(inputFocusName => false);
    };

    const [inputFocusEmail, showEmail] = useState(false);

    const focusInputEmail = () => {
        showEmail(inputFocusEmail => true);
    };

    const blurInputEmail = () => {
        showEmail(inputFocusEmail => false);
    };

    const [inputFocusMensage, showMensage] = useState(false);

    const focusInputMensage = () => {
        showMensage(inputFocusMensage => true);
    };

    const blurInputMensage = () => {
        showMensage(inputFocusMensage => false);
    };

    return (

        <div id="contato">
            <div className="informacoes-contato">
                <div className="telefones">
                    <h2>TELEFONES</h2>
                    <p>+55 (11) 3088-0757</p>
                </div>
                <div className="email">
                    <h2>E-MAIL</h2>
                    <p>renee@reneetrajar.com.br</p>
                </div>                
                <div className="atendimento-personalizado">
                    <h2>ATENDIMENTO PERSONALIZADO</h2>
                    <button className="clique-aqui">Clique aqui!</button>
                </div>
            </div>
            
            <div className="formulario-contato">
                <h1>Contato</h1>
                <div className="form-contato">
                    <form>
                        <label form="nome" className={inputFocusName ? 'nome-label' : 'mudarLabel'}>Nome</label>
                        <input type="text" onFocus={focusInputName} onBlur={blurInputName} className="nome-form" placeholder="Nome"/>
                        <label form="email" className={inputFocusEmail ? 'email-label' : 'mudarLabel'}>E-mail</label>
                        <input type="email" onFocus={focusInputEmail} onBlur={blurInputEmail} className="email-form" placeholder="E-mail"/>
                        <label form="mensagem" className={inputFocusMensage ? 'mensagem-label' : 'mudarLabel'}>Mensagem</label>
                        <textarea onFocus={focusInputMensage} onBlur={blurInputMensage} className="mensagem-form" placeholder={inputFocusMensage ? "Enviar mensagem" : "Mensagem"}></textarea>
                    </form>
                    <button type="submit" className="enviar-mensagem">Enviar Mensagem</button>
                </div>
            </div>
        </div>
    )
}