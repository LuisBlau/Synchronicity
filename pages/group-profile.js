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
import groupProfileMediaImg from '../public/group-profile-media.png';

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
          <div className={`${styles.card} ${styles.tagsCard}`}>
            <div className={styles.tagsCardTitle}>Tags posted in this Group</div>
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
                <svg className={styles.tagHeaderDownArrow} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 1.75L6 6.25L1.5 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div className={styles.tagsCardtags}>
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
                <div className={styles.exploreBtn}>
                  <svg className={styles.exploreCardBtnSvg} width="17" height="17" viewBox="0 0 10 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.63305 13L2.11305 9.1H0.573047V7.58H2.27305L2.59305 5H0.973047V3.48H2.79305L3.23305 -7.15256e-07H4.61305L4.19305 3.48H6.53305L6.99305 -7.15256e-07H8.35305L7.93305 3.48H9.53305V5H7.75305L7.43305 7.58H9.13305V9.1H7.25305L6.79305 13H5.39305L5.85305 9.1H3.51305L3.03305 13H1.63305ZM3.67305 7.58H6.03305L6.35305 5H3.99305L3.67305 7.58Z" />
                  </svg>
                  <span>All Tags</span>
                </div>
                <div className={`${styles.exploreBtn} ${styles.selected}`}>
                  <svg className={styles.exploreCardBtnSvg} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.16046 1.29732C9.55452 0.68838 10.4455 0.68838 10.8395 1.29732L11.7217 2.66053C11.9789 3.05794 12.4795 3.22058 12.9211 3.05024L14.4361 2.46591C15.1128 2.2049 15.8336 2.72859 15.7945 3.45285L15.7069 5.07425C15.6814 5.54692 15.9908 5.97274 16.4482 6.09452L18.0173 6.51227C18.7182 6.69888 18.9935 7.54622 18.5362 8.10917L17.5123 9.36944C17.2138 9.73683 17.2138 10.2632 17.5123 10.6306L18.5362 11.8908C18.9935 12.4538 18.7182 13.3011 18.0173 13.4877L16.4482 13.9055C15.9908 14.0273 15.6814 14.4531 15.7069 14.9257L15.7945 16.5471C15.8336 17.2714 15.1128 17.7951 14.4361 17.5341L12.9211 16.9498C12.4795 16.7794 11.9789 16.9421 11.7217 17.3395L10.8395 18.7027C10.4455 19.3116 9.55452 19.3116 9.16046 18.7027L8.27828 17.3395C8.0211 16.9421 7.52052 16.7794 7.07887 16.9498L5.56389 17.5341C4.88716 17.7951 4.16637 17.2714 4.20549 16.5471L4.29306 14.9257C4.31859 14.4531 4.00922 14.0273 3.55179 13.9055L1.98269 13.4877C1.28178 13.3011 1.00646 12.4538 1.46383 11.8908L2.48771 10.6306C2.78619 10.2632 2.78619 9.73683 2.48771 9.36944L1.46382 8.10917C1.00646 7.54622 1.28178 6.69888 1.98269 6.51227L3.55179 6.09452C4.00922 5.97274 4.31859 5.54692 4.29306 5.07425L4.20549 3.45285C4.16637 2.72859 4.88716 2.2049 5.56389 2.46591L7.07887 3.05024C7.52052 3.22058 8.0211 3.05794 8.27828 2.66053L9.16046 1.29732Z" />
                    <path d="M4.462 12V8.088H5.368L6.388 10.032L6.772 10.896H6.796C6.78 10.688 6.758 10.456 6.73 10.2C6.702 9.944 6.688 9.7 6.688 9.468V8.088H7.528V12H6.622L5.602 10.05L5.218 9.198H5.194C5.214 9.414 5.236 9.646 5.26 9.894C5.288 10.142 5.302 10.382 5.302 10.614V12H4.462ZM9.71223 12.072C9.42823 12.072 9.17223 12.01 8.94423 11.886C8.71623 11.762 8.53623 11.584 8.40423 11.352C8.27223 11.12 8.20623 10.84 8.20623 10.512C8.20623 10.188 8.27223 9.91 8.40423 9.678C8.54023 9.446 8.71623 9.268 8.93223 9.144C9.14823 9.016 9.37423 8.952 9.61023 8.952C9.89423 8.952 10.1282 9.016 10.3122 9.144C10.5002 9.268 10.6402 9.438 10.7322 9.654C10.8282 9.866 10.8762 10.108 10.8762 10.38C10.8762 10.456 10.8722 10.532 10.8642 10.608C10.8562 10.68 10.8482 10.734 10.8402 10.77H9.05823C9.09823 10.986 9.18823 11.146 9.32823 11.25C9.46823 11.35 9.63623 11.4 9.83223 11.4C10.0442 11.4 10.2582 11.334 10.4742 11.202L10.7682 11.736C10.6162 11.84 10.4462 11.922 10.2582 11.982C10.0702 12.042 9.88823 12.072 9.71223 12.072ZM9.05223 10.188H10.1262C10.1262 10.024 10.0862 9.89 10.0062 9.786C9.93023 9.678 9.80423 9.624 9.62823 9.624C9.49223 9.624 9.37023 9.672 9.26223 9.768C9.15423 9.86 9.08423 10 9.05223 10.188ZM11.9485 12L11.2045 9.024H12.0805L12.3685 10.404C12.3925 10.552 12.4145 10.698 12.4345 10.842C12.4545 10.986 12.4765 11.134 12.5005 11.286H12.5245C12.5525 11.134 12.5785 10.984 12.6025 10.836C12.6305 10.688 12.6625 10.544 12.6985 10.404L13.0285 9.024H13.7905L14.1265 10.404C14.1625 10.552 14.1945 10.698 14.2225 10.842C14.2545 10.986 14.2845 11.134 14.3125 11.286H14.3365C14.3645 11.134 14.3865 10.986 14.4025 10.842C14.4225 10.698 14.4465 10.552 14.4745 10.404L14.7565 9.024H15.5725L14.8585 12H13.8265L13.5565 10.812C13.5285 10.672 13.5005 10.532 13.4725 10.392C13.4485 10.252 13.4225 10.102 13.3945 9.942H13.3705C13.3425 10.102 13.3165 10.252 13.2925 10.392C13.2725 10.532 13.2485 10.672 13.2205 10.812L12.9565 12H11.9485Z" fill='white' />
                  </svg>

                  <span>Recent</span>
                </div>
                <div className={styles.exploreBtn}>
                  <svg className={styles.exploreCardBtnSvg} width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.72134 11.4503L9 13.8905C9.22611 14.1259 9.64018 13.9547 9.64018 13.6338V11.4718L11.4491 11.4717C12.4357 11.4717 13.2373 10.6372 13.2373 9.6102L13.2375 1.86147C13.2375 0.834468 12.4358 0 11.4492 0H1.78827C0.801653 0 0 0.834468 0 1.86147V9.58881C0 10.6158 0.801653 11.4503 1.78827 11.4503L6.72134 11.4503ZM4.11094 4.42909L5.71424 4.30073L6.33093 2.73882C6.45424 2.43927 6.84481 2.43927 6.94763 2.73882L7.56432 4.30073L9.16763 4.42909C9.4759 4.45043 9.59936 4.83566 9.35259 5.04951L8.1192 6.1407L8.50979 7.76681C8.59195 8.06635 8.26317 8.32308 7.99591 8.15187L6.61871 7.27457L5.24151 8.15187C4.97425 8.32306 4.66597 8.06635 4.72763 7.76681L5.11822 6.1407L3.88483 5.04951C3.67922 4.85698 3.80252 4.45056 4.11094 4.42909ZM15.5602 3.10254C15.108 3.10254 14.7381 2.71747 14.7381 2.24675C14.7381 1.77602 15.108 1.39096 15.5602 1.39096H19.1779C19.6301 1.39096 20 1.77602 20 2.24675C20 2.71747 19.6301 3.10254 19.1779 3.10254H15.5602ZM14.7585 5.64877C14.7585 5.17805 15.1285 4.79298 15.5807 4.79298H18.2529C18.7051 4.79298 19.075 5.17805 19.075 5.64877C19.075 6.1195 18.7051 6.50456 18.2529 6.50456H15.5602C15.108 6.50456 14.7585 6.1195 14.7585 5.64877ZM14.7585 9.0508C14.7585 8.58007 15.1285 8.19501 15.5807 8.19501H17.2046C17.6568 8.19501 18.0267 8.58007 18.0267 9.0508C18.0267 9.52152 17.6568 9.90658 17.2046 9.90658H15.5601C15.1079 9.90658 14.7585 9.52152 14.7585 9.0508Z" />
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
          <div className={styles.card}>
            <div className={styles.profileMediaCard}>
              <div className={styles.rightGroupTitleWrapper}>
                <div className={styles.rightGroupTitle}>Recent Media</div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.rightGroupTitleIcon} d="M4 10H16M16 10L11.3333 5M16 10L11.3333 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div className={styles.profileMedia}>
                <Image
                  alt='profile media'
                  src={groupProfileMediaImg}
                />
              </div>
            </div>
          </div>
          <div className={styles.rightGroup}>
            <div className={styles.rightGroupInner}>
              <div className={styles.rightGroupTitleWrapper}>
                <div className={styles.rightGroupTitle}>Group Members</div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.rightGroupTitleIcon} d="M4 10H16M16 10L11.3333 5M16 10L11.3333 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
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
