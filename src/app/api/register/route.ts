import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const body = await request.json() 
    const existingUser = await client.fetch (`*[_type == "user" && email == "${body.email}"][0]`)
    if(!existingUser){
        await client.create({
            _type: "user",
            ...body,
            orderHistory : []
        })
        return NextResponse.json("Hello",  {status: 200})
    }
    // console.log(body)
  return NextResponse.json("Email already exist", {status: 500})
}