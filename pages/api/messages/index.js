// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from '@/utility/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();
  const query = req.query;
  let sort = {};
  const condition = {};
  let limit = 0;
  if (query && query.sort) {
    let tmp = query.sort.split(':');
    if (tmp.length === 1) {
      sort[query.sort] = 1;
    } else if (tmp.length === 2) {
      if (tmp[1].toLowerCase() === 'desc' || tmp[1].toLowerCase() === '-1') {
        sort[tmp[0]] = -1;
      } else {
        sort[tmp[0]] = 1;
      }
    }
  }
  if (query.limit && Number(query.limit) > 0) limit = Number(query.limit);
  if (query.groupName) {
    condition.group = query.groupName;
  }
  if (query.memberId) {
    condition.member_id = query.memberId;
  }
  if (query.tagName) {
    condition.hashtag = { $in : [query.tagName]  };
  }
  const messages = await db
    .collection("messages")
    .find(condition)
    .sort(sort)
    .limit(limit)
    .toArray();
  res.status(200).json(messages);
}
