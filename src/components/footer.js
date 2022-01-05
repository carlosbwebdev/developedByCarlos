import React from 'react';
import * as styles from '../css/footer.module.css';
import SocialLinks from '../constants/socialLinks';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div>
        <SocialLinks styleClass={styles.footerLinks} />
        <h4>
          Copyright&copy;{new Date().getFullYear()}
          <span> DevelopedByCarlos </span>
          {t('todos os direitos reservados.')}
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
