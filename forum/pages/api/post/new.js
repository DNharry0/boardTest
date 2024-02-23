import { connectDB } from "@/util/database"

export default async function handler(request, response){
    if(request.method == "POST"){    
        console.log(request.body)
        if(request.body.title == "" || request.body.content == ""){
            return response.status(400).json({message: "제목과 내용을 입력해주세요."})
        }
        const db = (await connectDB).db("forum")
        let result = await db.collection("post").insertOne(request.body)
        return response.status(200).redirect("/list")
    }
}
