import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState, useContext } from 'react';
import Header from '@/components/Header';
import styles from '@/styles/PostOpen.module.css';
import { numberWithCommas, dateString, shortDateString } from '@/utility/format';
import warningSvg from '@/public/warning.svg';
import postImg from '@/public/image-73@2x.png';
import postUserAvatar from '@/public/boyAvatar.png';
import commentSvg from '@/public/comment.svg';
import shareSvg from '@/public/share.svg';
import viewSvg from '@/public/view.svg';
import heartSvg from '@/public/heart.svg';
import userSvg from '@/public/user.svg';
import adminSvg from '@/public/admin.svg';
import groupAvatarSvg from '@/public/group-avatar.svg';

export default function PostOpen() {
  const router = useRouter();
  const { messageId } = router.query;
  const [data, setData] = useState({});
  const [replyMessage, setReplyMessage] = useState({});
  const [member, setMember] = useState({});
  const [mainGroup, setMainGroup] = useState({});
  const [groups, setGroups] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (messageId) {
      fetch(`/api/messages/${messageId}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        });
    }
  }, [messageId]);
  useEffect(() => {
    if (data.member_id) {
      setLoading(true);
      fetch(`/api/members/${data.member_id}`)
        .then((res) => res.json())
        .then((member) => {
          setMember(member)
          setLoading(false)
        });
    }
    if (data.reply_to_id && (data.reply_to_id !== "No Reply")) {
      fetch(`/api/messages/${data.reply_to_id}`)
        .then((res) => res.json())
        .then((data) => {
          setReplyMessage(data)
        });
    }
  }, [data]);
  useEffect(() => {
    async function fetchGroups() {
      if (member.groups_in_common_by_id) {
        let tmp = [];
        for (const groupId of member.groups_in_common_by_id) {
          await fetch(`/api/groups/${groupId}`)
            .then((res) => res.json())
            .then((group) => {
              tmp.push(group);
              if (group.group_name === data.group) {
                setMainGroup(group);
              }
              if (tmp.length === member.groups_in_common_by_id.length) {
                setGroups(tmp);
              }
            });
        }
      }
    }
    fetchGroups();
  }, [member, data]);
  return (
    <>
      <Head>
        <title>POST OPEN</title>
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
            <div className={styles.profileUserAvatar}>
              <Image
                className={styles.profileUserAvatarImg}
                alt=""
                width={80}
                height={80}
                src={member?.profile_picture??postUserAvatar}
              />
            </div>
            <div className={styles.profileMain}>
              {mainGroup.admins_by_phone_number?.indexOf(member.phone_number_id) > -1 && (
                <div className={styles.adminTag}>
                  <Image
                    className={styles.iconImg}
                    alt=""
                    src={adminSvg}
                    width={14}
                    height={14}
                  />
                  <span className={styles.adminText}> Admin</span>
                </div>
              )}
              {mainGroup.admins_by_phone_number?.indexOf(member.phone_number_id) === -1 && (
                <div className={styles.memberTag}>
                  <Image
                    className={styles.iconImg}
                    alt=""
                    src={userSvg}
                    width={14}
                    height={14}
                  />
                  <span className={styles.memberText}> Member</span>
                </div>
              )}
              <div className={styles.profileName}>
                {member.name}
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
                  <span>{member.total_reactions}</span>
                </div>
                <div className={styles.profileTag}>
                  <Image
                    className={styles.iconImg}
                    alt="comment svg"
                    src={commentSvg}
                    width={16}
                    height={16}
                  />
                  <span>{member.total_title}</span>
                </div>
              </div>
            </div>
            <div className={styles.profileIcons}>
              {groups.map((group, index) => (
                <div className={styles.profileIcon} key={index}>
                  <Image
                    className={styles.iconImg}
                    alt=""
                    src={group.profile_picture_group??commentSvg}
                    width={14}
                    height={14}
                  />
                </div>
              ))}
            </div>
              <Link className={styles.viewProfileBtn} href={`/members/${member?._id}`}>
                View Profile
              </Link>
            <div className={styles.joinDate}>
            joined 6 months ago
            </div>
          </div>

          <div className={`${styles.infoCard} ${styles.desk}`}>
            <div className={styles.infoTitle}>
              More from {data.name}
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
                  src={data.files_media??postImg}
                  width={783}
                  height={276}
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
                        width={28}
                        height={28}
                        src={mainGroup.profile_picture_group??groupAvatarSvg}
                      />
                    </div>
                    <div className={styles.groupTitle}>
                      {data.group}
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
                      {data.title}
                    </div>
                  </div>
                  <div className={styles.postTags}>
                    {data.hashtag.map((tag, index) => (
                      <div className={styles.postTag} key={index}>
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className={styles.postText}>
                      {data.message}
                  </div>
                  <div className={styles.postReactionsWaraper}>
                    <div className={styles.postReactions}>
                      {numberWithCommas(data.total_reactions)} Reactions
                    </div>
                    <div className={styles.postIcons}>
                      {data.reactions.map((reaction, index) => (
                        <div key={index} className={styles.postIcon1}>
                          {reaction}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.actionGroup} ${styles.mobile}`}>
              <div className={styles.postDate}>
                <span className={styles.postDateHighLight}>{data.name}</span> Posted on {dateString(data.date)}
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
                {numberWithCommas(data.total_reactions)} Heart
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
            {data.reply_to_id === "No Reply" && (
              <div className={styles.noComment}>
                {data.reply_to_id}
              </div>
            )}
            {(data.reply_to_id !== "No Reply" && replyMessage.name) && (
              <div className={styles.comments}>
                <div className={styles.comment}>
                  <div className={styles.commentLeft}>
                    <div className={styles.commentAvatar}>
                      <Image
                        className={styles.commentAvatar}
                        alt="comment avatar"
                        width={45}
                        height={45}
                        src={replyMessage.profile_picture??postUserAvatar}
                      />
                    </div>
                    {/* <div className={styles.commentLeftLine}></div> */}
                  </div>
                  <div className={styles.commentBox}>
                    <div className={styles.commentTitle}>
                      <b>{replyMessage.name} •</b> {shortDateString(replyMessage.date)} • Edited on {shortDateString(replyMessage.date)}
                    </div>
                    <div className={styles.postText}>
                      {replyMessage.message}
                      {/* <p>As an ex-dev, I believed nocode to be only useful for small prototypes or things like landing pages/portfolio pages etc</p>
                      <p>After tinkering around with Bubble for a bit, I now see that you can indeed build fully fledged apps! It is still not ideal, but I reckon nocode builders will only get more powerful as time goes by</p> */}
                    </div>
                  </div>
                </div>
                {/* <div className={styles.comment2}>
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
                </div> */}
              </div>
            )}
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
              {numberWithCommas(data.total_reactions)} Heart
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
                {numberWithCommas(data.total_replies??0)} Comments
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
              <span className={styles.postDateHighLight}>{data.name}</span> Posted on {dateString(data.date)}
            </div>
          </div>
          <div className={`${styles.infoCard} ${styles.mobile}`}>
            <div className={styles.infoTitle}>
              More from {data.name}
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
      )}
    </>
  )
}
