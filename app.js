                            //////// ZAD 1 ///////



// a)

const name = 'Jan'

// b)

const age = 22

// c)

const isOpen = true

// d)

const stringBoolean = 'true'

// e)

const stringNumber = '100'



                            //////// ZAD 2 ///////




// a)

const divide = 10 % 4
console.log(divide)

// b)

const fname = 'Tomasz'
const age = 33
const sentence = `${fname} ma ${age} lata`
console.log(sentence)

// c)

const firstName = 'Jan'
const lastName = 'Kowalski'
console.log(`${firstName} ${lastName}`)
console.log(firstName + ' ' + lastName)


                                //////// ZAD 3 ///////



const num = 4 + 2
console.log(`'wynik', ${num}`)



                                //////// ZAD 4 ///////

// a)

const numArr = [1, 2, 3]

// b)

const autoArr = ['Dacia', 'Fiat', 'Żuk']

// c)

const booleanArr = [true, false, true]

// d)

const emptyArr = []

// e)

const mixArr = [1, 'tablica', false, { num: 12 }, [1, 2, 3]]

// f)

console.log(mixArr[1])

// g)

const myArr = [1, 2, 3]
console.log(myArr.length)

// h)

emptyArr[0] = 2
emptyArr.push(5)
console.log(emptyArr)

// i)

const objArr = [
  {
    firstName: 'Oleksander',
    lastName: 'Usyk',
    age: 35,
  },
  {
    firstName: 'Vladimir',
    lastName: 'Kliczko',
    age: 45,
  },
  {
    firstName: 'Witalij',
    lastName: 'Kliczko',
    age: 50,
  },
]
console.log(objArr[1].firstName)

// j)

const num = 2
const arr = [num]
console.log(arr)



                        //////// ZAD 5 ///////
                        


 // a)  

const obj = {}

// b)

const person = {
  name: 'Iza',
}
// c)

const personDetails = {
  name: 'Adam',
  lastName: 'Mickiewicz',
  age: 12,
  drivingLicence: false,
}

// d)

console.log(personDetails.age)

// e)

console.log(personDetails)

// f)

const carObj={
    mark:"BMW",
    color:"Bluewater",
    productionYear:1992,
    sellYear:[1997,2002,2019], 
}




                         //////// ZAD 6 ///////


/*

a)

Typ wartosciowy wystepuje w zmiennych prostych(np. number,string) a referencyjny w zmiennych zlozonych (np. Object,Array)
W zmiennych prostych jezeli zadeklarujemy zmienna o jakiejs wartosci a nastepnie 
przypiszemy ta zmienna  jako wartosc innej zmiennej, to utworzy sie kopia tej wartosci. 
Obie zmienne beda zadeklarowane w odrebnych miejscach w pamieci, a zmiana wartosci 
jednej nie bedzie miala wplywu na druga 
przyklad:
let a=22 //22
let b=a //a jest rowne b czyli wskaze rowniez 22
let a=12 // 12 / zmieniamy wartosc zmiennej na 12
let b=22 // b nie ulegl zmianie gdyz zmiana wartosci zmiennej a nie ma wplywu na zmienna b

przyjmowanie wartosci przez referencje wystepuje w obiektach. Czyli jezeli przypiszemy obiekt a do obiektu b,
to beda sie odnosily do tej samej referencji (miejsca w pamieci) W takim przypadku jezeli zmienimy wartosc w jednym obiekcie, to 
w drugim dany parametr tez ulegnie zmianie.
Przyklad:
 const arr={
model:"BMW"
}
const arr2=arr
arr.model="Audi"
console.log(arr===arr2) // wyswietli true 
}
*/

// b)

const person={
    firstName:"Janusz",
    lastName:"Kowalski",
    age:52,
    drivingLicence: true,
    drunky:true,
}

person.age>18&&person.drivingLicence===true&&person.drunky===false ? console.log("Może kierować"):console.log("Nie może kierować")

// c)

const car = {
    name: 'mustang',
    productionYear: 2020,
    color: 'red'
  }
console.log(Object.keys(car))
const name=car.name
const productionYear=car.name
const result = `Moje auto to ${name} i zostało wyprodukowane w roku ${productionYear}` 
console.log(result)

// d)

const isAdult = true
isAdult === true? console.log("Możesz kupić alkohol"):("Nie możesz kupic alkoholu")

if(isAdult===true) console.log("Możesz kupić alkohol")
else console.log("Nie możesz kupic alkoholu")