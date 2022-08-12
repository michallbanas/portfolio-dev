'use strict';
/* Replace href value in mail */
class ReplaceMail {
    constructor() {
        this.mail = document.getElementById('mail');
    }
    set mail(mail) {
        mail.addEventListener('click', () => {
            mail.getAttribute('href');
            mail.setAttribute('href', 'mailto:banas.michal@icloud.com');
        });
    }
}
new ReplaceMail();
