// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from '@/utility/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { messageId } = req.query;
  const client = await clientPromise;
  const db = client.db();
  let query ={};
  let status = 200;
  if (!isNaN(messageId)) {
    query = { messageId: parseInt(messageId) };
  } else {
    query = { _id: messageId };
  }
  const message = await db
            .collection("messages")
            .findOne(query);
  if (!message) status = 404;
  res.status(status).json(message);
}
