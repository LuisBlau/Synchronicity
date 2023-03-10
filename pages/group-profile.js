import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
// import { Source_Sans_Pro } from 'next/font/google';
import Header from '../components/Header';
import styles from '@/styles/GroupProfile.module.css';
import starSvg from '../public/new.svg';
import frameSvg from '../public/frame.svg';
import followSvg from '../public/follow.svg';
import postThumb from '../public/rectangle-24@2x.png';
import postThumb2 from '../public/rectangle-241@2x.png';
import avatarBack from '../public/ellipse-29.svg';
import postUserAvatar from '../public/memoji-boys-315@2x.png';
import dotSvg from '../public/ellipse-30.svg';
import rightArrowSvg from '../public/vector-17.svg';
import commentSvg from '../public/comment.svg';
import bookSvg from '../public/book.svg';
import catSvg from '../public/cat.svg';
import musicSvg from '../public/music.svg';
import sportSvg from '../public/football.svg';
import shareSvg from '../public/share.svg';
import viewSvg from '../public/view.svg';
import heartSvg from '../public/heart.svg';
import userSvg from '../public/user.svg';
import adminSvg from '../public/admin.svg';
import joinSvg from '../public/join.svg';
import groupAvatarSvg from '../public/group-avatar.svg';
import groupCoverImg from '../public/group-cover.png';

// const inter = Source_Sans_Pro({ subsets: ['latin'], weight: '700' });

