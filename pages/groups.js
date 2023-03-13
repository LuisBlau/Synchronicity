import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import styles from '@/styles/Groups.module.css';
import avatarBack from '../public/ellipse-29.svg';
import postUserAvatar from '../public/memoji-boys-315@2x.png';
import commentSvg from '../public/comment.svg';
import bookSvg from '../public/book.svg';
import catSvg from '../public/cat.svg';
import musicSvg from '../public/music.svg';
import sportSvg from '../public/football.svg';
import heartSvg from '../public/heart.svg';
import userSvg from '../public/user.svg';
import adminSvg from '../public/admin.svg';
import groupAvatarSvg from '../public/group-avatar.svg';
import appleAvatarSvg from '../public/apple-avatar.svg';
import robotAvatarSvg from '../public/robot-avatar.svg';
import groupCoverImg from '../public/group-cover.png';
import searchIconSvg from '../public/search-icon.svg';


export default function GroupProfile() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Group Search</title>
        <meta name="description" content="Synchronicity is social website." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main className={styles.main}>
        <aside className={`${styles.side} ${styles.leftSide}`}>
          <div className={styles.tagsBar}>
            <div className={styles.tagsCardTitle}>Tags posted by Group</div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
              <div className={styles.tagsCardAvatar}>
                <Image
                  className={styles.tagsCardAvatarImg}
                  alt=""
                  src={groupAvatarSvg}
                />
              </div>
              <div className={styles.tagHeaderInfo}>
                <div className={styles.tagHeaderTitle}>
                  Meditation
                </div>
                <div className={styles.tagHeaderDescription}>48,092 • Tags posted</div>
              </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagsCardTags}>
              <div className={styles.tag}>
                <div className={styles.tagsCardSharp}>
                  #
                </div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#music</div>
                  <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.tagsCardSharp}>#</div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#meditation</div>
                  <div className={styles.tagDescription}>
                    51,354 • Trending in Bangladesh
                  </div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.tagsCardSharp}>#</div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#yoga</div>
                  <div className={styles.tagDescription}>48,029 Posted by this tag</div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.tagsCardSharp}>#</div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#messi</div>
                  <div className={styles.tagDescription}>
                    51,354 • Trending in Bangladesh
                  </div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.tagsCardSharp}>#</div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#video</div>
                  <div className={styles.tagDescription}>82,645 Posted by this tag</div>
                </div>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
              <div className={styles.tagsCardAvatar}>
                <Image
                  className={styles.tagsCardAvatarImg}
                  alt=""
                  src={sportSvg}
                />
              </div>
              <div className={styles.tagHeaderInfo}>
                <div className={styles.tagHeaderTitle}>
                  Sports
                </div>
                <div className={styles.tagHeaderDescription}>48,092 • Tags posted</div>
              </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
              <div className={styles.tagsCardAvatar}>
                <Image
                  className={styles.tagsCardAvatarImg}
                  alt=""
                  src={appleAvatarSvg}
                />
              </div>
              <div className={styles.tagHeaderInfo}>
                <div className={styles.tagHeaderTitle}>
                  Lifestyle
                </div>
                <div className={styles.tagHeaderDescription}>48,092 • Tags posted</div>
              </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
              <div className={styles.tagsCardAvatar}>
                <Image
                  className={styles.tagsCardAvatarImg}
                  alt=""
                  src={robotAvatarSvg}
                />
              </div>
              <div className={styles.tagHeaderInfo}>
                <div className={styles.tagHeaderTitle}>
                  Artificial Intelligence
                </div>
                <div className={styles.tagHeaderDescription}>48,092 • Tags posted</div>
              </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
              <div className={styles.tagsCardAvatar}>
                <Image
                  className={styles.tagsCardAvatarImg}
                  alt=""
                  src={catSvg}
                />
              </div>
              <div className={styles.tagHeaderInfo}>
                <div className={styles.tagHeaderTitle}>
                  Cat
                </div>
                <div className={styles.tagHeaderDescription}>48,092 • Tags posted</div>
              </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
              <div className={styles.tagsCardAvatar}>
                <Image
                  className={styles.tagsCardAvatarImg}
                  alt=""
                  src={sportSvg}
                />
              </div>
              <div className={styles.tagHeaderInfo}>
                <div className={styles.tagHeaderTitle}>
                  Sports
                </div>
                <div className={styles.tagHeaderDescription}>48,092 • Tags posted</div>
              </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
              <div className={styles.tagsCardAvatar}>
                <Image
                  className={styles.tagsCardAvatarImg}
                  alt=""
                  src={appleAvatarSvg}
                />
              </div>
              <div className={styles.tagHeaderInfo}>
                <div className={styles.tagHeaderTitle}>
                  Lifestyle
                </div>
                <div className={styles.tagHeaderDescription}>48,092 • Tags posted</div>
              </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
              <div className={styles.tagsCardAvatar}>
                <Image
                  className={styles.tagsCardAvatarImg}
                  alt=""
                  src={robotAvatarSvg}
                />
              </div>
              <div className={styles.tagHeaderInfo}>
                <div className={styles.tagHeaderTitle}>
                  Artificial Intelligence
                </div>
                <div className={styles.tagHeaderDescription}>48,092 • Tags posted</div>
              </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
              <div className={styles.tagsCardAvatar}>
                <Image
                  className={styles.tagsCardAvatarImg}
                  alt=""
                  src={catSvg}
                />
              </div>
              <div className={styles.tagHeaderInfo}>
                <div className={styles.tagHeaderTitle}>
                  Cat
                </div>
                <div className={styles.tagHeaderDescription}>48,092 • Tags posted</div>
              </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
              <div className={styles.tagsCardAvatar}>
                <Image
                  className={styles.tagsCardAvatarImg}
                  alt=""
                  src={sportSvg}
                />
              </div>
              <div className={styles.tagHeaderInfo}>
                <div className={styles.tagHeaderTitle}>
                  Sports
                </div>
                <div className={styles.tagHeaderDescription}>48,092 • Tags posted</div>
              </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
              <div className={styles.tagsCardAvatar}>
                <Image
                  className={styles.tagsCardAvatarImg}
                  alt=""
                  src={appleAvatarSvg}
                />
              </div>
              <div className={styles.tagHeaderInfo}>
                <div className={styles.tagHeaderTitle}>
                  Lifestyle
                </div>
                <div className={styles.tagHeaderDescription}>48,092 • Tags posted</div>
              </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
              <div className={styles.tagsCardAvatar}>
                <Image
                  className={styles.tagsCardAvatarImg}
                  alt=""
                  src={robotAvatarSvg}
                />
              </div>
              <div className={styles.tagHeaderInfo}>
                <div className={styles.tagHeaderTitle}>
                  Artificial Intelligence
                </div>
                <div className={styles.tagHeaderDescription}>48,092 • Tags posted</div>
              </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
              <div className={styles.tagsCardAvatar}>
                <Image
                  className={styles.tagsCardAvatarImg}
                  alt=""
                  src={catSvg}
                />
              </div>
              <div className={styles.tagHeaderInfo}>
                <div className={styles.tagHeaderTitle}>
                  Cat
                </div>
                <div className={styles.tagHeaderDescription}>48,092 • Tags posted</div>
              </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
              <div className={styles.tagsCardAvatar}>
                <Image
                  className={styles.tagsCardAvatarImg}
                  alt=""
                  src={sportSvg}
                />
              </div>
              <div className={styles.tagHeaderInfo}>
                <div className={styles.tagHeaderTitle}>
                  Sports
                </div>
                <div className={styles.tagHeaderDescription}>48,092 • Tags posted</div>
              </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
              <div className={styles.tagsCardAvatar}>
                <Image
                  className={styles.tagsCardAvatarImg}
                  alt=""
                  src={appleAvatarSvg}
                />
              </div>
              <div className={styles.tagHeaderInfo}>
                <div className={styles.tagHeaderTitle}>
                  Lifestyle
                </div>
                <div className={styles.tagHeaderDescription}>48,092 • Tags posted</div>
              </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
              <div className={styles.tagsCardAvatar}>
                <Image
                  className={styles.tagsCardAvatarImg}
                  alt=""
                  src={robotAvatarSvg}
                />
              </div>
              <div className={styles.tagHeaderInfo}>
                <div className={styles.tagHeaderTitle}>
                  Artificial Intelligence
                </div>
                <div className={styles.tagHeaderDescription}>48,092 • Tags posted</div>
              </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
              <div className={styles.tagsCardAvatar}>
                <Image
                  className={styles.tagsCardAvatarImg}
                  alt=""
                  src={catSvg}
                />
              </div>
              <div className={styles.tagHeaderInfo}>
                <div className={styles.tagHeaderTitle}>
                  Cat
                </div>
                <div className={styles.tagHeaderDescription}>48,092 • Tags posted</div>
              </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </aside>
        <aside className={`${styles.side} ${styles.popularTags} ${styles.leftSide}`}>
          <div className={`${styles.card} ${styles.popularTagsCard}`}>
            <div className={styles.tagsCardTitle}>Popular Tags (Global)</div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagsCardTags}>
              <div className={styles.tag}>
                <div className={styles.tagsCardSharp}>
                  #
                </div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#music</div>
                  <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.tagsCardSharp}>#</div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#meditation</div>
                  <div className={styles.tagDescription}>
                    51,354 • Trending in Bangladesh
                  </div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.tagsCardSharp}>#</div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#yoga</div>
                  <div className={styles.tagDescription}>48,029 Posted by this tag</div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.tagsCardSharp}>#</div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#messi</div>
                  <div className={styles.tagDescription}>
                    51,354 • Trending in Bangladesh
                  </div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.tagsCardSharp}>#</div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#video</div>
                  <div className={styles.tagDescription}>82,645 Posted by this tag</div>
                </div>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className={styles.tagsCardSharp}>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
              </div>
              <div className={styles.tagHeaderRight}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </aside>
        <section className={`${styles.side} ${styles.centerSide}`}>
          <div className={styles.card}>
            <div className={styles.searchBar}>
              <input className={styles.searchBarInput} type="text" placeholder='Search Groups' />
              <Image
                  className={styles.searchIcon}
                  alt="search icon"
                  src={searchIconSvg}
                />
            </div>
            
          </div>
          <div className={styles.centerDown}>
            <div className={styles.groupsBoard}>
              <div className={`${styles.groupCard} ${styles.card}`}>
                <div className={styles.groupCardInner}>
                  <div className={styles.groupCardMain}>
                    <div className={styles.groupCardAvatar}>
                      <Image
                        alt='grout avatar'
                        src={groupAvatarSvg}
                      />
                    </div>
                    <div className={styles.groupCardData}>
                      <div className={styles.tagCardTitle} onClick={()=>router.push('/group-profile')}>
                        Meditation
                      </div>
                      <div className={styles.tagCardDesc}>
                        Created on 14/12/2022 at 20:18 UTC-4
                      </div>
                      <div className={styles.profileTags}>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="heart svg"
                              src={heartSvg}
                              width={12}
                              height={12}
                            />
                            <span>3256</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="comment svg"
                              src={commentSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="user svg"
                              src={userSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.groupCoverImgWrapper}>
                    <Image
                      className={styles.groupCoverImg}
                      alt="group cover image"
                      src={groupCoverImg}
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.groupCard} ${styles.card}`}>
                <div className={styles.groupCardInner}>
                  <div className={styles.groupCardMain}>
                    <div className={styles.groupCardAvatar}>
                      <Image
                        alt='grout avatar'
                        src={groupAvatarSvg}
                      />
                    </div>
                    <div className={styles.groupCardData}>
                      <div className={styles.tagCardTitle} onClick={()=>router.push('/group-profile')}>
                        Meditation
                      </div>
                      <div className={styles.tagCardDesc}>
                        Created on 14/12/2022 at 20:18 UTC-4
                      </div>
                      <div className={styles.profileTags}>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="heart svg"
                              src={heartSvg}
                              width={12}
                              height={12}
                            />
                            <span>3256</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="comment svg"
                              src={commentSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="user svg"
                              src={userSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.groupCoverImgWrapper}>
                    <Image
                      className={styles.groupCoverImg}
                      alt="group cover image"
                      src={groupCoverImg}
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.groupCard} ${styles.card}`}>
                <div className={styles.groupCardInner}>
                  <div className={styles.groupCardMain}>
                    <div className={styles.groupCardAvatar}>
                      <Image
                        alt='grout avatar'
                        src={groupAvatarSvg}
                      />
                    </div>
                    <div className={styles.groupCardData}>
                      <div className={styles.tagCardTitle} onClick={()=>router.push('/group-profile')}>
                        Meditation
                      </div>
                      <div className={styles.tagCardDesc}>
                        Created on 14/12/2022 at 20:18 UTC-4
                      </div>
                      <div className={styles.profileTags}>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="heart svg"
                              src={heartSvg}
                              width={12}
                              height={12}
                            />
                            <span>3256</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="comment svg"
                              src={commentSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="user svg"
                              src={userSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.groupCoverImgWrapper}>
                    <Image
                      className={styles.groupCoverImg}
                      alt="group cover image"
                      src={groupCoverImg}
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.groupCard} ${styles.card}`}>
                <div className={styles.groupCardInner}>
                  <div className={styles.groupCardMain}>
                    <div className={styles.groupCardAvatar}>
                      <Image
                        alt='grout avatar'
                        src={groupAvatarSvg}
                      />
                    </div>
                    <div className={styles.groupCardData}>
                      <div className={styles.tagCardTitle} onClick={()=>router.push('/group-profile')}>
                        Meditation
                      </div>
                      <div className={styles.tagCardDesc}>
                        Created on 14/12/2022 at 20:18 UTC-4
                      </div>
                      <div className={styles.profileTags}>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="heart svg"
                              src={heartSvg}
                              width={12}
                              height={12}
                            />
                            <span>3256</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="comment svg"
                              src={commentSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="user svg"
                              src={userSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.groupCoverImgWrapper}>
                    <Image
                      className={styles.groupCoverImg}
                      alt="group cover image"
                      src={groupCoverImg}
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.groupCard} ${styles.card}`}>
                <div className={styles.groupCardInner}>
                  <div className={styles.groupCardMain}>
                    <div className={styles.groupCardAvatar}>
                      <Image
                        alt='grout avatar'
                        src={groupAvatarSvg}
                      />
                    </div>
                    <div className={styles.groupCardData}>
                      <div className={styles.tagCardTitle} onClick={()=>router.push('/group-profile')}>
                        Meditation
                      </div>
                      <div className={styles.tagCardDesc}>
                        Created on 14/12/2022 at 20:18 UTC-4
                      </div>
                      <div className={styles.profileTags}>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="heart svg"
                              src={heartSvg}
                              width={12}
                              height={12}
                            />
                            <span>3256</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="comment svg"
                              src={commentSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="user svg"
                              src={userSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.groupCoverImgWrapper}>
                    <Image
                      className={styles.groupCoverImg}
                      alt="group cover image"
                      src={groupCoverImg}
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.groupCard} ${styles.card}`}>
                <div className={styles.groupCardInner}>
                  <div className={styles.groupCardMain}>
                    <div className={styles.groupCardAvatar}>
                      <Image
                        alt='grout avatar'
                        src={groupAvatarSvg}
                      />
                    </div>
                    <div className={styles.groupCardData}>
                      <div className={styles.tagCardTitle} onClick={()=>router.push('/group-profile')}>
                        Meditation
                      </div>
                      <div className={styles.tagCardDesc}>
                        Created on 14/12/2022 at 20:18 UTC-4
                      </div>
                      <div className={styles.profileTags}>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="heart svg"
                              src={heartSvg}
                              width={12}
                              height={12}
                            />
                            <span>3256</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="comment svg"
                              src={commentSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="user svg"
                              src={userSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.groupCoverImgWrapper}>
                    <Image
                      className={styles.groupCoverImg}
                      alt="group cover image"
                      src={groupCoverImg}
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.groupCard} ${styles.card}`}>
                <div className={styles.groupCardInner}>
                  <div className={styles.groupCardMain}>
                    <div className={styles.groupCardAvatar}>
                      <Image
                        alt='grout avatar'
                        src={groupAvatarSvg}
                      />
                    </div>
                    <div className={styles.groupCardData}>
                      <div className={styles.tagCardTitle} onClick={()=>router.push('/group-profile')}>
                        Meditation
                      </div>
                      <div className={styles.tagCardDesc}>
                        Created on 14/12/2022 at 20:18 UTC-4
                      </div>
                      <div className={styles.profileTags}>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="heart svg"
                              src={heartSvg}
                              width={12}
                              height={12}
                            />
                            <span>3256</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="comment svg"
                              src={commentSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="user svg"
                              src={userSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.groupCoverImgWrapper}>
                    <Image
                      className={styles.groupCoverImg}
                      alt="group cover image"
                      src={groupCoverImg}
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.groupCard} ${styles.card}`}>
                <div className={styles.groupCardInner}>
                  <div className={styles.groupCardMain}>
                    <div className={styles.groupCardAvatar}>
                      <Image
                        alt='grout avatar'
                        src={groupAvatarSvg}
                      />
                    </div>
                    <div className={styles.groupCardData}>
                      <div className={styles.tagCardTitle} onClick={()=>router.push('/group-profile')}>
                        Meditation
                      </div>
                      <div className={styles.tagCardDesc}>
                        Created on 14/12/2022 at 20:18 UTC-4
                      </div>
                      <div className={styles.profileTags}>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="heart svg"
                              src={heartSvg}
                              width={12}
                              height={12}
                            />
                            <span>3256</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="comment svg"
                              src={commentSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="user svg"
                              src={userSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.groupCoverImgWrapper}>
                    <Image
                      className={styles.groupCoverImg}
                      alt="group cover image"
                      src={groupCoverImg}
                    />
                  </div>
                </div>
              </div>
            </div>

            <aside className={`${styles.side} ${styles.rightSide}`}>
              <div className={styles.groups}>
                <div className={styles.title}>Popular Groups</div>
              <div className={styles.tags}>
                <div className={styles.tag}>
                  <div className={styles.icon}>
                    <Image
                      className={styles.iconImg}
                      alt="comment svg"
                      src={commentSvg}
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>General Chat</div>
                    <div className={styles.description}>82,645 Posted by this tag</div>
                  </div>
                </div>
                <div className={styles.tag}>
                  <div className={styles.icon}>
                    <Image
                      className={styles.iconImg}
                      alt="book svg"
                      src={bookSvg}
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>Books</div>
                    <div className={styles.description}>65,523 Posted • Trending</div>
                  </div>
                </div>
                <div className={styles.tag}>
                  <div className={styles.icon}>
                    <Image
                      className={styles.iconImg}
                      alt="cat svg"
                      src={catSvg}
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>Cats</div>
                    <div className={styles.description}>
                      51,354 • Trending in Bangladesh
                    </div>
                  </div>
                </div>
                <div className={styles.tag}>
                  <div className={styles.icon}>
                    <Image
                      className={styles.iconImg}
                      alt="music svg"
                      src={musicSvg}
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>Music</div>
                    <div className={styles.description}>48,029 Posted by this tag</div>
                  </div>
                </div>
                <div className={styles.tag}>
                  <div className={styles.icon}>
                    <Image
                      className={styles.iconImg}
                      alt="sport svg"
                      src={sportSvg}
                      width={16}
                      height={16}
                    />  
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>Sports</div>
                    <div className={styles.description}>
                      51,354 • Trending in Bangladesh
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className={styles.groups}>
                <div className={styles.rightGroupInner}>
                  <div className={styles.rightGroupTitleWrapper}>
                    <div className={styles.rightGroupTitle}>Top Admins</div>
                  </div>
                  <div className={styles.rightGroupItem}>
                    <div className={styles.postUserAvatar}>
                      <Image
                        className={styles.postUserAvatarBack}
                        alt=""
                        src={avatarBack}
                      />
                      <Image
                        className={styles.postUserAvatarImg}
                        alt=""
                        src={postUserAvatar}
                      />
                    </div>
                    <div className={styles.rightGroupItemData}>
                      <div className={styles.rightGroupItemTitle}>
                        <div className={styles.rightGroupItemName}>Pavel</div>
                        <div className={styles.rightGroupItemAdminTag}>
                          <div className={styles.profileTagInner}>
                          <Image
                              className={styles.iconImg}
                              alt="user svg"
                              src={adminSvg}
                              width={14}
                              height={14}
                            /><span className={styles.rightGroupItemAdmin}> Admin</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.profileTags}>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="heart svg"
                              src={heartSvg}
                              width={12}
                              height={12}
                            />
                            <span>3256</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="comment svg"
                              src={commentSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.rightGroupItem}>
                    <div className={styles.postUserAvatar}>
                      <Image
                        className={styles.postUserAvatarBack}
                        alt=""
                        src={avatarBack}
                      />
                      <Image
                        className={styles.postUserAvatarImg}
                        alt=""
                        src={postUserAvatar}
                      />
                    </div>
                    <div className={styles.rightGroupItemData}>
                      <div className={styles.rightGroupItemTitle}>
                        <div className={styles.rightGroupItemName}>Pavel</div>
                        <div className={styles.rightGroupItemAdminTag}>
                          <div className={styles.profileTagInner}>
                          <Image
                              className={styles.iconImg}
                              alt="user svg"
                              src={adminSvg}
                              width={14}
                              height={14}
                            /><span className={styles.rightGroupItemAdmin}> Admin</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.profileTags}>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="heart svg"
                              src={heartSvg}
                              width={12}
                              height={12}
                            />
                            <span>3256</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="comment svg"
                              src={commentSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.rightGroupItem}>
                    <div className={styles.postUserAvatar}>
                      <Image
                        className={styles.postUserAvatarBack}
                        alt=""
                        src={avatarBack}
                      />
                      <Image
                        className={styles.postUserAvatarImg}
                        alt=""
                        src={postUserAvatar}
                      />
                    </div>
                    <div className={styles.rightGroupItemData}>
                      <div className={styles.rightGroupItemTitle}>
                        <div className={styles.rightGroupItemName}>Pavel</div>
                        <div className={styles.rightGroupItemAdminTag}>
                          <div className={styles.profileTagInner}>
                          <Image
                              className={styles.iconImg}
                              alt="user svg"
                              src={adminSvg}
                              width={14}
                              height={14}
                            /><span className={styles.rightGroupItemAdmin}> Admin</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.profileTags}>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="heart svg"
                              src={heartSvg}
                              width={12}
                              height={12}
                            />
                            <span>3256</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="comment svg"
                              src={commentSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.rightGroupItem}>
                    <div className={styles.postUserAvatar}>
                      <Image
                        className={styles.postUserAvatarBack}
                        alt=""
                        src={avatarBack}
                      />
                      <Image
                        className={styles.postUserAvatarImg}
                        alt=""
                        src={postUserAvatar}
                      />
                    </div>
                    <div className={styles.rightGroupItemData}>
                      <div className={styles.rightGroupItemTitle}>
                        <div className={styles.rightGroupItemName}>Pavel</div>
                        <div className={styles.rightGroupItemAdminTag}>
                          <div className={styles.profileTagInner}>
                          <Image
                              className={styles.iconImg}
                              alt="user svg"
                              src={adminSvg}
                              width={14}
                              height={14}
                            /><span className={styles.rightGroupItemAdmin}> Admin</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.profileTags}>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="heart svg"
                              src={heartSvg}
                              width={12}
                              height={12}
                            />
                            <span>3256</span>
                          </div>
                        </div>
                        <div className={styles.profileTag}>
                          <div className={styles.profileTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="comment svg"
                              src={commentSvg}
                              width={12}
                              height={12}
                            />
                            <span>25</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
        
      </main>
    </>
  )
}
