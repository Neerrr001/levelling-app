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