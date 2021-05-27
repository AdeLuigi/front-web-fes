import React from 'react';
import Swal from 'sweetalert2';
import './style.css';
import Modal from 'react-modal';

export default function App() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [warn, setWarn] = React.useState(false);
  const [title, setTitle] = React.useState(false);
  const [jobs, setJobs] = React.useState([
    {
      title: 'Estágio de desenvolvimento',
      description:
        'Lorem Ipsum is simply dummy text of the printg and typesetting industry. Lorem Ipsum has been',
      hour: '00:00 até 23:59',
      local: 'Centro, Rio de janeiro',
      wage: 'a combinar rsrsrs'
    }
  ]);
  const [description, setDescription] = React.useState(false);
  const [hour, setHour] = React.useState(false);
  const [local, setLocal] = React.useState(false);
  const [wage, setWage] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
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
    setIsOpen(false);
  }

  function sendForm(event) {
    console.log(title, description, hour, local, wage);
    if (
      title != '' &&
      description != '' &&
      hour != '' &&
      local != '' &&
      wage != ''
    ) {
      setJobs([...jobs, { title, description, hour, local, wage }]);
      setIsOpen(false);
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

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div class="createPost">
          <form>
            <label class="labelInput">
              Titilo:
              <input
                type="text"
                name="title"
                onChange={item => setTitle(item.target.value)}
              />
            </label>
            <label class="labelInput">
              Descricao:
              <input
                type="text"
                name="description"
                onChange={item => setDescription(item.target.value)}
              />
            </label>
            <label class="labelInput">
              Horário:
              <input
                type="text"
                name="hour"
                onChange={item => setHour(item.target.value)}
              />
            </label>
            <label class="labelInput">
              Local:
              <input
                type="text"
                name="local"
                onChange={item => setLocal(item.target.value)}
              />
            </label>
            <label class="labelInput">
              Salário:
              <input
                type="text"
                name="wage"
                onChange={item => setWage(item.target.value)}
              />
            </label>
            <input type="button" onClick={sendForm} value="Submit" />
          </form>
        </div>
      </Modal>
      <div class="botao">
        <button onClick={openModal}>Publicar uma nova vaga</button>
      </div>
      <div class="mainDiv">
        {jobs.map(item => (
          <div class="post">
            <div class="informations">
              <h4> {item.title}</h4>
              <p class="descricao"> {item.description} </p>
              <p class="hour">
                {' '}
                <b>Horário</b>: {item.hour}
              </p>
              <p class="local">
                <b>Local</b>: {item.local}
              </p>
              <p class="local">
                <b>Salário</b>: {item.wage}
              </p>
            </div>
            <div class="buttons">
              <a onClick={handleClick}>
                <div class="buttonLeft">
                  <p> Denunciar </p>
                </div>
              </a>
              <a onClick={handleClick}>
                <div class="buttonRight">
                  <p>Se candidatar</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
