import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/router';
import logoSvg from '../public/favicon.svg';
import searchIconSvg from '../public/search-icon.svg';
import homeIconSvg from '../public/home-icon.svg';
import groupIconSvg from '../public/group-icon.svg';
import sharpIconSvg from '../public/sharp-icon.svg';
import settingIconSvg from '../public/setting.svg';
import sunSvg from '../public/sun.svg';
import sunLightSvg from '../public/sun-light.svg';
import moonSvg from '../public/moon.svg';
import styles from './Header.module.css';

export default function Header() {
  const router = useRouter();
  const clickedClass = 'clicked';
  const lightTheme = 'light';
  const darkTheme = 'dark';
  const [theme, setTheme] = useState(lightTheme);
  const [body, setBody] = useState(null);
  const [showSetting, setShowSetting] = useState(false);

  useEffect(() => {
    setBody(document.body);
    if (localStorage) {
      setTheme(localStorage.getItem('theme'));
    }
  }, []);

  useEffect(()=> {
    if (body) {
      if (theme === darkTheme) {
        body.setAttribute('data-theme', "dark")
        // body.classList.add(theme);
      } else {
        // body.classList.add(lightTheme);
        body.removeAttribute("data-theme")
      }
    }
  }, [theme, body]);

  const switchTheme = e => {
    if (theme === darkTheme) {
      // body.classList.replace(darkTheme, lightTheme);
      body.setAttribute('data-theme', "dark")
      e.target.classList.remove(clickedClass);
      localStorage.setItem('theme', 'light');
      // theme = lightTheme;
      setTheme(lightTheme);
    } else {
      // body.classList.replace(lightTheme, darkTheme);
      body.removeAttribute("data-theme")
      e.target.classList.add(clickedClass);
      localStorage.setItem('theme', 'dark');
      // theme = darkTheme;
      setTheme(darkTheme);
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo} onClick={() => router.push('/')}>
          <Image className={styles.favIcon} alt="logo" src={logoSvg} />
          <h1 className={styles.logoTitle}><span>Synchronicity</span><span className={styles.logoDot}>.</span></h1>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.setting}>
            <div className={styles.settingIcon} onClick={() => setShowSetting(!showSetting)}>
              <Image src={settingIconSvg} alt="setting icon" />
            </div>
            { showSetting && (
              <>
              <div className={styles.effect} />
              <div className={styles.settingDropDown} onMouseLeave={() => setShowSetting(false)}>
                <div className={styles.border} />
                <div className={styles.settingDropDownInner}>
                  <div className={styles.settingLabel}>Interface</div>
                  <div className={styles.modeSwitch} onClick={e => switchTheme(e)}>
                    <div className={styles.sun}>
                      {theme === 'dark' && (
                        <Image src={sunSvg} width={16} height={16} alt="sun icon" />
                      )}
                      {theme === 'light' && (
                        <Image src={sunLightSvg} width={16} height={16} alt="sun icon" />
                      )}
                    </div>
                    <div className={styles.moon}>
                      <Image src={moonSvg} width={16} height={16} alt="moon icon" />
                    </div>
                  </div>
                </div>
              </div>
              </>
            )}
          </div>
          <div className={styles.search}>
              <div className={styles.searchInputWrapper}>
                <input type="text" placeholder="Type here to search..."  className={styles.searchInput} />
              </div>
              <div className="flex pointer">
                <Image
                  className={styles.searchIcon}
                  alt="search icon"
                  src={searchIconSvg}
                />
              </div>
          </div>
          <div className={styles.icons}>
            <div className={`${styles.icon} ${router.pathname === '/'? styles.selected: ""}`} onClick={() => router.push('/')}>
              <Image className={styles.iconImg} alt="home icon" src={homeIconSvg} />
            </div>
            <div className={`${styles.icon} ${router.pathname === '/groups'? styles.selected: ""}`} onClick={() => router.push('/groups')}>
              <Image className={styles.iconImg} alt="group icon" src={groupIconSvg} />
            </div>
            <div className={`${styles.icon} ${router.pathname === '/tags'? styles.selected: ""}`} onClick={() => router.push('/tags')}>
              <Image className={styles.iconImg} alt="sharp icon" src={sharpIconSvg} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};