import {startOfDay, addDays } from "date-fns"
import { fromZonedTime, toZonedTime } from "date-fns-tz"

export function getTodayRange(timezone:string){
    const now = new Date();

    const localNow = toZonedTime(now,timezone)
    const localStart = startOfDay(localNow);
    const localTomorrow = addDays(localNow,1);

    const todayStart = fromZonedTime(localStart, timezone);
    const tomorrowStart = fromZonedTime(localTomorrow,timezone)

    return {
        todayStart, tomorrowStart
    }

}