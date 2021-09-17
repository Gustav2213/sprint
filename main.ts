let myMax = 0
let index = 0
let myAccelerationArray: number[] = []
let currentAcc = 0
let z = 0
let y = 0
let x = 0
while (input.runningTime() < 20000) {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    z = input.acceleration(Dimension.Z)
    currentAcc = Math.sqrt(x ** 2 + y ** 2 + z ** 2)
    myAccelerationArray.push(currentAcc)
    control.waitMicros(1000)
}
while (index <= myAccelerationArray.length) {
    if (myAccelerationArray[index] > myMax) {
        myMax = myAccelerationArray[index]
    }
    index += 1
}
basic.showNumber(myMax)
