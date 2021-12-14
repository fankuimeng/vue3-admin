import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import installIcons from '@/icons/index'
import '@/permission'
import i18n from '@/i18n'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
const app = createApp(App)
installIcons(app)

app
  .use(store)
  .use(router)
  .use(ElementPlus, {
    locale: store.getters.language === 'en' ? en : zhCn
  })
  .use(i18n)
  .mount('#app')
