const birthdate = document.querySelector('.birthdate');

function calculate() {
    const now = new Date();
    const birth = new Date(birthdate.value);

    let age = now.getFullYear() - birth.getFullYear();
    let m = now.getMonth() - birth.getMonth();
    let day = now.getDate() - birth.getDate();

    if (m < 0 || (m === 0 && day < 0)) {
        age--;
    }

    const nextAge = age + 1;
    document.getElementById("current-age").innerHTML = age + ' yaşında';
    
    let nextYear = '';

    if (m < 0 || (m === 0 && day < 0)) {
        m = Math.abs(m);
        day = Math.abs(day);
        nextYear = m + ' ay ' + day + ' gün kalmıştır';

    } else {
        const nextBirthday = new Date(now.getFullYear() + 1, birth.getMonth(), birth.getDate());
        const diff = nextBirthday - now;
        const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
        nextYear = '1 yıl ' + m + ' ay ' + day + ' gün kalmıştır';
    }
    
    document.getElementById("next-age").innerHTML = nextAge + ' yaşına ; ' + nextYear;
}
