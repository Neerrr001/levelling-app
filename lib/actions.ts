"use server"
import prisma from "@/lib/prisma"

type addHabitInput = {
    name: string;
    userId: number
}

export async function addHabit(formData: FormData){
    const name = formData.get("name")
    const userId = 1; 
    const newHabit = await prisma.habit.create({
        data:{
            name: name as string,
            userId: userId
        }
    })
}