import { Alert, Collapse, IconButton } from '@mui/material';
import React, { useState } from 'react';
import Material from "../img/material.jpg";

const About = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <p>Menu | Sobre</p>
            <div className="tittle">
                <h1>Olá, seja bem vindo a TransMatos !!</h1>
                <img src={Material} className="imgMaterial"/>
            </div>
            <div className="secondTittle">
                <h2>Somos uma família que possui uma loja física de material de construção e que está ampliando o seus négocios através da internet, trazendo o benefício de poder realizar o pedido a distância e receber em sua residência!</h2>
            </div>
            <div className="terceiroTittle">
                <h2>Trabalhamos com os produtos desde a base até o abamento da sua obra, lembrando que entregamos e cobrimos qualquer oferta!!</h2>
                <button className='contato' onClick={() => {
                    setOpen(true);
                }}>Saiba mais!</button>
            </div>
            <div className="detalheFinal">
                <p>@ 2022 by <a href="https://www.linkedin.com/in/matheus-matos-1a523221b/">Matheus Matos</a></p>
            </div>
            <Collapse in={open}>
              <Alert 
                className="alertSobre"
                action={
                  <IconButton onClick={() => setOpen(false)}>
                    x
                  </IconButton>
                }
              > Obrigado pelo interesse!
              </Alert>
            </Collapse>
        </div>
    );
};

export default About;