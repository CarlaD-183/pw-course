const name = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";
// 1) Chia name thành mảng các từ (dùng khoảng trắng)
const nameSplit = name.split(" ");
console.log(nameSplit);

// 2) Chia emails thành mảng các email (dùng dấu phẩy)
const emailList = emails.split(","); 
console.log(emailList);

// 3) Chia date thành [ngày, tháng, năm] (dùng dấu gạch ngang)
const dateUnderScore = date.split("-"); 
console.log(dateUnderScore);
//Includes
const name1 = "Nguyễn Văn A";
const email = "example@gmail.com";
const productName = "MacBook Pro";
const description = "Khóa học JavaScript cơ bản";
// Các kiểm tra includes
const includesName = name1.includes("Nguyễn");        // true
const includesEmailAt = email.includes("@");         // true
const includesProduct = productName.includes("Pro");  // true

console.log({ includesName, includesEmailAt, includesProduct });
// Các vị trí (indexOf)
const indexNameA = name1.indexOf("a");       
const indexEmailAt = email.indexOf("@"); 
const indexJS = description.indexOf("JavaScript");
// in kết quả
console.log({ indexNameA, indexEmailAt, indexJS });
//replace:
// Dữ liệu mẫu
const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";

// Thay khoảng trắng bằng "." trong phoneNumber
const phoneNumberReplace = phoneNumber.replace(/ /g, ".");

// Thay "lỗi" bằng "bug" trong report
const reportReplace = report.replace("lỗi", "bug");

// Thay "," bằng "." trong numbersStr
const numbersStrReplace = numbersStr.replace(/,/g, ".");

console.log({ phoneNumberReplace, reportReplace, numbersStrReplace });
//SubString
// 1) Trích xuất họ từ fullName (từ đầu đến ký tự thứ 6)
const fullName = "Nguyễn Văn A";
const lastNamePart = fullName.substring(0, 6);

// 2) Trích xuất năm từ date (4 ký tự đầu)
const date1= "2024-05-19";
const yearPart = date1.substring(0, 4); 

// 3) Trích xuất tên miền từ email (sau "@")
const email1= "example@gmail.com";
const domainPart = email1.substring(email1.indexOf("@") + 1); 

console.log({ lastNamePart, yearPart, domainPart });
//Trim:
const name2= " Nguyễn Văn A ";
const userInput = " 12345 ";
const email2= "  example@gmail.com  ";

// Loại bỏ khoảng trắng đầu và cuối của name
const trimmedName = name2.trim();

//Loại bỏ khoảng trắng ở đầu của userInput
const trimmedStart = userInput.trimStart();

// Loại bỏ khoảng trắng ở đầu của email
const trimmedEmail = email2.trimStart();

console.log({ trimmedName, trimmedStart, trimmedEmail });