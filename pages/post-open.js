import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import styles from '@/styles/PostOpen.module.css';
import cornerSvg from '../public/corner.svg';
import smileSvg from '../public/smileface.svg';
import warningSvg from '../public/warning.svg';
import postImg from '../public/image-73@2x.png';
import avatarBack from '../public/ellipse-29.svg';
import postUserAvatar from '../public/boyAvatar.png';
import commentSvg from '../public/comment.svg';
import bookSvg from '../public/book.svg';
import catSvg from '../public/cat.svg';
import musicSvg from '../public/music.svg';
import sportSvg from '../public/football.svg';
import shareSvg from '../public/share.svg';
import viewSvg from '../public/view.svg';
import heartSvg from '../public/heart.svg';
import userSvg from '../public/user.svg';
import groupAvatarSvg from '../public/group-avatar.svg';
import thumbnilSvg from '../public/thumbnail.svg';

export default function PostOpen() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>POST OPEN</title>
        <meta name="description" content="Synchronicity is social website." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main className={styles.main}>
        
        <aside className={`${styles.side} ${styles.leftSide}`}>
          <div className={styles.profileCard}>
            <div className={styles.profileUserAvatar}>
              <Image
                className={styles.profileUserAvatarBack}
                alt=""
                src={avatarBack}
              />
              <Image
                className={styles.profileUserAvatarImg}
                alt=""
                src={postUserAvatar}
              />
            </div>
            <div className={styles.profileMain}>
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
              <div className={styles.profileName}>
                Mansurul Haque
              </div>
              <div className={styles.profileMemberOf}>
                Web Developer
              </div>
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
              <Link className={styles.viewProfileBtn} href="/members/642369d3f37287fe1d21ccb2">
                View Profile
              </Link>
            <div className={styles.joinDate}>
            joined 6 months ago
            </div>
          </div>

          <div className={`${styles.infoCard} ${styles.desk}`}>
            <div className={styles.infoTitle}>
              More from Mansurul Haque
            </div>
            <div className={styles.divider} />
            <div>
              <div className={styles.infoPrimary}>
                Self-Taught Developer Journal, Day 51: TOP Building Rock Paper Scissors UI cont.
              </div>
              <div className={styles.infoSecondary}>
                #webdev #beginners #codenewbie #devjournal
              </div>
            </div>
            <div className={styles.divider} />
            <div>
              <div className={styles.infoPrimary}>
                Learn Nginx and its basics in 2022
              </div>
              <div className={styles.infoSecondary}>
                #webdev #nginx #node #javascript
              </div>
            </div>
            <div className={styles.divider} />
            <div>
              <div className={styles.infoPrimary}>
                My Learning Path for Programming Tello Drones
              </div>
              <div className={styles.infoSecondary}>
                #tello #python #python3 #beginners
              </div>
            </div>
          </div>
        </aside>
        <section className={`${styles.side} ${styles.centerSide}`}>
          <div className={styles.postCard}>
            <div className={styles.post}>
              <div className={styles.postImage}>
                <Image
                  src={postImg}
                  alt="post image"
                />
              </div>
              <div className={styles.postContent}>
                <div className={styles.postHeaderGroupWaraper}>
                  <div className={styles.postHeaderGroupTag}>
                    <div className={styles.groupAvatar}>
                      <Image
                        className={styles.groupAvatarImg}
                        alt=""
                        src={groupAvatarSvg}
                      />
                    </div>
                    <div className={styles.groupTitle}>
                      Meditation
                    </div>
                    
                  </div>
                  <div className={styles.postShareIcon}>
                    <Image
                      alt="share svg"
                      src={shareSvg}
                    />
                  </div>
                </div>
                <div className={styles.postMain}>
                  <div className={styles.postTitleWrapper}>
                    <div className={styles.postTitle}>
                      OnePay - Online Payment Processing Web App
                    </div>
                  </div>
                  <div className={styles.postTags}>
                    <div className={styles.postTag}>
                      #finance
                    </div>
                    <div className={styles.postTag}>
                      #bitcoin
                    </div>
                    <div className={styles.postTag}>
                      #crypto
                    </div>
                  </div>
                  <div className={styles.postText}>
                    <p>OnePay is a modern, easy-to-use Online Payment Processing Web App UI Kit template that will help you build a web app for your payment/marketplace platform. OnePay, a multi-payment platform to facilitate payments online.</p>
                    <p>In this app, you can submit a request for a certain product or service online and one of our agents will contact you back with an offer.</p>
                    <p>You can also pay merchants directly through the app. After successfully any transaction you can see details about your payment. History details include: -Transaction ID.</p>
                    <p>What will you get? - 200+ Beautiful Screens design - Figma, XD & Sketch Files 100% editable and scalable. Thank You For Your Time.</p>
                  </div>
                  <div className={styles.postReactionsWaraper}>
                    <div className={styles.postReactions}>
                      24,056 Reactions
                    </div>
                    <div className={styles.postIcons}>
                      <div className={styles.postIcon1}>
                        <Image
                          className={styles.iconImg}
                          alt="thumbnail svg"
                          src={thumbnilSvg}
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className={styles.postIcon2}>
                        <Image
                          className={styles.iconImg}
                          alt="heart svg"
                          src={heartSvg}
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className={styles.postIcon2}>
                        <Image
                          className={styles.iconImg}
                          alt="smile svg"
                          src={smileSvg}
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.actionGroup} ${styles.mobile}`}>
              <div className={styles.postDate}>
                <span className={styles.postDateHighLight}>Mansurul Haque</span> Posted on February 21,2022
              </div>
            </div>
            <div className={`${styles.actionGroup} ${styles.mobile}`}>
              <div className={styles.actionItem}>
                <div className={styles.actionItemIcon1}>
                  <Image
                    className={styles.iconImg}
                    alt="view svg"
                    src={viewSvg}
                    width={20}
                    height={20}
                  />
                </div>
                <div className={styles.actionItemText}>
                  56,111 Views
                </div>
              </div>
              <div className={styles.actionItem}>
                <div className={styles.actionItemIcon2}>
                  <Image
                    className={styles.iconImg}
                    alt="heart svg"
                    src={heartSvg}
                    width={20}
                    height={20}
                  />
                </div>
                <div className={styles.actionItemText}>
                  24,111 Heart
                </div>
              </div>
              <div className={styles.actionItem}>
                <div className={styles.actionItemIcon3}>
                  <Image
                    className={styles.iconImg}
                    alt="comment svg"
                    src={commentSvg}
                    width={20}
                    height={20}
                  />
                </div>
                <div className={styles.actionItemText}>
                  3,111 Comments
                </div>
              </div>
              <div className={styles.actionItem}>
                <div className={styles.actionItemIcon4}>
                  <Image
                    className={styles.iconImg}
                    alt="share svg"
                    src={shareSvg}
                    width={20}
                    height={20}
                  />
                </div>
                <div className={styles.actionItemText}>
                  20 Share
                </div>
              </div>
              <div className={styles.actionItem}>
                <div className={styles.actionItemIcon5}>
                  <Image
                    className={styles.iconImg}
                    alt="warning svg"
                    src={warningSvg}
                    width={20}
                    height={20}
                  />
                </div>
                <div className={styles.actionItemText}>
                  Report
                </div>
              </div>
            </div>
          
            <div className={styles.comments}>
              <div className={styles.comment}>
                <div className={styles.commentLeft}>
                  <div className={styles.commentAvatar}>
                    <Image
                      className={styles.commentAvatar}
                      alt="comment avatar"
                      src={postUserAvatar}
                    />
                  </div>
                  <div className={styles.commentLeftLine}></div>
                </div>
                <div className={styles.commentBox}>
                  <div className={styles.commentTitle}>
                    <b>Mishacreatrix •</b> Fab 01 • Edited on Fab 01
                  </div>
                  <div className={styles.postText}>
                    <p>As an ex-dev, I believed nocode to be only useful for small prototypes or things like landing pages/portfolio pages etc</p>
                    <p>After tinkering around with Bubble for a bit, I now see that you can indeed build fully fledged apps! It is still not ideal, but I reckon nocode builders will only get more powerful as time goes by</p>
                  </div>
                </div>
              </div>
              <div className={styles.comment2}>
                <div className={styles.commentLeft2}>
                  <div className={styles.commentLeftLine2}></div>
                  <div className={styles.commentAvatar}>
                    <Image
                      className={styles.commentAvatar}
                      alt="comment avatar"
                      src={postUserAvatar}
                    />
                  </div>
                </div>
                <div className={styles.commentBox}>
                  <div className={styles.commentTitle}>
                    <b>Mishacreatrix •</b> Fab 01 • Edited on Fab 01
                  </div>
                  <div className={styles.postText}>
                    <p>As an ex-dev, I believed nocode to be only useful for small prototypes or things like landing pages/portfolio pages etc</p>
                    <p>After tinkering around with Bubble for a bit, I now see that you can indeed build fully fledged apps! It is still not ideal, but I reckon nocode builders will only get more powerful as time goes by</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside className={`${styles.side} ${styles.rightSide}`}>
          <div className={`${styles.actionGroup} ${styles.desk}`}>
            <div className={styles.actionItem}>
              <div className={styles.actionItemIcon1}>
                <Image
                  className={styles.iconImg}
                  alt="view svg"
                  src={viewSvg}
                  width={20}
                  height={20}
                />
              </div>
              <div className={styles.actionItemText}>
                56,111 Views
              </div>
            </div>
            <div className={styles.actionItem}>
              <div className={styles.actionItemIcon2}>
                <Image
                  className={styles.iconImg}
                  alt="heart svg"
                  src={heartSvg}
                  width={20}
                  height={20}
                />
              </div>
              <div className={styles.actionItemText}>
                24,111 Heart
              </div>
            </div>
            <div className={styles.actionItem}>
              <div className={styles.actionItemIcon3}>
                <Image
                  className={styles.iconImg}
                  alt="comment svg"
                  src={commentSvg}
                  width={20}
                  height={20}
                />
              </div>
              <div className={styles.actionItemText}>
                3,111 Comments
              </div>
            </div>
            <div className={styles.actionItem}>
              <div className={styles.actionItemIcon4}>
                <Image
                  className={styles.iconImg}
                  alt="share svg"
                  src={shareSvg}
                  width={20}
                  height={20}
                />
              </div>
              <div className={styles.actionItemText}>
                20 Share
              </div>
            </div>
            <div className={styles.actionItem}>
              <div className={styles.actionItemIcon5}>
                <Image
                  className={styles.iconImg}
                  alt="warning svg"
                  src={warningSvg}
                  width={20}
                  height={20}
                />
              </div>
              <div className={styles.actionItemText}>
                Report
              </div>
            </div>
          </div>
          <div className={`${styles.actionGroup} ${styles.desk}`}>
            <div className={styles.postDate}>
              <span className={styles.postDateHighLight}>Mansurul Haque</span> Posted on February 21,2022
            </div>
          </div>
          <div className={`${styles.infoCard} ${styles.mobile}`}>
            <div className={styles.infoTitle}>
              More from Mansurul Haque
            </div>
            <div className={styles.divider} />
            <div>
              <div className={styles.infoPrimary}>
                Self-Taught Developer Journal, Day 51: TOP Building Rock Paper Scissors UI cont.
              </div>
              <div className={styles.infoSecondary}>
                #webdev #beginners #codenewbie #devjournal
              </div>
            </div>
            <div className={styles.divider} />
            <div>
              <div className={styles.infoPrimary}>
                Learn Nginx and its basics in 2022
              </div>
              <div className={styles.infoSecondary}>
                #webdev #nginx #node #javascript
              </div>
            </div>
            <div className={styles.divider} />
            <div>
              <div className={styles.infoPrimary}>
                My Learning Path for Programming Tello Drones
              </div>
              <div className={styles.infoSecondary}>
                #tello #python #python3 #beginners
              </div>
            </div>
          </div>
        </aside>
               
      </main>
    </>
  )
}
