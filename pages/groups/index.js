import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState, useContext } from 'react';
import UserContext from "@/store/UserContext";
import Header from '@/components/Header';
import styles from '@/styles/Groups.module.css';
import postUserAvatar from '@/public/memoji-boys-315@2x.png';
import commentSvg from '@/public/comment.svg';
import catSvg from '@/public/cat.svg';
import sportSvg from '@/public/football.svg';
import heartSvg from '@/public/heart.svg';
import userSvg from '@/public/user.svg';
import adminSvg from '@/public/admin.svg';
import groupAvatarSvg from '@/public/group-avatar.svg';
import appleAvatarSvg from '@/public/apple-avatar.svg';
import robotAvatarSvg from '@/public/robot-avatar.svg';
import groupCoverImg from '@/public/group-cover.png';
import searchIconSvg from '@/public/search-icon.svg';
import { numberWithCommas } from '@/utility/format';


export default function Groups() {
  const router = useRouter();
  const context = useContext(UserContext);
  const [openGroupTags, setOpenGroupTags] = useState(true);
  const [openGroupTag, setOpenGroupTag] = useState(true);
  const [openPopularTag, setOpenPopularTag] = useState(true);

  const [data, setData] = useState([]);
  const [popularGroups, setPopularGroups] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/members?limit=4')
      .then((res) => res.json())
      .then((data) => {
        setAdmins(data);
      });
    fetch('/api/groups?limit=5&sort=total_messages:desc')
      .then((res) => res.json())
      .then((data) => {
        setPopularGroups(data);
      });
    fetch('/api/groups')
      .then((res) => res.json())
      .then((data) => {
        setData(data/* .slice(0, 10) */);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Group Search</title>
        <meta name="description" content="Synchronicity is social website." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      {isLoading && (
        <div className="container-div">
          <div className="loader-element">
            <div></div>
          </div>
        </div>
      )}
      {data.length > 0 && (
      <main className={styles.main}>
        <div className={`${styles.card} ${styles.mobile} ${styles.search}`}>
          <div className={styles.searchBar}>
            <input className={styles.searchBarInput} type="text" placeholder='Search Groups' />
            <Image
                className={styles.searchIcon}
                alt="search icon"
                src={searchIconSvg}
              />
          </div>
        </div>
        <aside className={`${styles.side} ${styles.leftSide}`}>
          <div className={styles.tagsBar}>
            <div
              className={styles.tagsCardTitle}
              onClick={() => setOpenGroupTags(!openGroupTags)}
            >
              <span>Tags posted by Group </span>
              <div className={`${styles.tagHeaderRight} ${styles.mobile}`}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.tagHeaderDownArrow} d="M10.5 1.75L6 6.25L1.5 1.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            {
              (context.isMobile && openGroupTags || !context.isMobile) && (
                <>
                  <div
                    className={styles.tagHeader}
                    onClick={() => setOpenGroupTag(!openGroupTag)}
                  >
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
                  {openGroupTag && (
                  <div className={styles.tagsCardTags}>
                    <div className={styles.tag}>
                      <div className='tagIconBack1'>
                        #
                      </div>
                      <div className={styles.name1}>
                        <div className={styles.subtitle}>#music</div>
                        <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                      </div>
                    </div>
                    <div className={styles.tag}>
                      <div className='tagIconBack2'>#</div>
                      <div className={styles.name1}>
                        <div className={styles.subtitle}>#meditation</div>
                        <div className={styles.tagDescription}>
                          51,354 • Trending in Bangladesh
                        </div>
                      </div>
                    </div>
                    <div className={styles.tag}>
                      <div className='tagIconBack3'>#</div>
                      <div className={styles.name1}>
                        <div className={styles.subtitle}>#yoga</div>
                        <div className={styles.tagDescription}>48,029 Posted by this tag</div>
                      </div>
                    </div>
                    <div className={styles.tag}>
                      <div className='tagIconBack1'>#</div>
                      <div className={styles.name1}>
                        <div className={styles.subtitle}>#messi</div>
                        <div className={styles.tagDescription}>
                          51,354 • Trending in Bangladesh
                        </div>
                      </div>
                    </div>
                    <div className={styles.tag}>
                      <div className='tagIconBack4'>#</div>
                      <div className={styles.name1}>
                        <div className={styles.subtitle}>#video</div>
                        <div className={styles.tagDescription}>82,645 Posted by this tag</div>
                      </div>
                    </div>
                  </div>
                  )}
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
                </>
              )
            }
          </div>
        </aside>
        <aside className={`${styles.side} ${styles.popularTags} ${styles.leftSide}`}>
          <div className={`${styles.card} ${styles.popularTagsCard}`}>
            <div className={styles.tagsCardTitle}>Popular Tags (Global)</div>
            <div
              className={styles.tagHeader}
              onClick={() => setOpenPopularTag(!openPopularTag)}
            >
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className='tagIconBack1'>
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
            { openPopularTag && (
              <div className={styles.tagsCardTags}>
                <div className={styles.tag}>
                  <div className='tagIconBack2'>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.tagDescription}>65,523 Posted • Trending</div>
                  </div>
                </div>
                <div className={styles.tag}>
                  <div className='tagIconBack3'>#</div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#meditation</div>
                    <div className={styles.tagDescription}>
                      51,354 • Trending in Bangladesh
                    </div>
                  </div>
                </div>
                <div className={styles.tag}>
                  <div className='tagIconBack4'>#</div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#yoga</div>
                    <div className={styles.tagDescription}>48,029 Posted by this tag</div>
                  </div>
                </div>
                <div className={styles.tag}>
                  <div className='tagIconBack5'>#</div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#messi</div>
                    <div className={styles.tagDescription}>
                      51,354 • Trending in Bangladesh
                    </div>
                  </div>
                </div>
                <div className={styles.tag}>
                  <div className='tagIconBack1'>#</div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#video</div>
                    <div className={styles.tagDescription}>82,645 Posted by this tag</div>
                  </div>
                </div>
              </div>
            )}
            <div className={styles.tagHeader}>
              <div className={styles.tagHeaderLeft}>
                <div className={styles.tag}>
                  <div className='tagIconBack2'>
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
                  <div className='tagIconBack3'>
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
                  <div className='tagIconBack4'>
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
                  <div className='tagIconBack5'>
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
                  <div className='tagIconBack1'>
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
                  <div className='tagIconBack2'>
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
                  <div className='tagIconBack3'>
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
                  <div className='tagIconBack4'>
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
                  <div className='tagIconBack5'>
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
                  <div className='tagIconBack1'>
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
                  <div className='tagIconBack2'>
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
                  <div className='tagIconBack3'>
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
                  <div className='tagIconBack4'>
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
                  <div className='tagIconBack5'>
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
                  <div className='tagIconBack1'>
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
                  <div className='tagIconBack2'>
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
                  <div className='tagIconBack3'>
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
          <div className={`${styles.card} ${styles.desk}`}>
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
              {data.map((item, index) => (
                <div key={index} className={`${styles.groupCard} ${styles.card}`}>
                  <div className={styles.groupCardInner}>
                    <div className={styles.groupCardMain}>
                      <div className={styles.groupCardAvatar}>
                        <Image
                          width={83}
                          height={83}
                          alt='grout avatar'
                          src={item.profile_picture_group??groupAvatarSvg}
                        />
                      </div>
                      <div className={styles.groupCardData}>
                        <div className={styles.tagCardTitle} title={item.group_name}>
                          <Link href={`/groups/${item._id}`}>
                            {item.group_name}
                          </Link>
                        </div>
                        <div className={styles.tagCardDesc}>
                          {/* Created on 14/12/2022 at 20:18 UTC-4 */}
                          {`Created on ${new Date(item.creation_date).toLocaleDateString()} at ${new Date(item.creation_date).getHours()}:${new Date(item.creation_date).getMinutes()}`}
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
                              <span>{item.total_reactions}</span>
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
                              <span>{item.total_messages}</span>
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
                              <span>{item.members}</span>
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
              ))}
            </div>

            <aside className={`${styles.side} ${styles.rightSide}`}>
              <div className={styles.groups}>
                <div className={styles.title}>Popular Groups</div>
                <div className={styles.tags}>
                {popularGroups.map((group, index) => (
                  <div key={index} className={styles.tag}>
                    <div className={styles.icon}>
                      <Image
                        className={styles.iconImg}
                        alt="comment svg"
                        src={group.profile_picture_group??commentSvg}
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className={styles.name1}>
                      <div className={styles.subtitle}>{group.group_name}</div>
                      <div className={styles.description}>{numberWithCommas(group.total_messages)} Posted by this group</div>
                    </div>
                  </div>
                ))}
                </div>
            </div>
              <div className={styles.groups}>
                <div className={styles.rightGroupInner}>
                  <div className={styles.rightGroupTitleWrapper}>
                    <div className={styles.rightGroupTitle}>Top Admins</div>
                  </div>
                  {admins.map((admin, index) => (
                    <>
                      <div className={styles.rightGroupItem} key={admin._id}>
                        <div className={styles.postUserAvatar}>
                          <Image
                            className={styles.postUserAvatarImg}
                            alt=""
                            width={34}
                            height={34}
                            src={admin.profile_picture??postUserAvatar}
                          />
                        </div>
                        <div className={styles.rightGroupItemData}>
                          <div className={styles.rightGroupItemTitle}>
                            <div className={styles.rightGroupItemName}>
                              <Link href={`/members/${admin._id}`}>
                                {admin.name}
                              </Link>
                            </div>
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
                                <span>{numberWithCommas(admin.total_reactions)}</span>
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
                                <span>{numberWithCommas(admin.total_title)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {index !== (admins.length - 1) && (<div className={styles.divider} key={index} />)}
                    </>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      )}
    </>
  )
}
