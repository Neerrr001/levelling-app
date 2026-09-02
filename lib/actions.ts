"use server"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache";

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

    if(typeof(newUsername) != "string" || newUsername.trim() == "") return; 

    const newEmail = formData.get("email")
    if(typeof(newEmail) != "string" || newEmail.trim() == "") return; 

    const newTimezone = formData.get("timezone")
    if(typeof(newTimezone) != "string" || newTimezone.trim() == "") return; 

    const newUser = await prisma.user.update({
        where:{
            id: id
        },
        data:{
            username:newUsername,
            email:newEmail,
            timezone:newTimezone,
        }
    })
    
    revalidatePath("/user/profile")
    
}