import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
// import { Source_Sans_Pro } from 'next/font/google';
import Header from '../components/Header';
import styles from '@/styles/Home.module.css';
import starSvg from '../public/new.svg';
import frameSvg from '../public/frame.svg';
import followSvg from '../public/follow.svg';
import postThumb from '../public/rectangle-24@2x.png';
import avatarBack from '../public/ellipse-29.svg';
import postUserAvatar from '../public/memoji-boys-315@2x.png';
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


export default function Home() {
  const router = useRouter();

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
                  <div className={styles.subtitle}>Newest and Recent Posts</div>
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
                    <div className={styles.subtitle}>Most Reacted Posts</div>
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
        </aside>
        <section className={`${styles.side} ${styles.centerSide}`}>
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
                        <span>3256</span>
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
                        <span>3256</span>
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
                        <span>3256</span>
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
                        <span>3256</span>
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
                        <span>25</span>
                      </div>
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
                        <span>3256</span>
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
                        <span>3256</span>
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
                        <span>3256</span>
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
                        <span>3256</span>
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
