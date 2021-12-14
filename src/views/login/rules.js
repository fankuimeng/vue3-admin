import i18n from '@/i18n'

export const validatePassword = () => {
  return (rules, value, callback) => {
    if (value.length < 6) {
      callback(new Error(i18n.global.t('msg.login.passwordRule')))
    } else {
      callback()
    }
  }
}
