import {parose} from "./fuggveny.js"

console.log(parose(5))

//tesztesetek:
/* //equivalencia osztály: azon értékek halmaza, amelyek azonos tesztesetet 
jelentenek mert várhatóan a függvény ugyan úgyfog viselkedni az összes elemére */



//1. teszteset szam=0
console.log(`1. teszteset: szam=0 | várt eredmémy: true`)
console.log(`1. teszteset: szam=0 | kapott eredmémy: ${parose(0)}`)
console.log(`1. szam=0 | vart: true | kapott: ${parose(0)} | ${true === parose(0) ? "jó" : "hibás"}`)

//2. teszteset szam=4 
console.log(`2. szam=4 | vart: true | kapott: ${parose(4)} | ${true === parose(4) ? "jó" : "hibás"}`)

//3. teszteset szam=5
let szam =5
console.log(`3. szam=${szam} | vart: false | kapott: ${parose(szam)} | ${false === parose(szam) ? "jó" : "hibás"}`)

//4. teszteset szam=-4
szam =-4
console.log(`4. szam=${szam} | vart: true | kapott: ${parose(szam)} | ${true === parose(szam) ? "jó" : "hibás"}`)

//5. teszteset szam=-5
szam =-5
console.log(`5. szam=${szam} | vart: false | kapott: ${parose(szam)} | ${false === parose(szam) ? "jó" : "hibás"}`)


//6. teszteset szam=2.5, pi, 1/3
szam =2.5
console.log(`6. szam=${szam} | vart: nem egész | kapott: ${parose(szam)} | ${false === parose(szam) ? "jó" : "hibás"}`)

//7/A. teszteset szam=40000000000000000000  //int felső határa: 2_53-1
szam =40000000000000000000
console.log(`7a. szam=${szam} | vart: true | kapott: ${parose(szam)} | ${true === parose(szam) ? "jó" : "hibás"}`)

//7/B. teszteset szam=-40000000000000000000  //int felső határa: 2_53-1
szam =-40000000000000000000
console.log(`7b. szam=${szam} | vart: false | kapott: ${parose(szam)} | ${false === parose(szam) ? "jó" : "hibás"}`)

//8. teszteset szam="valami"
szam ="valami"
console.log(`8. szam=${szam} | vart: nem szám | kapott: ${parose(szam)} | ${false === parose(szam) ? "jó" : "hibás"}`)

//9. teszteset szam="7"
szam =2.5
console.log(`9. szam=${szam} | vart: false | kapott: ${parose(szam)} | ${false === parose(szam) ? "jó" : "hibás"}`)
