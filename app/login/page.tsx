import prisma from "@/lib/prisma"
import LoginForm from "./LoginForm"

export default async function LoginPage({searchParams}: {searchParams:Promise<{signup?:string}>}){
    const params = await searchParams 

    const signup = params.signup

    return(
        <div>
            <div className="text-xl font-thin"> 
              {signup === "success" && <p>Account created successfully. Please log in</p>}
            </div>
            <div>
                <LoginForm/>
            </div>
        </div>
    )
}