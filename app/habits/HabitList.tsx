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
        <div>
            {habits.map((habit)=>(
                habit.name
            ))}
        </div>
        <form className="flex gap-4 mt-2"
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
