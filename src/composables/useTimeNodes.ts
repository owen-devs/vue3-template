//获取一天里的特定时间节点
export function useTimeNodes(
    start: string = '08:00',
    end: string = '24:00',
    step: string = '02:30',
    fmt?: string
) {
    const getHourMinuteSeconds = (time: string) => {
        const [hour, minute, second] = time.split(':').map(Number)
        return [hour || 0, minute || 0, second || 0]
    }

    const parseTime = (time: string) => {
        const [hour, minute, second] = getHourMinuteSeconds(time)
        const now = new Date()
        return new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), hour, minute, second)
    }

    const getNodeTimes = (date: Date) => {
        return formatDateTime(date, fmt || 'HH:mm')
    }

    const addTimes = (date: Date) => {
        const [hour, minute, second] = getHourMinuteSeconds(step)
        return new Date(date.getTime() + hour * 3600000 + minute * 60000 + second * 1000)
    }

    const formatDateTime = (date: Date, fmtStr: string) => {
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

    const timeNodes: any[] = []

    const [hour, minute, second] = getHourMinuteSeconds(step)
    if (hour + minute + second === 0) {
        console.error('时间步长不能为0')
        return { timeNodes, formatDateTime }
    }

    let currentTime = parseTime(start)
    const endTime = parseTime(end)

    while (currentTime <= endTime) {
        timeNodes.push(getNodeTimes(currentTime))
        currentTime = addTimes(currentTime)
    }

    if (timeNodes.length > 1 && timeNodes[timeNodes.length - 1] == '00:00') {
        timeNodes[timeNodes.length - 1] = '24:00'
    }
    return { timeNodes, formatDateTime }
}
