import React, { useEffect, useState, useContext } from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import UserContext from "./store/UserContext";
import logoSvg from '../public/favicon.svg';
import searchIconSvg from '../public/search-icon.svg';
import settingIconSvg from '../public/setting.svg';
import sunSvg from '../public/sun.svg';
import sunLightSvg from '../public/sun-light.svg';
import moonSvg from '../public/moon.svg';
import styles from './Header.module.css';

const HomeIconSvg = ({fill}) => {
  return (
    <svg width="21" height="20" viewBox="0 0 21 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1_18095)">
        <path d="M19.8417 7.5198L11.3777 0.339514C11.1367 0.121018 10.8229 0 10.4976 0C10.1722 0 9.85851 0.121018 9.61744 0.339514L1.15435 7.5199C0.94769 7.70713 0.782529 7.93555 0.669495 8.19047C0.55646 8.44538 0.498058 8.72115 0.498047 9L0.498047 19.3357C0.498047 19.5119 0.568019 19.6808 0.692578 19.8054C0.817137 19.93 0.986084 20 1.16225 20L6.49805 20C7.05033 20 7.49805 19.5523 7.49805 19V15C7.49805 14.436 8.05014 13.9788 8.61434 13.9788H12.3808C12.9451 13.9788 13.498 14.436 13.498 15V19C13.498 19.5523 13.9458 20 14.498 20H19.8338C20.01 20 20.179 19.93 20.3035 19.8054C20.4281 19.6808 20.498 19.5119 20.498 19.3357V9C20.498 8.72114 20.4396 8.44537 20.3265 8.19044C20.2135 7.93551 20.0484 7.70707 19.8417 7.5198Z" />
      </g>
      <defs>
        <clipPath id="clip0_1_18095">
          <rect width="20" height="20" fill="white" transform="translate(0.498047)"/>
        </clipPath>
      </defs>
    </svg>
  );
}

const GroupIconSvg = ({fill}) => {
  return (
    <svg width="21" height="20" viewBox="0 0 21 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="10.498" cy="15" rx="6" ry="3" />
      <circle cx="10.498" cy="6" r="4" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5.74805 3.46824C4.70189 4.0734 3.99805 5.20451 3.99805 6.5C3.99805 7.79549 4.70189 8.9266 5.74805 9.53176C5.23324 9.82956 4.63555 10 3.99805 10C2.06505 10 0.498047 8.433 0.498047 6.5C0.498047 4.567 2.06505 3 3.99805 3C4.63555 3 5.23324 3.17044 5.74805 3.46824Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15.248 3.46824C16.2942 4.0734 16.998 5.20451 16.998 6.5C16.998 7.79549 16.2942 8.9266 15.248 9.53176C15.7629 9.82956 16.3605 10 16.998 10C18.931 10 20.498 8.433 20.498 6.5C20.498 4.567 18.931 3 16.998 3C16.3605 3 15.7629 3.17044 15.248 3.46824Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15.9979 12C15.9979 12 15.998 12 15.998 12C17.3788 12 18.498 13.1193 18.498 14.5C18.498 15.0628 18.3121 15.5822 17.9982 16C19.3789 15.9999 20.498 14.8807 20.498 13.5C20.498 12.1193 19.3788 11 17.998 11C17.1801 11 16.454 11.3928 15.9979 12Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4.99823 12C4.99817 12 4.99811 12 4.99805 12C3.61734 12 2.49805 13.1193 2.49805 14.5C2.49805 15.0628 2.68402 15.5822 2.99787 16C1.61724 15.9999 0.498047 14.8807 0.498047 13.5C0.498047 12.1193 1.61733 11 2.99805 11C3.81596 11 4.54213 11.3928 4.99823 12Z" />
      <circle cx="16.998" cy="3.5" r="3" fill="#FF6934" />
    </svg>
  );
}

