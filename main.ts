led.setBrightness(255)
let Y = 0
let Y1 = -1
let Y2 = -2
basic.forever(function () {
    led.plotBrightness(2, Y, 255)
    led.plotBrightness(2, Y1, 180)
    led.plotBrightness(2, Y2, 80)
    basic.pause(200)
    Y += 1
    led.unplot(2, Y1)
    Y1 += 1
    led.unplot(2, Y2)
    Y2 += 1
    if (Y == 8) {
        Y = 0
    }
    if (Y1 == 7) {
        Y1 = -1
    }
    if (Y2 == 6) {
        Y2 = -2
    }
})
