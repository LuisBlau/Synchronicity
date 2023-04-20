// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from '@/utility/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { groupId } = req.query;
  const client = await clientPromise;
  const db = client.db();
  let query = { _id: new ObjectId(groupId) };
  const group = await db
            .collection("groups")
            .findOne(query);
  const memberIds = group.members_joined_by_member_id;
  const members = await Promise.all(memberIds.map(item => {
    let query = { memberid: Number(item) };
    const member = db
              .collection("members")
              .findOne(query)
              .then((result) => result);
    return member;
  }));
  res.status(200).json(members);
}
