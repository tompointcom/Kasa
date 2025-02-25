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
      >
        <h3 className="dropdown__title">{title}</h3>
        <img 
          src={chevron} 
          alt="chevron" 
          className={`dropdown__arrow ${isOpen ? 'active' : ''}`}
        />
      </button>
      <div className={`dropdown__content ${isOpen ? 'active' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Dropdown;