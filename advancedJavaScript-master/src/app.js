let sayi1 = 10
sayi1 = "Mehmet Sulak"
let student = {id:1, name:"Mehmet"}
//console.log(student)

function save(puan = 10, ogrenci) {
    console.log(ogrenci.name + ": " + puan)
}

//save(undefined, student);

let students = ["Mehmet Sulak", "Hasan Çimen", "Hakan Gedik", "Buse Varlı"]

//console.log(students)

let students2 = [student, {id:2, name:"Hakkı"}, "Ankara", {city:"istanbul"}]

//console.log(students2)

//rest

let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts)
//showProducts(10, "Elma", "Armut", "Karpuz")

//spread
let points = [1,2,4,50,60,13]
console.log(...points)
console.log(Math.max(...points))
console.log(..."abc", "d", ..."efg", "h")

//destructring
let populations = [10000,20000,30000,[40000,100000]]
let [small, medium, high, [veryHigh, maximum]] = populations
console.log(small)
console.log(medium)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1], number) {
    console.log(small1)
}

someFunction(populations)

let category = {id:1, name:"içecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)