import styled from 'styled-components';
import {TextField, Button} from '@material-ui/core'

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 16px;

`;

export const Title = styled.h1`
    font-size: 5rem;
`;

export const Input = styled(TextField)`
    border-radius: 4px;
    width: 100%;
    height: 45px;
    margin: 8px ;
    border: none;
    
`;

export const ButtonUI = styled(Button)`
    width: 100%;
    height: 45px;
    border-radius: 4px;
`;