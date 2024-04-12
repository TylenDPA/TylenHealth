import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link

import './ProfilePage.css'; // Importe o CSS correspondente
import logo from './Logo_TYH.png'; // Importe o logo correto
import perfilIcon from './perfilIcon.png'; // Importe o ícone de perfil

function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Seu nome aqui');
    const [cpf, setCpf] = useState('Seu CPF aqui');
    const [susNumber, setSusNumber] = useState('Seu número do cartão SUS aqui');
    const [dob, setDob] = useState('Sua data de nascimento aqui');
    const [isOpen, setIsOpen] = useState(false); // Adicione isOpen como uma variável de estado

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        // Aqui você pode adicionar a lógica para salvar as informações editadas
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
                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>Menu</button>
                <nav className={`nav-container ${isOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        <li><Link to="/HomePage">Página Inicial</Link></li>
                        <li><Link to="/SearchResultsPage">Resultados da Pesquisa</Link></li>
                        <li><Link to="/DetailPage">Detalhes</Link></li>
                        <li><Link to="/HealthInfoPage">Informações de Saúde</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="perfil-title">
                <h1>MEU PERFIL</h1>
            </div>

            <div className="homepage-container">
                <div className="profile-container">
                    <div className="profile-block">
                        <div className="profile-img">
                            <img src="https://s2-gshow.glbimg.com/Xj41EeebqHaXpMWprDtx4lKm0LA=/0x0:1661x921/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/U/I/rnWTmlTRCTmLYvOI2daQ/7.png" alt="Foto de Perfil" />
                        </div>
                        <div className="profile-info">
                            <div className="profile-item">
                                <label>Nome:</label>
                                {isEditing ? (
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                ) : (
                                    <p>{name}</p>
                                )}
                            </div>
                            <div className="profile-item">
                                <label>CPF:</label>
                                {isEditing ? (
                                    <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                                ) : (
                                    <p>{cpf}</p>
                                )}
                            </div>
                            <div className="profile-item">
                                <label>Cartão do SUS:</label>
                                {isEditing ? (
                                    <input type="text" value={susNumber} onChange={(e) => setSusNumber(e.target.value)} />
                                ) : (
                                    <p>{susNumber}</p>
                                )}
                            </div>
                            <div className="profile-item">
                                <label>Data de Nascimento:</label>
                                {isEditing ? (
                                    <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
                                ) : (
                                    <p>{dob}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    {isEditing ? (
                        <button className="save-button" onClick={handleSaveClick}>Salvar</button>
                    ) : (
                        <button className="edit-button" onClick={handleEditClick}>Editar</button>
                    )}
                </div>

                <div className="site-info">
                    <h2 className='bloco1'>Histórico de Pesquisa</h2>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                </div>
            </div>

            <footer className="footer">
                <p>&copy; 2024 Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default ProfilePage;
