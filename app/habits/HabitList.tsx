"use client"
import { useState } from 'react'
import { Habit } from "@/app/types"
import { addHabit } from "@/lib/actions"

type HabitListProps = {
    habits:Habit[];
}

function HabitList({habits}: HabitListProps ) {
    
  return (
    <div className=''>
        <div>
            {habits.map((habit)=>(
                habit.name
            ))}
        </div>
        <form action={addHabit}>
            <input type="text"
            name="name"
            placeholder="habit"/>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default HabitList
