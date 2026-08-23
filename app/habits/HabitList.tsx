"use client"
import { useState } from 'react'
import { Habit } from "@/app/types"

type HabitListProps = {
    habits:Habit[];
    setHabits: Dispatch<SetStateAction<Habit[]>>
}

function HabitList({habits, setHabits}: HabitListProps ) {

    
    
    const [inputHabitName, setInputHabitName] = useState<string>("")

    function handleHabitCompletion(id:number){
        const newHabits = habits.map((habit)=>{
            if(habit.id === id){
                return {
                    ...habit,
                    completed: !habit.completed
                }
            }else{
                return habit
            }
        })
        setHabits(newHabits)
    }
    
    function handleButtonClick(){
        const newHabit = {
            id:habits.length + 1,
            name: inputHabitName,
            completed:false
        }
        setHabits([...habits,newHabit])
        setInputHabitName("");
    }

  return (
    <div className=''>
        <div className='flex gap-2'>
            <div>
                <input type="text"
                className='border rounded-lg focus:ring p-2'
                value={inputHabitName}
                onChange={(e)=> setInputHabitName(e.target.value)} />
            </div>  
            <div>
                <button
                className='px-3 py-2 cursor-pointer active:scale-95 border rounded-lg'
                onClick={handleButtonClick}>
                    Submit
                </button>
            </div>
        </div>
        <div>
            {habits.map((habit)=>(
            <div key={habit.id} className='flex gap-12'>
                <div>
                    <input 
                    type="checkbox" 
                    checked={habit.completed}
                    onChange={()=> handleHabitCompletion(habit.id)}/>
                </div>
                <div>
                    {habit.name}
                </div>
                <div>
                    {habit.completed ? "Completed":"Not completed"}
                </div>
            </div>  
            ))}
        </div>
        
    </div>
  )
}

export default HabitList
