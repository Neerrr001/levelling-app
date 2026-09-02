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
}