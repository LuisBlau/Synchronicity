// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from '@/utility/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { tagId } = req.query;
  const client = await clientPromise;
  const db = client.db();
  let query ={};
  let status = 200;
  query = { _id: new ObjectId(tagId) };
  const tag = await db
            .collection("hashtag_global")
            .findOne(query);
  if (!tag) status = 404;
  res.status(status).json(tag);
}
