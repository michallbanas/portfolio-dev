'use strict'
/* Replace href value in mail */
const replaceMail = () => {
  const mail = document.getElementById('mail')
  return mail.addEventListener('click', () => {
    mail.getAttribute('href')
    mail.setAttribute('href', 'mailto:banas.michal@icloud.com')
  })
}
replaceMail()
