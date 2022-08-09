import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import './CadastroTema.css';

function CadastroTema() {
    return (
        <Container maxWidth="sm" className="topo">
            <form>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    );
}

export default CadastroTema;