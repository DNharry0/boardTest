import { connectDB } from '@/util/database';
import { MongoClient } from 'mongodb';

export default async function Home() {

  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray()
  console.log(result)

  return (
    <main>
      {result.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      )
      )}
    </main>
  );
}
