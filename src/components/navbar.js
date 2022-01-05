import React from 'react';
import * as styles from '../css/navbar.module.css';
import { FaAlignRight } from 'react-icons/fa';
// import PageLinks from '../constants/links';
import { useI18next, Link, useTranslation } from 'gatsby-plugin-react-i18next';
// import DarkMode from "../components/darkMode";

const Navbar = ({ toggleSidebar }) => {
  const { languages, changeLanguage } = useI18next();
  const { t } = useTranslation();

  return (
    <nav className={styles.navbar} id="navbarDark">
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <a href="/">
            <h1>DevelopedByCarlos</h1>
          </a>
          <button
            type="button"
            className={styles.toggleBtn}
            onClick={toggleSidebar}
          >
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        {/* <PageLinks styleClass={styles.navLinks}></PageLinks> */}
        {/* ******************* */}

        <ul className={styles.navLinks}>
          <li>
            <Link
              activeStyle={{ color: 'rgb(236, 105, 85' }}
              style={{
                color: 'var(--textNormal)',
              }}
              to="/"
            >
              {t('Home')}
            </Link>
            <Link
              activeStyle={{ color: 'rgb(236, 105, 85' }}
              style={{
                color: 'var(--textNormal)',
              }}
              to="/about"
            >
              {t('About')}
            </Link>
            <Link
              activeStyle={{ color: 'rgb(236, 105, 85' }}
              style={{
                color: 'var(--textNormal)',
              }}
              to="/projects"
            >
              {t('Projects')}
            </Link>
            <Link
              activeStyle={{ color: 'rgb(236, 105, 85' }}
              style={{
                color: 'var(--textNormal)',
              }}
              to="/contact"
            >
              {t('Contact')}
            </Link>
          </li>
        </ul>

        {/* ************** */}
        <div className={styles.navBtnLng}>
          {languages.map((lng) => (
            <div key={lng}>
              <button
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  changeLanguage(lng);
                }}
              >
                {lng}
              </button>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
