//1.every:
//Kiểm tra tất cả các giá trị trong scores có trên 70 ko?
const scores = [85, 90, 78];
const allScores = scores.every(s => s > 70);
console.log(allScores);//true
//Kiểm tra tất cả giá trị trong ages có > 15 không
const ages = [18, 21, 16, 25];
const allAgeAbove15 = ages.every(a => a > 15);
console.log(allAgeAbove15); // true
//Kiểm tra tất cả từ trong words có độ dài > 3 không
const words = ["apple", "banana", "cherry", "date"];
const wordLengthAbove3 = words.every(w => w.length > 3);
console.log(wordLengthAbove3);// true
//2.Filter
//Lọc giá trị trong scores > 80
const scoresAbove80 = scores.filter(s => s > 80);
console.log(scoresAbove80);
//Lọc giá trị trong ages ≥ 18
const agesE18 = ages.filter(a => a >= 18)
console.log(agesE18)
//Lọc từ trong words có độ dài > 5
const wordsLength = words.filter(w => w.length > 5);
console.log(wordsLength);
//3.Find
//Tìm giá trị đầu tiên trong scores > 80
const firstScoreAbove80 = scores.find(s => s > 80);
console.log(firstScoreAbove80);
//Tìm giá trị đầu tiên trong ages > 20
const firstAgeAbove20 = ages.find(a => a > 20);
console.log(firstAgeAbove20);
//Tìm từ đầu tiên trong words có độ dài > 5
const firstWlengthAbove5 = words.find(w => w.length > 5);
console.log(firstWlengthAbove5);
//4.Map:
//Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90
const newRate = scores.map(s => {
    let newScore = [];
    if (s < 90) {
        newScore = s * 1.1,
            console.log(newScore);
    }
    else {
        newScore = s * 0.95,
            console.log(newScore);
    }
    return newScore;
})
//Chuyeer numbers thanhf string
const numbers = [1, 2, 3];
const stringNumbers = numbers.map(num => num.toString());
console.log(stringNumbers);
//Tu numbers nhan doi moi gia tri
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);
//5.Some:
//Kiểm tra scores có giá trị nào > 80 không.
const scoreAbove80 = scores.some(s => s > 80)
console.log(scoreAbove80);
//Kiểm tra ages có giá trị nào > 20 không.
const ageAbove20 = ages.some(a => a > 20)
console.log(ageAbove20);
//iểm tra words có từ có độ dài > 5 không.
const wordsAbove5 = words.some(w=> w.length >5)
console.log (wordsAbove5);
//6.Reduce:
////Tính tổng các giá trị trong numbers:
const totalAmount = numbers.reduce ((total,num)=> total + num)
console.log(totalAmount);
//Tính tích các giá trị trong numbers:
const multiplyAmount = numbers.reduce((multi, num) => multi * num, 1);
console.log(multiplyAmount); 
//Tinhs expense:
const expenses = [50, 100, 150];
const totalExpenses = expenses.reduce((total, amount) => total + amount, 0);
console.log(totalExpenses);