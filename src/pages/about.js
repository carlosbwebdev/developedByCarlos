import React from 'react';
import Layout from '../components/layout';
import * as styles from '../css/about.module.css';
import * as stylesTwo from '../css/title.module.css';
// import Title from '../components/title';
// import ReactMarkdown from 'react-markdown';
// import Skills from '../components/skills';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        title
        description
      }
    }
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  // const { description, title } = nodes[0];
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title="About" />
      <section className={styles.aboutPage} id="aboutPageDark">
        <div className={styles.sectionCenter}>
          <article className={styles.aboutText}>
            <div className={styles.underline}></div>
            {/* <Title title={title} /> */}
            <div className={stylesTwo.sectionTitle} id="titleDark">
              <h2>{t('Sobre Mim')}</h2>
            </div>
            {/* <ReactMarkdown
              children={t(`${description}`)}
              className={styles.desc}
            /> */}
            <div className={styles.desc}>
              <img
                src="https://res.cloudinary.com/doge7vn6i/image/upload/v1625655597/IMG_20210707_103928_1__adobespark_po9ouz.png"
                alt=""
              />

              <p>
                {t(
                  'Olá o meu nome é Carlos Barros, sou freelancer em desenvolvimento web, vivo no norte de Portugal, tenho 31 anos. Tenho como objetivo profissional, a criação de E-commerce, permitindo abertura de novas lojas digitais ou renovações de já existentes, criação de portfólios e blogs. Contribuindo para o aumento do fluxo de negócio, bem como aumentar a visibilidade do mesmo. O despertar desta profissão começou muito cedo, aos meus 15 anos tive acesso á internet pela primeira vez. Esta despertou em mim, uma vontade enorme de saber como era o seu funcionamento. Desde logo comecei a me interessar por desenvolver websites. Plataformas como o Worpress e Microsoft Front Page permitiram-me começar a criar cópias de sites já existentes e a desenvolver o meus próprios mas sem nunca os expor profissionalmente. Estudei eletrónica, o que me permitiu ter acesso a linguagens de programação, algoritmos, sistemas digitais e como tal a resolução de problemas. Hoje em dia utilizo tecnologias como HTML, CSS e JavaScript, que são as mais utilizadas na internet para a criação de web sites. Dando-me possibilidade de os desenvolver, com o maior profissionalismo e qualidade! Pode ver em baixo, os cursos que frequentei para toda a minha aprendizagem profissional. Adoro este ramo, porque é um espaço contínuo de crescimento e aprendizagem. Considero-me uma pessoa que adora aprender e resolver problemas, gosto ainda, de ler livros técnicos e de autodesenvolvimento, o que sinto ser essencial para o meu desenvolvimento pessoal e profissional. (Pode ter acesso á minha lista de leitura aqui.) Por isto tudo e por muito mais, espero que me contacte para que me seja possível, ajuda-lo a conseguir aquilo que tanto deseja.'
                )}
              </p>
            </div>
          </article>
          {/* <Skills className={styles.skills} /> */}
        </div>
      </section>
    </Layout>
  );
};

export default About;
