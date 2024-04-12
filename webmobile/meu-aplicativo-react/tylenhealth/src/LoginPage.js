import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link

import './LoginPage.css'; // Certifique-se de importar o CSS correto
import logo from './Logo_TYH.png'; // Importe o logo correto
import perfilIcon from './perfilIcon.png'; // Importe o ícone de perfil

function LoginPage() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <div className="logo-background">
            {/* Adicione seu logo aqui */}
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </div>
        <button className="perfil-button">
          {/* Adicione o ícone de perfil aqui */}
          <img src={perfilIcon} alt="Ícone de Perfil" className="perfil-icon" />
        </button>
      </header>

      {/* Conteúdo do perfil ou formulário de login */}
      <div className="content">
        {isLoginForm ? (
          <div>
            <h1>Login</h1>
            {/* Adicione os campos de login aqui */}
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button>Logar</button>
            <p>
              Ainda não tem conta?{' '}
              <button onClick={handleToggleForm}>Cadastre-se</button>
            </p>
          </div>
        ) : (
          <div>
            <h1>Cadastro</h1>
            {/* Adicione os campos de cadastro aqui */}
            <input type="text" placeholder="Nome Completo" />
            <input type="text" placeholder="Data de Nascimento" />
            <input type="text" placeholder="CPF" />
            <input type="text" placeholder="Número do Cartão SUS" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button>Cadastrar</button>
            <p>
              Já tem conta?{' '}
              <button onClick={handleToggleForm}>Ir para Login</button>
            </p>
          </div>
        )}
      </div>
      <footer className="footer">
        {/* Rodapé da página */}
        <p>&copy; 2024 Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default LoginPage;
