export type Completion = {
    id: number,
    habitId: number, 
    completedAt: Date
}
export type Habit = {
    id:number, 
    name: string, 
    userId:number,
    completions: Completion[]
}

export type ProfileState = {
    message?:string,
    errors?:{
        username?: string[],
        email?: string[],
        timezone?: string[]
    }
} //to define state while updating profile

export type SignupState = {
    message?:string, 
    errors?:{
        username?:string[],
        email?:string[],
        password?:string[]
    }
} //to define state while signing up a new user