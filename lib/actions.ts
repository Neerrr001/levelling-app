"use server"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache";
import { ProfileSchema } from "./validation";
import { ProfileState } from "@/app/types";

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

export async function updateProfile(id:number, formData:FormData){
    const newUsername = formData.get("username")
    const newEmail = formData.get("email")
    const newTimezone = formData.get("timezone")

    const result = ProfileSchema.safeParse({
        username: newUsername,
        email: newEmail,
        timezone: newTimezone
    })

    if(!result.success){
        return result.error
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
    
}