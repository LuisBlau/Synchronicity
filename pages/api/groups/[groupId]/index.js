// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from '@/utility/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { groupId } = req.query;
  const client = await clientPromise;
  const db = client.db();
  let query ={};
  let status = 200;
  if (!isNaN(groupId)) {
    query = { groupId: parseInt(groupId) };
  } else {
    query = { _id: new ObjectId(groupId) };
  }
  const group = await db
            .collection("groups")
            .findOne(query);
  if (!group) {
    status = 404;
  }
  res.status(status).json(group);
}
