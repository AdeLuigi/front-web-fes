import React from 'react';
import './style.css';

export default function App() {
  function handleClick(e) {
    alert('manga');
  }

  return (
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
  );
}
