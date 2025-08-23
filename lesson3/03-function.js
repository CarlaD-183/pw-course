//Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2,3));
console.log(multiply(4,5));

//BT2: Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.

// function findMin(a, b, c) {
//     return Math.min(a, b, c);
// }
// console.log(findMin(1, 5, 2));
function findMin(a , b, c){
    let min = a; 
    if (b<min){
        min =b ;
    }
    if (c < min){
        min = c;
    }
    return min;
}
console.log(findMin(1,3,4));
console.log(findMin(5,6,9));



//BT3. Viết hàm getTopStudents nhận 2 tham số:
//students: mảng các object, mỗi object chứa name (tên) và score (điểm).
//hreshold: ngưỡng điểm để được coi là "top" (số).
//
// function getTopStudents(students, threshold) {
//   return students
//     .filter(s => typeof s.score === 'number' && s.score >= threshold)
//     .map(s => s.name);
// }

// const student= [
//   { name: "An", score: 85 },
//   { name: "Binh", score: 90 },
//   { name: "Linh", score: 75 }
// ];

// const threshold = 80;

// console.log(getTopStudents(student, threshold)); 
//////
// let student = [
//     { name: "An", score: 85 },
//     { name: "Binh", score: 90 },
//     { name: "Linh", score: 75 }
// ];
// let threshold = 80;
// function getTopStudents(){
//     if (student.score >= threshold) {
//         return student.score;
//     }
// }
// console.log(student.name, student.score);

// chua BT3:
function getTopStdudents (student, threshold){
    let topStudents = [];
    for (let i=0; i <= student.length; i ++){
        if (student[i].score >= threshold){
            topStudents.push(student[i].name);
        }
    }
    return topStudents;
}
let studentList = [
    { name: "An", score: 85 },
    { name: "Binh", score: 90 },
    { name: "Linh", score: 75 },
    {name: "Hoa" , score : 95},
];
let result = getTopStdudents(studentList,80);
console.log(result);
//BT4:

// Viết hàm calculateInterest nhận 3 tham số:
// ● principal: số tiền gửi ban đầu (số).
// ● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
// ● years: số năm gửi.
// Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi
// đơn: total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và
// in kết quả.
function calculateInterest(principal, rate, years) {
    const total = principal + (principal * rate * years) / 100;
    return total;
}
// const principal = 2000;  // số tiền gửi ban đầu
// const rate = 3;          // lãi suất hàng năm (5%)
// const years = 2;         // số năm gửi
console.log(calculateInterest(2000,3,2));
