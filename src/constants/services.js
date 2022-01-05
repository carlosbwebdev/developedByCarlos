import React from 'react';
import { FaCode, FaMobileAlt, FaPencilRuler } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaPencilRuler className="service-icon" />,
    title: 'web design',
    text: `Com a utilização de ferramentas como o Adobe Photoshop, Adobe Illustrator Figma ou Adobe XD, crio Designs perfeitos para o seu negócio. Permitindo a visualização do Website, antes de este estar totalmente desenvolvido e hospedado.`,
  },
  {
    id: 2,
    icon: <FaCode className="service-icon" />,
    title: 'desenvolvimento web',
    text: `Crio e desenvolvo Web Sites utilizando tecnologias como, HTML, CSS e JavaScript. Podendo assim criar Web Sites Dinâmicos, Portfólios, E-commerce e Blogs`,
  },
  {
    id: 3,
    icon: <FaMobileAlt className="service-icon" />,
    title: 'Design Responsivo',
    text: `Nos dias que correm, visualizamos Websites em vários dispositivos tais como, telemóveis, computadores e tablets. Que por sua vez tem telas de diferentes tamanhos. Através do design responsivo garanto que os web sites são visualizados na perfeição em todos esses dispositivos. `,
  },
];

export default services;
