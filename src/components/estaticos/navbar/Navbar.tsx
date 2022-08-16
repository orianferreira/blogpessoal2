import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from 'react-toastify';
import './Navbar.css';

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token !== "") {
        navbarComponent = <AppBar position="static">
                <Toolbar className='nav-main' >


                    <Grid xs={4}>
                        <Box className="nome-marca">
                            <img src="https://res.cloudinary.com/generation/image/upload/w_350,q_auto,f_auto/brazil/2022/04/Cover-1.png" className='img-nav' height="56px" />
                            <Typography variant="h6" color="inherit">
                                GenQuestions
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid xs={5} className="container">
                        <Box className="nav-link">
                            <Link to='/home' className="link">
                                <Typography variant="h6" color="inherit" className="typography">
                                    Home
                                </Typography>
                            </Link>

                            <Link to='/posts' className="link">
                                <Typography variant="h6" color="inherit" className="typography">
                                    Postagens
                                </Typography>
                            </Link>

                            <Link to='/temas' className="link">
                                <Typography variant="h6" color="inherit" className="typography">
                                    Tema
                                </Typography>
                            </Link>

                            <Link to="/formularioTema" className="link">
                                <Typography variant="h6" color="inherit">
                                    cadastrar tema
                                </Typography>
                            </Link>

                            <Link to='/login' className="link">
                                <Typography color="inherit" className="typography" onClick={goLogout}>
                                    Logout
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Toolbar>
        </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    );
}

export default Navbar;