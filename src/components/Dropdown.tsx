import React, { useState } from "react";
import chevron from "../assets/icons/chevron.svg";
import "../styles/components/_dropdown.scss";

interface DropdownProps {
  title: string;
  content: string;
}

const Dropdown: React.FC<DropdownProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button 
        className={`dropdown__header ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="dropdown-content"
      >
        <h3 className="dropdown__title">{title}</h3>
        <img 
          src={chevron} 
          alt={isOpen ? "Close dropdown" : "Open dropdown"} 
          className={`dropdown__arrow ${isOpen ? 'active' : ''}`}
        />
      </button>
      <div 
        id="dropdown-content"
        className={`dropdown__content ${isOpen ? 'active' : ''}`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Dropdown;