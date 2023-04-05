// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from '@/utility/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { messageId } = req.query;
  const client = await clientPromise;
  const db = client.db();
  const query = { _id: messageId };
  const message = await db
            .collection("messages")
            .findOne(query);
  res.status(200).json(message);
}
