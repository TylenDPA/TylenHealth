import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link

import './SearchResultsPage.css';
import logo from './Logo_TYH.png'; // Importe o logo correto
import perfilIcon from './perfilIcon.png'; // Importe o ícone de perfil

function SearchResultsPage() {
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
    // Aqui você pode adicionar a lógica real de pesquisa
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <div className="logo-background">
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
        <input className="search" type="text" placeholder="Dipirona" onKeyPress={handleKeyPress} />
      </div>

      <div className="homepage-container">
        <div className="site-info">
          <img className='img' src="https://www.drogariaminasbrasil.com.br/media/product/9e6/dipirona-monoidratada-1g-com-10-comprimidos-generico-prati-donaduzzi-ed2.jpg" alt="Imagem de Dipirona" />
          <h2 className='bloco1'>Resultado</h2>
          <ul>
            <li className='textopesquisa'>Metamizol ou dipirona é um medicamento ainda utilizado principalmente como analgésico e antipirético, indicada em caso de dores leves e moderadas, febre e processos inflamatórios, contra indicado para pessoas com alergia ou sensibilidade a dipirona, agranulocitose ou no caso de pessoas gravidas e amamentando.</li>
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

export default SearchResultsPage;
