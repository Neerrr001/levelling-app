"use client";
import {loginUser} from "@/lib/actions"

function LoginForm(){
    return(
        <div>
            <form action={loginUser}>
                <div className="flex flex-col gap-3">
                    <div>
                        Login
                    </div>
                    <div>
                        <div>
                            <input 
                            type="email"
                            name="email" 
                            placeholder="email" />
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                    </div>
                    <div>
                        <button className="px-3 py-1 border rounded cursor-pointer active:scale-95">
                            Log in
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm 