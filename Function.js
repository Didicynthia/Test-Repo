const hoursHand = document.getElementById('hours-hand')
const minutesHand = document.getElementById('minutes-hand')
const secondsHand = document.getElementById('seconds-hand')

function updateTime() {
    const currentTime = new Date()

    const currentHours = currentTime.getHours()
    const currentMinutes = currentTime.getMinutes() 
    const currentSeconds = currentTime.getSeconds()

    const hoursDegree = convertHoursToDegree(currentHours, currentMinutes)
    const minutesDegree = convert60sToDegree(currentMinutes)
    const secondsDegree = convert60sToDegree(currentSeconds)
    // console.log({currentHours, currentMinutes, currentSeconds})

    hoursHand.style.setProperty(
        'transform',
        `rotate(${hoursDegree}deg)`  
    )
    minutesHand.style.setProperty(
        'transform',
        `rotate(${minutesDegree}deg)`  
    )
    secondsHand.style.setProperty(
        'transform',
        `rotate(${secondsDegree}deg)`  
    )

    // convert the values to degrees
}

function convertHoursToDegree(hours, minutes) {
    // 12 hours, makes 360deg
    // x hours, makes ydeg

    const totalHours = hours + minutes / 60

    const degree = 360 / 12 * hours
    return degree
}

function convert60sToDegree(value) {
    const degree = 360 / 60 * value
    return degree
}

updateTime()

setInterval(() => {
    updateTime()
}, 1000)