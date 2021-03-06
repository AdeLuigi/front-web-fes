import React, {useEffect, useState} from 'react'
import { ReactSVG } from 'react-svg';
import {ReactComponent as ReactLogo} from './work.svg';
import {Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import api from '../api/api'
import {useHistory} from 'react-router-dom'
import {Container, Input,ButtonUI,} from './styles';

export default function Cadastro() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    let history = useHistory();

    async function login() {
        const {data} = await api.post('/cadastro', {
            email,
            password,
          })

          if(!data.error){
            history.push("/vaga",{
                data
            });
            localStorage.setItem('userData', JSON.stringify(data))

          }else{
              setError(true)
              setErrorMessage(data.error)
          }

        console.log('login', data)
    }

    return (
        <Container>
            <ReactLogo height={350} width={350}/>
            <div style={{display:'flex',width:'80%', flexDirection:'column'}}>
            <Input 
                name="email" 
                onChange={item => setEmail(item.target.value)} placeholder="Email"
            />
            <Input 
                name="password" 
                onChange={item => setPassword(item.target.value)} placeholder="Senha"
            />
            <ButtonUI style={{marginTop:25, borderRadius:15, backgroundColor:'#4c45b2', color:'#FFF', paddingLeft:10, paddingRight:10}} variant="contained" onClick={login}>Cadastrar-se</ButtonUI>
            
            {error && (
                <Snackbar open={error} autoHideDuration={6000} >
                    <MuiAlert onClose={() => setError(false)} severity="error">
                        {errorMessage}
                    </MuiAlert>
                </Snackbar>
            )}
            </div>
        </Container>
    )
}