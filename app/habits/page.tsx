import prisma from "@/lib/prisma"

export default async function HabitsPage(){
  const user = await prisma.user.findFirst();

  return(
    <div>
      <h1>Hello {user?.username}</h1>
    </div>
  )
}
