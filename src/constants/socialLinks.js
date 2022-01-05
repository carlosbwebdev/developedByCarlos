import React from 'react';
import {
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
} from 'react-icons/fa';

const data = [
  {
    id: 1,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: 'https://www.instagram.com',
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: 'https://www.linkedin.com/in/carlos-barros-89806a206/',
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: 'https://twitter.com/Carlos_webdev',
  },
  {
    id: 4,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: 'https://github.com/carlosbwebdev',
  },
];
const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" id="socialLinksHover">
        {link.icon}
      </a>
    </li>
  );
});

const styleClass = ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ''}`}>{links}</ul>
  );
};

export default styleClass;

// export default ({ styleClass }) => {
//   return (
//     <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
//   );
// };
