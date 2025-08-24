//Ex1:
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K17";
let crew = ["Joe", "John", "Han", "Jack"];

function launchShip(crewArray) {
    return launchShip.crew;
}
console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`);
//Ex2: calculate distance:
function calculateDistance(speed, time) {
    let distance = speed * time;
    return distance;
}
console.log(calculateDistance(1000, 24));
//Ex3: convert time: chuyển đổi thời gian (thập phân) sang thập lục phân
function convertTimeToHex(time) {
    return time.toString(16);
}
console.log(convertTimeToHex(120));
//Ex4: decrypt Code "K17 Challenge"
function decryptCode(code) {
    let decrypt = "";
    for (let i = 0; i < code.length; i++) {
        let letter = code[i];
        if (letter === letter.toUpperCase())
            return decrypt.toLowerCase()
        else (letter === letter.toLowerCase())
        return decrypt.toUpperCase()
    }
}

console.log(decryptCode("K17 Challenge"));
//Ex5: Return to Earth:
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();