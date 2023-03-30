// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from '@/utility/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();
  const groups = await db
            .collection("groups")
            .find({})
            // .sort({ metacritic: -1 })
            // .limit(20)
            .toArray();
  res.status(200).json(groups);
}
