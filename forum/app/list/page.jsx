import { connectDB } from "@/util/database"

export default async function List() {

  const db = (await connectDB).db("forum")
  let result = await db.collection("post").find().toArray()

  return (
    <main>
      {result.map((post, i) =>
        <div className="list-item" key={post._id}>
          <h2 className="">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      )}
    </main>
  );
}
