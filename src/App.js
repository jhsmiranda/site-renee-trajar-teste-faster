import React, { useEffect, useState } from 'react'
import NavBar from './components/nav-bar'
import BotaoWhats from './components/botaowhats'
import Home from './components/home'
import Empresa from './components/empresa'
import Camisaria from './components/camisaria-alfaiataria'
import Depoimentos from './components/depoimentos'
import Contato from './components/contato'
import Footer from './components/footer'

export default () => {

    const [mudarNav, setMudarNav] = useState(false);
    
    useEffect(function(){
        function posicaoscroll(){
            if(window.scrollY > 400){
                setMudarNav(true);
            } else {
                setMudarNav(false);
            }
        }
    
        window.addEventListener('scroll', posicaoscroll);
    }, []);

    return (
        <div>
            <NavBar acao={mudarNav}/>
            <BotaoWhats />
            <Home />
            <Empresa />
            <Camisaria />
            <Depoimentos />
            <Contato />
            <Footer />
        </div>
    )
}