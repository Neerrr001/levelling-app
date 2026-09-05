import NextAuth from "next-auth"
import {authConfig} from "./auth.config"
import Credentials from "next-auth/providers/credentials";
import prisma from "@/lib/prisma"
import { LoginSchema } from "@/lib/validation"
import * as argon2 from "argon2"
import { error } from "console";

export const {handlers, auth, signIn, signOut} = NextAuth({
    ...authConfig,
    providers:[
        Credentials({
            credentials:{
                email:{
                    type:"email",
                    label:"email",
                    placeholder:"xyz@gmail.com",
                },
                password:{
                    type:"password",
                    label:"password",
                    placeholder:"******"
                }
            },
            authorize: async(credentials)=>{
                const email = credentials.email
                const password = credentials.password

                const result = LoginSchema.safeParse({
                    email: email,
                    password: password,
                })

                if(!result.success){
                    return null;
                }

                const existingUser = await prisma.user.findUnique({
                    where:{
                        email:result.data.email
                    }
                })

                if(!existingUser){
                    return null;
                }

                if(await argon2.verify(existingUser.passwordHash, result.data.password)){
                    return{
                        id:existingUser.id.toString(),
                        email:existingUser.email,
                        username:existingUser.username
                    }
                }
                return null
            }

        })
    ]
});