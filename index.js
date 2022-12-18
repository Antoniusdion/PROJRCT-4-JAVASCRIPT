//Array
var carName = ["wuling", "brio", "jazz", "inova", "kijang"
]

// var listNumber = [1,2,3,4,5,6,7,8,9,10]

// console.log("::::::::::::::::::::::::::::::::")

// console.log("LABEL CARS", carName)
// console.log("CAR INDEX KE 2 adalah:" ,carName[2])
// console.log("jumlah data mobil adalah", carName.length)
// console.log("join data cars", carName.join("-"))
// console.log("hapus data terakhir",carName.pop())
// console.log("LIST CARS SETELAH DIHAPUS", carName)
// console.log("Tambah Data",carName.push("bmw"))
// console.log("LIST CARS SETELAH DITAMBAH", carName)
// console.log("hapus data awal",carName.shift())
// console.log("LIST CARS SETELAH DIHAPUS DATA AWAL", carName)

// console.log("::::::::::::::::::::::::::::::::")

// var dataGroup = carName.concat(listNumber)
// console.log(dataGroup)


//If Else
// const nilai = true
// const kehadiran = false
// const sikap = false

// const hasil = nilai && kehadiran && sikap
// const hasil2 = nilai || kehadiran || sikap

// console.log(hasil)
// console.log(hasil2)

// if(nilai == true){
//     console.log("LULUS")
// }

// if(nilai || kehadiran || sikap){
//     console.log("LULUS")
// }

// if(nilai && kehadiran && sikap){
//     console.log("LULUS")
// }else{
//     console.log("TIDAK LULUS")
// }

// const nilaiakhir = 50
// if(nilaiakhir < 50){
//     console.log("Tidak Lulus")
// }else if(nilaiakhir > 50){
//     console.log("Lulus")
// }else{
//     console.log("Lulus Bersyarat")
// }

//Loop
// for(let i = 1; i <= carName.length; i++ ){
//     console.log(carName[i - 1])
// }

// console.log(carName)

//Var, Let, Conts
// var a = "Learn Javascript"
// var a = "Learn HTML"
// console.log(a)

// var b = "Learn Javascript"
// var b = "Learn HTML"
// console.log(b)

// var c = "Learn Javascript"
// var c = "Learn HTML"
// console.log(c)

// //Function
// //Declaration
// function Hello(){
//     console.log("Hello World")
// }
// Hello()

// function user(nama, usia){
//     console.log(nama, usia)
// }
// user ('Dion', 22)

// function splitToArray(str){
//     const NewArray = str.split("")
//     return NewArray
// }

// function jumlahKata(kalimat){
//     var result  = splitToArray(kalimat)
//     var arrayLength = result.Length;
//     return arrayLength
// }

// console.log(jumlahKata("lorem ipsum"));

// function user(nama, usia){
//     // const result = "Nama: " + nama + "dan usia: " + usia
//     const result = `Nama: ${nama} dan Usia: ${usia}`
//     return result
// }
// const dwi = user('dwi', 37)
// const dion = user('Dion', 38)
// const bayu = user('Bayu', 39)
// const hani = user('Hani', 40)
// const abdel = user('Abdel', 41)

// console.log(dion)

//Expression
// const user = function(nama, usia){
//     const result = `Nama: ${nama} dan Usia: ${usia}`
//     return result
// }
// const dwi = user('dwi', 37)
// console.log(dwi)

//Expression - Arrow Function
// const user2 = function(nama, usia){
//     const result = `Nama: ${nama} dan Usia: ${usia}`
//     return result
// }
// const dion = user('Dion', 37)
// console.log(dion)


//PRACTICE BMI CALC
const bmiMan  = (weight, height) =>{
    const bmiresultMan = weight/(height*height)
    let resultIndicator
    console.log(bmiresultMan)


    if(bmiresultMan < 17){
        resultIndicator = "Kurus Berat"
    }else if(bmiresultMan >= 17 && bmiresultMan <= 18.4){
        resultIndicator = "Kurus Ringan"
    }else if(bmiresultMan >= 18.5 && bmiresultMan <= 25){
        resultIndicator ="Normal"
    }else if(bmiresultMan >= 25.1 && bmiresultMan <= 27){
         resultIndicator ="Gemuk"
    }else{
        resultIndicator = "Over Weight"
}

    return resultIndicator
}
console.log(bmiMan(90, 1.8))