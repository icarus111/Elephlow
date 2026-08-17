import type { LocalPublication, PublicationStatus, RegionId, RecommendedIssue } from './taiwan-local-publications';

const ROUNDUP_URL = 'https://tygs-post.blogspot.com/2020/06/blog-post.html';

type DiscoverySeed = {
  city: string;
  name: string;
  region: RegionId;
  description: string;
  publisher?: string;
  period?: string;
  status?: PublicationStatus;
  url?: string;
  note?: string;
  issues?: RecommendedIssue[];
};

const makeReference = (seed: DiscoverySeed): LocalPublication => ({
  city: seed.city,
  name: seed.name,
  region: seed.region,
  status: seed.status ?? 'irregular',
  access: 'catalog',
  reading: 'reference',
  publisher: seed.publisher ?? '民間編輯團隊（待補證）',
  period: seed.period ?? '刊期未明',
  url: seed.url ?? ROUNDUP_URL,
  description: seed.description,
  note: seed.note ?? '已確認刊名與地方關聯；截至本次核對，尚未找到可免登入翻閱的完整線上刊號。',
  issues: seed.issues ?? [
    {
      label: '發行線索',
      title: '先從刊名與地方位置開始追索',
      reason: '目前未找到可靠的公開刊號目錄；保留來源，方便往編輯團隊、圖書館與二手書店續查。',
      url: seed.url ?? ROUNDUP_URL,
    },
  ],
});

const verifiedOnline: LocalPublication[] = [
  {
    city: '新北市・新莊',
    name: '新莊騷',
    region: 'north',
    status: 'active',
    access: 'ebook',
    publisher: '好滙造事工作室',
    period: '地方誌・不定期',
    url: 'https://issuu.com/xz-sao',
    description: '以「紙上策展」重新觀看新莊，從咖啡店、捷運、廟街、傳統產業到地方生活，逐期建立衛星城市的認同感。',
    note: 'Issuu 保留多期完整刊物，可直接翻頁；2023 年已有第 10 期與第 11 期共編消息。',
    issues: [
      {
        label: '第 10 期・2023',
        title: '傳統產業的創新練習',
        reason: '由新莊老產業如何找新路徑，讀出刊物對地方經濟與生活的觀察。',
        url: 'https://issuu.com/xz-sao',
      },
      {
        label: '創刊號',
        title: '新莊的十五間風格咖啡店',
        reason: '從日常入口認識刊物如何把一座熟悉又陌生的城市重新策展。',
        url: 'https://issuu.com/xz-sao',
      },
    ],
    featured: true,
  },
  {
    city: '臺東縣',
    name: '臺東土黏黏',
    region: 'east',
    status: 'active',
    access: 'ebook',
    publisher: '國立臺東大學數位媒體與文教產業學系',
    period: '年刊',
    url: 'https://edu.gogofinder.com.tw/book/content.php?id=117436562',
    description: '由大一學生走進田野，以圖文、聲音和數位敘事記錄臺東的人物、聚落與生活；2025 年完成第十輯。',
    note: '第 8、9 輯有可直接開啟的多媒體電子書；第 10 輯亦已有電子版書目。',
    issues: [
      {
        label: '第 9 輯・關山特輯',
        title: '縱谷溫情，關山故事',
        reason: '以街區走讀、店家與人物採訪，呈現關山緊密的人情網絡。',
        url: 'https://edu.gogofinder.com.tw/book/content.php?id=117436372',
      },
      {
        label: '第 8 輯・都蘭特輯',
        title: '沿台 11 線走進都蘭',
        reason: '從部落工藝、移居者與返鄉青年，讀一個多元的海岸聚落。',
        url: 'https://edu.gogofinder.com.tw/book/content.php?id=117436562',
      },
    ],
    featured: true,
  },
  {
    city: '屏東縣',
    name: 'AMAZING PINGTUNG 驚豔屏東',
    region: 'south',
    status: 'active',
    access: 'pdf',
    publisher: '屏東縣政府傳播暨國際事務處',
    period: '雙月刊',
    url: 'https://www.pthg.gov.tw/',
    description: '以縣刊形式編排屏東的人物、產業、公共空間與地方日常，用接近生活風格雜誌的視覺重新介紹國境之南。',
    note: '確認仍持續發行；目前收錄可直接開啟的完整 PDF 與官方發行線索。',
    issues: [
      {
        label: '2022.10',
        title: '如果人生是一場遊戲',
        reason: '從共融公園與地方玩家切入，讀公共空間如何成為生活的一部分。',
        url: 'https://chingli-ltc.com.tw/Uploads/Common/202308020122468992332.pdf',
      },
      {
        label: '2025.10',
        title: '近期縣刊發行線索',
        reason: '縣府服務頁面列有 2025 年 10 月號，可繼續追查紙本與電子版。',
        url: 'https://linktr.ee/T.T.D.volunteer_team',
      },
    ],
  },
];

