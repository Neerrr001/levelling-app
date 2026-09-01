import prisma from "@/lib/prisma"
import HabitList from "./HabitList";
import {getTodayRange} from "@/lib/date"


export default async function HabitsPage(){

  const user = await prisma.user.findFirst()
  
  if(!user){
    return <div>User not found</div>
  }

  const {todayStart, tomorrowStart} = getTodayRange(user?.timezone as string)
  const habits = await prisma.habit.findMany({
    where:{
      userId:user.id
    },
    include:{
      completions:{
        where:{
          completedAt:{
            gte: todayStart,
            lt: tomorrowStart
          }
        }
      }
    }
  }); 


  return(
    <div>
      <h1>Hello {user?.username}</h1>
      <HabitList habits={habits}/>
     
    </div>
  )
}
