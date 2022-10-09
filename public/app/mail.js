'use strict'
/* Replace href value in mail */
const replaceMail = ({ mailHref }) => {
  const mail = document.getElementById('mail')
  mail?.addEventListener('click', () => {
    mail?.setAttribute('href', mailHref)
  })
}
replaceMail({
  mailHref: 'mailto:banas.michal@icloud.com',
})
