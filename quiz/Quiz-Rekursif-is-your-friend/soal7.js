/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
    //code here
    let stringEq = equation+"";
    let lengthEq = stringEq.length;
    if(equation < 10){
        return stringEq;
    }

    if(equation % 10 === 0){
        return stringEq;
    } else {
        let newEquation = equation%(10**(lengthEq - 1));
        let result = Math.floor(equation/(10**(lengthEq - 1))) * (10 ** (lengthEq-1));
        return result+"+"+parseNumber(newEquation);
    }
};
  
  console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
  console.log(parseNumber(90)) // 90
  console.log(parseNumber(2333)) // 2000+300+30+3