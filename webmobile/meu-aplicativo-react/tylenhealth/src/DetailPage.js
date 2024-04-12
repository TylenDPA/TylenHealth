import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link

import './DetailPage.css';
import logo from './Logo_TYH.png'; // Importe o logo correto
import perfilIcon from './perfilIcon.png'; // Importe o ícone de perfil

function DetailPage() {
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
          <div className="logo-background"> {/* Adicione um contêiner para o bloco branco */}
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
        <h2 className='bloco1'>Medicamentos</h2>
        <div className="site-info">
          <img className='img1' src="https://cdn1.staticpanvel.com.br/produtos/15/111839-15.jpg" alt="Paracetamol" />
          <ul>
            <li className='med1'>Paracetamol</li>
            <li>Descrição: Analgésico e antipirético utilizado para aliviar dores leves a moderadas e reduzir a febre.</li>
            <li>Preço: R$ 10,00 </li>
            <li>Recomendação de especialista: Comum para dores de cabeça e febre, mas consulte um médico antes de usar em caso de condições médicas específicas</li>
          </ul>
        </div>
        <div className="Remedio">
          <img className='img2' src="https://ictq.com.br/images/Rivotril-foi-o-medicamento-controlado-mais-vendido-em-2020.jpg" alt="Rivotril" />
          <ul>
            <li className='med1'>Rivotril</li>
            <li>Descrição: Medicamento benzodiazepínico usado para tratar ansiedade, convulsões e distúrbios do sono</li>
            <li>Preço: R$ 25,00 </li>
            <li>Recomendação de especialista: Use conforme prescrição médica para evitar dependência e efeitos colaterais.</li>
          </ul>
        </div>

        <div className="Remedio">
          <img className='img2' src="https://drogariacristal.com/media/catalog/product/cache/dc75f304252411b8c602e1e96d99390d/i/b/ibu.jpg" alt="Ibuprofeno" />
          <ul>
            <li className='med1'>Ibuprofeno</li>
            <li>Descrição: Anti-inflamatório, analgésico e antipirético utilizado para aliviar dores e inflamações.</li>
            <li>Preço: R$ 15,00 </li>
            <li>Recomendação de especialista: Eficaz para dores musculares e inflamações, mas evite seu uso prolongado sem orientação médica devido aos possíveis efeitos colaterais.</li>
          </ul>
        </div>

        <div className="Remedio">
          <img className='img2' src="https://www.drogariaminasbrasil.com.br/media/product/9e6/dipirona-monoidratada-1g-com-10-comprimidos-generico-prati-donaduzzi-ed2.jpg" alt="Dipirona" />
          <ul>
            <li className='med1'>Dipirona</li>
            <li>Analgésico e antipirético utilizado para aliviar dores e febres.</li>
            <li>Preço: R$ 5,00 </li>
            <li> Eficaz para febres e dores, mas não deve ser usado em caso de alergia à dipirona.</li>
          </ul>
        </div>

        <h2 className='bloco2'>Farmacias</h2>
        <div className="farma">
          <img className='img2' src="https://upload.wikimedia.org/wikipedia/commons/7/77/Logo_drogasil.png" alt="Drogasil" />
          <ul>
            <li className='med1'>Drogasil</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus convallis leo, eget commodo nulla rutrum non. Nullam id nisl felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer in semper purus. Integer auctor justo sed tortor efficitur, ut vehicula urna facilisis. Proin nec dolor quis magna eleifend cursus.</li>
          </ul>
        </div>
        <div className="farma">
          <img className='img2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlW7cetJcSfLuoRcPxVeshiEct89tSBDMaTIS1CcVrw&s" alt="Farma Conde" />
          <ul>
            <li className='med1'>Farma Conde</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus convallis leo, eget commodo nulla rutrum non. Nullam id nisl felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer in semper purus. Integer auctor justo sed tortor efficitur, ut vehicula urna facilisis. Proin nec dolor quis magna eleifend cursus.</li>
          </ul>
        </div>

        <div className="farma">
          <img className='img2' src="https://grandesnomesdapropaganda.com.br/wp-content/uploads/2021/05/Ultrafarma.jpg" alt="Ultrafarma" />
          <ul>
            <li className='med1'>Ultrafarma</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus convallis leo, eget commodo nulla rutrum non. Nullam id nisl felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer in semper purus. Integer auctor justo sed tortor efficitur, ut vehicula urna facilisis. Proin nec dolor quis magna eleifend cursus.</li>
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

export default DetailPage;
