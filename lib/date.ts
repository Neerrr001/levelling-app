import {startOfDay, addDays } from "date-fns"
import { fromZonedTime, toZonedTime } from "date-fns-tz"

export function getTodayRange(timezone:string){
    const now = new Date(); // gives us current instant

    const localNow = toZonedTime(now,timezone) //convert instant to user's timezone
    const localStart = startOfDay(localNow); // finds local midnight
    const localTomorrow = addDays(localStart,1); // finds local tomorrow start

    const todayStart = fromZonedTime(localStart, timezone); //local midnight in UTC
    const tomorrowStart = fromZonedTime(localTomorrow,timezone) //local tomorrow in UTC

    return {
        todayStart, tomorrowStart
    }

}