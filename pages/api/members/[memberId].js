// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from '@/utility/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { memberId } = req.query;
  const client = await clientPromise;
  const db = client.db();
  const query = { _id: new ObjectId(memberId) };
  const member = await db
            .collection("members")
            .findOne(query);
  res.status(200).json(member);
}
