import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import './Navbar.css';

function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let history = useNavigate();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        history('/login')
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className='cursor nome'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        <Link to='./home' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='./posts' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='./temas' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='./formularioTema' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar Tema
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/login' onClick={goLogout} className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;