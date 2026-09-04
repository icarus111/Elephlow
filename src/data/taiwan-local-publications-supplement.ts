import type { LocalPublication, PublicationStatus, RegionId, RecommendedIssue } from './taiwan-local-publications';
import { paperMapPublications } from './taiwan-local-publications-paper-map';

type DiscoverySeed = {
  city: string;
  name: string;
  region: RegionId;
  description: string;
  publisher: string;
  period?: string;
  status?: PublicationStatus;
  access?: LocalPublication['access'];
  reading?: LocalPublication['reading'];
  firstPublished?: string;
  url: string;
  note?: string;
  issues?: RecommendedIssue[];
};

const makeReference = (seed: DiscoverySeed): LocalPublication => ({
  city: seed.city,
  name: seed.name,
  region: seed.region,
  status: seed.status ?? 'irregular',
  access: seed.access ?? 'catalog',
  reading: seed.reading ?? 'reference',
  publisher: seed.publisher,
  period: seed.period ?? '',
  firstPublished: seed.firstPublished,
  url: seed.url,
  description: seed.description,
  note: seed.note ?? '',
  issues: seed.issues ?? [],
});

const verifiedOnline: LocalPublication[] = [
  {
    city: '新竹市',
    name: '巢兼代',
    region: 'north',
    status: 'active',
    access: 'ebook',
    publisher: '國立新竹生活美學館',
    period: '2021 年創刊・季刊・已出至第 22 期',
    url: 'https://www.nhclac.gov.tw/News_Link.aspx?n=8142&sms=14637',
    description: '從新竹出刊、視野涵蓋北臺灣的生活美學季刊，持續報導地方創生、社區營造、文化資產、飲食、性別與地方行動者；館方電子書頁保存從創刊號到近期刊號的完整入口。',
    note: '第 18 期以山林地方創生為題，其中一篇專題報導新北坪林的《走水》；《巢兼代》與《走水》是兩本獨立刊物。',
    issues: [
      {
        label: '第 20 期・2025',
        highlight: '我們很「水」：流域、地方與共生的未來',
        reason: '從流域學校、地方共學到韌性城市，閱讀水如何連結北臺灣的社區行動。',
        url: 'https://online.visual-paradigm.com/share/book/-vol-20--2e8f4v5gwg',
      },
      {
        label: '第 18 期・2025',
        highlight: '山林是學校，成為地方創生的另一種糧倉',
        reason: '收錄陽明山、平溪、坪林與淡路島案例，《走水》專題即刊於這一期。',
        url: 'https://online.visual-paradigm.com/share/book/-vol-18--274o59yom1',
      },
      {
        label: '創刊號・2021',
        highlight: '《巢兼代》的第一期',
        reason: '從創刊號回看這份北區生活美學季刊如何開始建立跨地方的觀察視角。',
        url: 'https://ebook.culture.tw/publication/2021-05-16/2a1c348e-1c00-4972-981d-26dc7596c24e/',
      },
    ],
    featured: true,
  },
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
    note: 'Issuu 保留多期完整刊物，可直接翻頁；2023 年第 9 期以「老派約會」重訪新莊人的共同記憶。',
    issues: [
      {
        label: '第 9 期・2023',
        theme: '來一場老派約會',
        highlight: '從牛排館、保齡球館、租書店與泡沫紅茶回到新莊人的共同記憶。',
        reason: '用一場約會串起已經消失或轉變中的庶民生活場景。',
        url: 'https://issuu.com/xz-sao',
      },
      {
        label: '第 8 期・2022',
        theme: '島內移居',
        highlight: '由七位素人青年談新莊的生活經驗、公共議題與未來想像。',
        reason: '這一期最能看出刊物如何用共編建立移居者的家鄉感。',
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
        highlight: '縱谷溫情，關山故事',
        reason: '以街區走讀、店家與人物採訪，呈現關山緊密的人情網絡。',
        url: 'https://edu.gogofinder.com.tw/book/content.php?id=117436372',
      },
      {
        label: '第 8 輯・都蘭特輯',
        highlight: '沿台 11 線走進都蘭',
        reason: '從部落工藝、移居者與返鄉青年，讀一個多元的海岸聚落。',
        url: 'https://edu.gogofinder.com.tw/book/content.php?id=117436562',
      },
    ],
    featured: true,
  },
  {
    city: '花蓮縣',
    name: '花蓮趣',
    region: 'east',
    status: 'active',
    access: 'ebook',
    publisher: '花蓮縣政府觀光處',
    period: '季刊',
    firstPublished: '2012 年 6 月',
    url: 'https://tour-hualien.hl.gov.tw/News_Link2.aspx?n=84&sms=12334',
    description: '花蓮縣政府發行的觀光季刊，以主題旅行、戶外生態、鄉鎮人物、藝文與飲食整理當季花蓮；官方頁持續提供中、英、日、韓多語電子刊物。',
    note: '政府出版品資料記錄 2012 年 6 月出版且未停刊；官方期刊頁已更新至 2026 年第 57 期。',
    issues: [
      {
        label: '第 57 期・2026 夏',
        highlight: '尋 Way 花路',
        reason: '從飲食、文化、藝術與自然景緻，讀最新一季的花蓮旅行提案。',
        url: 'https://tour-hualien.hl.gov.tw/News_Link2.aspx?n=84&sms=12334',
      },
      {
        label: '第 47 期',
        highlight: '留得久、玩得慢、走得深',
        reason: '以永續慢遊為題，把交通、地方體驗與旅遊節奏放在同一冊閱讀。',
        url: 'https://tour-hualien.hl.gov.tw/News_Content.aspx?n=26&s=8393',
      },
    ],
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
        theme: '以玩為名的一場遊戲革命',
        highlight: '從屏東各鄉鎮的共融公園讀公共空間如何成為地方生活',
        reason: '完整 PDF 的目錄明列此封面故事，可直接從原刊閱讀全文。',
        url: 'https://chingli-ltc.com.tw/Uploads/Common/202308020122468992332.pdf',
      },
    ],
  },
];

