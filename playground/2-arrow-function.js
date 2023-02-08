// const square = function(x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x 

// console.log(square(7))

// arrow functions arent well suited when working with this.
const event = {
    name: 'Birthday',
    guestList: ['Diana', 'Ching', 'Andres'],
    printGuestList() {
        console.log('guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending' + this.name)
        })
    }
}
event.printGuestList()