import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import './style.css';
import {Backdrop} from '@material-ui/core'
import api from './api/api'
import { BoxContainer, ButtonList, ButtonCandidate, Input, ModalShow } from './styles'

export default function App(props) {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [warn, setWarn] = React.useState(false);
  const [title, setTitle] = React.useState(false);
  const [jobs, setJobs] = React.useState([]);
  const [description, setDescription] = React.useState(false);
  const [hour, setHour] = React.useState(false);
  const [city, setCity] = React.useState(false);
  const [district, setDistrict] = React.useState(false);
  const [wage, setWage] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    async function getSchedules(){
      const data = await api.get('/vaga')
      setJobs(data.data)
      console.log('schedules',data.data)
    }
    getSchedules();
  }, []);
 
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  function closeModal(event) {
    setTitle('');
    setDescription('');
    setHour('');
    setDistrict('');
    setWage('');
    setWage('');
    setIsOpen(false);
  }

  async function sendForm(event) {
    console.log(title, description, hour, city, district, wage);
    if (
      title != '' &&
      description != '' &&
      hour != '' &&
      city != '' &&
      district != '' &&
      wage != ''
    ) {

      const { data } = await api.post('/vaga',{
        title, description, hour, city, district, wage
      })

      if(data){
        setJobs([...jobs, { title, description, hour, city, district, wage }]);
        setTitle('');
        setDescription('');
        setHour('');
        setCity('');
        setDistrict('');
        setWage('');
        setIsOpen(false);
      }


    } else {
      alert('Todos os campos devem ser preenchidos');
    }
  }

  function handleClick(e) {
    return Swal.fire({
      title: 'Quer se candidatar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, quero!'
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Sucesso!', 'Você se candidatou.', 'success');
      }
    });
  }

  function handleClickDenunciation(e) {
    return Swal.fire({
      title: 'Quer denunciar essa vaga?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, quero!'
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Sucesso!', 'Você denunciou essa vaga.', 'success');
      }
    });
  }

  return (
    <>
      <ModalShow
        open={modalIsOpen}
        onClose={closeModal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',}}
    closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div class="createPost">
          <form>
            <label class="labelInput">

              <Input
                type="text"
                placeholder="Titilo"
                name="title"
                onChange={item => setTitle(item.target.value)}
              />
            </label>
            <label class="labelInput">
              <Input
              placeholder="Descricao"
                type="text"
                name="description"
                onChange={item => setDescription(item.target.value)}
              />
            </label>
            <label class="labelInput">
              <Input
                placeholder="Horário"
                type="text"
                name="hour"
                onChange={item => setHour(item.target.value)}
              />
            </label>
            <label class="labelInput">
              <Input
                placeholder="Cidade"
                type="text"
                name="city"
                onChange={item => setCity(item.target.value)}
              />
            </label>
            <label class="labelInput">
              <Input
                placeholder="Bairro"
                type="text"
                name="district"
                onChange={item => setDistrict(item.target.value)}
              />
            </label>
            <label class="labelInput">
              <Input
                placeholder="Salário"
                type="text"
                name="wage"
                onChange={item => setWage(item.target.value)}
              />
            </label>
            <ButtonList style={{height:45}} variant="contained" type="button" onClick={sendForm} >Cadastrar Vaga</ButtonList>
          </form>
        </div>
      </ModalShow>
      <div class="botao">
        <ButtonList variant="contained" onClick={openModal}>Publicar uma nova vaga</ButtonList>
      </div>
        {jobs.map(item => (
          <BoxContainer boxShadow={3}>
            <div class="informations">
              <h4> {item.title}</h4>
              <p class="descricao"> {item.description} </p>
              <p class="hour">
                {' '}
                <b>Horário</b>: {item.schedule}
              </p>
              <p class="local">
                <b>Local</b>: {item.city}, {item.district}
              </p>
              <p class="local">
                <b>Salário</b>: {item.wage}
              </p>
            </div>
            <div class="buttons">
              <ButtonList
                
                style={{marginRight:8, marginBottom:10, color: "#b71c1c"}}
               onClick={handleClickDenunciation}>
                Denunciar
              </ButtonList>
              <div>
              <ButtonCandidate 
                style={{marginRight:16, marginBottom:10, backgroundColor:'#388e3c'}}
              variant="contained" onClick={handleClick}>
                Se candidatar
              </ButtonCandidate>
              </div>
            </div>
          </BoxContainer>
        ))}
    </>
  );
}
