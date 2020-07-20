// Feet to Mile calculator
function feetToMile(feet){
    if(feet >= 0){
        var mile = feet / 5280
        console.log('1) ' + feetToMileInput + ' Feet = ' + mile + ' Mile')
    }
    else {
        console.log('1) Please enter a positive feet amount!')
    }
}

var feetToMileInput = 10

feetToMile(feetToMileInput)



// Wood Calculator
function woodCalculator(c, t, b){
    var chair = c * 1
    var table = t * 3
    var bed   = b * 5
    var totalWood = chair + table + bed
    return totalWood 
}

var inputChair = 4
var inputTable = 4
var inputBed   = 4

var woodCalculatorResult =  woodCalculator(inputChair, inputTable, inputBed)

console.log('2) For ' + inputChair +' Chair, ' + inputTable + ' Table and ' + inputBed + ' Bed we need ' + woodCalculatorResult + ' cubic feet Wood')



// Break Calculator
function brickCalculator(floor){
    if(floor > 0 && floor <= 10){
        return brick = 15 * 1000 * floor
    }
    else if(floor > 10 && floor <= 20){
        let newFloor = floor - 10
        return brick = (12 * 1000 * newFloor) + (15 * 1000 * 10)
    }
    else if(floor > 20){
        let newFloor = floor - 10
        newFloor = newFloor - 20
        return brick = (10 * 1000 * newFloor) + (12 * 1000 * 20) + (15 * 1000 * 10)
    }
    else{
        return brick = 0
    }
}

const brickCalculatorInput = 22
let brick = 0

brickCalculator(brickCalculatorInput)

console.log('3) For ' + brickCalculatorInput + ' Floor we need ' + brick + ' amount of brick')



//My Tiny Friend Name
let myArray = ['Ahasan','Noor','Rashid','Badhon']

function tinyFriend(array){
    let min = Math.min(...array.map(({length})=> length));
    for(var i=0; i<array.length; i++){
        if(array[i].length === min){
            return array[i]
        }
    }
}

var tinyFriend = tinyFriend(myArray)
console.log('4) My Tinny Frined is : ' + tinyFriend)