import React from "react";
import Image from 'next/image';
import Link from "next/link";
import logoSvg from '../public/favicon.svg';
import searchIconSvg from '../public/search-icon.svg';
import homeIconSvg from '../public/home-icon.svg';
import groupIconSvg from '../public/group-icon.svg';
import sharpIconSvg from '../public/sharp-icon.svg';
import settingIconSvg from '../public/setting.svg';
import sunSvg from '../public/sun.svg';
import moonSvg from '../public/moon.svg';
import styles from './Header.module.css';

export default function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link href="/"><Image className={styles.favIcon} alt="logo" src={logoSvg} /></Link>
            <h1 className={styles.logoTitle}><span>Synchronicity</span><span className={styles.logoDot}>.</span></h1>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.setting}>
              <div className={styles.settingIcon}>
                <Image src={settingIconSvg} alt="setting icon" />
              </div>
              <div className={styles.settingDropDown}>
                <div className={styles.border} />
                <div className={styles.settingDropDownInner}>
                  <div className={styles.settingLabel}>Interface</div>
                  <div className={styles.modeSwitch}>
                    <div className={styles.sun}>
                      <Image src={sunSvg} width={16} height={16} alt="sun icon" />
                    </div>
                    <div className={styles.moon}>
                      <Image src={moonSvg} width={16} height={16} alt="moon icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.search}>
                <div className={styles.searchInputWrapper}>
                  <input type="text" placeholder="Type here to search..."  className={styles.searchInput} />
                </div>
                <a href="#">
                  <Image
                    className={styles.searchIcon}
                    alt="search icon"
                    src={searchIconSvg}
                  />
                </a>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <a href="#"><Image className={styles.homeIcon} alt="home icon" src={homeIconSvg} /></a>
              </div>
              <div className={styles.icon}>
                <a href="#"><Image className={styles.groupIcon} alt="group icon" src={groupIconSvg} /></a>
              </div>
              <div className={styles.icon}>
                <a href="#"><Image className={styles.sharpIcon} alt="sharp icon" src={sharpIconSvg} /></a>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
};