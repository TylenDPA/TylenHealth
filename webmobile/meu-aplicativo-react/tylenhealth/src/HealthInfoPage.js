import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link

import './HealthInfoPage.css';
import logo from './Logo_TYH.png'; // Importe o logo correto
import perfilIcon from './perfilIcon.png'; // Importe o ícone de perfil

function HealthInfoPage() {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="homepage-container">
        <h2 className='bloco1'>Noticias</h2>
        <div className="site-info">
          <img className='img1' src="https://static.tuasaude.com/media/article/pc/dw/dengue_63752_l.jpg" alt="Imagem Notícia 1" />
          <ul>
            <li className='med1'>Dengue</li>
            <li>Autoridades de saúde em todo o país estão emitindo alertas sobre um aumento preocupante nos casos de dengue em diversas regiões. O surto da doença tem sido especialmente severo devido às condições climáticas favoráveis ​​e à proliferação do mosquito Aedes aegypti, transmissor do vírus da dengue.</li>
          </ul>
        </div>
        <div className="site-info">
          <img className='img2' src="https://crato.ce.gov.br/fotos/4026/Capa4026.jpg" alt="Imagem Remédio 1" />
          <ul>
            <li className='med1'>Covid</li>
            <li>Os efeitos pós-COVID-19, também conhecidos como "COVID longo" ou "COVID prolongado", podem incluir fadiga extrema, falta de ar, dores musculares e articulares, dificuldade de concentração, perda de olfato e paladar, ansiedade e depressão. Esses sintomas podem persistir por semanas ou até meses após a infecção inicial e afetar pessoas de todas as idades, incluindo aquelas que tiveram casos leves da doença.</li>
          </ul>
        </div>

        <div className="site-info">
          <img className='img2' src="https://www.drogariaminasbrasil.com.br/media//blog/thumbnail/6/2/6256d3ebebf21.jpg" alt="Imagem Remédio 2" />
          <ul>
            <li className='med1'>Saúde</li>
            <li>Estratégias para promover um estilo de vida saudável, incluindo uma dieta equilibrada, exercícios físicos regulares, gerenciamento do estresse, cuidados com a saúde mental, relacionamentos significativos, evitando comportamentos de risco e fazendo check-ups médicos regulares.</li>
          </ul>
        </div>

        <h2 className='bloco2'>Dicas de Saúde</h2>
        <div className="farma">
          <img className='img2' src="https://www.assai.com.br/sites/default/files/styles/blog_destaque/public/blog/alimentacao_saudavel.jpg?itok=MN_S3u8-" alt="Imagem Farmácia 1" />
          <ul>
            <li className='med1'>Alimentação Balanceada</li>
            <li>Consumir uma variedade de alimentos ricos em nutrientes, como frutas, vegetais, proteínas magras e grãos integrais, pode fortalecer o sistema imunológico e ajudar a prevenir doenças.</li>
          </ul>
        </div>

        <div className="farma">
          <img className='img2' src="https://t.ctcdn.com.br/hxc7_PfRmDye1q4WzrVxw_GVrCc=/640x360/smart/i538175.jpeg" alt="Imagem Farmácia 2" />
          <ul>
            <li className='med1'>Durma o Suficiente</li>
            <li>O sono adequado é crucial para a saúde do sistema imunológico. Tente manter uma rotina de sono consistente e evitar perturbações no sono, como cafeína antes de dormir ou eletrônicos no quarto.</li>
          </ul>
        </div>

        <div className="farma">
          <img className='img2' src="https://www.ufms.br/wp-content/uploads/2023/06/8e94623a-bd03-452a-8891-cf9c3aa8c2a3.jpeg" alt="Imagem Farmácia 3" />
          <ul>
            <li className='med1'>Vacinas</li>
            <li>Além da vacina contra a gripe, certifique-se de estar atualizado com outras vacinas recomendadas para a sua faixa etária e condições de saúde.</li>
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

export default HealthInfoPage;
