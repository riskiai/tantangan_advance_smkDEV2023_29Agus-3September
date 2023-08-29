/* Soal */
/* 
Note: A Prime Number is a number that cannot be made by multiplying other whole numbers. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

Examples:
6 is not a prime number because it can be made by 2×3 = 6
37 is a prime number because no other whole numbers multiply together to make it.

Input :
# range
start = 25
end = 50
*/

/* Output */
/* 
Prime numbers between 25 and 50 are :
29
31
37
41
43
47
*/

/* Code */
// Fungsi untuk memeriksa apakah sebuah angka adalah bilangan prima
function BilanganPrima(angka) {
    if (angka <= 1) {
        return false;
    }
    if (angka <= 3) {
        return true;
    }
    if (angka % 2 === 0 || angka % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= angka) {
        if (angka % i === 0 || angka % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

// Rentang angka
const mulai = 25;
const akhir = 50;

// Menampilkan bilangan prima dalam rentang tersebut
console.log(`Prime numbers between ${mulai} and ${akhir} are:`);
for (let angka = mulai; angka <= akhir; angka++) {
    if (BilanganPrima(angka)) {
        console.log(angka);
    }
}
