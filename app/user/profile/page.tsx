import prisma from "@/lib/prisma"
import ProfileForm from "./ProfileForm";

export default async function ProfilePage(){
    const user = await prisma.user.findFirst({
        select:{
            username: true,
            email:true,
            timezone:true
        }
    });

    if(!user){
        return <div>User not found</div>
    }

    return(
        <div>
            <ProfileForm user={user}/>
        </div>

    )
}