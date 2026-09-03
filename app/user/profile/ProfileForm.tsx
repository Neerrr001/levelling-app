"use client"
import { useActionState } from 'react';
import {updateProfile} from "@/lib/actions"
import type { ProfileState } from '@/app/types';

type userProfileProps = {
    user:{
        id:number;
        username:string;
        email:string;
        timezone:string;
    }
}

function ProfileForm({user}:userProfileProps ){

    const initialState: ProfileState = {}
    const updateProfileWithId = updateProfile.bind(null, user.id)

    const[state, formAction, isPending] = useActionState(updateProfileWithId, initialState)

    return(
        <div className="flex flex-col gap-3 p-2">
            <div 
            className=" flex items-center gap-2 ">
                <div className='text-2xl font-bold'>
                    Profile
                </div>
                <div className=' font-semibold'>
                    {state.message && <p>{state.message}</p>}
                </div>
            </div>
            <div>
                <form action={formAction}
                className="flex items-start flex-col gap-4">
                    <div className="flex flex-col gap-3">

                        <div className="flex gap-3">
                            <label
                            className="cursor-pointer" 
                            htmlFor="username">Username:</label>
                            <input id='username' type="text"
                            name="username"
                            defaultValue={user.username}/>
                            {state.errors?.username?.map((error)=>(
                                <p key={error}>{error}</p>
                            ))}
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
                            {state.errors?.email?.map((error)=>(
                                <p key={error}>{error}</p>
                            ))}
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
                            {state.errors?.timezone?.map((error)=>(
                                <p key={error}>{error}</p>
                            ))}
                        </div>

                    </div>
                    <button className="px-3 py-1 border rounded cursor-pointer active:scale-95 ">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ProfileForm