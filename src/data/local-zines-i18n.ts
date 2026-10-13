import OpenCC from 'opencc-js/t2cn';
import type { LocalPublication } from './taiwan-local-publications';
import { publicationDescriptionsEn } from './local-zines-en';
import { englishText } from './local-zines-en-text';
import { issueTextEn } from './local-zines-en-issues';
import { articleTextEn } from './local-zines-en-articles';

export type LocalZinesLocale = 'zh-tw' | 'zh-cn' | 'en';
const toSimplified = OpenCC.Converter({ from: 'tw', to: 'cn' });
const translations = { ...englishText, ...issueTextEn, ...articleTextEn };

export const countyNamesEn: Record<string, string> = {
  '基隆市': 'Keelung City', '臺北市': 'Taipei City', '新北市': 'New Taipei City',
  '桃園市': 'Taoyuan City', '新竹市': 'Hsinchu City', '新竹縣': 'Hsinchu County',
  '苗栗縣': 'Miaoli County', '臺中市': 'Taichung City', '彰化縣': 'Changhua County',
  '南投縣': 'Nantou County', '雲林縣': 'Yunlin County', '嘉義市': 'Chiayi City',
  '嘉義縣': 'Chiayi County', '臺南市': 'Tainan City', '高雄市': 'Kaohsiung City',
  '屏東縣': 'Pingtung County', '宜蘭縣': 'Yilan County', '花蓮縣': 'Hualien County',
  '臺東縣': 'Taitung County', '澎湖縣': 'Penghu County', '金門縣': 'Kinmen County',
  '連江縣': 'Lienchiang County (Matsu)', '全臺性': 'Taiwan-wide', '跨縣市': 'Taiwan-wide',
  '地區待確認': 'Location unconfirmed', '馬祖': 'Matsu',
  '澎湖': 'Penghu', '金門': 'Kinmen',
};

export function localizeCounty(name: string, locale: LocalZinesLocale) {
  if (locale === 'zh-cn') return toSimplified(name);
  if (locale === 'en') return countyNamesEn[name] || name;
  return name;
}

export function localizeText(value: string | undefined, locale: LocalZinesLocale): string {
  if (!value) return '';
  if (locale === 'zh-tw') return value;
  if (locale === 'zh-cn') return toSimplified(value);
  if (translations[value]) return translations[value];
  // Numbered issues and dates need formatting, not an editorial translation.
  const formatted = value
    .replace(/第\s*(\d+)\s*期/g, 'Issue $1')
    .replace(/第\s*(\d+)\s*號/g, 'No. $1')
    .replace(/創刊號/g, 'Inaugural issue')
    .replace(/(\d{4})\s*年\s*(\d+)\s*月\s*(\d+)\s*日/g, '$1-$2-$3')
    .replace(/(\d{4})\s*年\s*(\d+)\s*月號?/g, '$1-$2')
    .replace(/(\d{4})\s*年/g, '$1')
    .replace(/夏季號|夏/g, 'summer')
    .replace(/秋季號|秋/g, 'autumn')
    .replace(/冬季號|冬/g, 'winter')
    .replace(/・/g, ' · ');
  if (!/[\p{Script=Han}]/u.test(formatted)) return formatted;
  throw new Error(`Missing local-zines English translation: ${value}`);
}

export function localizePublication(item: LocalPublication, locale: LocalZinesLocale): LocalPublication {
  if (locale === 'zh-tw') return item;
  const description = locale === 'en' ? publicationDescriptionsEn[item.name] : toSimplified(item.description);
  if (!description) throw new Error(`Missing local-zines English description: ${item.name}`);
  return {
    ...item,
    name: locale === 'zh-cn' ? toSimplified(item.name) : item.name,
    publisher: locale === 'zh-cn' ? toSimplified(item.publisher) : item.publisher,
    description,
    note: localizeText(item.note, locale),
    period: localizeText(item.period, locale),
    firstPublished: item.firstPublished ? localizeText(item.firstPublished, locale) : undefined,
    issues: item.issues.map((issue) => ({
      ...issue,
      label: localizeText(issue.label, locale),
      theme: issue.theme ? localizeText(issue.theme, locale) : undefined,
      highlight: localizeText(issue.highlight, locale),
      reason: localizeText(issue.reason, locale),
    })),
  };
}

export function localizePlatformLabel(label: string, locale: LocalZinesLocale) {
  if (locale === 'en') {
    return ({ '台灣雲端書庫': 'Taiwan Cloud Library', 'Readmoo 讀墨': 'Readmoo', 'TAAZE 讀冊生活': 'TAAZE' } as Record<string, string>)[label] || label;
  }
  return locale === 'zh-cn' ? toSimplified(label) : label;
}

export function localizeSocialLabel(label: string, locale: LocalZinesLocale) {
  if (locale === 'zh-cn') return toSimplified(label);
  if (locale === 'en') return label
    .replace(/協會部落格|官方部落格/g, 'Official blog')
    .replace(/發行單位|發行機關|發行團隊/g, 'Publisher');
  return label;
}
