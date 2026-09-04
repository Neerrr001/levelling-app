import prisma from "@/lib/prisma"

export default async function LoginPage({searchParams}: {searchParams:Promise<{signup?:string}>}){
    const params = await searchParams 

    const signup = params.signup

    return(
        <div>
            {signup === "success" && <p>Account created successfully. Please log in</p>}
        </div>
    )
}