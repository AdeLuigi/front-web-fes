import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import './style.css';
import {Backdrop, Divider} from '@material-ui/core'
import api from './api/api'
import { BoxContainer, ButtonList, ButtonCandidate, Input, ModalShow } from './styles'

export default function App(props) {

  const userData = JSON.parse(localStorage.getItem('userData'));

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [warn, setWarn] = React.useState(false);
  const [title, setTitle] = React.useState(false);
  const [jobs, setJobs] = React.useState([]);
  const [description, setDescription] = React.useState(false);
  const [schedule, setHour] = React.useState(false);
  const [city, setCity] = React.useState(false);
  const [district, setDistrict] = React.useState(false);
  const [wage, setWage] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    console.log('schedule', schedule)

  }, [schedule]);

  useEffect(() => {
    async function getSchedules(){
      const data = await api.get('/vaga')
      setJobs(data.data)
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
    if (
      title != '' &&
      description != '' &&
      schedule != '' &&
      city != '' &&
      district != '' &&
      wage != ''
    ) {

      const { data } = await api.post('/vaga',{
        title, description, schedule, city, district, wage
      })
      console.log('jobsss', data)
      if(data){
        setJobs([...jobs, data]);
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

  function handleClick(id) {
    return Swal.fire({
      title: 'Quer se candidatar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, quero!'
    }).then(async (result) => {
      if (result.isConfirmed) {

        const {data} = await api.put(`/vaga/${id}`, {
          userId: userData._id
        })

        if(data){
          const newJobs = jobs.map((item) => {
            if(data._id == item._id){
              return data
            }
            return item
          })
          setJobs(newJobs)

          Swal.fire('Sucesso!', 'Você se candidatou.', 'success');
        }

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
        <div className="createPost">
          <form>
            <label className="labelInput">

              <Input
                type="text"
                placeholder="Titulo"
                name="title"
                style={{margin:0}}
                onChange={item => setTitle(item.target.value)}
              />
            </label>
            <label className="labelInput">
              <Input
              placeholder="Descrição"
                type="text"
                name="description"
                style={{margin:0}}
                onChange={item => setDescription(item.target.value)}
              />
            </label>
            <label className="labelInput">
              <Input
                placeholder="Horas de Trabalho por dia"
                type="text"
                name="schedule"
                style={{margin:0}}
                onChange={item => setHour(item.target.value)}
              />
            </label>
            <label className="labelInput">
              <Input
                placeholder="Cidade"
                type="text"
                name="city"
                style={{margin:0}}
                onChange={item => setCity(item.target.value)}
              />
            </label>
            <label className="labelInput">
              <Input
                placeholder="Bairro"
                type="text"
                name="district"
                style={{margin:0}}
                onChange={item => setDistrict(item.target.value)}
              />
            </label>
            <label className="labelInput">
              <Input
                placeholder="Salário"
                type="text"
                name="wage"
                style={{margin:0}}
                onChange={item => setWage(item.target.value)}
              />
            </label>
            <ButtonList style={{height:45, backgroundColor:'#4c45b2', color:'#FFF'}} variant="contained" type="button" onClick={sendForm} >Cadastrar Vaga</ButtonList>
          </form>
        </div>
      </ModalShow>
      <div className="botao" >
        <ButtonList style={{backgroundColor:'#4c45b2', color:'#FFF', width:'100%', marginRight:8, marginLeft:8}} variant="contained" onClick={openModal}>Publicar uma nova vaga</ButtonList>
      </div>
        {jobs.map(item => (
          <div style={{display:'flex', flex:1, alignContent:'center', justifyContent:'center', paddingLeft:16, paddingRight:16}}>
          <BoxContainer style={{width:350}} key={item._id} boxShadow={3}>
            <div className="informations">
              <h4 style={{color:'#4c45b2'}}> {item.title.toUpperCase()}</h4>
              <div style={{width:'95%', marginTop:8, marginBottom:8}}>
              <Divider  />
              </div>
              <p className="descricao" style={{marginBottom:8}}> {item.description} </p>
              <p className="schedule">
                {' '}
                <b style={{color:'#4c45b2'}}>Horas por dia</b>: {item.schedule}
              </p>
              <p className="schedule">
                <b style={{color:'#4c45b2'}}>Local</b>: {item.city}, {item.district}
              </p>
              <p className="schedule">
                <b style={{color:'#4c45b2'}}>Salário</b>: {item.wage}
              </p>
            </div>
            <div className="buttons">
              <ButtonList
                style={{marginRight:8, marginBottom:10, color: "#b71c1c"}}>
                Denunciar
              </ButtonList>
              <div>
              {typeof item.candidates  !== 'undefined' ? ((item.candidates.find((candidato) => {
                  if(candidato != null && (candidato == userData._id)){
                    return candidato
                  }
              })) == userData._id) ?  <ButtonList
                style={{marginRight:8, marginBottom:10, color: "#33691e"}}>
                Candidatado
              </ButtonList>: <ButtonCandidate 
                    style={{marginRight:8, marginBottom:10, backgroundColor:'#4c45b2', color:'#FFF'}}
                  variant="contained" onClick={() => handleClick(item._id)}>
                    Se candidatar
                  </ButtonCandidate> : <ButtonCandidate 
                    style={{marginRight:8, marginBottom:10, backgroundColor:'#4c45b2', color:'#FFF'}}
                  variant="contained" onClick={() => handleClick(item._id)}>
                    Se candidatar
                  </ButtonCandidate> }
              
              </div>
            </div>
          </BoxContainer>
          </div>
        ))}
    </>
  );
}
