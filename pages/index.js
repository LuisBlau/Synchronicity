import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from 'next/router';
// import { Source_Sans_Pro } from 'next/font/google';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Header from '@/components/Header';
import UserContext from '@/store/UserContext';
import styles from '@/styles/Home.module.css';
import starSvg from '@/public/new.svg';
import frameSvg from '@/public/frame.svg';
import followSvg from '@/public/follow.svg';
import postThumb from '@/public/rectangle-24@2x.png';
import postUserAvatar from '@/public/memoji-boys-315@2x.png';
import commentSvg from '@/public/comment.svg';
import shareSvg from '@/public/share.svg';
import viewSvg from '@/public/view.svg';
import heartSvg from '@/public/heart.svg';
import userSvg from '@/public/user.svg';
import adminSvg from '@/public/admin.svg';
import { numberWithCommas } from '@/utility/format';

const RightArrowSvg = () => {
  return (
    <svg className={styles.rightGroupTitleIcon} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10H16M16 10L11.3333 5M16 10L11.3333 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
export default function Home() {
  const router = useRouter();
  const context = useContext(UserContext);
  const [popularGroups, setPopularGroups] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/members?limit=4')
      .then((res) => res.json())
      .then((data) => {
        setAdmins(data);
      });
    fetch('/api/groups?limit=5&sort=members:desc')
      .then((res) => res.json())
      .then((data) => {
        setPopularGroups(data);
        setLoading(false);
      });
    setLoading(true);
    fetch('/api/messages?limit=50')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Synchronicity</title>
        <meta name="description" content="Synchronicity is social website." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main className={styles.main}>
        <aside className={`${styles.side} ${styles.leftSide}`}>
          <div className={styles.explore}>
            <div className={styles.content}>
              <div className={styles.newPosts}>
                <div className={styles.newIcon}>
                    <Image
                      className={styles.iconImg}
                      alt="new posts"
                      src={starSvg}
                      width={20}
                      height={20}
                    />
                </div>
                <div className={styles.titleAndDesc}>
                  <div className={styles.subtitle}>
                    <div className={styles.text}> Recent Posts </div>
                    <div className={styles.forMobile}>Recent</div>
                  </div>
                  <div className={styles.description}>
                    Find the latest posts by members
                  </div>
                </div>
              </div>
              <div className={styles.newPosts}>
                  <div className={styles.newIcon}>
                    <Image
                      className={styles.iconImg}
                      alt="popular posts"
                      src={frameSvg}
                    />
                  </div>
                  <div className={styles.titleAndDesc}>
                    <div className={styles.subtitle}>
                      <div className={styles.text}>Most Reacted Posts</div>
                      <div className={styles.forMobile}>Reacted</div>
                    </div>
                    <div className={styles.description}>
                      Post most reacted by members
                    </div>
                  </div>
              </div>
              <div className={styles.newPosts}>
                <div className={styles.newIcon}>
                  <Image
                    className={styles.iconImg}
                    alt="members"
                    src={followSvg}
                  />
                </div>
                <div className={styles.titleAndDesc}>
                  <div className={styles.subtitle}>
                    <span>Members</span>
                    <span className={styles.wrapperNumber}>24</span>
                  </div>
                  <div className={styles.description}>Explore from members</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.groups}>
              <div className={styles.title}>Popular Groups</div>
            <div className={styles.tags}>
              {isLoading && (
                <>
                <Skeleton height={30} />
                <Skeleton height={30} />
                <Skeleton height={30} />
                <Skeleton height={30} />
                <Skeleton height={30} />
                </>
              )}
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
                  <div className={styles.description}>82,645 Posted by this tag</div>
                </div>
              </div>
            ))}
            </div>
          </div>
          <div className={styles.groups}>
            <div className={styles.title}>Popular Tags(Global)</div>
            <div className={styles.tags}>
              <div className={styles.tag}>
                <div className="tagIconBack1">
                  #
                </div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#bitcoin</div>
                  <div className={styles.description}>82,645 Posted by this tag</div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className="tagIconBack2">
                  #
                </div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#music</div>
                  <div className={styles.description}>65,523 Posted • Trending</div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className="tagIconBack3">#</div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#meditation</div>
                  <div className={styles.description}>
                    51,354 • Trending in Bangladesh
                  </div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className="tagIconBack1">#</div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#yoga</div>
                  <div className={styles.description}>48,029 Posted by this tag</div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className="tagIconBack4">#</div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#messi</div>
                  <div className={styles.description}>
                    51,354 • Trending in Bangladesh
                  </div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className="tagIconBack5">#</div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#video</div>
                  <div className={styles.description}>82,645 Posted by this tag</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <section className={`${styles.side} ${styles.centerSide}`}>
          {isLoading && [0,1,2,3].map((index) => (
            <div key={index} className={styles.postHome}>
              <div className={styles.postInner}>
                <Skeleton width={150} height={150} />
                <div className={styles.postData}>
                  <div className={styles.postDataUpper}>
                    <div className={styles.postTitleWrapper}>
                      <div className={styles.postTitle}>
                        <Skeleton count={2} />
                      </div>
                      <div className={styles.postTitle}>
                        <Skeleton height={10} />
                      </div>
                      <div className={styles.postTitle}>
                        <Skeleton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {!isLoading && posts.map((post, index) => (
          <div key={index} className={styles.postHome}>
            <div className={styles.postInner}>
              <Image
                className={styles.postThumb}
                alt="post thumb"
                width={156}
                height={156}
                src={post.files_media??postThumb}
              />
              <div className={styles.postData}>
                <div className={styles.postDataUpper}>
                  <div className={styles.postTitleWrapper}>
                    <div className={styles.postTitle}>
                      <Link href={`/posts/${post._id}`}>
                        {post.title}
                      </Link>
                    </div>
                    <div className={styles.postTags}>
                      {post.hashtag.map((tag, index) => (
                        <div className={styles.postTag} key={index}>
                          <div className={styles.postTagText}>{tag}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.postMoreIcon}>
                    <Link href={`/posts/${post._id}`}>
                      <Image
                        alt="share svg"
                        src={shareSvg}
                      />
                    </Link>
                  </div>
                </div>
                <div className={styles.postUser}>
                  <div className={styles.postUserInfoWaraper}>
                    <div className={styles.postUserAvatar}>
                      <Image
                        className={styles.postUserAvatarImg}
                        width={34}
                        height={34}
                        alt=""
                        src={post.profile_picture??postUserAvatar}
                      />
                    </div>
                    <div className={styles.postUserInfo}>
                      <div className={styles.postUserName}>
                        {post.name}
                      </div>
                      <div className={styles.postDate}>{new Date(post.date).toLocaleDateString()}{/*3 weeks ago*/}</div>
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
                      <div className={styles.postActionDesc}>{numberWithCommas(post.total_reactions)} Reactions</div>
                      <div className={styles.postActionIcon3}>
                        <Image
                          className={styles.iconImg}
                          alt="comment svg"
                          src={commentSvg}
                          width={16}
                          height={16}
                        />
                      </div>
                      <div className={styles.postActionDesc}>{numberWithCommas(post.reactions.length)} Comments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}
        </section>
        <aside className={`${styles.side} ${styles.rightSide}`}>
          <div className={styles.rightGroup}>
            <div className={styles.rightGroupInner}>
              <div className={styles.rightGroupTitleWrapper}>
                <div className={styles.rightGroupTitle}>Top Members</div>
                <RightArrowSvg className={styles.rightGroupTitleIcon} />
              </div>
              {isLoading && (
                <>
                <Skeleton height={40} />
                <Skeleton height={40} />
                <Skeleton height={40} />
                <Skeleton height={40} />
                <Skeleton height={40} />
                </>
              )}
              {admins.map((admin, index) => (
                <>
                  <div className={styles.rightGroupItem}>
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
                        <div className={styles.rightGroupItemTag}>
                          <div className={styles.rightGroupItemTagInner}>
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
                      <div className={styles.memberProfileTags}>
                        <div className={styles.memberProfileTag}>
                          <div className={styles.rightGroupItemTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="heart svg"
                              src={heartSvg}
                              width={12}
                              height={12}
                            />
                            <span>{admin.total_reactions}</span>
                          </div>
                        </div>
                        <div className={styles.memberProfileTag}>
                          <div className={styles.rightGroupItemTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="comment svg"
                              src={commentSvg}
                              width={12}
                              height={12}
                            />
                            <span>{admin.total_title}</span>
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
          <div className={styles.rightGroup}>
            <div className={styles.rightGroupInner}>
              <div className={styles.rightGroupTitleWrapper}>
                <div className={styles.rightGroupTitle}>Top Admins</div>
                <RightArrowSvg className={styles.rightGroupTitleIcon} />
              </div>
              {isLoading && (
                <>
                <Skeleton height={40} />
                <Skeleton height={40} />
                <Skeleton height={40} />
                <Skeleton height={40} />
                <Skeleton height={40} />
                </>
              )}
              {admins.map((admin, index) => (
                <>
                  <div key={admin._id} className={styles.rightGroupItem}>
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
                          <div className={styles.rightGroupItemTagInner}>
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
                      <div className={styles.memberProfileTags}>
                        <div className={styles.memberProfileTag}>
                          <div className={styles.rightGroupItemTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="heart svg"
                              src={heartSvg}
                              width={12}
                              height={12}
                            />
                            <span>{admin.total_reactions}</span>
                          </div>
                        </div>
                        <div className={styles.memberProfileTag}>
                          <div className={styles.rightGroupItemTagInner}>
                            <Image
                              className={styles.iconImg}
                              alt="comment svg"
                              src={commentSvg}
                              width={12}
                              height={12}
                            />
                            <span>{admin.total_title}</span>
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
      </main>
    </>
  )
}
