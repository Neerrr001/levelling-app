"use client"
import { useState } from 'react'

type HabitProps = {
    id:number, 
    name: string, 
    completed: boolean
}



function HabitList() {

    const [habits, setHabits] = useState<HabitProps[]>([    
        {id: 1, name: "workout", completed: false},
        {id: 2, name: "gym" , completed: false},
        {id: 3, name: "read", completed: false}
    ])


    function handleHabitCompletion(id:number){
        const newHabits = habits.map((habit)=>{
            if(habit.id == id){
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

    
  return (
    <div className=''>
        
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
