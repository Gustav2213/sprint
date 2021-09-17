currentAcc = 0

z = 0

y = 0

x = 0

myAccelerationArray: List[number] = []

while input.running_time() < 20000:

    x = input.acceleration(Dimension.X)

    y = input.acceleration(Dimension.Y)

    z = input.acceleration(Dimension.Z)

    currentAcc = Math.sqrt(x ** 2 + y ** 2 + z ** 2)

    myAccelerationArray.append(currentAcc)

    control.wait_micros(1000)

myMax = 0

index = 0

while index <= len(myAccelerationArray):

    if myAccelerationArray[index] > myMax:

        myMax = myAccelerationArray[index]

    index += 1

basic.show_number(myMax)
