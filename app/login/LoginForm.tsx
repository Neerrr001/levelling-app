"use client";
import {loginUser} from "@/lib/actions"
import { signIn } from "next-auth/react";

function LoginForm(){

    async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        const formdata = new FormData(event.currentTarget)
        const email = formdata.get("email")
        const password = formdata.get("password")

        const result = await signIn("credentials", {
            email:email,
            password:password,
            redirect:false
        })
        console.log(result)
    }



    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3">
                    <div className="font-semibold">
                        Login
                    </div>
                    <div className="flex flex-col gap-3">
                        <div>
                            <input 
                            type="email"
                            name="email" 
                            placeholder="email" 
                            className=" p-2 border border-gray-400 rounded-lg " />
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="password" 
                            className=" p-2 border border-gray-400 rounded-lg " />
                        </div>
                    </div>
                    <div className="">
                        <button className="px-3 py-1 w-full border rounded-2xl cursor-pointer active:scale-95">
                            Log in
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm 