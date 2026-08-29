"use client"
import { useState } from 'react'
import { Habit } from "@/app/types"
import { addHabit } from "@/lib/actions"

type HabitListProps = {
    habits:Habit[];
}

function HabitList({habits}: HabitListProps ) {
    
  return (
    <div className='p-2'>
        <div className='flex flex-col gap-1'>
            {habits.map((habit)=>(
                <div>{habit.name}</div>
            ))}
        </div>
        <form className="flex gap-4 mt-3"
        action={addHabit}>
            <input type="text"
            name="name"
            placeholder="habit"/>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default HabitList
