import Head from 'next/head';
import Image from 'next/image';
// import { Source_Sans_Pro } from 'next/font/google';
import React, { useEffect, useState, useContext } from 'react';
import Header from '@/components/Header';
import styles from '@/styles/MemberProfile.module.css';
import postThumb from '@/public/rectangle-24@2x.png';
import avatarBack from '@/public/ellipse-29.svg';
import postUserAvatar from '@/public/boyAvatar.png';
import profileAvatar from '@/public/profile-avatar.png';
import commentSvg from '@/public/comment.svg';
import bookSvg from '@/public/book.svg';
import catSvg from '@/public/cat.svg';
import musicSvg from '@/public/music.svg';
import sportSvg from '@/public/football.svg';
import shareSvg from '@/public/share.svg';
import viewSvg from '@/public/view.svg';
import heartSvg from '@/public/heart.svg';
import userSvg from '@/public/user.svg';
import profileCardHeaderBackImage from '@/public/profilecardheader.png';
import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();
  const { memberId } = router.query;
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (memberId) {
      fetch(`/api/members/${memberId}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        });
    }
  }, [memberId]);
  return (
    <>
      <Head>
        <title>Member Profile</title>
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
      {!isLoading && (
        <main className={styles.main}>
          <aside className={`${styles.side} ${styles.leftSide}`}>
            <div className={styles.profileCard}>
              <div className={styles.profileCardHeader}>
                <Image
                  className={styles.profileCardHeaderBackImg}
                  alt="profile background image"
                  src={profileCardHeaderBackImage}
                />
              </div>
              <div className={styles.profileUserAvatar}>
                <div className={styles.profileUserAvatarBack}>
                  <Image
                    className={styles.profileUserAvatarImg}
                    alt="profile avatar"
                    width={100}
                    height={100}
                    src={data.profile_picture??profileAvatar}
                  />
                </div>
              </div>
              <div className={styles.profileMain}>
                <div className={styles.profileName}>
                  {data.name}
                </div>
                <div className={styles.memberTag}>
                  <Image
                    className={styles.iconImg}
                    alt="user svg"
                    src={userSvg}
                    width={14}
                    height={14}
                  />
                  <span className={styles.memberText}> Member</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.profileTags}>
                  <div className={styles.profileTag}>
                    <Image
                      className={styles.iconImg}
                      alt="heart svg"
                      src={heartSvg}
                      width={16}
                      height={16}
                    />
                    <span>3256</span>
                  </div>
                  <div className={styles.profileTag}>
                    <Image
                      className={styles.iconImg}
                      alt="comment svg"
                      src={commentSvg}
                      width={16}
                      height={16}
                    />
                    <span>55</span>
                  </div>
                </div>
                <div className={styles.profileMemberOf}>
                  Groups
                </div>
              </div>
              <div className={styles.profileIcons}>
                <div className={styles.profileIcon}>
                  <Image
                    className={styles.iconImg}
                    alt="comment svg"
                    src={commentSvg}
                    width={14}
                    height={14}
                  />
                </div>
                <div className={styles.profileIcon}>
                  <Image
                    className={styles.iconImg}
                    alt="book svg"
                    src={bookSvg}
                    width={14}
                    height={14}
                  />
                </div>
                <div className={styles.profileIcon}>
                  <Image
                    className={styles.iconImg}
                    alt="cat svg"
                    src={catSvg}
                    width={14}
                    height={14}
                  />
                </div>
                <div className={styles.profileIcon}>
                  <Image
                    className={styles.iconImg}
                    alt="music svg"
                    src={musicSvg}
                    width={14}
                    height={14}
                  />
                </div>
                <div className={styles.profileIcon}>
                  <Image
                    className={styles.iconImg}
                    alt="sport svg"
                    src={sportSvg}
                    width={14}
                    height={14}
                  />
                </div>
              </div>
              <div className={styles.profileSubDesc}>
                Hey there... I&apos;m AR Jakir! I&apos;m here to learn from and support the other members of this community!
              </div>
              <div className={`${styles.profileWeb} ${styles.desk}`}>
                <svg className={styles.webIcon} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.00049 0C3.14034 0 0 3.14019 0 7C0 10.8596 3.14039 14 7.00049 14C10.8601 14 14 10.8596 14 7C14 3.14024 10.8602 0 7.00049 0ZM12.8281 6.42882H10.771C10.6362 4.50643 9.82572 2.70745 8.5032 1.34539C10.8275 1.96413 12.5897 3.97409 12.8281 6.42882ZM7.00049 12.4772C5.48182 11.2832 4.53369 9.50278 4.37564 7.57132H9.62465C9.46661 9.50239 8.51852 11.2832 7.00039 12.4772H7.00049ZM4.37564 6.42882C4.53349 4.49776 5.48177 2.71632 7.00049 1.52335C8.51862 2.71632 9.4669 4.49776 9.62475 6.42882H4.37564ZM5.4972 1.34539C4.17447 2.7076 3.36423 4.50673 3.22944 6.42882H1.17173C1.41044 3.97399 3.17267 1.96378 5.4972 1.34539ZM1.17173 7.57118H3.22944C3.3642 9.49356 4.17447 11.2922 5.4972 12.6541C3.17267 12.0358 1.41045 10.0262 1.17173 7.57118ZM8.50339 12.6541C9.82592 11.2921 10.6364 9.49351 10.7711 7.57118H12.8283C12.59 10.0262 10.8277 12.0358 8.50339 12.6541Z"/>
                </svg>
                www.uikit.to
              </div>
              <div className={styles.socialIcons}>
              <div className={`${styles.profileWeb} ${styles.mobile}`}>
                <svg className={styles.webIcon} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.00049 0C3.14034 0 0 3.14019 0 7C0 10.8596 3.14039 14 7.00049 14C10.8601 14 14 10.8596 14 7C14 3.14024 10.8602 0 7.00049 0ZM12.8281 6.42882H10.771C10.6362 4.50643 9.82572 2.70745 8.5032 1.34539C10.8275 1.96413 12.5897 3.97409 12.8281 6.42882ZM7.00049 12.4772C5.48182 11.2832 4.53369 9.50278 4.37564 7.57132H9.62465C9.46661 9.50239 8.51852 11.2832 7.00039 12.4772H7.00049ZM4.37564 6.42882C4.53349 4.49776 5.48177 2.71632 7.00049 1.52335C8.51862 2.71632 9.4669 4.49776 9.62475 6.42882H4.37564ZM5.4972 1.34539C4.17447 2.7076 3.36423 4.50673 3.22944 6.42882H1.17173C1.41044 3.97399 3.17267 1.96378 5.4972 1.34539ZM1.17173 7.57118H3.22944C3.3642 9.49356 4.17447 11.2922 5.4972 12.6541C3.17267 12.0358 1.41045 10.0262 1.17173 7.57118ZM8.50339 12.6541C9.82592 11.2921 10.6364 9.49351 10.7711 7.57118H12.8283C12.59 10.0262 10.8277 12.0358 8.50339 12.6541Z"/>
                </svg>
                www.uikit.to
              </div>
                <svg className={styles.socialIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_7144)">
                    <path d="M14 3C13.2422 2.99986 12.0408 3.42427 11.5 4C10.9592 4.57573 10.7226 5.4207 10.7087 6.24238V7.52004C10.7071 7.61148 10.6877 7.70151 10.6517 7.78422C10.6157 7.86694 10.564 7.94047 10.5 8C10.436 8.05953 10.3611 8.1037 10.2802 8.12963C10.1993 8.15555 10.1143 8.16264 10.0307 8.15043L8.5 8C6.45204 7.69724 4.38245 6.20086 2.5 4.5C1.90376 8.07905 2.69527 11.3785 5.5 13.2913L7.22043 14.4785C7.30319 14.5349 7.37195 14.6125 7.42069 14.7044C7.46942 14.7962 7.49665 14.8997 7.5 15.0056C7.50335 15.1116 7.4827 15.2168 7.43987 15.3121C7.39705 15.4074 7.33334 15.4898 7.25433 15.5522L5.5 17C6.5 17.5 8.25619 17.16 9 17C13.7041 15.9814 17 11.832 17 5.5C17 4.98315 15.9223 3 14 3ZM8.97851 6.20237C8.99592 5.16007 9.29646 4.14649 9.84252 3.28855C10.3886 2.4306 11.1559 1.76642 12.0484 1.37916C12.9409 0.991891 13.9188 0.898755 14.8599 1.11141C15.801 1.32406 16.6633 1.83306 17.3389 2.57466C18.0478 2.56925 18.651 2.76389 20 1.87723C19.666 3.65054 19.5015 4.42041 18.7896 5.47899C18.7896 13.7422 14.1064 17.7602 9.3544 18.7885C6.09602 19.4935 1.35799 18.3355 0 16.7979C0.691959 16.7395 3.50366 16.4119 5.12887 15.1219C3.75393 14.139 -1.71893 10.6465 1.87746 1.25657C3.56548 3.39427 5.27743 4.84968 7.01231 5.62172C8.16691 6.13533 8.45007 6.12452 8.97951 6.20345L8.97851 6.20237Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_7144">
                      <rect width="20" height="20" />
                    </clipPath>
                  </defs>
                </svg>
                <svg className={styles.socialIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 0H3.33326C2.4492 0 1.60142 0.35114 0.976279 0.976279C0.35114 1.60142 0 2.4492 0 3.33326V16.6667C0 17.5508 0.35114 18.3986 0.976279 19.0237C1.60142 19.6489 2.4492 20 3.33326 20H16.6667C17.5508 20 18.3986 19.6489 19.0237 19.0237C19.6489 18.3986 20 17.5508 20 16.6667V3.33326C20 2.4492 19.6489 1.60142 19.0237 0.976279C18.3986 0.35114 17.5508 0 16.6667 0V0ZM18.3334 16.6667H18.3333C18.3333 17.1086 18.1578 17.5326 17.8452 17.8451C17.5327 18.1577 17.1087 18.3332 16.6667 18.3332H3.33327C2.8913 18.3332 2.46734 18.1577 2.15484 17.8451C1.84221 17.5326 1.66671 17.1086 1.66671 16.6667V3.33319C1.66671 2.89123 1.84221 2.46727 2.15484 2.15477C2.46734 1.84213 2.8913 1.66663 3.33327 1.66663H16.6667C17.1087 1.66663 17.5327 1.84213 17.8452 2.15477C18.1578 2.46727 18.3333 2.89123 18.3333 3.33319L18.3334 16.6667Z" />
                  <path d="M10.1535 12.5493V19H12.307V12.5493H14.4605L14.9989 10.2658H12.307V8.37625C12.307 7.32815 12.3544 7.0724 12.4836 6.81437C12.5583 6.6604 12.6765 6.53505 12.8217 6.45587C13.0651 6.31772 13.4732 6.26862 14.4605 6.26862H15V4.09935C14.4369 4.01372 13.9782 3.98403 13.6239 4.00801C12.7302 4.06852 12.2187 4.20895 11.8074 4.44301C11.2862 4.73493 10.86 5.18648 10.5842 5.73886C10.3043 6.29717 10.1535 6.8509 10.1535 8.37739V10.2658H8V12.5493H10.1535Z" />
                </svg>
                <svg className={styles.socialIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 0H3.33326C2.4492 0 1.60142 0.35114 0.976279 0.976279C0.35114 1.60142 0 2.4492 0 3.33326V16.6667C0 17.5508 0.35114 18.3986 0.976279 19.0237C1.60142 19.6489 2.4492 20 3.33326 20H16.6667C17.5508 20 18.3986 19.6489 19.0237 19.0237C19.6489 18.3986 20 17.5508 20 16.6667V3.33326C20 2.4492 19.6489 1.60142 19.0237 0.976279C18.3986 0.35114 17.5508 0 16.6667 0V0ZM18.3334 16.6667H18.3333C18.3333 17.1086 18.1578 17.5326 17.8452 17.8451C17.5327 18.1577 17.1087 18.3332 16.6667 18.3332H3.33327C2.8913 18.3332 2.46734 18.1577 2.15484 17.8451C1.84221 17.5326 1.66671 17.1086 1.66671 16.6667V3.33319C1.66671 2.89123 1.84221 2.46727 2.15484 2.15477C2.46734 1.84213 2.8913 1.66663 3.33327 1.66663H16.6667C17.1087 1.66663 17.5327 1.84213 17.8452 2.15477C18.1578 2.46727 18.3333 2.89123 18.3333 3.33319L18.3334 16.6667Z" />
                  <path d="M9.99996 5C8.67394 5 7.4022 5.52678 6.46442 6.46442C5.52678 7.4022 5 8.67394 5 9.99996C5 11.326 5.52678 12.5977 6.46442 13.5355C7.4022 14.4731 8.67394 14.9999 9.99996 14.9999C11.326 14.9999 12.5977 14.4731 13.5355 13.5355C14.4731 12.5977 14.9999 11.326 14.9999 9.99996C14.9999 8.67394 14.4731 7.4022 13.5355 6.46442C12.5977 5.52678 11.326 5 9.99996 5ZM9.99996 13.3332C9.1159 13.3332 8.26812 12.982 7.64298 12.3569C7.01784 11.7317 6.6667 10.884 6.6667 9.99989C6.6667 9.11583 7.01784 8.26805 7.64298 7.64291C8.26812 7.01777 9.1159 6.66663 9.99996 6.66663C10.884 6.66663 11.7318 7.01777 12.3569 7.64291C12.9821 8.26805 13.3332 9.11583 13.3332 9.99989C13.3332 10.884 12.9821 11.7317 12.3569 12.3569C11.7318 12.982 10.884 13.3332 9.99996 13.3332Z" />
                  <path d="M16.666 4.58324C16.666 5.27367 16.1063 5.83323 15.416 5.83323C14.7256 5.83323 14.166 5.27367 14.166 4.58324C14.166 3.89296 14.7256 3.33325 15.416 3.33325C16.1063 3.33325 16.666 3.89296 16.666 4.58324Z" />
                </svg>

              </div>
              <div className={styles.divider} />
              <div className={styles.profileSubDesc}>
              joined 6 months ago
              </div>
            </div>
          </aside>
          <section className={`${styles.side} ${styles.centerSide}`}>
            <div className={styles.actionBar}>
              <div className={`${styles.actionBtn} ${styles.selected}`}>
                Posts
              </div>
              <div className={styles.actionBtn}>
                Groups
              </div>
              <div className={styles.actionBtn}>
                Tags
              </div>
              <div className={styles.actionBtn}>
                Reacted
              </div>
              <div className={styles.actionBtn}>
                Activity
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
                          <div className={styles.postTagText}>#finance</div>
                        </div>
                        <div className={styles.postTag}>
                          <div className={styles.postTagText}>#bitcoin</div>
                        </div>
                        <div className={styles.postTag}>
                          <div className={styles.postTagText}>#crypto</div>
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
                    <div className={styles.postUserInfoWaraper}>
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
                      <div className={styles.postUserInfo}>
                        <div className={styles.postUserName}>
                          Pavel Gvay
                        </div>
                        <div className={styles.postDate}>3 weeks ago</div>
                      </div>
                    </div>
                    <div className={styles.postUserMain}>
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
                          <div className={styles.postTagText}>#finance</div>
                        </div>
                        <div className={styles.postTag}>
                          <div className={styles.postTagText}>#bitcoin</div>
                        </div>
                        <div className={styles.postTag}>
                          <div className={styles.postTagText}>#crypto</div>
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
                    <div className={styles.postUserInfoWaraper}>
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
                      <div className={styles.postUserInfo}>
                        <div className={styles.postUserName}>
                          Pavel Gvay
                        </div>
                        <div className={styles.postDate}>3 weeks ago</div>
                      </div>
                    </div>
                    <div className={styles.postUserMain}>
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
                          <div className={styles.postTagText}>#finance</div>
                        </div>
                        <div className={styles.postTag}>
                          <div className={styles.postTagText}>#bitcoin</div>
                        </div>
                        <div className={styles.postTag}>
                          <div className={styles.postTagText}>#crypto</div>
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
                    <div className={styles.postUserInfoWaraper}>
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
                      <div className={styles.postUserInfo}>
                        <div className={styles.postUserName}>
                          Pavel Gvay
                        </div>
                        <div className={styles.postDate}>3 weeks ago</div>
                      </div>
                    </div>
                    <div className={styles.postUserMain}>
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
                          <div className={styles.postTagText}>#finance</div>
                        </div>
                        <div className={styles.postTag}>
                          <div className={styles.postTagText}>#bitcoin</div>
                        </div>
                        <div className={styles.postTag}>
                          <div className={styles.postTagText}>#crypto</div>
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
                    <div className={styles.postUserInfoWaraper}>
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
                      <div className={styles.postUserInfo}>
                        <div className={styles.postUserName}>
                          Pavel Gvay
                        </div>
                        <div className={styles.postDate}>3 weeks ago</div>
                      </div>
                    </div>
                    <div className={styles.postUserMain}>
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
              <div className={styles.title}>Popular Tags</div>
              <div className={styles.tags}>
                <div className={styles.tag}>
                  <div className='tagIconBack1'>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#bitcoin</div>
                    <div className={styles.description}>82,645 Posted by this tag</div>
                  </div>
                </div>
                <div className={styles.tag}>
                  <div className='tagIconBack2'>
                    #
                  </div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#music</div>
                    <div className={styles.description}>65,523 Posted • Trending</div>
                  </div>
                </div>
                <div className={styles.tag}>
                  <div className='tagIconBack3'>#</div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#meditation</div>
                    <div className={styles.description}>
                      51,354 • Trending in Bangladesh
                    </div>
                  </div>
                </div>
                <div className={styles.tag}>
                  <div className='tagIconBack4'>#</div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#yoga</div>
                    <div className={styles.description}>48,029 Posted by this tag</div>
                  </div>
                </div>
                <div className={styles.tag}>
                  <div className='tagIconBack5'>#</div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#messi</div>
                    <div className={styles.description}>
                      51,354 • Trending in Bangladesh
                    </div>
                  </div>
                </div>
                <div className={styles.tag}>
                  <div className='tagIconBack5'>#</div>
                  <div className={styles.name1}>
                    <div className={styles.subtitle}>#video</div>
                    <div className={styles.description}>82,645 Posted by this tag</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </main>
      )}
    </>
  )
}
