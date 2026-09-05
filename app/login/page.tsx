import prisma from "@/lib/prisma"
import LoginForm from "./LoginForm"

export default async function LoginPage({searchParams}: {searchParams:Promise<{signup?:string}>}){
    const params = await searchParams 

    const signup = params.signup

    return(
        <div className="p-2 flex flex-col items-center justify-center gap-5">
            <div className="text-2xl font-bold"> 
              {signup === "success" && <p>Account created successfully</p>}
            </div>
            <div>
                <LoginForm/>
            </div>
        </div>
    )
}