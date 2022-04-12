import React from 'react'
import Head from 'next/head';
import styled from "styled-components";
import { Avatar, IconButton, Button } from "@material-ui/core";
import { auth,provider } from '../firebase';

function Login() {

    const signin = ()=>{
        auth.signInWithPopup(provider).catch(alert);

    }
    return (
        <div>
            <Container>
                <Head>
                    <title>Login</title>
                </Head>

                <LoginContainer>
                    <Logo 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1021px-WhatsApp.svg.png"
                    />
                    <Button onClick={signin} variant="outlined">Sign in with Google</Button>

                </LoginContainer>

            </Container>
        </div>
    )
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
`;

const LoginContainer = styled.div`
    padding:100px;
    display:flex;
    background-color:white;
    flex-direction:column;
    border-radius:5px;
    box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7)

`;
const Logo = styled.img`
    height:200px;
    width:200px;
`;
