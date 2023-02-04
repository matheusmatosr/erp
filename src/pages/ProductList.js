import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ProductList = () => {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Lajota', '10/08/2020', '10/11/2090', 24, 'R$ 24,99'),
    createData('Piso 20x20cm', '02/01/2021', '30/09/2050', 37, 'R$ 49,99'),
    createData('Furadeira', '12/01/2022', '20/10/2080', 24, 'R$ 239,00'),
    createData('Telha', '24/12/2022', '28/01/2040', 67, 'R$ 38,75'),
    createData('Argamassa', '15/11/2017', '10/08/2035', 49, 'R$ 50,00'),
    createData('Parafuso', '30/05/2010', '01/10/2040', 49, 'R$ 2,00'),
    createData('Porta', '30/05/2010', '31/12/2070', 49, 'R$ 399,90'),
  ];
  
  
  return (
    <>
      <p className="caminho">Menu | Lista Produtos</p>
      <h1 className='tituloTabela'>Lista de Produtos</h1>
      <h2 className='tituloAuxiliarTabela'>Confira os nossos produtos que estão no estoque em tempo real! Abaixo contém todos produtos listados, caso tenha interesse em algum basta <a href="http://localhost:3000/comment">entrar em contato!</a></h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Produtos disponíveis</StyledTableCell>
              <StyledTableCell align="right">Fabricação</StyledTableCell>
              <StyledTableCell align="right">Validade</StyledTableCell>
              <StyledTableCell align="right">Quantidade</StyledTableCell>
              <StyledTableCell align="right">Preço</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p className="detalheFinalLista">@ 2022 by <a href="https://www.linkedin.com/in/matheus-matos-1a523221b/">Matheus Matos</a></p>
    </>
  );
};

export default ProductList;
  
