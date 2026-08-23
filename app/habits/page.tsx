import HabitList from "@/app/habits/HabitList"
import { useState } from 'react';
import {Habit} from "@/app/types"




const [habits, setHabits] = useState<Habit[]>([    
        {id: 1, name: "workout", completed: false},
        {id: 2, name: "gym" , completed: false},
        {id: 3, name: "read", completed: false}
    ])


function page() {
  return (
    <div className="text-xl font-medium p-4">
        <HabitList habits={habits} setHabits={setHabits}/>
      
    </div>
  )
}

export default page
