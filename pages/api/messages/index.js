// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from '@/utility/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();
  const query = req.query;
  let limit = 0;
  if (query.limit && Number(query.limit) > 0) limit = Number(query.limit);
  const messages = await db
            .collection("messages")
            .find({})
            .limit(limit)
            .toArray();
  res.status(200).json(messages);
}
