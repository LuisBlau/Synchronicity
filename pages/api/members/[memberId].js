// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from '@/utility/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  try{
    const { memberId } = req.query;
    const client = await clientPromise;
    const db = client.db();
    let query ={};
    let status = 200;
    if (!isNaN(memberId)) {
      query = { memberid: parseInt(memberId) };
    } else {
      query = { _id: new ObjectId(memberId) };
    }
    const member = await db
              .collection("members")
              .findOne(query);
    if (!member) {
      status = 404;
    }
    res.status(status).json(member);
  } catch (e) {
    res.status(400).json({error: e.toString()});
  }
}
