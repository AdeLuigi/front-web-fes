import React from 'react';
import Swal from 'sweetalert2';
import './style.css';
import Modal from 'react-modal';

export default function App() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
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

  function closeModal() {
    setIsOpen(false);
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
              <input type="text" name="title" />
            </label>
            <label class="labelInput">
              Descricao:
              <input type="text" name="description" />
            </label>
            <label class="labelInput">
              Horário:
              <input type="text" name="hour" />
            </label>
            <label class="labelInput">
              Local:
              <input type="text" name="local" />
            </label>
            <label class="labelInput">
              Salário:
              <input type="text" name="wage" />
            </label>
            <input type="submit" onClick={closeModal} value="Submit" />
          </form>
        </div>
      </Modal>
      <button onClick={openModal}>Open Modal</button>
      <div class="mainDiv">
        <div class="post">
          <div class="informations">
            <h4> Estágio de desenvolvimento </h4>
            <p class="descricao">
              {' '}
              Lorem Ipsum is simply dummy text of the printg and typesetting
              industry. Lorem Ipsum has been{' '}
            </p>
            <p class="hour">
              {' '}
              <b>Horário</b>: 00:00 até 23:59
            </p>
            <p class="local">
              <b>Local</b>: Centro, Rio de janeiro
            </p>
            <p class="local">
              <b>Salário</b>: a combinar rsrsrs
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
        <div class="post">
          <div class="informations">
            <h4> Estágio de desenvolvimento </h4>
            <p class="descricao">
              {' '}
              Lorem Ipsum is simply dummy text of the printg and typesetting
              industry. Lorem Ipsum has been{' '}
            </p>
            <p class="hour">
              {' '}
              <b>Horário</b>: 00:00 até 23:59
            </p>
            <p class="local">
              <b>Local</b>: Centro, Rio de janeiro
            </p>
            <p class="local">
              <b>Salário</b>: a combinar rsrsrs
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
        </div>{' '}
        <div class="post">
          <div class="informations">
            <h4> Estágio de desenvolvimento </h4>
            <p class="descricao">
              {' '}
              Lorem Ipsum is simply dummy text of the printg and typesetting
              industry. Lorem Ipsum has been{' '}
            </p>
            <p class="hour">
              {' '}
              <b>Horário</b>: 00:00 até 23:59
            </p>
            <p class="local">
              <b>Local</b>: Centro, Rio de janeiro
            </p>
            <p class="local">
              <b>Salário</b>: a combinar rsrsrs
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
        </div>{' '}
        <div class="post">
          <div class="informations">
            <h4> Estágio de desenvolvimento </h4>
            <p class="descricao">
              {' '}
              Lorem Ipsum is simply dummy text of the printg and typesetting
              industry. Lorem Ipsum has been{' '}
            </p>
            <p class="hour">
              {' '}
              <b>Horário</b>: 00:00 até 23:59
            </p>
            <p class="local">
              <b>Local</b>: Centro, Rio de janeiro
            </p>
            <p class="local">
              <b>Salário</b>: a combinar rsrsrs
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
        </div>{' '}
        <div class="post">
          <div class="informations">
            <h4> Estágio de desenvolvimento </h4>
            <p class="descricao">
              {' '}
              Lorem Ipsum is simply dummy text of the printg and typesetting
              industry. Lorem Ipsum has been{' '}
            </p>
            <p class="hour">
              {' '}
              <b>Horário</b>: 00:00 até 23:59
            </p>
            <p class="local">
              <b>Local</b>: Centro, Rio de janeiro
            </p>
            <p class="local">
              <b>Salário</b>: a combinar rsrsrs
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
      </div>
    </>
  );
}
