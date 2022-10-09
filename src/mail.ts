/* Replace href value in mail */

type ReplaceMail = {
  mailHref: string
}

const replaceMail = ({ mailHref }: ReplaceMail) => {
  const mail = document.getElementById('mail')
  mail?.addEventListener('click', () => {
    mail?.setAttribute('href', mailHref)
  })
}

replaceMail({
  mailHref: 'mailto:banas.michal@icloud.com',
})
