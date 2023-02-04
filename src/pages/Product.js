import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import img from "../img/lajota.jpeg";
import img1 from "../img/piso.jpeg";
import img2 from "../img/furadeira.jpeg";
import img3 from "../img/parafuso.jpeg";
import img4 from "../img/telha.jpeg";
import img5 from "../img/argamassa.jpeg";
import img6 from "../img/martelo.jpeg";
import img7 from "../img/porta.jpeg";
import { Button } from "@mui/material";

const Product= () => {
    const itemData = [
        {
          img: img,
          title: 'Lajota',
          subtitle: 'R$ 50,00'
        },
        {
          img: img1,
          title: 'Piso',
        },
        {
          img: img2,
          title: 'Furadeira',
        },
        {
          img: img3,
          title: 'Parafuso',
        },
        {
          img: img4,
          title: 'Telha',
        },
        {
          img: img5,
          title: 'Argamassa',
        },
        {
          img: img6,
          title: 'Martelo',
        },
        {
          img: img7,
          title: 'Porta',
        },
    ];
    return (
        <div className="box">
            <p className="caminho">Menu | Produtos</p>
            <h1 className="tituloProdutos">Produtos</h1>
            <ImageList sx={{ width: 950, height: 585 }} cols={4} gap={4} className="produtos"> 
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                  />
                  <ImageListItemBar
                    title={
                      <Button color="primary">{item.title}</Button>
                    }
                    position="below"
                    actionIcon= {
                      <Button variant="contained" color="success" className="produtoBotao">
                        Comprar
                      </Button>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
        </div>
    );
};

export default Product;