"use client"
import {updateProfile} from "@/lib/actions"

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
                <form action={updateProfile.bind(null,user.id)}
                className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">

                        <div className="flex gap-3">
                            <label
                            className="cursor-pointer" 
                            htmlFor="username">Username:</label>
                            <input id='username' type="text"
                            name="username"
                            defaultValue={user.username}/>
                        </div>
                        <div className="flex gap-3">
                            <label
                            className="cursor-pointer" 
                            htmlFor="email">Email:</label>
                            <input 
                            id="email"
                            type="text"
                            name="email"
                            defaultValue={user.email}/>
                        </div>
                        <div className="flex gap-3">
                            <label
                            className="cursor-pointer" 
                            htmlFor="timezone">Timezone:</label>
                            <input 
                            id="timezone"
                            type="text"
                            name="timezone"
                            defaultValue={user.timezone} />
                        </div>

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