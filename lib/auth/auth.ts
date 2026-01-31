import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb"
import { MongoClient } from "mongodb";
import { headers } from "next/headers";
import { env } from "process";

const client = new MongoClient(process.env.MONGODB_URI!)
const db = client.db()

export const auth = betterAuth({
    database: mongodbAdapter( db,{
        client,
    }),
    emailAndPassword:{
        enabled:true,
    }

})
export async function  getSession(){
    const result = auth.api.getSession({
        headers: await headers()
    })
}