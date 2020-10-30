'use strict'

/*
0 = sıfır
1 = bir
2 = iki
3 = üç
4 = dört
5 = beş
6 = altı
7 = yedi
8 = sekiz
9 = dokuz

10 = on
20 = yirmi
30 = otuz
40 = kırk
50 = elli
60 = altmış
70 = yetmiş
80 = seksen
90 = doksan
*/

const getTurkishNumber = (num) => {

    if( num  < 0 || num > 99)
        return null;

    const ints = ["sıfır", "bir","iki","üç","dört","beş","altı","yedi","sekiz","dokuz"];

    const tens = ["", "on", "yirmi","otuz","kırk","elli","altmış","yetmiş","seksen","doksan"]

    if(num < 10)
        return(ints[num])
    else
        if(num % 10 == 0) return(tens[num/10])
        return(tens[Math.floor((num / 10) % 10)] + " " + ints[num%10])
    
	
}

console.log(getTurkishNumber(61))