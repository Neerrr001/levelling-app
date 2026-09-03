"use client"

function SignupForm(){
    return(
        <form action={} className="p-2 flex flex-col gap-3">
            <div className="text-2xl font-bold">
                Sign up
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-3">
                    <label htmlFor="username">username:</label>
                    <input name="username" type="text" />
                </div>
                <div className="flex gap-3">
                    <label htmlFor="email">email:</label>
                    <input name="email" type="email" />
                </div>
                <div className="flex gap-3">
                    <label htmlFor="password">password:</label>
                    <input name="password" type="password" />
                </div>
            </div>
            <div>
                <button type="submit">
                    Sign up
                </button>
            </div>
        </form>

    )
}

export default SignupForm