import { Alert, Collapse, FormControl, Grid, IconButton, InputLabel, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import InfoIcon from '@mui/icons-material/Info';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const Help = () => {
    const [open, setOpen] = useState(false);
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <p className="caminho">Menu | Ajuda</p>
            <h1 className="tituloAjuda">Olá, como podemos ajudar você?</h1>
            <h2 className="subtituloAjuda">Algumas coias que você pode fazer por aqui</h2>
            <Box sx={{ width: 600, height: 280 }} className="boxAjuda">
              <Grid container rowSpacing={3} columnSpacing={{ xs: 11, sm: 3, md: 9 }}>
                <Grid item xs={6}>
                    <Item>
                        <ProductionQuantityLimitsIcon />
                        &nbsp;
                        Buscar produtos
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <ContactSupportIcon />
                        &nbsp;
                        Entrar em contato
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <InfoIcon />
                        &nbsp;
                        Saber sobre nós
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <EventAvailableIcon />
                        &nbsp;
                        Disponibilidade
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <SupportAgentIcon />
                        &nbsp;
                        Suporte
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <DeveloperModeIcon />
                        &nbsp;
                        Matheus Matos
                    </Item>
                </Grid>
              </Grid>
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '65ch' },
              }}
              noValidate
              autoComplete="off"
              className="boxAjuda"
            >   
                <h2 className="ajudaFinal">Nos ajude com sugestões:</h2>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Sugestões</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      label="Sugestões"
                    />
                </FormControl>
            </Box>
            <div className="areaBtn">
              <a className="botao" onClick={() => setOpen(true)}>Enviar</a>
            </div>
            <p className="detalheFinalAjuda">@ 2022 by <a href="https://www.linkedin.com/in/matheus-matos-1a523221b/">Matheus Matos</a></p>
            <Collapse in={open}>
              <Alert 
                className="alertHelp"
                action={
                  <IconButton onClick={() => setOpen(false)}>
                    x
                  </IconButton>
                }
              > Sugestão enviada com sucesso!
              </Alert>
            </Collapse>
        </div>
    );
};

export default Help;