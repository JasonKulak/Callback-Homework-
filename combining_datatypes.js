////////////////////////////////////////
//Combine objects, arrays, and functions
////////////////////////////////////////

//Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = ['red', 'green', 'blue', 'orange', 'white', 'black', 'velvet'];

console.log(crayonBox[1])

//Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
        cap: {
            color: 'blue',
            material: 'metal'
    }
}
console.log(bottle.cap.color)
console.log(bottle.cap.material)

//Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [
    food = {
        chips: 2,
        meat: 4,
        bread: 1,
    }
];
console.log(receipt[0].chips)

//Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [
    tenantNames = [
        'John',
        'Joe John',
        'Jimmy',
        'Steve Dave',
        'Mary Jo',
        'Jane Marie'
    ]
]
console.log(apartmentBuilding[0][3])