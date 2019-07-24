import i18n from 'i18n';
import { join } from 'path';

i18n.configure({
  locales: ['pt-BR', 'en-US'],
  fallbacks: {
    pt: 'pt-BR',
    en: 'en-US'
  },
  defaultLocale: 'pt-BR',
  directory: join(__dirname, '..', 'app', 'locales'),
  register: global
});

export default i18n;
