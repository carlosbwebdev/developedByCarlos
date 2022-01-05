// import { Link } from "gatsby";
import React from 'react';
// import Links from '../constants/links';
import SocialLinks from '../constants/socialLinks';
import { FaTimes } from 'react-icons/fa';
import * as styles from '../css/sidebar.module.css';
import disableScroll from 'disable-scroll';
import { useI18next, Link, useTranslation } from 'gatsby-plugin-react-i18next';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  if (!isOpen) {
    disableScroll.off();
  }
  const { languages, changeLanguage } = useI18next();
  const { t } = useTranslation();

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.showSidebar : ''}`}>
      <button className={styles.closeBtn} onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div>
        <ul className={`${isOpen ? styles.sidebarLinks : ''}`}>
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
          </li>
          <li>
            <Link
              activeStyle={{ color: 'rgb(236, 105, 85' }}
              style={{
                color: 'var(--textNormal)',
              }}
              to="/about"
            >
              {t('About')}
            </Link>
          </li>
          <li>
            <Link
              activeStyle={{ color: 'rgb(236, 105, 85' }}
              style={{
                color: 'var(--textNormal)',
              }}
              to="/projects"
            >
              {t('Projects')}
            </Link>
          </li>
          <li>
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

        {/* //delay the animaation on isOpen true then apply the animation class */}
        {/* <Links styleClass={`${isOpen ? styles.sidebarLinks : ''}`} /> */}
        <SocialLinks styleClass={`${isOpen ? styles.sidebarIcons : ''}`} />
        <div className={`${isOpen ? styles.navBtnLng : ''}`}>
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
    </aside>
  );
};

export default Sidebar;