const discoveredReferences: LocalPublication[] = [
  makeReference({ city: '臺北市', name: 'Taipei Post', region: 'north', description: '以臺北為觀察範圍的民間刊物，曾列入北臺灣地方刊物清單。' }),
  makeReference({ city: '臺北市・萬華', name: '東園誌', region: 'north', description: '以萬華東園街區為中心的地方刊物，記錄社區人物與生活。', period: '曾出至第 3 期', url: 'https://www.accupass.com/go/2020azine09' }),
  makeReference({ city: '新北市・新莊', name: '新莊報導', region: 'north', description: '由輔仁大學新聞傳播相關學生採編的新莊社區實驗媒體，長期報導市政、文教、生活與社會議題。', publisher: '輔仁大學新聞傳播相關課程', url: 'https://242.tw/' }),
  makeReference({ city: '新北市・汐止', name: '返腳咖', region: 'north', description: '以汐止為地方視角的民間刊物，刊名取自「返腳」的在地語感。' }),
  makeReference({ city: '新北市・中和', name: 'Mingalar Par 緬甸街', region: 'north', description: '從中和華新街的緬甸移民文化、飲食與社區生活出發的地方刊物。' }),
  makeReference({ city: '新北市', name: '小小生活', region: 'north', description: '從細小生活尺度記錄新北地方日常的民間刊物。' }),
  makeReference({ city: '新北市・三峽', name: '三峽客 SHOCK', region: 'north', description: '以三峽街區、人物與地方行動為主題的民間刊物。' }),
  makeReference({ city: '新北市', name: '夭夭', region: 'north', description: '曾列入北臺灣地方獨立刊物網絡，現階段公開刊號與編輯資料仍待補證。' }),
  makeReference({ city: '新北市', name: '野菱', region: 'north', description: '曾列入北臺灣地方獨立刊物網絡，現階段公開刊號與編輯資料仍待補證。' }),
  makeReference({ city: '基隆市', name: '雞籠霧雨', region: 'north', description: '以雞籠舊名與雨港氣候為識別，書寫基隆港市生活的民間地方刊物。' }),
  makeReference({ city: '桃園市・龜山', name: '龜山不是島', region: 'north', description: '由龜山團隊發起的地方刊物，也曾主動整理全臺地方獨立刊物地圖。', publisher: '龜山不是島團隊', url: ROUNDUP_URL }),
  makeReference({ city: '桃園市・中壢', name: '實況中壢', region: 'north', description: '以中壢現場為主題，記錄街區變化與地方生活的民間刊物。' }),
  makeReference({ city: '桃園市', name: '三佰貳', region: 'north', description: '桃園地方刊物之一，刊名與編輯脈絡仍待進一步補齊。' }),
  makeReference({ city: '新竹市', name: '風起', region: 'north', status: 'hiatus', description: '關心新竹地方議題、人物與城市變化的民間刊物，曾發行九期。', period: '曾出 9 期', url: 'https://wind-notebook.tw/category/%E9%A2%A8%E8%B5%B7/' }),
  makeReference({ city: '新竹縣・竹東', name: '逐步東行', region: 'north', status: 'active', publisher: '竹東國中美術班與逐步東行團隊', period: '年刊', description: '由竹東青少年從手繪地圖發展而來的地方刊物，以母語、插畫與採訪書寫家鄉，至 2025 年已走過十年。', url: 'https://www.citilens.cc/nest16-welovejudong', issues: [
    { label: '十年回顧・2025', title: '小鎮少年繼續說家鄉', reason: '從刊物、母語歌曲到藝術行動，看一份學生刊物如何長成地方平台。', url: 'https://www.citilens.cc/nest16-welovejudong' },
    { label: '第 6 期', title: '從學生視角走進竹東', reason: '回看團隊如何以年輕人的圖像與文字保存正在消失的地方記憶。', url: 'https://storystudio.tw/article/sobooks/people-x-sobooks-jhu-dong/' },
  ] }),
  makeReference({ city: '新竹縣', name: '台 3 線 style', region: 'north', description: '沿台三線聚落與生活風景展開的地方刊物。' }),
  makeReference({ city: '臺中市', name: '溫度', region: 'central', description: '曾以核電等公共議題與地方生活為主題的臺中民間刊物。' }),
  makeReference({ city: '臺中市', name: '暖太陽', region: 'central', description: '以臺中生活與在地人物為範圍的民間刊物。' }),
  makeReference({ city: '臺中市・梧棲', name: '梧棲風', region: 'central', description: '以海線梧棲的街區、港口與地方記憶為主題的刊物。' }),
  makeReference({ city: '臺中市', name: '社群別冊 COMMUNITY SPECIAL EDITION', region: 'central', description: '從社區與地方行動切入的主題別冊。' }),
  makeReference({ city: '臺中市', name: '道地', region: 'central', description: '以「道地」為方法觀察臺中地方生活與人物的獨立刊物。' }),
  makeReference({ city: '臺中市', name: '風格線上', region: 'central', status: 'hiatus', description: '臺中地方刊物，曾公開表示休刊並保留復刊可能。', period: '休刊中' }),
  makeReference({ city: '臺中市', name: '山城週刊', region: 'central', description: '以臺中山城地區為關注範圍的地方刊物。' }),
  makeReference({ city: '臺中市', name: '尋庄', region: 'central', description: '從庄落田野、地方人物與生活文化出發的民間刊物。' }),
  makeReference({ city: '彰化縣・鹿港', name: '今秋誌', region: 'central', status: 'active', publisher: '張敬業與地方編輯團隊', description: '從鹿港的街屋、職人、人物與地方日常出發的民間地方誌。' }),
  makeReference({ city: '彰化縣・員林', name: '員林紀事', region: 'central', description: '以員林街區記憶與地方生活為內容的民間刊物。' }),
  makeReference({ city: '彰化縣', name: '籃城很有事', region: 'central', description: '以社區發生的事情為線索，記錄地方人物與行動。' }),
  makeReference({ city: '彰化縣', name: '中台灣食通信', region: 'central', description: '食通信系列在中臺灣的地方版本，以生產者、食材與土地關係為主軸。', publisher: '食通信地方團隊' }),
  makeReference({ city: '雲林縣', name: '雲林食通信', region: 'central', description: '以雲林農產、生產者與飲食文化為主軸的食通信地方刊物。', publisher: '食通信地方團隊' }),
  makeReference({ city: '臺南市', name: '透南風', region: 'south', description: '把地方行動轉譯成文字、影像與編輯內容，書寫臺南的民間刊物。' }),
  makeReference({ city: '臺南市', name: '路克米', region: 'south', description: '曾列入南臺灣地方獨立刊物網絡，現階段發行與刊號資料待補。' }),
  makeReference({ city: '臺南市', name: '藍灯號誌', region: 'south', description: '以臺南地方生活為背景的民間刊物，公開刊號資料仍待補齊。' }),
  makeReference({ city: '臺南市', name: 'SOMETHING', region: 'south', description: '曾列入南臺灣地方獨立刊物網絡，現階段發行與刊號資料待補。' }),
  makeReference({ city: '高雄市・鹽埕', name: '微醺鹽埕', region: 'south', description: '以高雄鹽埕街區、飲食與城市生活為主題的地方刊物。' }),
  makeReference({ city: '高雄市・美濃', name: '野上野下', region: 'south', status: 'hiatus', description: '從美濃日常、農產與地方人物出發的刊物，也曾結合農藝商店與文化行動。', period: '休刊中', url: 'https://wildandfield.blogspot.com/p/blog-page.html' }),
  makeReference({ city: '高雄市', name: '藍寶石', region: 'south', description: '曾列入南臺灣地方獨立刊物網絡，現階段發行與刊號資料待補。' }),
  makeReference({ city: '高雄市', name: '行南', region: 'south', description: '以向南行走與地方觀察為線索的高雄民間刊物。' }),
  makeReference({ city: '高雄市', name: '吃小吃', region: 'south', description: '從小吃進入地方人物、城市紋理與飲食記憶的民間刊物。' }),
  makeReference({ city: '屏東縣・恆春', name: '琅嶠食通信', region: 'south', description: '食通信系列在恆春半島的地方版本，以食材、生產者與風土為主軸。', publisher: '食通信地方團隊' }),
  makeReference({ city: '宜蘭縣', name: '在宜蘭', region: 'east', description: '以宜蘭生活與地方人物為範圍的民間刊物。' }),
  makeReference({ city: '宜蘭縣・員山', name: '深溝年報', region: 'east', status: 'active', publisher: '田文社', period: '年刊・手工製作', description: '以深溝村農事、居民與日常為主題的手作年報，常隨米附贈，保留濃厚的剪貼與手寫感。', url: 'https://www.tainbunsia.com/', issues: [
    { label: '第 3 期', title: '村裡的年度色票', reason: '每期以一組來自田野的顏色貫穿編輯，讀農村日常與視覺如何相互長成。', url: 'https://opinion.cw.com.tw/blog/profile/380/article/8477' },
    { label: '田文社連載', title: '第一次種菜就失敗', reason: '從社群連載延伸理解年報幽默又貼近生活的敘事方式。', url: 'https://www.tainbunsia.com/' },
  ] }),
  makeReference({ city: '宜蘭縣・南方澳', name: 'about 關於地方：南方澳誌', region: 'east', description: '以南方澳港鎮、海洋、漁業與地方生活為主題的刊物。' }),
  makeReference({ city: '宜蘭縣', name: '歪仔歪詩刊', region: 'east', description: '從宜蘭地方經驗出發的文學與詩刊，兼具地方刊物與文學刊物屬性。' }),
  makeReference({ city: '花蓮縣', name: "o'rip", region: 'east', description: '花蓮民間地方刊物，記錄東臺灣的生活、文化與地方行動。' }),
  makeReference({ city: '花蓮縣', name: '拾紙', region: 'east', description: '曾列入東臺灣地方獨立刊物網絡，現階段發行與刊號資料待補。' }),
  makeReference({ city: '花蓮縣', name: '邊線', region: 'east', description: '以東部邊緣位置與地方生活為視角的民間刊物。' }),
  makeReference({ city: '花蓮縣', name: '東台灣食通信', region: 'east', description: '食通信系列的東臺灣版本，以生產者、食材與土地關係為主軸。', publisher: '食通信地方團隊' }),
  makeReference({ city: '花蓮縣', name: 'THE17 LAB 地方誌', region: 'east', description: '由地方團隊進行田野採集與內容編輯的花蓮地方誌。' }),
  makeReference({ city: '花蓮縣・萬榮', name: '太布河里', region: 'east', description: '從萬榮鄉部落與地方創生行動出發的刊物，曾獲地方創生相關計畫支持。' }),
  makeReference({ city: '臺東縣・蘭嶼', name: '952vazaytamo', region: 'east', description: '以蘭嶼為地方現場的民間刊物，刊名與島嶼生活經驗緊密相連。' }),
  makeReference({ city: '金門縣', name: '金門文藝', region: 'islands', description: '以金門文學、藝術與地方文化為內容的刊物，現階段公開刊號與發行狀態待補。' }),
  makeReference({ city: '金門縣', name: '金門', region: 'islands', status: 'archive', publisher: '金門縣立文化中心等', period: '1978 年起曾發行', description: '金門早期縣刊，保存地方文化、社會與文學內容，目前以館藏與出版史線索為主。' }),
  makeReference({ city: '跨縣市', name: '小島 Xiaodao', region: 'islands', description: '不以單一縣市為限，從島嶼經驗與地方生活出發的民間刊物。' }),
  makeReference({ city: '跨縣市', name: '台味誌', region: 'islands', description: '從臺灣味覺、生活與文化觀察出發的民間刊物。' }),
  makeReference({ city: '跨縣市', name: '旅人食通信', region: 'islands', description: '以旅行、生產者與食物關係為主軸的食通信系列刊物。', publisher: '食通信地方團隊' }),
  makeReference({ city: '跨縣市', name: '米通信', region: 'islands', description: '以稻米、產地、生產者與飲食文化為主軸的食通信系列刊物。', publisher: '食通信地方團隊' }),
  makeReference({ city: '跨縣市', name: '五花鹽 BaconPress', region: 'islands', status: 'active', publisher: '五花鹽 BaconPress', period: '不定期專題', description: '以輕鬆視覺處理土地、歷史與社會議題的獨立專題小誌，官方商店仍列有多期雜誌。', url: 'https://baconpress.waca.ec/cart', issues: [
    { label: 'NO.008', title: '鯤鯓', reason: '從海岸沙洲進入島嶼地景與生活文化。', url: 'https://baconpress.waca.ec/cart' },
    { label: 'NO.007', title: '做風颱', reason: '以颱風經驗組織地方記憶與日常知識。', url: 'https://baconpress.waca.ec/cart' },
  ] }),
  makeReference({ city: '跨縣市', name: '本地 The Place', region: 'islands', description: '以不同縣市為單冊主題的地方生活系列刊物。' }),
  makeReference({ city: '跨縣市', name: '在地 rea', region: 'islands', description: '從在地經驗與民間觀察出發的獨立刊物。' }),
  makeReference({ city: '跨縣市', name: '台毒誌｜to̍k magazine', region: 'islands', description: '以臺灣文化與社會議題為內容的民間刊物。' }),
  makeReference({ city: '跨縣市', name: '薰風', region: 'islands', description: '跨越地方文化、歷史與生活風格的民間刊物。' }),
  makeReference({ city: '跨縣市', name: '風土痣', region: 'islands', description: '以風土與地方細節為線索的獨立刊物。' }),
  makeReference({ city: '跨縣市', name: '藍鯨', region: 'islands', description: '曾列入全臺地方獨立刊物網絡，現階段發行與刊號資料待補。' }),
  makeReference({ city: '跨縣市', name: '北台灣食通信', region: 'islands', description: '食通信系列的北臺灣版本，以生產者、食材與土地關係為主軸。', publisher: '食通信地方團隊' }),
  makeReference({ city: '跨縣市', name: '書物食通信', region: 'islands', description: '把書物編輯與食通信方法結合的跨域刊物。', publisher: '食通信地方團隊' }),
  makeReference({ city: '跨縣市', name: '屏風食通信', region: 'islands', description: '跨地域的食通信系列刊物，以地方食材與生產者為主題。', publisher: '食通信地方團隊' }),
];

export const supplementalPublications: LocalPublication[] = [
  ...verifiedOnline,
  ...discoveredReferences,
];