const SharpIconSvg = ({fill}) => {
  return (
    <svg width="21" height="20" viewBox="0 0 21 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1_18115)">
        <path d="M8.36609 0H8.83977C8.87566 0.0169944 8.90915 0.0364166 8.94504 0.0485555C9.75365 0.274338 10.2106 0.97111 10.0766 1.81597C9.95222 2.59772 9.80389 3.37461 9.66753 4.15392C9.59576 4.55936 9.52398 4.96237 9.44982 5.38723C10.6651 5.38723 11.8493 5.38723 13.0312 5.38966C13.1819 5.38966 13.1867 5.2974 13.2058 5.19058C13.4403 3.90872 13.6771 2.62685 13.9115 1.34499C13.9809 0.961398 14.1221 0.609371 14.4355 0.381161C14.6627 0.2185 14.9379 0.126244 15.1891 0H15.6627C15.6986 0.0169944 15.7321 0.0364166 15.768 0.0485555C16.5766 0.274338 17.0336 0.97111 16.8996 1.81597C16.7752 2.59772 16.6269 3.37461 16.4905 4.15635C16.4187 4.56179 16.347 4.9648 16.2728 5.38966C16.3924 5.38966 16.4785 5.38966 16.5647 5.38966C17.3541 5.38966 18.1436 5.37024 18.9331 5.39937C19.2202 5.41151 19.5312 5.49405 19.7824 5.63486C20.3685 5.96261 20.6197 6.67638 20.4426 7.33673C20.268 7.98495 19.6867 8.44865 19.0072 8.45594C17.9977 8.46565 16.9857 8.45836 15.9761 8.45836C15.8924 8.45836 15.8087 8.45836 15.7249 8.45836C15.5383 9.49988 15.3565 10.505 15.1699 11.5416C15.2776 11.5416 15.3613 11.5416 15.4474 11.5416C16.2608 11.5416 17.0742 11.5368 17.8876 11.5416C18.7632 11.5465 19.4426 12.2214 19.4403 13.0784C19.4403 13.9354 18.7608 14.6055 17.8828 14.6103C17.0312 14.6152 16.1771 14.6103 15.3254 14.6103C15.1125 14.6103 14.902 14.6103 14.6795 14.6103C14.658 14.7172 14.6364 14.8094 14.6197 14.9017C14.3852 16.1763 14.1532 17.4508 13.9115 18.723C13.7489 19.5776 12.9737 20.1262 12.1723 19.9709C11.3111 19.8034 10.7871 19.0265 10.9426 18.1379C11.0718 17.3974 11.2106 16.6594 11.3422 15.9189C11.4187 15.4892 11.4905 15.0595 11.5694 14.6079C10.347 14.6079 9.15556 14.6079 7.96418 14.6152C7.90915 14.6152 7.81824 14.7002 7.80628 14.7609C7.72973 15.1032 7.6747 15.4528 7.61011 15.7975C7.42111 16.8123 7.25365 17.8296 7.03834 18.8395C6.86609 19.6407 6.06705 20.1287 5.28475 19.9612C4.47614 19.7864 3.957 19.0337 4.09336 18.2132C4.21298 17.5042 4.34217 16.7953 4.46896 16.0864C4.55509 15.6009 4.63882 15.1177 4.72973 14.6103H4.44504C3.66274 14.6103 2.88284 14.6152 2.10054 14.6079C1.92111 14.6079 1.73451 14.5861 1.56466 14.5351C0.854129 14.3214 0.413938 13.6028 0.516808 12.8599C0.619679 12.1219 1.2393 11.5562 1.98571 11.5465C2.99528 11.5344 4.00724 11.5441 5.01681 11.5416C5.10054 11.5416 5.18666 11.5416 5.27518 11.5416C5.37088 11.01 5.46178 10.5074 5.55269 10.0049C5.6436 9.49745 5.73451 8.99005 5.83021 8.45836C5.71059 8.45836 5.62446 8.45836 5.53834 8.45836C4.72494 8.45836 3.91155 8.45836 3.09815 8.45836C2.72016 8.45836 2.38523 8.3394 2.09815 8.08934C1.61489 7.66934 1.44265 7.01384 1.65317 6.41175C1.86131 5.81452 2.41155 5.39937 3.04073 5.39451C4.06705 5.3848 5.09336 5.38723 6.11968 5.39451C6.28475 5.39451 6.3637 5.36781 6.39719 5.17359C6.61968 3.89658 6.8637 2.62442 7.09576 1.34984C7.19145 0.820588 7.45222 0.412722 7.93068 0.169944C8.06466 0.0946832 8.22016 0.053411 8.36609 0ZM8.89958 8.4705C8.71537 9.49017 8.53355 10.5026 8.34934 11.5295H12.0958L12.646 8.4705H8.90198H8.89958Z" />
      </g>
      <defs>
        <clipPath id="clip0_1_18115">
          <rect width="20" height="20" fill="white" transform="translate(0.498047)"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Header() {
  const context = useContext(UserContext);
  const router = useRouter();
  const clickedClass = 'clicked';
  const lightTheme = 'light';
  const darkTheme = 'dark';
  // const [theme, setTheme] = useState(lightTheme);
  const [body, setBody] = useState(null);
  const [showSetting, setShowSetting] = useState(false);

  useEffect(() => {
    setBody(document.body);
    if (localStorage) {
      context.setTheme(localStorage.getItem('theme'));
    }
  }, [context]);

  useEffect(()=> {
    if (body) {
      if (context.theme === darkTheme) {
        body.setAttribute('data-theme', "dark")
        // body.classList.add(theme);
      } else {
        // body.classList.add(lightTheme);
        body.removeAttribute("data-theme")
      }
    }
  }, [context.theme, body]);

  const switchTheme = e => {
    if (context.theme === darkTheme) {
      // body.classList.replace(darkTheme, lightTheme);
      body.setAttribute('data-theme', "dark")
      e.target.classList.remove(clickedClass);
      localStorage.setItem('theme', 'light');
      // theme = lightTheme;
      context.setTheme(lightTheme);
    } else {
      // body.classList.replace(lightTheme, darkTheme);
      body.removeAttribute("data-theme")
      e.target.classList.add(clickedClass);
      localStorage.setItem('theme', 'dark');
      // theme = darkTheme;
      context.setTheme(darkTheme);
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
                      {context.theme === 'dark' && (
                        <Image src={sunSvg} width={16} height={16} alt="sun icon" />
                      )}
                      {context.theme === 'light' && (
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
              <HomeIconSvg className={styles.iconImg} fill={router.pathname === '/'? "#FFFFFF": "#C5D0E6"} />
            </div>
            <div className={`${styles.icon} ${router.pathname === '/groups'? styles.selected: ""}`} onClick={() => router.push('/groups')}>
              <GroupIconSvg className={styles.iconImg} fill={router.pathname === '/groups'? "#FFFFFF": "#C5D0E6"} />
            </div>
            <div className={`${styles.icon} ${router.pathname === '/tags'? styles.selected: ""}`} onClick={() => router.push('/tags')}>
              <SharpIconSvg className={styles.iconImg} fill={router.pathname === '/tags'? "#FFFFFF": "#C5D0E6"} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};