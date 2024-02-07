const prices = [200,300,400,500]

for(let i =0; i<prices.length; i++){

console.log(prices[i])
}


prices.forEach((p,i) => console.log("DEĞER:" , p, "INDIS:" , i))




prices.forEach((p,i) => console.log("DEĞER:", p, "INDIS:", i))


let sum = 0
prices.forEach((price) => (sum+=price))

console.log("SUM:" , sum)



let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "Canan"]

const upperName = names.map((name) => name.toLocaleUpperCase())
console.log(upperName)
console.log(names)

names.map((name, i, arr) => {
    arr[i] = name.toLocaleUpperCase
}
)