/* Replace href value in mail */

const replaceMail = () => {
  const mail = document.getElementById('mail') as HTMLElement
  return mail.addEventListener('click', () => {
    mail.getAttribute('href')
    mail.setAttribute('href', 'mailto:banas.michal@icloud.com')
  })
}

replaceMail()