export default function GroupProfile() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Group Profile</title>
        <meta name="description" content="Synchronicity is social website." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main className={styles.main}>
        <aside className={`${styles.side} ${styles.leftSide}`}>
          <div className={styles.groups}>
            <div className={styles.title}>Tags posted in this Group</div>
            <div className={styles.tags}>
              <div className={styles.tag}>
                <div className={styles.icon5}>
                  #
                </div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#bitcoin</div>
                  <div className={styles.description}>82,645 Posted by this tag</div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.icon5}>
                  #
                </div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#music</div>
                  <div className={styles.description}>65,523 Posted • Trending</div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.icon5}>#</div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#meditation</div>
                  <div className={styles.description}>
                    51,354 • Trending in Bangladesh
                  </div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.icon5}>#</div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#yoga</div>
                  <div className={styles.description}>48,029 Posted by this tag</div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.icon5}>#</div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#messi</div>
                  <div className={styles.description}>
                    51,354 • Trending in Bangladesh
                  </div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.icon5}>#</div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#video</div>
                  <div className={styles.description}>82,645 Posted by this tag</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.groups}>
            <div className={styles.rightGroupInner}>
              <div className={styles.rightGroupTitleWrapper}>
                <div className={styles.rightGroupTitle}>Group Admins</div>
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
                    <div className={styles.rightGroupItemName}>Pavel Gvay</div>
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
                    <div className={styles.rightGroupItemName}>Pavel Gvay</div>
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
                    <div className={styles.rightGroupItemName}>Pavel Gvay</div>
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
                    <div className={styles.rightGroupItemName}>Pavel Gvay</div>
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
          <div className={styles.groups}>
              <div className={styles.title}>Recommended Groups</div>
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
        </aside>
        <section className={`${styles.side} ${styles.centerSide}`}>
          <div className={styles.card}>
            <div className={styles.coverCard}>
              <div className={styles.coverCardImg}>
                <Image
                  className={styles.coverCardImg}
                  alt="group cover image"
                  src={groupCoverImg}
                />
              </div>
              <div className={styles.coverCardContent}>
                <div className={styles.coverCardLeft}>
                  <div className={styles.groupAvatar}>
                    <Image alt="group avatar" className={styles.groupAvatarImg} src={groupAvatarSvg} />
                  </div>
                  <div className={styles.groupInfo}>
                    <div className={styles.groupName}>
                      Meditation
                    </div>
                    <div className={styles.groupDate}>
                      Created on 14/12/2022 at 18:00 UTC-4
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
                            alt="member svg"
                            src={userSvg}
                            width={12}
                            height={12}
                          />
                          <span>32</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.coverCardRight}>
                  <div className={styles.joinBtn}>
                    <Image
                      className={styles.buttonSvg}
                      alt="join svg"
                      src={joinSvg}
                    />
                    <span>Join</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.aboutCard}>
              <div className={styles.aboutCardTitle}>
                About
              </div>
              <div className={styles.aboutCardContentText}>
                The group focuses on spiritual well-being and meditation practice, sharing information on techniques and providing support and feedback. Resources are shared to help members deepen their practice and achieve greater inner peace and harmony. The main goal is to create a community where meditation and spiritual awakening can be openly discussed.
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.exploreCard}>
              <span className={styles.aboutCardTitle}>
                Explore
              </span>
              <div className={styles.exploreCardBtnGroup}>
                <div className={styles.aboutCardBtn}>
                  <svg className={styles.aboutCardBtnSvg} width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.63305 13L2.11305 9.1H0.573047V7.58H2.27305L2.59305 5H0.973047V3.48H2.79305L3.23305 -7.15256e-07H4.61305L4.19305 3.48H6.53305L6.99305 -7.15256e-07H8.35305L7.93305 3.48H9.53305V5H7.75305L7.43305 7.58H9.13305V9.1H7.25305L6.79305 13H5.39305L5.85305 9.1H3.51305L3.03305 13H1.63305ZM3.67305 7.58H6.03305L6.35305 5H3.99305L3.67305 7.58Z" />
                  </svg>
                  <span>All Tags</span>
                </div>
                <div className={styles.aboutCardBtn}>
                  <svg className={styles.aboutCardBtnSvg} width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.63305 13L2.11305 9.1H0.573047V7.58H2.27305L2.59305 5H0.973047V3.48H2.79305L3.23305 -7.15256e-07H4.61305L4.19305 3.48H6.53305L6.99305 -7.15256e-07H8.35305L7.93305 3.48H9.53305V5H7.75305L7.43305 7.58H9.13305V9.1H7.25305L6.79305 13H5.39305L5.85305 9.1H3.51305L3.03305 13H1.63305ZM3.67305 7.58H6.03305L6.35305 5H3.99305L3.67305 7.58Z" />
                  </svg>
                  <span>Recent</span>
                </div>
                <div className={styles.aboutCardBtn}>
                  <svg className={styles.aboutCardBtnSvg} width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.63305 13L2.11305 9.1H0.573047V7.58H2.27305L2.59305 5H0.973047V3.48H2.79305L3.23305 -7.15256e-07H4.61305L4.19305 3.48H6.53305L6.99305 -7.15256e-07H8.35305L7.93305 3.48H9.53305V5H7.75305L7.43305 7.58H9.13305V9.1H7.25305L6.79305 13H5.39305L5.85305 9.1H3.51305L3.03305 13H1.63305ZM3.67305 7.58H6.03305L6.35305 5H3.99305L3.67305 7.58Z" />
                  </svg>
                  <span>Most Reacted Posts</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.postHome}>
            <div className={styles.postInner}>
              <Image className={styles.postThumb} alt="post thumb" src={postThumb} />
              <div className={styles.postData}>
                <div className={styles.postDataUpper}>
                  <div className={styles.postTitleWrapper}>
                    <div className={styles.postTitle} onClick={() => router.push('/post-open')}>
                      Bitcoin has tumbled from its record high of $58,000 after
                      words from three wise men and women...
                    </div>
                    <div className={styles.postTags}>
                      <div className={styles.postTag}>
                        <div className={styles.postTagText}>finance</div>
                      </div>
                      <div className={styles.postTag}>
                        <div className={styles.postTagText}>bitcoin</div>
                      </div>
                      <div className={styles.postTag}>
                        <div className={styles.postTagText}>crypto</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.postMoreIcon} onClick={() => router.push('/post-open')}>
                    <Image
                      alt="share svg"
                      src={shareSvg}
                    />
                  </div>
                </div>
                <div className={styles.postUser}>
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
                  <div className={styles.postUserMain}>
                    <div className={styles.postUserInfo}>
                      <div className={styles.postUserName}>
                        Pavel Gvay
                      </div>
                      <div className={styles.postDate}>3 weeks ago</div>
                    </div>
                    <div className={styles.postActions}>
                      <div className={styles.postActionIcon1}>
                        <Image
                          className={styles.iconImg}
                          alt="view svg"
                          src={viewSvg}
                          width={16}
                          height={16}
                        />
                      </div>
                      <div className={styles.postActionDesc}>651,324 Views</div>
                      <div className={styles.postActionIcon2}>
                        <Image
                          className={styles.iconImg}
                          alt="heart svg"
                          src={heartSvg}
                          width={16}
                          height={16}
                        />
                      </div>
                      <div className={styles.postActionDesc}>36,6545 Reactions</div>
                      <div className={styles.postActionIcon3}>
                        <Image
                          className={styles.iconImg}
                          alt="comment svg"
                          src={commentSvg}
                          width={16}
                          height={16}
                        />
                      </div>
                      <div className={styles.postActionDesc}>56 Comments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.postHome}>
            <div className={styles.postInner}>
              <Image className={styles.postThumb} alt="post thumb" src={postThumb} />
              <div className={styles.postData}>
                <div className={styles.postDataUpper}>
                  <div className={styles.postTitleWrapper}>
                    <div className={styles.postTitle} onClick={() => router.push('/post-open')}>
                      Bitcoin has tumbled from its record high of $58,000 after
                      words from three wise men and women...
                    </div>
                    <div className={styles.postTags}>
                      <div className={styles.postTag}>
                        <div className={styles.postTagText}>finance</div>
                      </div>
                      <div className={styles.postTag}>
                        <div className={styles.postTagText}>bitcoin</div>
                      </div>
                      <div className={styles.postTag}>
                        <div className={styles.postTagText}>crypto</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.postMoreIcon} onClick={() => router.push('/post-open')}>
                    <Image
                      alt="share svg"
                      src={shareSvg}
                    />
                  </div>
                </div>
                <div className={styles.postUser}>
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
                  <div className={styles.postUserMain}>
                    <div className={styles.postUserInfo}>
                      <div className={styles.postUserName}>
                        Pavel Gvay
                      </div>
                      <div className={styles.postDate}>3 weeks ago</div>
                    </div>
                    <div className={styles.postActions}>
                      <div className={styles.postActionIcon1}>
                        <Image
                          className={styles.iconImg}
                          alt="view svg"
                          src={viewSvg}
                          width={16}
                          height={16}
                        />
                      </div>
                      <div className={styles.postActionDesc}>651,324 Views</div>
                      <div className={styles.postActionIcon2}>
                        <Image
                          className={styles.iconImg}
                          alt="heart svg"
                          src={heartSvg}
                          width={16}
                          height={16}
                        />
                      </div>
                      <div className={styles.postActionDesc}>36,6545 Reactions</div>
                      <div className={styles.postActionIcon3}>
                        <Image
                          className={styles.iconImg}
                          alt="comment svg"
                          src={commentSvg}
                          width={16}
                          height={16}
                        />
                      </div>
                      <div className={styles.postActionDesc}>56 Comments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.postHome}>
            <div className={styles.postInner}>
              <Image className={styles.postThumb} alt="post thumb" src={postThumb} />
              <div className={styles.postData}>
                <div className={styles.postDataUpper}>
                  <div className={styles.postTitleWrapper}>
                    <div className={styles.postTitle} onClick={() => router.push('/post-open')}>
                      Bitcoin has tumbled from its record high of $58,000 after
                      words from three wise men and women...
                    </div>
                    <div className={styles.postTags}>
                      <div className={styles.postTag}>
                        <div className={styles.postTagText}>finance</div>
                      </div>
                      <div className={styles.postTag}>
                        <div className={styles.postTagText}>bitcoin</div>
                      </div>
                      <div className={styles.postTag}>
                        <div className={styles.postTagText}>crypto</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.postMoreIcon} onClick={() => router.push('/post-open')}>
                    <Image
                      alt="share svg"
                      src={shareSvg}
                    />
                  </div>
                </div>
                <div className={styles.postUser}>
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
                  <div className={styles.postUserMain}>
                    <div className={styles.postUserInfo}>
                      <div className={styles.postUserName}>
                        Pavel Gvay
                      </div>
                      <div className={styles.postDate}>3 weeks ago</div>
                    </div>
                    <div className={styles.postActions}>
                      <div className={styles.postActionIcon1}>
                        <Image
                          className={styles.iconImg}
                          alt="view svg"
                          src={viewSvg}
                          width={16}
                          height={16}
                        />
                      </div>
                      <div className={styles.postActionDesc}>651,324 Views</div>
                      <div className={styles.postActionIcon2}>
                        <Image
                          className={styles.iconImg}
                          alt="heart svg"
                          src={heartSvg}
                          width={16}
                          height={16}
                        />
                      </div>
                      <div className={styles.postActionDesc}>36,6545 Reactions</div>
                      <div className={styles.postActionIcon3}>
                        <Image
                          className={styles.iconImg}
                          alt="comment svg"
                          src={commentSvg}
                          width={16}
                          height={16}
                        />
                      </div>
                      <div className={styles.postActionDesc}>56 Comments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside className={`${styles.side} ${styles.rightSide}`}>
          <div className={styles.rightGroup}>
            <div className={styles.rightGroupInner}>
              <div className={styles.rightGroupTitleWrapper}>
                <div className={styles.rightGroupTitle}>Group Members</div>
                <Image
                  className={styles.rightGroupTitleIcon}
                  alt="right arrow"
                  src={rightArrowSvg}
                />
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
                    <div className={styles.rightGroupItemName}>Pavel Gvay</div>
                    <div className={styles.rightGroupItemTag}>
                      <div className={styles.profileTagInner}>
                      <Image
                          className={styles.iconImg}
                          alt="user svg"
                          src={userSvg}
                          width={14}
                          height={14}
                        /><span className={styles.rightGroupItemMember}> Member</span>
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
                    <div className={styles.rightGroupItemName}>Pavel Gvay</div>
                    <div className={styles.rightGroupItemTag}>
                      <div className={styles.profileTagInner}>
                      <Image
                          className={styles.iconImg}
                          alt="user svg"
                          src={userSvg}
                          width={14}
                          height={14}
                        /><span className={styles.rightGroupItemMember}> Member</span>
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
                    <div className={styles.rightGroupItemName}>Pavel Gvay</div>
                    <div className={styles.rightGroupItemTag}>
                      <div className={styles.profileTagInner}>
                      <Image
                          className={styles.iconImg}
                          alt="user svg"
                          src={userSvg}
                          width={14}
                          height={14}
                        /><span className={styles.rightGroupItemMember}> Member</span>
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
                    <div className={styles.rightGroupItemName}>Pavel Gvay</div>
                    <div className={styles.rightGroupItemTag}>
                      <div className={styles.profileTagInner}>
                      <Image
                          className={styles.iconImg}
                          alt="user svg"
                          src={userSvg}
                          width={14}
                          height={14}
                        /><span className={styles.rightGroupItemMember}> Member</span>
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
      </main>
    </>
  )
}
