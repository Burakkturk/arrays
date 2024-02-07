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
    arr[i] = name.toLocaleUpperCase()
}
)
console.log(names)



const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]

// const biggerThan = salaries.filter( (salary) => salary>= 10000 ) 



const biggerThan = salaries.filter((salary) => salary >= 10000)

console.log(biggerThan)
console.log(salaries)


const biggerThan9000 = salaries
.filter((s) => s < 9000)
.map((s) => Number((s * 1.1).toFixed))

console.log(biggerThan9000)