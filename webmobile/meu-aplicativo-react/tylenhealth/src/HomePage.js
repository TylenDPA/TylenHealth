import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link

import './HomePage.css';
import logo from './Logo_TYH.png'; // Importe o logo correto
import perfilIcon from './perfilIcon.png'; // Importe o ícone de perfil

function HomePage() {
  const [isOpen, setIsOpen] = useState(false); // Adicione isOpen como uma variável de estado

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      search(event.target.value);
    }
  };

  const search = (term) => {
    console.log('Pesquisando por:', term);
    // adicionar a lógica real de pesquisa
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <div className="logo-background"> {/* contêiner para o bloco branco */}
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </div>
        <button className="perfil-button">
          <img src={perfilIcon} alt="Ícone de Perfil" className="perfil-icon" />
        </button>
        <button className="menu-toggle" onClick={toggleNav}>Menu</button>
        <nav className={`nav-container ${isOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/HomePage">Página Inicial</Link></li>
            <li><Link to="/SearchResultsPage">Resultados da Pesquisa</Link></li>
            <li><Link to="/DetailPage">Detalhes</Link></li>
            <li><Link to="/HealthInfoPage">Informações de Saúde</Link></li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo principal da página */}
      <div className="pesquisa">
        <input className="search" type="text" placeholder="Digite aqui para pesquisar..." onKeyPress={handleKeyPress} />
      </div>

      <div className="homepage-container">

        <div className="site-info">
          <h2 className='bloco1'>Nossos serviços</h2>
          <ul>
            <li>Encontre produtos de qualidade</li>
            <li>Localize farmácias e prontos-socorros próximos</li>
            <li>Agende consultas médicas online</li>
          </ul>
        </div>

        <div className="resource">
          <h2 className='bloco2'>Recursos Recentes:</h2>
          <ul>
            <li>Nova Funcionalidade de Pesquisa</li>
            <p>Agora você pode pesquisar por produtos com mais facilidade usando nossa nova funcionalidade de pesquisa avançada.</p>
          </ul>
        </div>

        <div className="resource">
          <h2 className='bloco3'>Atualização de Serviço</h2>
          <p>Atualizamos nossos serviços de consulta médica online para fornecer uma experiência mais intuitiva e conveniente para os usuários.</p>
        </div>
        <div className='resource1'>
          <h2 className='bloco4'>Sobre</h2>
          <ul>
            <li><strong>Plataforma HealTylen:</strong>
              <ul>
                <li>Projeto destinado a auxiliar comunidades locais.</li>
                <li>Objetivo de facilitar o acesso a serviços de saúde essenciais.</li>
              </ul>
            </li>
            <li><strong>Acesso em áreas remotas:</strong>
              <ul>
                <li>Conecta residentes a farmácias e clínicas próximas.</li>
                <li>Possibilidade de agendar consultas médicas online.</li>
              </ul>
            </li>
            <li><strong>Suporte a grupos vulneráveis:</strong>
              <ul>
                <li>Atendimento a idosos, pessoas com deficiência e indivíduos com dificuldades financeiras.</li>
                <li>Garantia de acesso a medicamentos, atendimento médico urgente e informações sobre saúde.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <footer className="footer">
        {/* Rodapé da página */}
        <p>&copy; 2024 Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default HomePage;
