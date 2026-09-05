"use client";
import {loginUser} from "@/lib/actions"

function LoginForm(){
    return(
        <div>
            <form action={loginUser}>
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