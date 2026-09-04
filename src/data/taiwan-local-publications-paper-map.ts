import type { AccessType, LocalPublication, PublicationStatus, ReadingAvailability, RecommendedIssue, RegionId } from './taiwan-local-publications';

type PaperMapSeed = {
  city: string;
  place: string;
  name: string;
  region: RegionId;
  year?: string;
  status?: PublicationStatus;
  access?: AccessType;
  reading?: ReadingAvailability;
  publisher?: string;
  period?: string;
  url?: string;
  description?: string;
  note?: string;
  issues?: RecommendedIssue[];
};

// 依使用者提供的紙本〈地方刊物地圖〉逐項轉錄。
// 這批資料只證明圖錄曾收錄該刊，不把圖錄年份推定為目前發行狀態。
const paperMapSeeds: PaperMapSeed[] = [
  { city: '臺北市・大稻埕', place: '大稻埕', name: '稻相報', region: 'north', year: '2016', publisher: '大稻埕洋行', url: 'https://www.shoppingdesign.com.tw/post/category/read?page=9&s=24&sn_f=1&sn_u=802584d5fe48d62c99475818d7db8d40', description: '由大稻埕在地人企劃的免費地方刊物，以街坊人物、老產業與一期一會的生活採集，重新閱讀商業老城。' },
  { city: '臺北市・北投洲美', place: '北投洲美社區', name: '洲美人家', region: 'north', year: '2019' },
  { city: '臺北市・南港', place: '南港中南街區', name: '拌島誌', region: 'north', year: '2019', publisher: '中南拌島團隊', period: '2019 年創刊・至少 2 期', url: 'https://bradougroup.wordpress.com/2020/04/13/%E5%9C%A8%E7%8F%8D%E7%8F%A0%E5%A5%B6%E8%8C%B6%E4%B9%8B%E5%89%8D%EF%BC%8Cformosa-tea%E6%97%A9%E5%B7%B2%E6%8F%9A%E5%90%8D%E5%9C%8B%E9%9A%9B/', description: '以南港中南街為田野，從老街屋、包種茶與產業歷史閱讀被快速開發遮蔽的街區；團隊網站保留由刊物延伸的文章與影像。' },
  { city: '臺北市・北投', place: '北投', name: '湯投', region: 'north', year: '2022' },

  { city: '新北市・淡水', place: '淡水', name: '淡水 23 事', region: 'north', year: '2020', publisher: '淡水社區大學', url: 'https://tamsui.twco.org.tw/course/m_bulletin_detail.php?u=67fd0719f21ac', description: '由淡水在地學員採寫生活路徑與人物故事，從移居者與居住者的日常經驗，看見淡水不只是觀光古蹟。' },
  { city: '新北市・坪林', place: '坪林', name: '走水', region: 'north', year: '2022', publisher: '《走水》地方誌編輯團隊／詹培昕', period: '2019 年發起・已出至少 4 期', url: 'https://www.citilens.cc/nest18-zou-shuei', description: '由坪林青年以製茶工序「走水」為名，把田野、口述歷史與地方策展編進刊物，記錄北勢溪、茶產業、保坪宮與人口外移下的山城生活。', note: '《巢兼代》第 18 期曾以專題報導《走水》，兩者是各自獨立的刊物。', issues: [
    { label: '第 1 期', highlight: '信仰、產業與河川', reason: '從保坪宮、茶業與北勢溪並讀坪林不只一種地方面貌。', url: 'https://www.citilens.cc/nest18-zou-shuei' },
    { label: '第 2 期', highlight: '水與抾水技藝', reason: '從長者記憶、水道與抾水技藝，整理一條由居民經驗構成的流域地圖。', url: 'https://www.citilens.cc/nest18-zou-shuei' },
    { label: '第 4 期', highlight: '坪林的信仰節點', reason: '細寫元宵、中元與媽祖遶境，觀看祭儀如何連結地方生活。', url: 'https://www.citilens.cc/nest18-zou-shuei' },
  ] },
  { city: '新北市・貢寮馬崗', place: '貢寮馬崗漁村', name: '鹹石報', region: 'north', year: '2022' },
  { city: '新北市・瑞芳', place: '瑞芳', name: '瑞芳華', region: 'north', year: '2022', publisher: '胡皓婷與《瑞芳華》地方團隊', period: '2022 年地方刊物計畫', url: 'https://www.tucheng.ntpc.gov.tw/uploaddowndoc?file=news%2F202208111032410.pdf&filedisplay=111%E5%B9%B4%E5%BA%A6%E6%96%B0%E5%8C%97%E5%B8%82%E6%94%BF%E5%BA%9C%E6%96%87%E5%8C%96%E5%B1%80%E7%A4%BE%E9%80%A0%E7%8D%8E%E8%A3%9C%E5%8A%A9%E5%90%8D%E5%96%AE.pdf&flag=doc', description: '從瑞芳後站出發，透過實地走訪與史料研究保存社區記憶，並在刊物編採過程中邀請居民重新思考自己與瑞芳的連結。' },

  { city: '桃園市・新屋', place: '新屋', name: '耕新報', region: 'north', year: '2018', publisher: '中央大學地方團隊', url: 'https://matters.town/a/sjw3aj5w66ry', description: '以農立基的新屋為田野，持續關注在地人物、巷弄、市場與土地議題，讓地方關懷不只停在文字裡。' },
  { city: '桃園市・南崁', place: '南崁', name: '住南崁', region: 'north', year: '2020', publisher: '南崁文化協會', period: '2020 年創刊', url: 'https://www.childrenartvillage.com/page/news/show.aspx?num=1106&page=90', description: '由南崁文化協會發起的地方誌，在南崁文化日推出創刊號，透過街區採集與地方活動累積居民對南崁的文化記憶與連結。' },
  { city: '桃園市・楊梅富岡', place: '楊梅富岡', name: '富岡慢走', region: 'north', year: '2021', access: 'ebook', reading: 'online', publisher: '富岡青旅行團隊', period: '地方刊物', url: 'https://online.flipbuilder.com/wkbci/ncxv/files/basic-html/page1.html', description: '以「南桃邊境、富岡慢走」整理伯公岡的鐵道發展、老街屋、在地店家與青年返鄉，電子書可逐頁閱讀創刊內容。' },
  { city: '桃園市・大園／蘆竹', place: '大園、蘆竹', name: '空城現場', region: 'north', year: '2022', status: 'active', publisher: '空城現場團隊', period: '實體季刊', url: 'https://clab.org.tw/creators/2023_r205/', description: '長期進入桃園航空城拆遷現場，以刊物、影像與藝術行動保存快速消失的地景、關係與居民記憶。' },
  { city: '桃園市', place: '桃園市', name: '眾聲', region: 'north', publisher: '桃園市政府文化局', period: '社區營造主題刊物', url: 'https://kuroshioculture.com/work/1', description: '以人物和地景交織桃園的城市文化軌跡；「地方・異想・覆面書」一期從社造現場拉開地方時間線，討論居民、行動與地方認同的可能。' },

  { city: '新竹縣・竹北／新埔', place: '竹北、新埔犁頭山地區', name: '犁頭山水話', region: 'north', year: '2021', publisher: '國立清華大學芎林地方團隊', period: '2021 年創刊・持續出刊', url: 'https://www.hisp.ntu.edu.tw/report_paper?id=407', description: '以竹北至芎林一帶的犁頭山為核心，由團隊與居民分組田調產業、生態、建築、客語教育和傳統技藝，整理農村與水系的地方敘事。' },
  { city: '新竹市・香山', place: '香山', name: '手工砌子', region: 'north', year: '2021' },
  { city: '新竹縣・峨眉', place: '峨眉', name: '眉本事', region: 'north', year: '2023', status: 'active', publisher: '滾回家工作室與峨眉地方青年', period: '年刊', url: 'https://tibeonline.tw/show-book/%E7%9C%89%E6%9C%AC%E4%BA%8B/', description: '由峨眉青年共同編輯的社區圖文報，以較大的字級和大量照片，書寫理髮店、菜園、生態、飲食與客庄日常，讓長輩和孩子都能輕鬆閱讀。' },
  { city: '新竹市', place: '新竹市', name: 'IN 新竹', region: 'north', status: 'active', publisher: '新竹市政府產業發展處', period: '季刊', url: 'https://www.hccg.gov.tw/hccg/app/data/view?id=30122&module=news&serno=202505250002', description: '新竹市產業季刊，以年輕、親切的敘事報導農林漁牧、工商市場、特色品牌與創業者，從產業角度建立城市的地方感。' },
  { city: '新竹縣', place: '新竹縣', name: '新竹縣藝文手帖', region: 'north', status: 'active', access: 'ebook', reading: 'online', publisher: '新竹縣政府文化局', period: '季刊', url: 'https://www.hchcc.gov.tw/Tw/Publication/Links?filter=4301f2ed-ef80-4120-a8d3-533e99864738', description: '2022 年創刊，以十三鄉鎮的表演、工藝、人物與文化資產為每季主題；文化局出版頁持續整理各期電子書。' },

  { city: '苗栗縣', place: '苗栗全區', name: '苗圖紙', region: 'central', year: '2021', publisher: '共發 Gong Fa', url: 'https://www.gongfa.tw/pages/tracing-miaoli', description: '以在地生活、文史與插畫構成苗栗市的圖像刊物，也延伸出可以帶著走讀的體驗設計。' },
  { city: '南投縣・中興新村', place: '中興新村', name: 'LOCAL WORD', region: 'central', year: '2018', publisher: 'LOCAL WORD 編輯團隊', url: 'https://localword.weebly.com/', description: '以「愛你所在」為主軸，邀請居民用詩、攝影、插畫與人物採訪共同編輯中興新村。' },
  { city: '南投縣・埔里眉溪', place: '埔里眉溪', name: '擺溪流 Baikei', region: 'central', year: '2023', publisher: '穀笠合作社', url: 'https://gulirice.com/baikei/', description: '以眉溪流域為中心，從族群、水圳、農業、生態與影像重新建立埔里人和溪流的關係。' },
  { city: '南投縣・魚池鹿篙', place: '魚池鹿篙社區', name: '來一泡鹿篙', region: 'central', year: '2023', publisher: '來一泡鹿篙團隊', url: 'https://cupoflugao.com/%E9%97%9C%E6%96%BC%E6%88%91%E5%80%91/', description: '沿魚池鹿篙社區的香茶巷，採集茶農、咖啡農與百年挑茶路的地方風土。' },

  { city: '基隆市・八斗子', place: '八斗子', name: '東北風', region: 'north', year: '2013', status: 'active', publisher: '八斗子漁村文物館／許焜山', period: '半年刊', url: 'https://doriszone.com/keelungbadouzi/', description: '由許焜山和八斗子漁村文物館自費發行，以老船長、海女、漁法、臺語俗諺和港灣變遷為核心，靠扎實訪談保存漁村生活史。' },
  { city: '基隆市', place: '基隆全區', name: '田覓基隆', region: 'north', year: '2020', publisher: '見書店', period: '店刊・刊期不定', url: 'https://data.bluezz.tw/c.php?id=52218', description: '由見書店從店內遇見的人出發，採集地方人物與閱讀生活；早期以季刊形式發行，後續也曾改版為特刊。' },
  { city: '基隆市', place: '基隆全區', name: '海想知道', region: 'north', year: '2021', url: 'https://vocus.cc/article/amp/61bf2fc9fd89780001c9e8aa', description: '從海港與城市生活出發的基隆地方刊物，與民間社區行動共同累積雨港的地方視角。' },
  { city: '基隆市', place: '基隆市', name: 'Keelung Way', region: 'north', status: 'active', publisher: '基隆市文化觀光局', period: '季刊', url: 'https://klctb.klcg.gov.tw/News2.aspx?n=7773&sms=12517', description: '以主題企劃介紹基隆的歷史、人文、飲食與當代生活；官方頁持續整理歷期內容與紙本索取點。' },

  { city: '宜蘭縣・龜山島', place: '龜山島', name: '龜派', region: 'east', year: '2020', publisher: '海波浪 seabelongings', url: 'https://www.citilens.cc/nest20-seabelongings', description: '以龜山島文化、地方議題、器物典藏與島民記憶為主題，讓閱讀成為參與島嶼過去與未來的一種方式。' },
  { city: '宜蘭縣・南方澳', place: '南方澳', name: '南風澳地方誌', region: 'east', year: '2003', status: 'ceased', publisher: '南風澳文史工作室', period: '2003 年創刊；2017 年復刊後再停刊', url: 'https://www.lym.gov.tw/ch/collection/epaper/epaper-detail/33b6fa92-4a79-11eb-b345-2760f1289ae7/', description: '由賴榮興創辦，以漁業、港口人物、老照片與地方建設為內容，早期免費送到南方澳家戶；復刊八期後停刊，其地方書寫由《蘇澳人》接續。' },
  { city: '宜蘭縣', place: '宜蘭全區', name: 'Place', region: 'east', year: '2019' },
  { city: '宜蘭縣・員山深溝', place: '員山深溝村', name: '深溝風土博物誌', region: 'east', year: '2021' },
  { city: '宜蘭縣・蘭陽溪溪南', place: '蘭陽溪溪南地區', name: '加禮遠', region: 'east', year: '2021', publisher: '文邑二手書店／加禮遠團隊', period: '雙月刊', url: 'https://tcmb.culture.tw/zh-tw/detail?id=731041&indexCode=Culture_Object', description: '由宜蘭青年編輯冬山河流域的文化、歷史與當代故事，以歷史、地方議題與副刊建立刊物架構。' },
  { city: '宜蘭縣・員山深溝', place: '員山深溝村', name: '深溝家', region: 'east', year: '2021', publisher: '慢島生活團隊', period: '不定期', url: 'https://www.ndc.gov.tw/nc_14813_37952', description: '由返鄉生活者和地方夥伴共同採訪、拍攝與編輯，記錄深溝農村的友善農業、新農服務與居民日常。' },
  { city: '宜蘭縣・羅東', place: '羅東', name: '蘭東案內', region: 'east', year: '2023', publisher: '旅人書店／蘭東案內團隊', period: '不定期', url: 'https://www.pinkoi.com/product/N2ijtSex', description: '一本屬於大羅東生活圈的地方指南，從公正街、民生市場、店家與移居者開始閱讀小鎮。' },
  { city: '宜蘭縣', place: '宜蘭縣', name: '宜蘭好生活', region: 'east', status: 'active', access: 'pdf', reading: 'online', publisher: '宜蘭縣政府', period: '縣政專刊・季節刊與特刊', url: 'https://www.e-land.gov.tw/News_Photo.aspx?n=2716&sms=12303', description: '宜蘭縣政府以季節號與特刊整理地方人物、產業、農漁風土和縣政專題；官方頁保留近年各期入口。' },
  { city: '宜蘭縣・蘇澳', place: '蘇澳鎮', name: '蘇澳人', region: 'east', status: 'active', access: 'pdf', reading: 'online', publisher: '宜蘭縣蘇澳鎮公所', period: '2022 年創刊・季刊', url: 'https://www.suao.gov.tw/News.aspx?n=13752&sms=13440', description: '由吳小枚主編，以微型雜誌形式均衡記錄東南澳、南方澳、蘇澳與新馬四區的人物、自然、產業與公共生活；公所頁面提供各期電子版。' },

  { city: '花蓮縣', place: '花蓮全區', name: '寫寫字', region: 'east', year: '2015', publisher: '寫寫字採編學堂／王玉萍', period: '2015 年起・一年一輯', url: 'https://onelittleday.com.tw/%E8%A8%98%E4%B8%8B%E8%8A%B1%E8%93%AE193%E5%85%AC%E8%B7%AF%E7%9A%84%E7%94%9F%E6%B4%BB/', description: '王玉萍每年召集花蓮學員完成一次採訪、編輯與出版實作；其中《海那邊的 193》沿縣道採集居民生活與道路拓寬下的共同記憶。' },
  { city: '花蓮縣・富里', place: '富里', name: '字作業', region: 'east', year: '2022' },
  { city: '花蓮縣・鳳林', place: '鳳林', name: '每鳳有日', region: 'east', year: '2022' },

  { city: '臺東縣・花東', place: '花東地區', name: '曙光季刊', region: 'east', access: 'web', reading: 'online', publisher: '國立臺東生活美學館', period: '季刊', url: 'https://www.ttcsec.gov.tw/News.aspx?n=2393&sms=11618', description: '以花東的視覺藝術、文學、社區營造與生活美學為主要內容；美學館專頁整理各期文章與出版資訊。' },
  { city: '臺東縣・達仁', place: '達仁鄉', name: '達仁鄉刊', region: 'east', access: 'ebook', reading: 'online', publisher: '臺東縣達仁鄉公所', period: '2021 年改版・季節刊', url: 'https://www.calameo.com/books/007240332a74c24d9df70', description: '從土地與排灣族生活出發，深度報導耆老的小米記憶、料理、文化工作者、女力代表與老文物；秋季號可直接線上翻閱。' },

  { city: '彰化縣・彰化市', place: '彰化市區', name: '炯話郎', region: 'central', year: '2019', publisher: '白色方塊工作室', period: '不定期主題刊物', url: 'https://changhuarun.com/about-us/', description: '由彰化在地編輯群以市場、鐵道等主題重新梳理城市生活，刊名取「彰化人」的臺語諧音。' },
  { city: '嘉義市・中正路', place: '嘉義中正路', name: '聰明誌', region: 'south', year: '2018', publisher: '林聰明沙鍋魚頭', period: '2018 年創刊・季刊', url: 'https://www.sanmin.com.tw/product/index/007533225', description: '由老字號餐飲品牌從中正路出發，記錄好額人市、噴水圓環、老戲院、市場、書店與廟宇等嘉義生活地景，把品牌故事延伸成城市刊物。' },
  { city: '嘉義市', place: '嘉義市', name: '桃城晃遊', region: 'south', access: 'pdf', reading: 'online', publisher: '嘉義市立博物館', period: '2018 年創刊・季刊', url: 'https://www.tou-southwind.com/product_d.php?id=138&lang=tw&tb=5', description: '把整座嘉義視為一座城市博物館，從街巷、典藏、市民研究與地方文化治理閱讀桃城；特刊頁可直接下載閱讀。' },

  { city: '臺南市', place: '臺南市區', name: 'WuTalk! 臺南在地誌', region: 'south', year: '2013', status: 'hiatus', access: 'ebook', reading: 'online', publisher: 'WuTalk! 臺南在地誌團隊／吳啟豪', period: '曾以半年刊出刊', url: 'https://fliphtml5.com/dtlz/ahqt/WuTalk_%E9%9B%B6%E9%9B%B6%E5%A3%B9-%5B%E9%9D%92%E8%89%B2%E3%81%AE%E6%97%85%5D/', description: '由居住臺南的跨地團隊走訪店家、人物、文化與生態，以在地人的聲音修正單一觀光印象；零零壹〈青色の旅〉可完整線上翻閱。' },
  { city: '臺南市', place: '臺南全區', name: '臺南藝志', region: 'south', year: '2015', publisher: '李威萱、陳正杰與臺南藝志團隊', period: '2015 年創刊・月刊', url: 'https://www.chinatimes.com/amp/realtimenews/20151020000328-260511', description: '為臺南表演與視覺藝術團隊搭建共同發聲平台，以淺白文字、圖像指南、封面故事和獨立觀點，補足古蹟與美食之外的城市藝文生活。' },
  { city: '臺南市・曾文溪', place: '曾文溪流域', name: '小事報', region: 'south', year: '2019', status: 'active', access: 'web', reading: 'online', publisher: '臺南市政府文化局與曾文溪流域學校', period: '2019 年發起・年度工作營與線上刊物', url: 'https://smallthingsnews.weebly.com/38364260442510520497.html', description: '從安業國小起步，後來串連曾文溪上中下游多所學校，讓孩子經由踏查、採訪、繪圖與編輯，用自己的視角書寫流域的生態、地史和聚落。' },
  { city: '臺南市・新營', place: '新營', name: '叩問影像在地誌', region: 'south', year: '2020' },
  { city: '臺南市・永康大灣', place: '永康大灣', name: '轉個灣', region: 'south', year: '2020', status: 'hiatus', publisher: '轉個灣工作室／歐雨鑫', period: '2020 年創刊・暫停出刊', url: 'https://ekangwoman.com/turndawan/', description: '由大灣居民組成的工作室透過田調、訪談和地方刊物整理永康大灣的巷弄、甜食、信仰與庶民生活，逐年把地方記憶轉成走讀與社區行動。' },
  { city: '臺南市・北門', place: '北門三寮灣、蘆竹溝', name: '倒風島彎', region: 'south', year: '2021' },
  { city: '臺南市・鹽水', place: '鹽水', name: 'Kiâm-tsuí 心適代', region: 'south', year: '2021', publisher: '鹽水地方誌編輯團隊', period: 'MOOK・不定期', url: 'https://www.beyondbeyond.com.tw/category/loveearth/articles/554', description: '以鹽水人的在地觀點深入嘉南平原鄉村生活；刊名用臺語說出鹽水和「有趣味的事情」。' },
  { city: '臺南市', place: '臺南市', name: '美印臺南', region: 'south', status: 'active', access: 'pdf', reading: 'online', publisher: '臺南市政府文化局', period: '2011 年創刊・季刊', url: 'https://culture.tainan.gov.tw/form/index?Parser=28%2C6%2C118%2C48%2C%2C%2C%2C17', description: '聚焦大臺南各區的文化、地方創生、設計品牌與生活風格，以城市觀察、人物、創意地圖和議題對談編排；官方電子刊物頁提供多期下載。' },

  { city: '臺中市', place: '臺中全區', name: '微觀', region: 'central', year: '2020', publisher: '墟聲創營工作室 Ruins C&C Studio', period: '2020 年創刊・原規劃雙月刊', url: 'https://www.zeczec.com/projects/ruinscc', description: '以每期走入一個臺中區域的方式，採集地方推手、老店、產業與老屋故事，將文化城的多重面貌編成深度旅行的閱讀入口。' },
  { city: '臺中市・石岡', place: '石岡', name: '小報石岡', region: 'central', year: '2023', status: 'active', publisher: '梅子屋／石岡地方青年', period: '不定期・2024 年已出第 2 期', url: 'https://changemaker.yda.gov.tw/Changemaker/Doc?u=510', description: '邀請地方青年書寫石岡的季節、農產、溪流和生活記憶；第二期收錄梅子花、無毒草莓、上坑溪、破布子與地方攝影。' },

  { city: '高雄市・鳳山', place: '鳳山', name: '鳳山好厝邊', region: 'south', year: '2018', publisher: '鳳山好厝邊／李雨蓁', period: '2017 年創刊・季刊', url: 'https://orgws.kcg.gov.tw/001/KcgOrgUploadFiles/210/relfile/15500/122913/e1c2e255-450b-43f2-83e1-296085d880ad.pdf', description: '由居民交流社群發展成《城市想望誌》，以地方歷史、城市議題與厝邊開講為內容，從理解問題到提出可行行動，凝聚鳳山的地域意識。' },
  { city: '高雄市・鼓山西子灣', place: '鼓山西子灣', name: '西子灣', region: 'south', year: '2019', publisher: '西子灣地方誌編輯團隊', period: '2019 年創刊・百年紀念專刊', url: 'https://n.yam.com/Article/20190507678220', description: '以海水浴場百年為起點，從海邊居民、自然生態、打狗港與蔣公行館等建築變遷，回看西子灣作為高雄近代休閒地景的歷史。' },
  { city: '高雄市・前鎮草衙', place: '前鎮草衙', name: '工夫活', region: 'south', year: '2020', publisher: '國立中山大學西灣學院品創基地', period: '地方誌', url: 'https://hisp.ntu.edu.tw/ebook/14', description: '從前鎮草衙的產業、職人與生活行業出發，保存拆船業、加工出口區與勞動社區的地方知識。' },
  { city: '高雄市・哈瑪星', place: '哈瑪星', name: '濱線配方', region: 'south', year: '2021', publisher: '高雄市打狗文史再興會', period: '社造計畫地方小誌', url: 'https://khcc-community.kcg.gov.tw/home02.aspx?DATA=3480&EXEC=D&ID=%242001&IDK=2', description: '由打狗文史再興會在新濱老街推動，結合都市農園、五感練習與濱線百味料理，把哈瑪星的飲食踏查編成地方小誌。' },
  { city: '高雄市・跨屏東', place: '高雄、屏東', name: '開外掛', region: 'south', year: '2022', status: 'active', publisher: '温思妮、吳庭寬、戴芫品', period: '2022 年創刊・專題刊物', url: 'https://mag.ncafroc.org.tw/article_detail?sid=973', description: '從高屏工業區與漁港田野出發，書寫東南亞移工、新住民和臺灣社會如何彼此觀看；刊物也延伸為東港移工生活走讀。' },

  { city: '屏東縣・恆春', place: '恆春', name: 'LAUNCHER PAPER 半島報', region: 'south', status: 'active', publisher: 'Launcher Lab 城東大院子', period: '不定期・已出至少 5 期', url: 'https://www.launcher.com.tw/', description: '由恆春的共居與工作旅行基地發行，整理半島生活、在地店家、活動與移居者視角；官方網站列有最新的 Launcher Paper 期數。' },
  { city: '屏東縣', place: '屏東縣', name: 'MEET PINGTUNG 覓屏東', region: 'south', status: 'active', access: 'ebook', reading: 'online', publisher: '屏東縣政府', period: '旅遊年刊／季節號', url: 'https://www.i-pingtung.com/touristinformation', description: '按季節規劃屏東的文化、慶典、飲食與旅行路線，從山林、海岸、部落到城鎮整理地方體驗；屏東旅遊網提供電子刊物入口。' },
  { city: '屏東縣・來義', place: '來義鄉', name: '來義鄉刊', region: 'south', status: 'active', access: 'ebook', reading: 'online', publisher: '屏東縣來義鄉公所', period: '2021 年創刊・半年刊', url: 'https://fliphtml5.com/cttbu/cmdg/%E4%BE%86%E7%BE%A9%E9%84%89%E9%84%89%E5%88%8Avol.07/', description: '以排灣族文化、部落人物、生命禮俗與鄉民自己的書寫為主軸；第 7 期電子書可完整翻閱，近年仍持續出刊。' },
  { city: '屏東縣・泰武', place: '泰武鄉', name: '泰武鄉刊', region: 'south', publisher: '屏東縣泰武鄉公所', period: '半年刊', url: 'https://ekangwoman.com/%E3%80%90%E5%B1%8F%E6%9D%B1%E6%B3%B0%E6%AD%A6-%E2%80%A2-%E9%84%89%E5%88%8A%E7%89%B9%E8%BC%AF%E3%80%91%E5%9C%9F%E5%9C%B0%E8%88%87%E8%BA%AB%E9%AB%94%E8%A8%98%E6%86%B6%EF%BC%8C%E8%B5%B0%E9%80%B2%E5%92%96/', description: '以泰武人的家鄉本位編輯咖啡、古謠、木雕和部落人物，讓影像與生命故事取代制式政令版面，向內建立土地依戀、向外傳達原鄉形象。' },
  { city: '屏東縣・牡丹', place: '牡丹鄉', name: '牡丹好日子 kinataumaqan na butangu', region: 'south', publisher: '屏東縣牡丹鄉公所', period: '鄉刊・依公所公告出刊', url: 'https://www.cna.com.tw/postwrite/chi/318499', description: '刊名意為「牡丹是我們的家」，以部落文健站、導覽員、林下經濟、道路與照明職人等在地人物為敘事核心，也用旅行專題介紹旭海與部落補給站。' },
  { city: '屏東縣・獅子', place: '獅子鄉', name: 'SISIGU・獅子鄉刊', region: 'south', publisher: '屏東縣獅子鄉公所', period: '年刊', url: 'https://www.wowlavie.com/article/ae2002141', description: '以「屏東門戶・南迴起點」重新介紹獅子鄉，從公路沿線、部落生活與地方人物建立南迴入口的文化視角，由屏東在地團隊統籌改版。' },

  { city: '澎湖縣・湖西紅羅', place: '湖西紅羅村', name: '紅羅罩聚落生活誌', region: 'islands', year: '2021', publisher: '離島出走 isle.travel', url: 'https://www.pinkoi.com/product/2qYZY5Px', description: '以紅羅村的聚落建築、廟宇、雜貨店與歷史遺跡編成生活誌、地圖和集章卡。' },
  { city: '澎湖縣・湖西／西嶼', place: '湖西、西嶼', name: '去（Khù）海女神龍', region: 'islands', year: '2022', status: 'active', publisher: '去（Khù）海女神龍團隊', period: '田野出版與教育計畫', url: 'https://www.yda.gov.tw/docDetail.aspx?docid=57648&pid=84&uid=30300', description: '長期採集澎湖阿媽在潮間帶、菜宅、醃漬與曬乾中的山海知識，出版《澎湖婦女山海知識圖鑑》，並讓阿媽進入學校成為地方知識的老師。' },
  { city: '澎湖縣・西嶼大池', place: '西嶼大池村', name: '大角誌', region: 'islands', year: '2023', status: 'active', access: 'ebook', reading: 'online', publisher: '大角工作室', period: '2023 年起・已出至少 3 期', url: 'https://books.google.com/books/about/%E5%A4%A7%E8%A7%92%E8%AA%8C%E4%B8%89%E8%99%9F%E5%88%8A%EF%BC%BF%E6%91%A9%E7%99%BB%E5%92%96%E5%95%A1%E5%BB%B3.html?hl=zh-TW&id=NRFzEQAAQBAJ', description: '由西嶼大池返鄉姊妹採集村落人事、廟宇、農漁生活與移居故事；第三期以「摩登咖啡廳」追索大池人在外開店的地方網絡。' },
  { city: '澎湖縣', place: '澎湖全區', name: '小鯖誌', region: 'islands', year: '2023' },
  { city: '澎湖縣', place: '澎湖縣', name: '澎博通訊－食飽未', region: 'islands', status: 'active', access: 'pdf', reading: 'online', publisher: '澎湖生活博物館', period: '館刊', url: 'https://www.penghu.gov.tw/phlm/ch/home.jsp?act=view&dataserno=202602100002&id=22', description: '由澎湖生活博物館持續發行的館刊，以飲食、島嶼生活與文化資產為主題；官方出版頁提供整期附件。' },

  { city: '跨縣市', place: '臺南、臺中與其他城市', name: 'REWIND 倒帶城市年刊', region: 'islands', year: '2020', status: 'ceased', publisher: '極誌文化 SIJIMA／張瑜庭', period: '旅遊年刊・臺中刊募資提前停止', url: 'https://www.zeczec.com/projects/rewin', description: '以「一本專心做一座城市」為概念，從倒帶臺南延伸到臺中，透過散策地圖、飲食、人物與城市碎片回看地方從過去到現在的轉變。' },
  { city: '跨縣市', place: '大稻埕、新莊、屏東等地', name: '島生誌', region: 'islands', year: '2022', status: 'active', publisher: '社團法人台灣島嶼文化共生協會', period: '地方主題系列刊物', url: 'https://www.hopeintw.org.tw/video', description: '從大稻埕起步，逐輯以人物、飲食、野菜、潮間帶與地方記憶進入不同城市；協會頁面整理《島生誌》影音與各期延伸內容。' },
];

type VerifiedPaperMapSeed = PaperMapSeed & {
  publisher: string;
  url: string;
  description: string;
};

const verifiedPaperMapSeeds = paperMapSeeds.filter((seed): seed is VerifiedPaperMapSeed =>
  Boolean(seed.publisher && seed.url && seed.description),
);

export const paperMapPublications: LocalPublication[] = verifiedPaperMapSeeds.map((seed) => ({
  city: seed.city,
  name: seed.name,
  region: seed.region,
  status: seed.status ?? 'irregular',
  access: seed.access ?? 'catalog',
  reading: seed.reading ?? 'reference',
  publisher: seed.publisher,
  period: seed.period ?? `${seed.year} 年出版`,
  url: seed.url,
  description: seed.description,
  note: seed.note ?? '',
  issues: seed.issues ?? [],
}));
