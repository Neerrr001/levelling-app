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

    revalidatePath("/habits")
}

export async function completeHabit(habitId: number){
    await prisma.completion.create({
        data:{
            habitId: habitId,
            completedAt:new Date()
        }
    })

    revalidatePath("/habits")
}