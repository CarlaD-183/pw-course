//1.Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và year=2021. Sau đó in ra năm sản xuất của xe
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
}
console.log(car.year);//In ra năm sản xuất của xe
//2.Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này.
let person = {
    name: "James",
    address: {
        street: "Cau Giay",
        city: "Haoi",
        country: "Vietname",
    }
}
console.log(`Ten duong: ${person.address.street}`);// in ra ten duong
//3.Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông. 
// Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một object với 2 thuộc tính kiểu number: math và english
let student = {
    name: "John",
    grades: {
        math: [100, 80, 90],
        english: 90,
    }
}
console.log(`Diem Toan: ${student.grades.math}`); //In ra diem toan
//4.Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume và in ra object mới.
let settings = {
    volume: 60,
    brightness: 80,
}
settings.volume = 65; //Thay doi volumne
console.log(settings); //In ra object moi
//5.Tạo một object bike và sau đó thêm thuộc tính color vào object đó
let bike = {
    brand: "Yamaha",
    type: "NVX"

}
bike.color = "black";
console.log(bike);
//C2-bt5: 
let bike ={
    brand:"car1",
    type:"type1",
}
bike["corlor"]="red";
console.log(bike);
//6.Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này
let employee = {
    name: "Hana",
    Age: 25,
}
delete employee.Age; // xoa thuoc tinh Age
console.log(employee);


//7.Một trường học có các lớp học và học sinh như sau:
// ○ classA: An, Bình, Châu
// ○ classB: Đào, Hương, Giang
// Hãy viết code để đáp ứng yêu cầu sau:
// - Khai báo tên biến: school
// - Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa ten hoc sinh
let school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dao","Huong", "Giang"],
}