const discoveredReferences: LocalPublication[] = [
  makeReference({ city: '臺北市', name: 'Taipei Post', region: 'north', status: 'ceased', publisher: 'Taipei Post 團隊', period: '2015 年 9—11 月・共 3 期', description: '以「快閃媒體」方式發行的臺北非主流生活畫報，三期分別從人物、氣味、詩與城市記憶等角度，重新詮釋臺北生活。', url: 'https://www.zeczec.com/projects/taipei-post' }),
  makeReference({ city: '臺北市・萬華', name: '東園誌', region: 'north', publisher: '六島創意／周盈君、廖翊丞', description: '立足南萬華加蚋仔的地方自媒體，從東園街老店、北管軒社、地方歷史與社區議題出發；至今已發行四刊。', period: '2018 年創刊・已出 4 刊', url: 'https://6island.tw/portfolio/5767/' }),
  makeReference({ city: '新北市・新莊', name: '新莊報導', region: 'north', description: '由輔仁大學新聞傳播相關學生採編的新莊社區實驗媒體，長期報導市政、文教、生活與社會議題。', publisher: '輔仁大學新聞傳播相關課程', url: 'https://242.tw/' }),
  makeReference({ city: '新北市・汐止', name: '返腳咖', region: 'north', publisher: '返腳咖工作室', period: '不定期地方刊物', description: '刊名取自汐止舊名「水返腳」，由在住者踏查老街、訪談居民，把通勤城市裡容易被忽略的地方感重新寫回來。', url: 'https://242.tw/2018/05/14/%E6%B1%90%E6%AD%A2%E3%80%8C%E8%BF%94%E8%85%B3%E5%92%96%E3%80%8D%E7%94%A8%E5%88%8A%E7%89%A9%E5%81%9C%E4%B8%8B%E9%9B%A2%E9%96%8B%E6%B1%90%E6%AD%A2%E7%9A%84%E8%85%B3%E6%AD%A5/' }),
  makeReference({ city: '新北市・中和', name: 'Mingalar Par 緬甸街', region: 'north', publisher: '鳴個喇叭文化工作室', description: '從中和華新街的緬甸移民文化、飲食與社區生活出發，讓新住民以自己的視角介紹緬甸街。', url: 'https://mpark.news/2018/05/31/4338/' }),
  makeReference({ city: '新北市・永和', name: '小小生活', region: 'north', publisher: '台灣小小生活文化推廣協會', description: '由永和小小書房周邊社群發行，以分享與累積為核心，記錄閱讀、社區藝文與地方日常。', url: 'https://www.ntpc.gov.tw/uploaddowndoc?dis=news&file=news%2F201508111023427.pdf&filedisplay=1040810%E6%96%B0%E8%81%9E%E7%A8%BF%E9%99%84%E4%BB%B6.pdf&flag=doc' }),
  makeReference({ city: '新北市・三峽', name: '三峽客 SHOCK', region: 'north', status: 'hiatus', publisher: 'SHOCK 三峽客團隊', period: '雙周刊・曾發行逾 50 期', description: '由臺北大學學生創辦的社區媒體，報導三峽、鶯歌的民政、文史、職人與生活議題；後因人力不足暫停紙本。', url: 'https://ms-community.azurewebsites.net/spotlight_20210125/' }),
  makeReference({ city: '桃園市', name: '夭夭', region: 'north', publisher: '夭夭編輯部／逗點文創結社', period: '2013 年創刊・季刊', description: '桃園第一本生活藝文雜誌，以「時間」為主角走訪人物與建築；創刊號從冰店、眷村故事館與地方工作者寫下夏日桃園。', url: 'https://www.commabooks.com.tw/book/166', issues: [
    { label: 'NO.01・2013 夏季號', theme: '炎炎夏日，不吃冰不行！', highlight: '從冰品讀桃園的夏日生活', reason: '從移動冰店、慢食堂與桃園冰店踏查，看刊物如何把小人物故事編成城市時間誌。', url: 'https://www.commabooks.com.tw/book/166' },
  ] }),
  makeReference({ city: '桃園市・龍潭', name: '野菱報', region: 'north', publisher: '菱潭街興創基地／野菱文化工作隊', period: '2018 年 8 月試刊號', description: '龍潭青年在菱潭街地方創生行動中製作的街區刊物，試刊號把老街、店家與返鄉實作整理成可帶走的地方閱讀。', url: 'https://issuu.com/lingtanstreet2017/docs/___2018____', note: '桃園市地方創生研究列出《野菱報》2018 年 8 月試刊號與 Issuu 閱讀連結。' }),
  makeReference({ city: '基隆市', name: '雞籠霧雨', region: 'north', status: 'hiatus', access: 'ebook', reading: 'online', publisher: '雞籠霧雨團隊', period: '2015–2017・共 4 刊', description: '以雞籠舊名與雨港氣候為識別，書寫基隆港市生活；官方文章保留四刊主題與通路，第四刊後暫停紙本出版，創刊號另有付費電子版可線上試讀與購買。', url: 'https://keelungrain.wordpress.com/2017/11/06/%E3%80%8A%E9%9B%9E%E7%B1%A0%E9%9C%A7%E9%9B%A8%E3%80%8B%E4%B8%80%E5%88%B0%E5%9B%9B%E5%88%8A%E5%93%AA%E8%A3%A1%E8%B2%B7%EF%BC%9F%EF%BC%88%E8%88%87%E6%88%91%E5%80%91%E4%B9%8B%E5%BE%8C%E7%9A%84%E8%A8%88/' }),
  makeReference({ city: '桃園市・龜山', name: '龜山不是島', region: 'north', publisher: '回龜山陣線／微光生活設計室', period: '2019 年創刊', description: '由返鄉青年組成的回龜山陣線發起，從地方文史、老屋與人物重新回答「龜山是什麼」，也曾整理全臺地方獨立刊物地圖。', url: 'https://usr.moe.gov.tw/tw/report/blog/207' }),
  makeReference({ city: '桃園市・中壢', name: '實況中壢', region: 'north', publisher: '桃園藝文陣線', description: '由桃園藝文陣線發起，以中壢現場為主題，記錄街區變化、文化資產與地方生活。', url: 'https://www.atanews.net/?news=52529' }),
  makeReference({ city: '桃園市・中壢', name: '三佰貳', region: 'north', publisher: '三佰貳編輯團隊', description: '由兩位中壢創辦者以文字與攝影重新認識成長的家鄉；刊物曾整理在地人私藏的街區、食物與散步景點。', url: 'https://dappei.com/articles/2695' }),
  makeReference({ city: '新竹市', name: '風起', region: 'north', status: 'hiatus', publisher: '風起 Uprisings 學生編輯團隊／林駿騰', description: '由關心農村、族群與生態的新竹學生編輯，以人物訪談和社區聲音報導城市發展背後容易被忽略的地方現場。', period: '月刊・曾出 9 期', url: 'https://www.flyingv.cc/projects/7749?lang=zh' }),
  makeReference({ city: '新竹縣・竹東', name: '逐步東行', region: 'north', status: 'active', publisher: '竹東國中美術班與逐步東行團隊', period: '年刊', description: '由竹東青少年從手繪地圖發展而來的地方刊物，以母語、插畫與採訪書寫家鄉，至 2025 年已走過十年。', url: 'https://www.citilens.cc/nest16-welovejudong', issues: [
    { label: '十年回顧・2025', highlight: '小鎮少年繼續說家鄉', reason: '從刊物、母語歌曲到藝術行動，看一份學生刊物如何長成地方平台。', url: 'https://www.citilens.cc/nest16-welovejudong' },
    { label: '第 6 期', highlight: '從學生視角走進竹東', reason: '回看團隊如何以年輕人的圖像與文字保存正在消失的地方記憶。', url: 'https://storystudio.tw/article/sobooks/people-x-sobooks-jhu-dong/' },
  ] }),
  makeReference({ city: '新竹縣', name: '台 3 線 style', region: 'north', publisher: '瓦當人文書屋', description: '由瓦當人文書屋編輯，沿台三線聚落、客庄文化與生活風景展開的地方刊物。', url: 'https://www.nlpi.edu.tw/FileDownLoad/LibraryPublication/20200120093242412447327.pdf' }),
  makeReference({ city: '臺中市', name: '溫度', region: 'central', publisher: '《溫度》編輯團隊', description: '從臺中青年生活與公共議題出發的獨立刊物，曾以核電議題串連地方採訪與公民討論。', url: 'https://tcmb.culture.tw/zh-tw/detail?id=666026&indexCode=Culture_Place' }),
  makeReference({ city: '臺中市・西區土庫里', name: '暖太陽', region: 'central', publisher: '動畫飛行館／土庫之心文創聚落', firstPublished: '2014 年', period: '2014 年起・共 6 輯', description: '由臺中西區土庫里的居民與創意工作者發行，內容規劃「步景、日景、選物」，把散步地圖、特色店家、職人與向上、忠信、模範三座市場編成地方日常；刊物也曾串起土庫之心文創聚落與巷弄市集。', url: 'https://greenripple.com.tw/article/point/241201/' }),
  makeReference({ city: '臺中市・梧棲', name: '梧棲風', region: 'central', publisher: '梧棲風工作室', period: '季刊・曾出至少 5 期', description: '以海線梧棲的街區、港口與地方記憶為主題，由在地青年訪談耆老、店家與職人。', url: 'https://www.chinatimes.com/amp/newspapers/20160627000339-260102' }),
  makeReference({ city: '彰化縣・鹿港', name: '道地誌', region: 'central', status: 'ceased', publisher: '鹿港囝仔文化事業', period: '《今秋誌》前身', description: '鹿港囝仔早期以《道地誌》記錄鹿港人物與地方生活，之後改以《今秋誌》延續編輯工作。', url: 'https://tkfl.tw/topic/story-of-jin-qiu-lukang-vol-1/' }),
  makeReference({ city: '臺中市', name: '風格線上', region: 'central', status: 'hiatus', publisher: '吳林展／SOL 風格線上', firstPublished: '2010 年', period: '2010 年創刊・休刊中', description: '因創辦人吳林展的一句「為什麼臺中沒有一本像樣的雜誌？」而誕生。刊名 Solmag 來自 Style of Life，從臭豆腐、餐廳、小店到城市人物，以輕鬆的生活切面讓讀者自行拼出臺中的風格與氣味。', url: 'https://tcxthu.wixsite.com/tastecreative/solmag' }),
  makeReference({ city: '臺中市・山城', name: '山城週刊', region: 'central', status: 'active', access: 'web', reading: 'online', firstPublished: '1979 年 7 月 15 日', publisher: '山城週刊', period: '週刊', description: '1979 年創刊的地方社區媒體，持續報導臺中豐原、東勢、石岡、新社、和平與卓蘭的地方新聞、人物與公共議題；官網可直接閱讀近期文章與歷史資料。', url: 'https://scweekly.com.tw/' }),
  makeReference({ city: '苗栗縣', name: '尋庄', region: 'central', publisher: '捍衛苗栗青年聯盟', period: '2014 年創刊・原規劃至少 12 期', description: '苗栗青年在大埔事件後走進地方現場，以社會議題、草根人物與傳統文化為主軸；創刊號從媽祖信仰延伸到廟宇傳承與在地處境。', url: 'https://www.newsmarket.com.tw/blog/48126/' }),
  makeReference({ city: '彰化縣・鹿港', name: '今秋誌', region: 'central', status: 'active', publisher: '鹿港囝仔文化事業', period: '2019 年出版第一輯・不定期', description: '以「今秋藝術節」為名，第一輯回顧 2015 至 2017 三屆策展、地方問題與行動成果；它不是已停刊《道地誌》的續號，而是把保鹿運動、返鄉協力、老戲院與地方創業整理成一份階段性的實踐檔案。', url: 'https://tkfl.tw/topic/story-of-jin-qiu-lukang-vol-1/', issues: [
    { label: '今秋誌 I・2019', theme: '地方的創造與再生', highlight: '三屆今秋藝術節的地方實踐', reason: '從三屆藝術節回看鹿港囝仔如何以策展回應城鎮問題，並累積返鄉實踐與新的創業想像。', url: 'https://tkfl.tw/topic/story-of-jin-qiu-lukang-vol-1/' },
  ] }),
  makeReference({ city: '彰化縣・員林', name: '員林紀事', region: 'central', status: 'hiatus', publisher: '好好生活書店／蓋印彰', description: '以員林街區記憶與地方生活為內容的民間刊物；紙本目前暫停，但團隊仍持續地方文化工作。', url: 'https://www.goodlifebookstore.com.tw/' }),
  makeReference({ city: '南投縣・埔里', name: '籃城很有事', region: 'central', publisher: '籃城書房／籃城教師社群與在地夥伴', firstPublished: '2018 年 10 月', period: '40 頁・中英雙語地方刊物', description: '由新舊居民共同編輯，以中英對照介紹埔里籃城的筊白筍水田、候鳥、紅磚厝、武術與農村生活；隨書附 A3 散步地圖，讓讀者按著路線走進社區，也能用英文向外地人介紹家鄉。', url: 'https://restbb.com/publish/', issues: [
    { label: '2018・創刊', highlight: 'Things Are Happening in Lancheng', reason: '40 頁雙語內容加上一張 A3 地圖，把自然生態、地方人物與可實際步行的路線放在同一本刊物裡。', url: 'https://www.newsmarket.com.tw/shop/product/things-are-happening-in-lancheng/' },
  ] }),
  makeReference({ city: '彰化縣', name: '中台灣食通信', region: 'central', publisher: '中台灣食通信／微光生活', description: '以中臺灣生產者、食材與土地關係為主軸，官方頁保留品牌緣起與各期消息。', url: 'https://mlight.com.tw/about/' }),
  makeReference({ city: '雲林縣', name: '雲林食通信', region: 'central', publisher: '三小市集／雲林食通信編輯團隊', period: '依公告出刊', description: '以雲林農產、生產者與飲食文化為主軸，讓讀者一邊閱讀產地故事、一邊品嚐當季食材。', url: 'https://www.tri-small.com/de/pages/yunlintaberu' }),
  makeReference({ city: '臺南市', name: '透南風', region: 'south', publisher: '透南風文化創意有限公司', description: '把地方行動轉譯成文字、影像與編輯內容，書寫臺南街區、文化資產與地方生活。', url: 'https://tou-southwind.com/index.php?lang=tw' }),
  makeReference({ city: '臺南市', name: '路克米', region: 'south', status: 'active', publisher: '古都保存再生文教基金會', period: '事件型／專案型不定期', description: '由古都保存再生文教基金會發行，以老屋、文化資產與臺南城市事件為題，採事件型方式不定期出刊。', url: 'https://fhccr.org.tw/%E5%8F%A4%E9%83%BD%E5%AF%A6%E7%B8%BE/%E8%B7%AF%E5%85%8B%E7%B1%B3/' }),
  makeReference({ city: '高雄市', name: '藍灯號誌', region: 'south', status: 'ceased', publisher: 'Lander House 藍灯號', period: '曾規劃發行 6 期', description: '以高雄為地方現場的獨立刊物，用人物、城市空間與青年文化組成每期專題。', url: 'https://www.books.com.tw/products/0010714424?loc=P_0003_077' }),
  makeReference({ city: '高雄市・鹽埕', name: '微醺鹽埕', region: 'south', publisher: '微醺鹽埕編輯團隊', description: '以高雄鹽埕街區、飲食與城市生活為主題，從店家、人物與街道保存地方感。', url: 'https://www.verse.com.tw/article/local-publications-yancheng' }),
  makeReference({ city: '高雄市・美濃', name: '野上野下', region: 'south', status: 'hiatus', publisher: '野上野下文化有限公司／YOYO、偉志、大頭', description: '2008 年由留在美濃的青年共同催生，從慢遊與水圳玩耍開始，以「野史」視角書寫農村人物、產業、景觀與自然；2010 年底已出至第 8 冊。', period: '2008 年創刊・不定期・休刊中', url: 'https://wildandfield.blogspot.com/p/blog-page.html' }),
  makeReference({ city: '高雄市', name: '藍寶石', region: 'south', publisher: '藍寶石編輯團隊', description: '以高雄地方生活、農業與人物採集為內容的民間刊物，現有媒體專訪可理解其編輯方向。', url: 'https://www.kaofarmers.tw/farmer-colours/epaper/16/128' }),
  makeReference({ city: '高雄市', name: '行南', region: 'south', status: 'hiatus', publisher: '行南文化協會', period: '季刊・暫停出刊', description: '以青年觀點報導高雄與南方公共議題的獨立媒體，官方網站保留刊物緣起與文章。', url: 'https://praxisinsouth.blogspot.com/' }),
  makeReference({ city: '屏東縣・恆春', name: '琅嶠食通信', region: 'south', description: '食通信系列在恆春半島的地方版本，以食材、生產者與風土為主軸。', publisher: '紅氣球書屋／琅嶠食通信編輯團隊', url: 'https://tw.news.yahoo.com/news/%E6%9B%B8%E5%BA%97%E7%9A%84%E6%A8%A3%E5%AD%90%E5%85%B6%E5%AF%A6%E5%B0%B1%E6%98%AF%E4%B8%BB%E4%BA%BA%E7%9A%84%E6%A8%A3%E5%AD%90-%E9%9B%99%E6%BA%AA%E7%B4%85%E6%B0%A3%E7%90%83%E6%9B%B8%E5%B1%8B-%E8%B7%9D%E9%9B%A2%E7%81%AB%E8%BB%8A%E7%AB%99%E4%B8%89%E7%A7%92%E9%90%98-010615526.html' }),
  makeReference({ city: '宜蘭縣・員山', name: '深溝年報', region: 'east', status: 'active', publisher: '田文社', period: '年刊・手工製作', description: '以深溝村農事、居民與日常為主題的手作年報，常隨米附贈，保留濃厚的剪貼與手寫感。', url: 'https://www.tainbunsia.com/', issues: [
    { label: '第 3 期', highlight: '村裡的年度色票', reason: '每期以一組來自田野的顏色貫穿編輯，讀農村日常與視覺如何相互長成。', url: 'https://opinion.cw.com.tw/blog/profile/380/article/8477' },
    { label: '田文社連載', highlight: '第一次種菜就失敗', reason: '從社群連載延伸理解年報幽默又貼近生活的敘事方式。', url: 'https://www.tainbunsia.com/' },
  ] }),
  makeReference({ city: '宜蘭縣・南方澳', name: 'about 關於地方：南方澳誌', region: 'east', publisher: '關於地方編輯團隊', description: '以南方澳港鎮、海洋、漁業與地方生活為主題，現有書店頁保留部分期數的主題與書目。', url: 'https://www.eslite.com/product/10099303322754645' }),
  makeReference({ city: '宜蘭縣', name: '歪仔歪詩刊', region: 'east', status: 'active', publisher: '歪仔歪詩社／賣田出版', firstPublished: '2007 年', period: '半年刊・2023 年已至第 20 期', description: '最初是宜蘭歪仔歪詩社把社員作品自行編輯、插畫、印製的同仁刊物，2012 年第 10 期起擴大為正式出版。內容常以踏查串起宜蘭地理與個人生命，也持續製作詩人特輯並引介臺灣及外地詩風。', url: 'https://tcmb.culture.tw/zh-tw/detail?id=603612&indexCode=Culture_Object', issues: [
    { label: '第 18 期・2020', theme: '詩人的筆記本專輯', highlight: '詩人的筆記本專輯', reason: '由詩人的手寫、閱讀與創作痕跡切入，延續刊物把地方、生命經驗與詩歌放在一起的方法。', url: 'https://www.bignews.tw/%E3%80%8C%E8%A9%A9%E4%BA%BA-%E8%8C%B6-%E7%AD%86%E8%A8%98%E6%9C%AC-%E3%80%8A%E6%AD%AA%E4%BB%94%E6%AD%AA%E8%A9%A9%E5%88%8A%E3%80%8B%E7%AC%AC18%E6%9C%9F16%E6%97%A5%E6%AD%A3%E5%BC%8F%E7%99%BC-58152.html' },
  ] }),
  makeReference({ city: '花蓮縣', name: "o'rip", region: 'east', publisher: "o'rip 生活旅人工作室", description: '花蓮民間地方刊物，記錄東臺灣的生活、文化與地方行動；官方網站保留刊物故事分類。', url: 'https://orip.wordpress.com/category/orip%E6%95%85%E4%BA%8B%EF%BC%88%E5%88%8A%E7%89%A9%EF%BC%89/' }),
  makeReference({ city: '花蓮縣', name: '拾紙', region: 'east', publisher: '陳韋捷、林于婷、黃詩雯', firstPublished: '2015 年 4 月', period: '地方雙月刊・至少 2 刊', description: '由三位東華大學學生共同創辦，以街道為經緯、社區為起點，用文字、插畫與攝影追索花蓮正在消失的文化地景。刊名取「重拾紙本」之意，也希望讀者重新關心腳下的土地。', url: 'https://www.wowlavie.com/article/ae1502802', issues: [
    { label: '創刊號・2015.04', theme: '溝仔尾／紅毛溪', highlight: '追索被覆蓋河川與街區的記憶', reason: '訪談里長與曾住在當地的居民，拼回紅毛溪被覆蓋前後的街區繁華與興衰。', url: 'https://www.wowlavie.com/article/ae1502802' },
    { label: '第 2 刊・鳳林', highlight: '返鄉與新住民的花蓮生活', reason: '從返鄉耕耘者與外籍新住民的經驗，理解人如何從陌生走到認同一塊土地。', url: 'https://www.wowlavie.com/article/ae1502802' },
  ] }),
  makeReference({ city: '花蓮縣', name: '東台灣食通信', region: 'east', description: '食通信系列的東臺灣版本，以生產者、食材與土地關係為主軸；官方網站保留品牌與刊物介紹。', publisher: '東台灣食通信編輯團隊', url: 'https://sambaby001.wixsite.com/taberuineastern' }),
  makeReference({ city: '花蓮縣・萬榮', name: '太布河里', region: 'east', publisher: '交換密碼計畫與萬榮在地青年', description: '從萬榮鄉部落與地方創生行動出發，將返鄉青年的田野調查與太魯閣族文化轉譯成刊物。', url: 'https://www.tacp.gov.tw/WebFiles/29015d5c-a712-4c7e-a2a3-42014dab0111.pdf' }),
  makeReference({ city: '臺東縣・蘭嶼', name: '952vazaytamo', region: 'east', publisher: '952 製刊社', period: '雙月刊・至少 4 期', description: '2015 年 2 月創刊，由蘭嶼青年與臺灣青年共同編輯，以年輕人的觀察和聲音重新詮釋達悟文化。四期封面故事依序從族名與家族祝福、圖騰和智慧財產權、傳統服飾與當代工藝，走到六個部落的名稱、傳說及逐漸消失的地景記憶。', url: 'https://952vazaytamo.wixsite.com/952vazaytamo/magazine', issues: [
    { label: '創刊號', theme: '你叫什麼名字？', highlight: '你叫什麼名字？', reason: '從達悟族名、家族祝福與青年文化認同切入。', url: 'https://952vazaytamo.wixsite.com/952vazaytamo/magazine' },
    { label: '第 2 期', theme: '島嶼記號', highlight: '島嶼記號', reason: '談圖騰、原住民族智慧財產權與島上創作者。', url: 'https://952vazaytamo.wixsite.com/952vazaytamo/magazine' },
    { label: '第 3 期', theme: '最好的衣服', highlight: '最好的衣服', reason: '從傳統服裝、配飾與當代設計閱讀文化傳承。', url: 'https://952vazaytamo.wixsite.com/952vazaytamo/magazine' },
    { label: '第 4 期', theme: '一粒島嶼', highlight: '一粒島嶼', reason: '從六個部落的由來、名稱與地景傳說，找回逐漸被遺忘的島嶼記憶。', url: 'https://952vazaytamo.wixsite.com/952vazaytamo/magazine' },
  ] }),
  makeReference({ city: '金門縣', name: '金門文藝', region: 'islands', status: 'active', publisher: '古月出版公司', period: '半年刊', description: '1973 年創刊、歷經數度停復刊的金門文學刊物，收錄地方書寫、新詩、散文、小說與人文藝術。', url: 'https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=6ACF59077598B335&sms=BF7D6D478B935644' }),
  makeReference({ city: '金門縣', name: '金門', region: 'islands', status: 'archive', publisher: '金門縣立文化中心', period: '1978 年起曾發行', description: '金門早期縣刊，保存地方文化、社會與文學內容；國家圖書館的地方文獻發展概述記錄其於 1978 年創刊。', url: 'https://isbn.ncl.edu.tw/NEW_ISBNNet/C00_index.php?KeepThis=true&Pfile=1433&TB_iframe=true&height=650&width=900' }),
  makeReference({
    city: '跨縣市',
    name: '小島 Xiaodao',
    region: 'islands',
    publisher: '小島 Xiaodao／三人編輯團隊',
    period: '2015 年已有第 1、2 號',
    description: '由三位青年共同創辦，把每個人視作一座各有風景的「小島」；每期長時間跟隨一個臺灣品牌或創作者，從工作方式、生活空間與人際關係理解不同的人生選擇。2015 年留下的資料已可確認前兩號分別走進製襪品牌 ＋10 與家庭料理品牌 100 個。',
    url: 'https://thebeher.blogspot.com/2015/10/xiaodao.html',
    issues: [
      { label: '第 1 號', theme: '＋10', highlight: '團隊合作', reason: '編輯跟著四人製襪團隊進入工廠與外拍現場，從臺灣襪業、製造細節一路寫到夥伴間的信任。', url: 'https://thebeher.blogspot.com/2015/10/xiaodao.html' },
      { label: '第 2 號', theme: '100 個', highlight: '家常練習', reason: '以家庭料理為入口，記錄熟悉飯菜、成長記憶與「在家吃飯」如何形塑一個人的生活。', url: 'https://thebeher.blogspot.com/2015/10/xiaodao.html' },
    ],
  }),
  makeReference({ city: '跨縣市', name: '台味誌', region: 'islands', publisher: '就曰設計', period: '至少 3 期', description: '以中日文雙語編輯，每期從早餐、髒話、珍珠奶茶等日常主題保存這一代的臺灣記憶。', url: 'https://www.zeczec.com/projects/tai-way' }),
  makeReference({ city: '跨縣市', name: '旅人食通信', region: 'islands', publisher: '旅人食通信《不二味》編輯團隊', period: '2017 年創刊', description: '由學生團隊創辦的附食材情報誌，以「一本用食材認識家鄉」為製作精神；跟隨產地與生產者，把閱讀、品嚐和地方關係放在同一份刊物裡。', url: 'https://www.newsmarket.com.tw/blog/96975/' }),
  makeReference({ city: '跨縣市', name: '米通信', region: 'islands', publisher: '顧瑋／土生土長 On the Ground', period: '2017 年創刊・一季一地', description: '專門整理臺灣米風土的獨立刊物，每期走進一個產地，將米種、農人、族群飲食與料理提案編在一起，並以內容加上實際食材的方式發行。', url: 'https://www.wowlavie.com/article/ae1800071', issues: [
    { label: '創刊號・宜蘭', highlight: '從多雨土地讀一季米', reason: '以三種宜蘭米、農家醬油與豆腐乳，把地方風土從文字延伸到餐桌。', url: 'https://www.aicu.com.tw/blog/2017/6/2/01' },
  ] }),
  makeReference({ city: '跨縣市', name: '五花鹽 BaconPress', region: 'islands', status: 'active', publisher: '五花鹽 BaconPress', period: '不定期專題', description: '以輕鬆視覺處理土地、歷史與社會議題的獨立專題小誌，官方商店仍列有多期雜誌。', url: 'https://baconpress.waca.ec/cart', issues: [
    { label: 'NO.008', theme: '鯤鯓', highlight: '鯤鯓', reason: '從海岸沙洲進入島嶼地景與生活文化。', url: 'https://baconpress.waca.ec/cart' },
    { label: 'NO.007', theme: '做風颱', highlight: '做風颱', reason: '以颱風經驗組織地方記憶與日常知識。', url: 'https://baconpress.waca.ec/cart' },
  ] }),
  makeReference({ city: '跨縣市', name: '本地 The Place', region: 'islands', publisher: '編集者新聞社與各縣市文化局', period: '縣市專題系列', description: '以不同縣市為單冊主題，透過採集、攝影與設計探究地域生活；已有桃園、臺南、屏東、臺東、花蓮、新北等卷。', url: 'https://gpi.culture.tw/books/1010901787' }),
  makeReference({ city: '跨縣市', name: '台毒誌｜to̍k magazine', region: 'islands', publisher: '台毒誌編輯團隊', period: '季刊・曾出版試刊號與創刊號', description: '以臺灣旅遊生活、庶民文化與地方歷史為題的獨立雜誌，募資頁保留完整辦刊理念與規格。', url: 'https://www.zeczec.com/projects/taitokchi' }),
  makeReference({ city: '跨縣市', name: '薰風', region: 'islands', status: 'active', publisher: '風月襟懷文化事業有限公司', period: '季刊', description: '以臺日歷史羈絆、地方文化與生活風格為主題，官方入口可查看網站、線上內容與訂閱資訊。', url: 'https://linktr.ee/kunputw2023' }),
  makeReference({ city: '高雄市', name: '風土痣', region: 'south', publisher: '沈岱樺、王春子', period: '年刊', description: '從高雄出發，以農業、飲食、人物與土地細節為題，一年出版一期的獨立刊物。', url: 'https://www.kaofarmers.tw/farmer-colours/epaper/10/55' }),
  makeReference({ city: '跨縣市', name: '藍鯨', region: 'islands', status: 'ceased', publisher: '黑潮文化／《藍鯨》編輯團隊', period: '2014 年創刊・半年刊', description: '以「重新認識臺灣」為志向的地方誌，每期進入不同城鎮、鄉村與市場，採訪居民、建築、食材與傳統工藝；創刊號曾在高雄哈瑪星長期田調。', url: 'https://www.peopo.org/news/371557', issues: [
    { label: '創刊號・2014', theme: '哈瑪星', highlight: '住進港區以後重新書寫地方', reason: '編輯團隊曾在地方居住數月，從港區生活理解「由誰書寫地方」這件事。', url: 'https://www.peopo.org/news/371557' },
  ] }),
  makeReference({ city: '跨縣市', name: '北台灣食通信', region: 'islands', publisher: '北台灣食通信／鄭雅珺', description: '臺灣食通信網絡的北部團隊，以附食材情報誌連結北臺灣生產者、消費者與土地，主理人鄭雅珺亦參與食通信臺灣事務局的推廣與共學。', url: 'https://foodinisland.wordpress.com/%E9%A6%96%E9%A0%81/%E6%A0%B8%E5%BF%83%E6%88%90%E5%93%A1/' }),
  makeReference({ city: '新北市・雙溪', name: '書物食通信', region: 'north', description: '由紅氣球書屋發行，把書物編輯與食通信方法結合，讓地方小農與書店閱讀發生連結。', publisher: '紅氣球書屋', url: 'https://tw.news.yahoo.com/news/%E6%9B%B8%E5%BA%97%E7%9A%84%E6%A8%A3%E5%AD%90%E5%85%B6%E5%AF%A6%E5%B0%B1%E6%98%AF%E4%B8%BB%E4%BA%BA%E7%9A%84%E6%A8%A3%E5%AD%90-%E9%9B%99%E6%BA%AA%E7%B4%85%E6%B0%A3%E7%90%83%E6%9B%B8%E5%B1%8B-%E8%B7%9D%E9%9B%A2%E7%81%AB%E8%BB%8A%E7%AB%99%E4%B8%89%E7%A7%92%E9%90%98-010615526.html' }),
  makeReference({ city: '屏東縣・長治', name: '屏風食通信', region: 'south', publisher: '三線路在地工作坊', period: '2019 年創刊計畫', description: '以屏東地方食材、生產者與社區故事為主題，把紙本閱讀與食材品嚐放在同一份體驗中。', url: 'https://www.flyingv.cc/projects/22357' }),
];

export const supplementalPublications: LocalPublication[] = [
  ...verifiedOnline,
  ...discoveredReferences,
  ...paperMapPublications,
];
