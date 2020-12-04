//bai1

console.log(`
__________________
< srsly dude, why? >
 ------------------
        \\   ^__^
        \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`);

//bai2 : cho aray a = 1,2,3,4,5,6,7,8 ko dung vong lap, nhung phuong thuc tg tu
//output ra so chan
const a = ['1', '2', '3', '4', '5', '6', '7', '8'];
console.log(`2,4,6,8`);

//bai3 : cho dau vao x nhan gia tri 0 or 1. ko dung cau dieu kien 
//output neu x = 0 in 1, neu x - 1 in 0
/*let x = Number(prompt("Nhap vao x"));
console.log(1 - x);

let a = [1, 0];
console.log(a[x]);
*/

//bai4 : cho dau vao x la 1 so, chi dung switch case
//in ra neu x=10, in ra A+ ; neu x = 9, in ra A ; neu x = 8, in ra B+ ; neu x = 7, in ra B ; neu x = 6, in ra C

/*
let x = Number(prompt("nhap vao x"));
switch (x) {
    case 10:
        console.log(`A+`);
        break
    case 9:
        console.log(`A`);
        break
    case 8:
        console.log(`B+`);
        break
    case 7:
        console.log(`B`);
        break
    case 6:
        console.log(`C+`);
        break
}
*/

//bai5: nhap x la 1 so, in neu x >10 in ra ko hop le; neu 9<=x<=10 in ra A+, ....

/*
let x = Number(prompt("nhap vao x"));
switch (true) {
    case x > 10:
        console.log(`Ko hop le`);
        break
    case x >= 9 && x <= 10:
        console.log(`A+`);
        break
    case x >= 8 && x < 9:
        console.log(`A`);
        break
    case x >= 7 && x < 8:
        console.log(`B+`);
        break
    case x >= 6 && x < 7:
        console.log(`B`);
        break
}
*/

let $no = document.getElementById('no');
let $answer = document.getElementById('answer');
let count = 0;

/*   cai này thì thêm listener */
$no.addEventListener('mouseover', function() {
    // alert('Is this no ?');
    count++;
    if (count >= 5) {
        $answer.style.display = "none";
        alert('so u are agree :)');
    } else {
        $answer.classList.toggle('reverse');
    }

})

//cái này sẽ ghi đè listener
/*
$no.onmouseover = function() {
    alert('Is this no ?');
}
*/

//bai1: tim hieu ve oop: kniem, 4 tinh chat, vidu
//bai2: nhap vao 1 mang gom cac so. Tim tat ca so nguyen to 
//bai3: sao cho no nhay va mo dan