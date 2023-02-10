import dayjs from "dayjs";
export function formatMouthDay(date, formatStr = "MM月DD日") {
    return dayjs(date).format(formatStr)
}