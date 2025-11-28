import React from 'react';

interface ServiceCardProps {
  title: string;
  url: string;
  icon: React.ReactNode;
  description?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, url, icon, description }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="service-card"
    >
      <div className="icon-container">
        {icon}
      </div>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </a>
  );
};

export default ServiceCard;
