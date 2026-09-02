"use client"

type userProfileProps = {
    user:{
        id:number;
        username:string;
        email:string;
        timezone:string;
    }
}

function ProfileForm({user}:userProfileProps ){
    return(
        <div className="flex flex-col gap-3 p-2">
            <div 
            className="text-2xl font-bold">Profile
            </div>
            <div>
                <div>{`username  ${user.username}`}</div>
                <div>{`email  ${user.email}`}</div>
                <div>{`timezone  ${user.timezone}`}</div>
            </div>
        </div>
    )
}

export default ProfileForm