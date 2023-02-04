import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert, Collapse, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Comment = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
        <p>Menu | Contato</p>
        <div className="tituloContato">
          <h1>Entre em contato</h1>
        </div>
        <Form className="formContato">
            <div>&nbsp;</div>
            <Form.Label className="nomeContato">Nome:</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="name" placeholder="Insira o nome" className="inputName"/>
            </Form.Group>
            <Form.Label className="emailContato">Email:</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Insira o email" className="inputEmail"/>
            </Form.Group>
            <Form.Label className="telefoneContato">Telefone:</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="tel" placeholder="Insira o telefone" className="inputTelefone"/>
            </Form.Group>
            <Form.Label className="enderecoContato">Endereço:</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicLocation">
              <Form.Control type="location" placeholder="Insira o endereço" className="inputEndereco"/>
            </Form.Group>
            <Button className="buttonContato" variant="outlined" onClick={() => setOpen(true)}>
              Enviar
            </Button>
        </Form>
        <p className="detalheFinalContato">@ 2022 by <a href="https://www.linkedin.com/in/matheus-matos-1a523221b/">Matheus Matos</a></p>
        <Collapse in={open}>
          <Alert 
            className="alert"
            action={
              <IconButton onClick={() => setOpen(false)}>
                x
              </IconButton>
            }
          > Dados enviados com sucesso!
          </Alert>
        </Collapse>
    </div>
  );
}

export default Comment;