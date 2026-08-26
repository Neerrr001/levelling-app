import prisma from "@/lib/prisma"
import HabitList from "./HabitList";

export default async function HabitsPage(){
  const user = await prisma.user.findFirst({
    include:{
      habits:true
    }
  });

  return(
    <div>
      <h1>Hello {user?.username}</h1>
      <HabitList habits={user?.habits}/>
    </div>
  )
}
