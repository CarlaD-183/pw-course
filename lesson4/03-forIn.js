//in ra tên và giá trị mỗi thuộc tính của students
let students = {
    name: "An",
    age: 20,
    class: "A1",
    grade: 10
}
for (let property in students) {
    console.log(property);
    console.log(students[property]);
}
//Tính tổng các giá trị số trong students

let tong = 0;
for (let key in students) {
    const value = students[key];
    if (typeof value === "number") {
        tong += value;
    }
}
console.log(tong);
//Tạo mảng chứa tên các thuộc tính của students
let keys = [];
for (keys in students) {
    console.log(keys)
}

