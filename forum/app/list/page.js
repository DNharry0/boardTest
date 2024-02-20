import { connectDB } from "@/util/database"
import Link from "next/link"
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum")
  let result = await db.collection("post").find().toArray()

  return (
    <div className="list-bg">
      {result.map((post, i) =>
        <div className="list-item" key={i}>
          <Link prefetch={false} href={`/detail/${result[i]._id}`} >
            {/* prefetch 기능 끄기 */}
            <h4>{result[i].title}</h4>
          </Link>
          <DetailLink/>
          <p>{post.content}</p>
        </div>
      )}
    </div>
  );
}
