import Head from 'next/head';
import Image from 'next/image';
// import { Source_Sans_Pro } from 'next/font/google';
import Header from '../components/Header';
import styles from '@/styles/Home.module.css';
import starSvg from '../public/star.svg';
import frameSvg from '../public/frame.svg';
import followSvg from '../public/follow.svg';
import postThumb from '../public/rectangle-24@2x.png';
import postThumb2 from '../public/rectangle-241@2x.png';
import avatarBack from '../public/ellipse-29.svg';
import postUserAvatar from '../public/memoji-boys-315@2x.png';
import dotSvg from '../public/ellipse-30.svg';
import rightArrowSvg from '../public/vector-17.svg';

// const inter = Source_Sans_Pro({ subsets: ['latin'], weight: '700' });

export default function Home() {
  return (
    <>
      <Head>
        <title>Synchronicity</title>
        <meta name="description" content="Synchronicity is social website." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main className={styles.main}>
        <aside className={styles.leftSidebar}>
          <div className={styles.explore}>
            <div className={styles.titleWrapper}>
              <div className={styles.title}>Explore</div>
            </div>
            <div className={styles.content}>
              <div className={styles.newPosts}>
                <div className={styles.newIcon}>
                    <div className={styles.starParent}>
                      <Image
                        className={styles.instanceChild}
                        alt="new posts"
                        src={starSvg}
                        width={20}
                        height={20}
                      /><b className={styles.starText}>!</b>
                    </div>
                </div>
                <div className={styles.titleAndDesc}>
                  <div className={styles.subtitle}>Newest and Recent Posts</div>
                  <div className={styles.description}>
                    Find the latest posts by members
                  </div>
                </div>
              </div>
              <div className={styles.popularPosts}>
                  <div className={styles.newIcon}>
                    <Image
                      className={styles.popularIconChild}
                      alt="popular posts"
                      src={frameSvg}
                    />
                  </div>
                  <div className={styles.titleAndDesc}>
                    <div className={styles.subtitle}>Most Reacted Posts</div>
                    <div className={styles.description}>
                      Post most reacted by members
                    </div>
                  </div>
              </div>
              <div className={styles.members}>
                <div className={styles.newIcon}>
                  <Image
                    className={styles.popularIconChild}
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
              <div className={styles.title}>Groups</div>
            <div className={styles.tags}>
              <div className={styles.tag}>
                <div className={styles.icon}>
                  <div className={styles.div1}>💬</div>
                </div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>General Chat</div>
                  <div className={styles.description}>82,645 Posted by this tag</div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.icon}><div className={styles.div1}>📚</div></div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>Books</div>
                  <div className={styles.description}>65,523 Posted • Trending</div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.icon}><div className={styles.div1}>🐈</div></div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>Cats</div>
                  <div className={styles.description}>
                    51,354 • Trending in Bangladesh
                  </div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.icon}><div className={styles.div1}>🎼</div></div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>Music</div>
                  <div className={styles.description}>48,029 Posted by this tag</div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.icon}><div className={styles.div1}>⚽️</div></div>
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
                <div className={styles.icon5}><div className={styles.div6}>#</div></div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#bitcoin</div>
                  <div className={styles.description}>82,645 Posted by this tag</div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.icon5}><div className={styles.div6}>#</div></div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#music</div>
                  <div className={styles.description}>65,523 Posted • Trending</div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.icon5}><div className={styles.div6}>#</div></div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#meditation</div>
                  <div className={styles.description}>
                    51,354 • Trending in Bangladesh
                  </div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.icon5}><div className={styles.div6}>#</div></div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#yoga</div>
                  <div className={styles.description}>48,029 Posted by this tag</div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.icon5}><div className={styles.div6}>#</div></div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#messi</div>
                  <div className={styles.description}>
                    51,354 • Trending in Bangladesh
                  </div>
                </div>
              </div>
              <div className={styles.tag}>
                <div className={styles.icon5}><div className={styles.div6}>#</div></div>
                <div className={styles.name1}>
                  <div className={styles.subtitle}>#video</div>
                  <div className={styles.description}>82,645 Posted by this tag</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <section className={styles.centerSection}>
          <div className={styles.postHome}>
            <div className={styles.postInner}>
              <Image className={styles.postThumb} alt="post thumb" src={postThumb} />
              <div className={styles.postData}>
                <div className={styles.postDataMain}>
                  <div className={styles.postTitleWrapper}>
                    <div className={styles.postTitle}>
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
                        <div className={styles.postUserNameWrapper}>
                          <div className={styles.postUserName}>Pavel Gvay</div>
                          <Image
                            className={styles.postUserNameDot}
                            alt="dot svg"
                            src={dotSvg}
                          />
                        </div>
                        <div className={styles.postDate}>3 weeks ago</div>
                      </div>
                      <div className={styles.postActions}>
                        <div className={styles.postActionIcon1}>
                          <div className={styles.postActionName}>🧿</div>
                        </div>
                        <div className={styles.postActionDesc}>651,324 Views</div>
                        <div className={styles.postActionIcon2}><div className={styles.postActionName}>❤️</div></div>
                        <div className={styles.postActionDesc}>36,6545 Reactions</div>
                        <div className={styles.postActionIcon3}><div className={styles.postActionName}>💬</div></div>
                        <div className={styles.postActionDesc}>56 Comments</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.postMoreIcon}>↗️</div>
              </div>
            </div>
          </div>

          <div className={styles.postHome}>
            <div className={styles.postInner}>
              <Image className={styles.postThumb} alt="post thumb" src={postThumb2} />
              <div className={styles.postData}>
                <div className={styles.postDataMain}>
                  <div className={styles.postTitleWrapper}>
                    <div className={styles.postTitle}>
                      The 4-step SEO framework that led to a 1000% increase in traffic. Let’s talk about blogging and SEO...
                    </div>
                    <div className={styles.postTags}>
                      <div className={styles.postTag}>
                        <div className={styles.postTagText}>#seo</div>
                      </div>
                      <div className={styles.postTag}>
                        <div className={styles.postTagText}>#blogging</div>
                      </div>
                      <div className={styles.postTag}>
                        <div className={styles.postTagText}>#traffic</div>
                      </div>
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
                        <div className={styles.postUserNameWrapper}>
                          <div className={styles.postUserName}>Pavel Gvay</div>
                          <Image
                            className={styles.postUserNameDot}
                            alt="dot svg"
                            src={dotSvg}
                          />
                        </div>
                        <div className={styles.postDate}>3 weeks ago</div>
                      </div>
                      <div className={styles.postActions}>
                        <div className={styles.postActionIcon1}>
                          <div className={styles.postActionName}>🧿</div>
                        </div>
                        <div className={styles.postActionDesc}>651,324 Views</div>
                        <div className={styles.postActionIcon2}><div className={styles.postActionName}>❤️</div></div>
                        <div className={styles.postActionDesc}>36,6545 Reactions</div>
                        <div className={styles.postActionIcon3}><div className={styles.postActionName}>💬</div></div>
                        <div className={styles.postActionDesc}>56 Comments</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.postMoreIcon}>↗️</div>
              </div>
            </div>
          </div>

          <div className={styles.postHome}>
            <div className={styles.postInner}>
              <Image className={styles.postThumb} alt="post thumb" src={postThumb} />
              <div className={styles.postData}>
                <div className={styles.postDataMain}>
                  <div className={styles.postTitleWrapper}>
                    <div className={styles.postTitle}>
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
                        <div className={styles.postUserNameWrapper}>
                          <div className={styles.postUserName}>Pavel Gvay</div>
                          <Image
                            className={styles.postUserNameDot}
                            alt="dot svg"
                            src={dotSvg}
                          />
                        </div>
                        <div className={styles.postDate}>3 weeks ago</div>
                      </div>
                      <div className={styles.postActions}>
                        <div className={styles.postActionIcon1}>
                          <div className={styles.postActionName}>🧿</div>
                        </div>
                        <div className={styles.postActionDesc}>651,324 Views</div>
                        <div className={styles.postActionIcon2}><div className={styles.postActionName}>❤️</div></div>
                        <div className={styles.postActionDesc}>36,6545 Reactions</div>
                        <div className={styles.postActionIcon3}><div className={styles.postActionName}>💬</div></div>
                        <div className={styles.postActionDesc}>56 Comments</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.postMoreIcon}>↗️</div>
              </div>
            </div>
          </div>

          <div className={styles.postHome}>
            <div className={styles.postInner}>
              <Image className={styles.postThumb} alt="post thumb" src={postThumb2} />
              <div className={styles.postData}>
                <div className={styles.postDataMain}>
                  <div className={styles.postTitleWrapper}>
                    <div className={styles.postTitle}>
                      The 4-step SEO framework that led to a 1000% increase in traffic. Let’s talk about blogging and SEO...
                    </div>
                    <div className={styles.postTags}>
                      <div className={styles.postTag}>
                        <div className={styles.postTagText}>#seo</div>
                      </div>
                      <div className={styles.postTag}>
                        <div className={styles.postTagText}>#blogging</div>
                      </div>
                      <div className={styles.postTag}>
                        <div className={styles.postTagText}>#traffic</div>
                      </div>
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
                        <div className={styles.postUserNameWrapper}>
                          <div className={styles.postUserName}>Pavel Gvay</div>
                          <Image
                            className={styles.postUserNameDot}
                            alt="dot svg"
                            src={dotSvg}
                          />
                        </div>
                        <div className={styles.postDate}>3 weeks ago</div>
                      </div>
                      <div className={styles.postActions}>
                        <div className={styles.postActionIcon1}>
                          <div className={styles.postActionName}>🧿</div>
                        </div>
                        <div className={styles.postActionDesc}>651,324 Views</div>
                        <div className={styles.postActionIcon2}><div className={styles.postActionName}>❤️</div></div>
                        <div className={styles.postActionDesc}>36,6545 Reactions</div>
                        <div className={styles.postActionIcon3}><div className={styles.postActionName}>💬</div></div>
                        <div className={styles.postActionDesc}>56 Comments</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.postMoreIcon}>↗️</div>
              </div>
            </div>
          </div>
        </section>
        <aside className={styles.rightSidebar}>
          <div className={styles.rightGroup}>
            <div className={styles.rightGroupInner}>
              <div className={styles.rightGroupTitleWrapper}>
                <div className={styles.rightGroupTitle}>Top Members</div>
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
                      <div className={styles.rightGroupItemTagInner}>
                        <span>👤</span><span className={styles.rightGroupItemMember}> Member</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.memberProfile}>
                    <div className={styles.postTagText}>Member • Austin, Texas, USA</div>
                  </div>
                  <div className={styles.memberProfileTags}>
                    <div className={styles.memberProfileTag}>
                      <div className={styles.rightGroupItemTagInner}>❤️ 3256</div>
                    </div>
                    <div className={styles.memberProfileTag}>
                      <div className={styles.rightGroupItemTagInner}>💬 25</div>
                    </div>
                  </div>
                </div>
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
                      <div className={styles.rightGroupItemTagInner}>
                        <span>👤</span><span className={styles.rightGroupItemMember}> Member</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.memberProfile}>
                    <div className={styles.postTagText}>Member • Austin, Texas, USA</div>
                  </div>
                  <div className={styles.memberProfileTags}>
                    <div className={styles.memberProfileTag}>
                      <div className={styles.rightGroupItemTagInner}>❤️ 3256</div>
                    </div>
                    <div className={styles.memberProfileTag}>
                      <div className={styles.rightGroupItemTagInner}>💬 25</div>
                    </div>
                  </div>
                </div>
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
                      <div className={styles.rightGroupItemTagInner}>
                        <span>👤</span><span className={styles.rightGroupItemMember}> Member</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.memberProfile}>
                    <div className={styles.postTagText}>Member • Austin, Texas, USA</div>
                  </div>
                  <div className={styles.memberProfileTags}>
                    <div className={styles.memberProfileTag}>
                      <div className={styles.rightGroupItemTagInner}>❤️ 3256</div>
                    </div>
                    <div className={styles.memberProfileTag}>
                      <div className={styles.rightGroupItemTagInner}>💬 25</div>
                    </div>
                  </div>
                </div>
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
                      <div className={styles.rightGroupItemTagInner}>
                        <span>👤</span><span className={styles.rightGroupItemMember}> Member</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.memberProfile}>
                    <div className={styles.postTagText}>Member • Austin, Texas, USA</div>
                  </div>
                  <div className={styles.memberProfileTags}>
                    <div className={styles.memberProfileTag}>
                      <div className={styles.rightGroupItemTagInner}>❤️ 3256</div>
                    </div>
                    <div className={styles.memberProfileTag}>
                      <div className={styles.rightGroupItemTagInner}>💬 25</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightGroup}>
            <div className={styles.rightGroupInner}>
              <div className={styles.rightGroupTitleWrapper}>
                <div className={styles.rightGroupTitle}>Top Admins</div>
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
                    <div className={styles.rightGroupItemAdminTag}>
                      <div className={styles.rightGroupItemTagInner}>
                        <span>🧜🏻‍♂️</span><span className={styles.rightGroupItemAdmin}> Admin</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.memberProfile}>
                    <div className={styles.postTagText}>Member • Austin, Texas, USA</div>
                  </div>
                  <div className={styles.memberProfileTags}>
                    <div className={styles.memberProfileTag}>
                      <div className={styles.rightGroupItemTagInner}>❤️ 3256</div>
                    </div>
                    <div className={styles.memberProfileTag}>
                      <div className={styles.rightGroupItemTagInner}>💬 25</div>
                    </div>
                  </div>
                </div>
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
                      <div className={styles.rightGroupItemTagInner}>
                        <span>🧜🏻‍♂️</span><span className={styles.rightGroupItemAdmin}> Admin</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.memberProfile}>
                    <div className={styles.postTagText}>Member • Austin, Texas, USA</div>
                  </div>
                  <div className={styles.memberProfileTags}>
                    <div className={styles.memberProfileTag}>
                      <div className={styles.rightGroupItemTagInner}>❤️ 3256</div>
                    </div>
                    <div className={styles.memberProfileTag}>
                      <div className={styles.rightGroupItemTagInner}>💬 25</div>
                    </div>
                  </div>
                </div>
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
                      <div className={styles.rightGroupItemTagInner}>
                        <span>🧜🏻‍♂️</span><span className={styles.rightGroupItemAdmin}> Admin</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.memberProfile}>
                    <div className={styles.postTagText}>Member • Austin, Texas, USA</div>
                  </div>
                  <div className={styles.memberProfileTags}>
                    <div className={styles.memberProfileTag}>
                      <div className={styles.rightGroupItemTagInner}>❤️ 3256</div>
                    </div>
                    <div className={styles.memberProfileTag}>
                      <div className={styles.rightGroupItemTagInner}>💬 25</div>
                    </div>
                  </div>
                </div>
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
                      <div className={styles.rightGroupItemTagInner}>
                        <span>🧜🏻‍♂️</span><span className={styles.rightGroupItemAdmin}> Admin</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.memberProfile}>
                    <div className={styles.postTagText}>Member • Austin, Texas, USA</div>
                  </div>
                  <div className={styles.memberProfileTags}>
                    <div className={styles.memberProfileTag}>
                      <div className={styles.rightGroupItemTagInner}>❤️ 3256</div>
                    </div>
                    <div className={styles.memberProfileTag}>
                      <div className={styles.rightGroupItemTagInner}>💬 25</div>
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
