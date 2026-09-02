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
                <div>{`username:  ${user.username}`}</div>
                <div>{`email:  ${user.email}`}</div>
                <div>{`timezone:  ${user.timezone}`}</div>
            </div>
            <div>
                <form action={updateProfile}>
                    <div>
                        <input type="text"
                        name="username"
                        defaultValue={user.username}
                         />
                        <input type="text"
                        name="email"
                        defaultValue={user.username}
                         />
                        <input type="text"
                        name="timezone"
                        defaultValue={user.username}
                         />
                    </div>
                    <button className="px-2 cursor-pointer active:scale-95 ">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ProfileForm