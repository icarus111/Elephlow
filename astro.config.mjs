// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw', 'zh-cn', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
      fallbackType: 'rewrite'
    },
    fallback: {
      'zh-cn': 'zh-tw',
      'en': 'zh-tw'
    }
  }
});
