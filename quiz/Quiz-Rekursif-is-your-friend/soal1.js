function angkaTerbesar(sentence) {
    //code here
    if(sentence.length === 0){
        return -1;
    } else if(sentence.length === 1){
        return sentence[0];
    } else {
        let max = angkaTerbesar(sentence.slice(1));
        return sentence[0] > max ? sentence[0] : max;
    }
  }
  
  // TEST CASES
  console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
  console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
  console.log(angkaTerbesar([2, 1, 7, 2, 8])) // 8
  console.log(angkaTerbesar([])) // -1