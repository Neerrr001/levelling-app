"use client"
import { useState } from 'react'
import { Habit } from "@/app/types"
import { addHabit } from "@/lib/actions"
import { completeHabit } from "@/lib/actions"


type HabitListProps = {
    habits:Habit[];
}

function HabitList({habits}: HabitListProps ) {
    
  return (
    <div className='p-2'>
        <div className='flex flex-col gap-4'>
            {habits.map((habit)=>(
                <div className='flex gap-5'>
                    <div>
                        {habit.name}
                    </div>
                    <div>
                        <button 
                        className='px-3 border rounded cursor-pointer active:scale-95'
                        onClick={()=>{
                            completeHabit(habit.id)
                        }}>
                            Done
                        </button>
                    </div>
                    <div>
                        {`x ${habit.completions || "0"}`}
                    </div>
                </div>
            ))}
        </div>
        <form className="flex gap-4 mt-3"
        action={addHabit}>
            <input type="text"
            name="name"
            placeholder="habit"/>
            <button type="submit"
            className='px-3 border rounded cursor-pointer active:scale-95'>
                Add
            </button>
        </form>
    </div>
  )
}

export default HabitList
