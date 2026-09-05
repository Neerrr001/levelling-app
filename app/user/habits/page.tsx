import prisma from "@/lib/prisma"
import HabitList from "./HabitList";
import {getTodayRange} from "@/lib/date"
import { auth } from "@/auth";


export default async function HabitsPage(){

  const session = await auth();
  console.log(session)

  const userId = session.user?.id

  const {todayStart, tomorrowStart} = getTodayRange("Asia/Kolkata")
  const habits = await prisma.habit.findMany({
    where:{
      userId:userId
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
      <h1>Hello {session.user?.username}</h1>
      <HabitList habits={habits}/>
     
    </div>
  )
}
