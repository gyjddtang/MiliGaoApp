/**
 * Created by MiliGao on 2019-01-30.
 */
import i18next from 'i18next';
import { reactI18nextModule, setI18n } from 'react-i18next';

const i18n = i18next
  .use(reactI18nextModule)
  .init(
    {
      fallbackLng: 'zh',   // 如果无法使用指定语言翻译，则使用的语言。
      fallbackNS: 'global',   // 如果在给定的命名空间中找不到要查找键则在哪个命名空间下查找
      debug: false,
      parseMissingKeyHandler: value => `Translation not available for ${value}`,
      resources: {
        en: require('./translations/en.json'),
        zh: require('./translations/zh.json')
      },
      react: {
        wait: false,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default',
      },
    },
    (err: Error) => {
      if (err) {
        //@ts-ignore
        // console.error(err);
      }
    }
  );

export function initI18n() {
  setI18n(i18n);
}

export function changeLanguage(lang: string) {
  i18n.changeLanguage(lang);
}