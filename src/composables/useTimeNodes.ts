//获取一天里的特定时间节点
export function useTimeNodes(
    start: string = '08:00',
    end: string = '24:00',
    step: string = '02:00',
    fmt: string = 'HH:mm'
) {
    const getHourMinuteSeconds = (time: string): number[] => {
        const [hour, minute, second] = time.split(':').map(Number)
        return [hour || 0, minute || 0, second || 0]
    }

    const parseTime = (time: string): Date => {
        const [hour, minute, second] = getHourMinuteSeconds(time)
        const now = new Date()
        return new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), hour, minute, second)
    }

    const getNodeTimes = (date: Date): string => {
        return formatDateTime(date, fmt)
    }

    const addTimes = (date: Date): Date => {
        const [hour, minute, second] = getHourMinuteSeconds(step)
        return new Date(date.getTime() + hour * 3600000 + minute * 60000 + second * 1000)
    }

    const formatDateTime = (date: Date, fmtStr: string): string => {
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const hour = date.getHours()
        const minute = date.getMinutes()
        const second = date.getSeconds()

        const maps = {
            yyyy: year,
            yy: String(year).substring(2),
            MM: String(month).padStart(2, '0'),
            M: month,
            dd: String(day).padStart(2, '0'),
            d: day,
            HH: String(hour).padStart(2, '0'),
            H: hour,
            mm: String(minute).padStart(2, '0'),
            m: minute,
            ss: String(second).padStart(2, '0'),
            s: second
        }
        return fmtStr.replace(/(yyyy|yy|MM|M|dd|d|HH|H|mm|m|ss|s)/g, (match) => maps[match])
    }

    const timeNodes: string[] = []

    const [hour, minute, second] = getHourMinuteSeconds(step)
    if (hour === 0 && minute === 0 && second === 0) {
        throw new Error('时间步长不能为0')
    }

    let currentTime = parseTime(start)
    const endTime = parseTime(end)

    while (currentTime <= endTime) {
        timeNodes.push(getNodeTimes(currentTime))
        currentTime = addTimes(currentTime)
    }

    //处理24:00
    if (
        timeNodes.length > 1 &&
        String(getHourMinuteSeconds(timeNodes[timeNodes.length - 1])[0]).padStart(2, '0') === '00'
    ) {
        timeNodes[timeNodes.length - 1] = '24:00'
    }
    return { timeNodes, formatDateTime }
}
