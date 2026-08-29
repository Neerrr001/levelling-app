"use server"
import prisma from "@/lib/prisma"

type addHabitInput = {
    name: string;
    userId: number
}

export async function addHabit({name, userId}: addHabitInput){
    const newHabit = prisma.habit.create({
        data:{
            name: name,
            userId: userId
        }
    })
}