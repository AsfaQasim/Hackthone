import { client } from "@/sanity/lib/client"
import { NextRequest, NextResponse } from "next/server"

export async function GET(){
    const users = await client.fetch(`*[_type=="user"]`)
  
  return NextResponse.json(users, {status:200})
  }
  
  export async function POST(request: NextRequest){
     const id = await request.json()
     const delUser = await client.delete(id)
  
    return NextResponse.json(delUser, {status:200})
  }