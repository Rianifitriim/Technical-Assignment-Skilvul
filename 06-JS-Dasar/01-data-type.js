const name = "skilvul"; /// String
const age = 10; /// Number
const isMarried = false; /// Boolean

/// Soal - 01
/// Gunakan built-in function yang dimiliki tipe data String untuk mengubah variable name menjadi huruf besar
const upperCase = name;
let uc = upperCase.toUpperCase();
console.log(uc);

/// Soal - 02
/// Gunakan built-in function yang dimiliki oleh Javascript, agar kita mengetahui apa tipe data yang dimiliki oleh variable age
const typeOfAge = age;
console.log(typeOfAge)

/// Soal - 03
/// Gunakan built-in function yang dimiliki tipe data Number untuk mengambil 2 nilai dibelakang koma dari PI
const pi = 3.141592653589793238;
twoDigitsOfPi = pi.toFixed(2); 
console.log(twoDigitsOfPi); 

/// Soal - 04
/// Gunakan built-in function yang dimiliki Javascript untuk mengetahui apakah nilai dibawah ini dapat dikategorikan sebagai Number atau tidak (NaN)
const isNotNumber = "1000"
hasil= isNaN(isNotNumber); 
console.log(hasil);

/// Soal - 05
/// Gunakan built-in function yang dimiliki oleh Javascript untuk mengubah sebuah String menjadi Number
const stringToNumber = "1000"; 
hasil= parseInt(stringToNumber); 
console.log(hasil);