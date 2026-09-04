"use server"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache";
import {redirect} from "next/navigation"
import { ProfileSchema, SignupSchema } from "./validation";
import { ProfileState, SignupState } from "@/app/types";
import * as argon2 from "argon2";

export async function addHabit(formData: FormData){
    const name = formData.get("name")
    const userId = 1; 
    await prisma.habit.create({
        data:{
            name: name as string,
            userId: userId
        }
    })

    revalidatePath("/user/habits")
}

export async function completeHabit(habitId: number){
    await prisma.completion.create({
        data:{
            habitId: habitId,
            completedAt:new Date()
        }
    })

    revalidatePath("/user/habits")
}

export async function updateProfile(id:number, previousState: ProfileState, formData:FormData): Promise<ProfileState>{
    const newUsername = formData.get("username")
    const newEmail = formData.get("email")
    const newTimezone = formData.get("timezone")

    const result = ProfileSchema.safeParse({
        username: newUsername,
        email: newEmail,
        timezone: newTimezone
    })

    if(!result.success){
        const fieldErrors = result.error.flatten().fieldErrors;

        return {
            errors:fieldErrors
        }
    }

    const newUser = await prisma.user.update({
        where:{
            id: id
        },
        data:{
            username:result.data.username,
            email:result.data.email,
            timezone:result.data.timezone,
        }
    })
    
    revalidatePath("/user/profile")

    return {
        message: "Updated successfully"
    }
    
}

export async function createUser(previousState: SignupState, formdata: FormData){
    const username = formdata.get("username")
    const email = formdata.get("email")
    const password = formdata.get("password")

    const result = SignupSchema.safeParse({
        username: username,
        email: email,
        password: password,
    })

    if(!result.success){
        const fieldErrors = result.error.flatten().fieldErrors;

        return {
            errors: fieldErrors
        }
    }

    const existingUser = await prisma.user.findUnique({
        where:{
            email:result.data.email
        }
    })

    if(existingUser){
        return {
            errors:{
                email: ["An account with this email already exists"]
            }
        }
    }

    const hashPassword = await argon2.hash(result.data.password)

    await prisma.user.create({
        data:{
            username:result.data.username,
            email:result.data.email,
            passwordHash:hashPassword 

        }
    })

    
    redirect("/login")
}