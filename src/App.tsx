
import ServiceCard from './components/ServiceCard';
import { SpillIcon, BinIcon, SoilIcon, EyeIcon } from './components/Icons';
import './App.css';

import Footer from './components/Footer';
import logo from './assets/logo-val-dor.png';

const services = [
  {
    title: 'Plateforme Déversement',
    url: 'https://plateforme-deversement-vvd.web.app/',
    icon: <SpillIcon />,
    description: 'Signalement et gestion des déversements accidentels.'
  },
  {
    title: 'Gestion des MDR',
    url: 'https://ahoken50.github.io/Gestion-des-MDR/',
    icon: <BinIcon />,
    description: 'Gestion des Matières Dangereuses Résiduelles.'
  },
  {
    title: 'Registre terrain contaminé',
    url: 'https://ahoken50.github.io/R-gistre-terrain-contamin-/',
    icon: <SoilIcon />,
    description: 'Consultation du registre des terrains contaminés.'
  },
  {
    title: 'Vigie verte Val-d\'Or',
    url: 'https://ahoken50.github.io/Vigie-verte-Valdor/',
    icon: <EyeIcon />,
    description: 'Surveillance et initiatives environnementales.'
  }
];



// ... existing imports ...

function App() {
  return (
    <div className="app-container">
      <header>
        <div className="logo-container">
          <img
            src={logo}
            alt="Ville de Val-d'Or"
            className="city-logo"
          />
        </div>
        <h1>Services Environnementaux</h1>
      </header>

      <main className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            url={service.url}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
