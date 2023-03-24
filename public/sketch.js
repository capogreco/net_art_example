document.body.style.margin   = 0
document.body.style.overflow = `hidden`

function setup () {
   createCanvas (innerWidth, innerHeight)
   noLoop ()
   noStroke ()
   fill (`deeppink`)
   rectMode (CENTER)
}

function  draw () {
   background (`turquoise`)
   square (width / 2, height / 2, 100)
}
