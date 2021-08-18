function yourName() {
    let name = prompt("What's your name?");
    document.getElementById("myName").innerText = name;
}

function showTime() {
    let date = new Date();
    let day = date.getDay();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    switch(day) {
        case 1:
            day = 'Pazartesi';
            break
        case 2:
            day = 'Sali';
            break
        case 3:
            day = 'Çarsamba';
            break
        case 4:
            day = 'Persembe';
            break
        case 5:
            day = 'Cuma';
            break
        case 6:
            day = 'Cumartesi';
            break
        case 7:
            day = 'Pazar';
            break
    }

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    let time = h + ':' + m + ':' + s + ' ' + day;
    document.getElementById('myClock').innerText = time;
    document.getElementById('myClock').textContent = time;
    setTimeout(showTime, 1000);
}

yourName();
showTime();