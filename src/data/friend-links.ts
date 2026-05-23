export type Locale = 'zh-cn' | 'zh-tw' | 'en';

export interface LocalizedText {
  'zh-cn': string;
  'zh-tw': string;
  en: string;
}

export interface FriendLink {
  title: LocalizedText;
  url: string;
  description: LocalizedText;
}

export interface FriendLinkCategory {
  id: string;
  icon: string;
  title: LocalizedText;
  subtitle: string;
  accent: 'mint' | 'peach' | 'pink' | 'aqua' | 'purple' | 'cream';
  links: FriendLink[];
}

const text = (zhCn: string, zhTw: string, en: string): LocalizedText => ({
  'zh-cn': zhCn,
  'zh-tw': zhTw,
  en,
});

export const getText = (value: LocalizedText, locale: Locale) => value[locale];

export const friendLinkCategories: FriendLinkCategory[] = [
  {
    id: 'film',
    icon: '🎞️',
    title: text('影像、纪录片与影评档案', '影像、紀錄片與影評檔案', 'Film, Documentary & Criticism'),
    subtitle: 'film / documentary / criticism',
    accent: 'mint',
    links: [
      { title: text('国家电影及视听文化中心 (TFAI)', '國家電影及視聽文化中心 (TFAI)', 'Taiwan Film and Audiovisual Institute (TFAI)'), url: 'https://www.tfai.org.tw/', description: text('台湾电影、电视、广播资料的核心机构。', '臺灣電影、電視、廣播資料的核心機構。', 'A core institution for Taiwan film, television, radio, and audiovisual archives.') },
      { title: text('台湾电影数位修复计划', '臺灣電影數位修復計劃', 'Taiwan Cinema Digital Restoration Project'), url: 'https://tcdrp.tfi.org.tw/', description: text('记录台湾老电影抢救与修复过程的专业数据库。', '記錄臺灣老電影搶救與修復過程的專業資料庫。', 'A database tracing the rescue and restoration of classic Taiwanese films.') },
      { title: text('TIDF 台湾国际纪录片影展', 'TIDF 臺灣國際紀錄片影展', 'TIDF Taiwan International Documentary Festival'), url: 'https://www.tidf.org.tw/', description: text('历届入围名单、节目导读与纪录片研究入口。', '歷屆入圍名單、節目導讀與紀錄片研究入口。', 'Festival lineups, program notes, and a useful doorway into documentary research.') },
      { title: text('TaiwanDocs 台湾纪录片资料库', 'TaiwanDocs 臺灣紀錄片資料庫', 'TaiwanDocs'), url: 'https://docs.tfi.org.tw/', description: text('专门收录台湾纪录片信息的双语资料库。', '專門收錄臺灣紀錄片資訊的雙語資料庫。', 'A bilingual database dedicated to Taiwanese documentary films.') },
      { title: text('Cinephilia 迷影网', 'Cinephilia 迷影網', 'Cinephilia'), url: 'https://cinephilia.net/', description: text('深度电影评论、全球影展动态与导演访谈。', '深度電影評論、全球影展動態與導演訪談。', 'Film criticism, festival coverage, and interviews with filmmakers.') },
      { title: text('幕迷影评', '幕迷影評', 'Movier Film Review'), url: 'https://www.movier.tw/', description: text('台湾活跃的影评人社群与评论库。', '臺灣活躍的影評人社群與評論庫。', 'An active film criticism community and review archive in Taiwan.') },
      { title: text('放映周报 (Funscreen)', '放映週報 (Funscreen)', 'Funscreen'), url: 'https://funscreen.tfai.org.tw/', description: text('长期更新的深度影评及产业分析电子报。', '長期更新的深度影評及產業分析電子報。', 'A long-running publication for film essays and industry analysis.') },
      { title: text('Cinespot 动映地带', 'Cinespot 動映地帶', 'Cinespot'), url: 'https://www.cinespot.com/', description: text('香港电影资讯、专题与深度评论网站。', '香港電影資訊、專題與深度評論網站。', 'A Hong Kong film site with news, features, and long-form criticism.') },
      { title: text('台北市电影委员会', '台北市電影委員會', 'Taipei Film Commission'), url: 'https://www.filmcommission.taipei/', description: text('台北取景、影视拍摄与城市影像资源。', '台北取景、影視拍攝與城市影像資源。', 'Resources around filming locations, production support, and Taipei on screen.') },
      { title: text('认识电影 (EduMovie)', '認識電影 (EduMovie)', 'EduMovie'), url: 'https://edumovie-tfai.org.tw/', description: text('TFAI 建立的电影教育库，含教材与影像分析。', 'TFAI 建立的電影教育庫，含教材與影像分析。', 'A film education library with teaching materials and image analysis.') },
    ],
  },
  {
    id: 'zines',
    icon: '📓',
    title: text('独立出版、Zine 与另类漫画', '獨立出版、Zine 與另類漫畫', 'Zines & Alternative Comics'),
    subtitle: 'zine / small press / comics',
    accent: 'peach',
    links: [
      { title: text('ZINE COOP (香港)', 'ZINE COOP（香港）', 'ZINE COOP Hong Kong'), url: 'https://zinecoop.org/', description: text('链接香港独立出版人、推广 Zine 文化的平台。', '連結香港獨立出版人、推廣 Zine 文化的平台。', 'A Hong Kong platform connecting independent publishers and zine makers.') },
      { title: text('MangaSick', 'MangaSick', 'MangaSick'), url: 'https://mangasick.blogspot.com/', description: text('台湾另类漫画与 Zine 推广重镇。', '臺灣另類漫畫與 Zine 推廣重鎮。', 'A key Taiwan node for alternative comics and zine culture.') },
      { title: text('黑书众 (Black Book Assembly)', '黑書眾 (Black Book Assembly)', 'Black Book Assembly'), url: 'https://blackbook.page/', description: text('关于独立出版与社会实践的跨地域协作项目。', '關於獨立出版與社會實踐的跨地域協作項目。', 'A translocal project linking independent publishing and social practice.') },
      { title: text('Small Science', 'Small Science', 'Small Science'), url: 'https://asyang.wixsite.com/small-science', description: text('跨领域的小志实验，连接科学、经验与艺术。', '跨領域的小誌實驗，連接科學、經驗與藝術。', 'A small-press experiment across science, experience, and art.') },
      { title: text('10zine', '10zine', '10zine'), url: 'http://10zine.org/', description: text('专注 Zine 创作精神的展示与交流。', '專注 Zine 創作精神的展示與交流。', 'A showcase and exchange space for zine-making practices.') },
      { title: text('Loneliness Books', 'Loneliness Books', 'Loneliness Books'), url: 'https://qpptokyo.com/', description: text('关注亚洲酷儿与独立出版的东京窗口。', '關注亞洲酷兒與獨立出版的東京窗口。', 'A Tokyo-based window into Asian queer culture and independent publishing.') },
      { title: text('Zine Archive', 'Zine Archive', 'Zine Archive'), url: 'https://zinearchive.org/', description: text('独立刊物影像记录与数字保存计划。', '獨立刊物影像記錄與數位保存計劃。', 'A digital preservation project for independent publications.') },
    ],
  },
  {
    id: 'journals',
    icon: '📚',
    title: text('文学、社会科学学报与研究', '文學、社會科學學報與研究', 'Journals & Scholarly Research'),
    subtitle: 'journals / theory / research',
    accent: 'pink',
    links: [
      { title: text('文化研究 ROUTER', '文化研究 ROUTER', 'Router: A Journal of Cultural Studies'), url: 'http://routerjcs.nctu.edu.tw/', description: text('台湾文化研究学会主办的重要文化研究学报。', '臺灣文化研究學會主辦的重要文化研究學報。', 'An important cultural studies journal published in Taiwan.') },
      { title: text('中外文学', '中外文學', 'Chung Wai Literary Quarterly'), url: 'https://www.chungwai.org/', description: text('台湾具代表性的文学理论与批评期刊。', '臺灣具代表性的文學理論與批評期刊。', 'A major Taiwanese journal for literary theory and criticism.') },
      { title: text('新闻学研究 (MCR)', '新聞學研究 (MCR)', 'Mass Communication Research'), url: 'https://mcr.nccu.edu.tw/', description: text('政大传播学院主办的大众传播研究刊物。', '政大傳播學院主辦的大眾傳播研究刊物。', 'A communication studies journal published by National Chengchi University.') },
      { title: text('传播与社会学刊', '傳播與社會學刊', 'Communication and Society'), url: 'http://www.cschinese.com/', description: text('香港中文大学与浸会大学合办的传播学期刊。', '香港中文大學與浸會大學合辦的傳播學期刊。', 'A Chinese-language journal for communication and society studies.') },
      { title: text('二十一世纪 (CUHK)', '二十一世紀 (CUHK)', 'Twenty-First Century'), url: 'http://www.cuhk.edu.hk/ics/21c/', description: text('香港中文大学中国文化研究所主办的思想刊物。', '香港中文大學中國文化研究所主辦的思想刊物。', 'A humanities and ideas journal from CUHK Institute of Chinese Studies.') },
      { title: text('台湾现当代作家研究资料汇编', '臺灣現當代作家研究資料彙編', 'Taiwan Modern Writers Research Archive'), url: 'https://cws.nmtl.gov.tw/', description: text('台湾文学馆建立的作家研究深度档案。', '臺灣文學館建立的作家研究深度檔案。', 'A deep research archive on modern and contemporary Taiwanese writers.') },
      { title: text('社会理论学报', '社會理論學報', 'Journal of Social Theory'), url: 'http://www.shehui.pku.edu.cn/', description: text('涵盖两岸三地社会理论研究的学术入口。', '涵蓋兩岸三地社會理論研究的學術入口。', 'A portal for social theory research across Chinese-speaking contexts.') },
    ],
  },
  {
    id: 'localism',
    icon: '🗺️',
    title: text('地方志、族群文化与历史', '地方誌、族群文化與歷史', 'Localism, Ethnic & Heritage'),
    subtitle: 'local memory / heritage / place',
    accent: 'aqua',
    links: [
      { title: text('薰风', '薰風', 'Kunputw'), url: 'https://www.kunputw.com/', description: text('挖掘台日历史关联与地域文化的深度杂志。', '挖掘台日歷史關聯與地域文化的深度雜誌。', 'A magazine on Taiwan-Japan history, local culture, and memory.') },
      { title: text('苑里掀海风', '苑裡掀海風', 'Hi Homeway'), url: 'https://www.hihomeway.com/', description: text('台湾地方创生与在地报道的代表性案例。', '臺灣地方創生與在地報導的代表性案例。', 'A notable example of local reporting and community-based cultural work.') },
      { title: text('芭乐人类学', '芭樂人類學', 'Guava Anthropology'), url: 'https://guavanthropology.tw/', description: text('将人类学视角带入日常生活的评论站。', '將人類學視角帶入日常生活的評論站。', 'Anthropological writing that brings theory into everyday life.') },
      { title: text('岛内散步', '島內散步', 'Walk in Taiwan'), url: 'https://walkin.tw/', description: text('通过深度导读记录台湾城市与村落变迁。', '透過深度導讀記錄臺灣城市與村落變遷。', 'Guided walks and essays on urban and rural change in Taiwan.') },
      { title: text('眼底城事', '眼底城事', 'Eyes on Place'), url: 'https://eyesonplace.net/', description: text('关注城市空间、社区与在地记忆的协作平台。', '關注城市空間、社區與在地記憶的協作平台。', 'A collaborative platform about urban space, community, and local memory.') },
      { title: text('国家文化记忆库', '國家文化記憶庫', 'Taiwan Cultural Memory Bank'), url: 'https://memory.culture.tw/', description: text('文化部主持、集成台湾民间记忆的大型数据库。', '文化部主持、集成臺灣民間記憶的大型資料庫。', 'A large public archive collecting cultural memories across Taiwan.') },
    ],
  },
  {
    id: 'queer',
    icon: '🌈',
    title: text('性别研究与 LGBTQ+ 资源', '性別研究與 LGBTQ+ 資源', 'Gender & Queer Studies'),
    subtitle: 'gender / queer / movement history',
    accent: 'purple',
    links: [
      { title: text('性/别研究室', '性/別研究室', 'NCU Center for the Study of Sexualities'), url: 'https://sex.ncu.edu.tw/', description: text('台湾性别研究先驱，保存丰富论文与期刊资源。', '臺灣性別研究先驅，保存豐富論文與期刊資源。', 'A pioneering Taiwan site for gender and sexuality research materials.') },
      { title: text('台湾同志咨询热线', '台灣同志諮詢熱線', 'Taiwan Tongzhi Hotline Association'), url: 'https://hotline.org.tw/', description: text('服务站，也是台湾同志运动史的重要入口。', '服務站，也是台灣同志運動史的重要入口。', 'A support organization and a living archive of Taiwan LGBTQ+ movement history.') },
      { title: text('G 点电视 (GDOTTV)', 'G 點電視 (GDOTTV)', 'GDOTTV'), url: 'https://gdottv.com/', description: text('香港性少数社群网络电视台，保存大量影像资料。', '香港性少數社群網絡電視台，保存大量影像資料。', 'Hong Kong LGBTQ+ web television and community video archive.') },
      { title: text('LalaTai 拉拉台', 'LalaTai 拉拉台', 'LalaTai'), url: 'https://lalatai.com/', description: text('专注女性酷儿内容的媒体与资源平台。', '專注女性酷兒內容的媒體與資源平台。', 'A media and resource platform focused on lesbian and queer women’s culture.') },
      { title: text('女学学志', '女學學誌', "Journal of Women's and Gender Studies"), url: 'https://jwgs.psc.ntu.edu.tw/', description: text('台大出版，聚焦妇女与性别研究。', '台大出版，聚焦婦女與性別研究。', 'An NTU journal focused on women’s and gender studies.') },
    ],
  },
  {
    id: 'art',
    icon: '🎨',
    title: text('艺术、设计与数位文化', '藝術、設計與數位文化', 'Art, Design & Digital Culture'),
    subtitle: 'art / design / digital culture',
    accent: 'cream',
    links: [
      { title: text('台湾当代艺术资料库 (TCAA)', '台灣當代藝術資料庫 (TCAA)', 'Taiwan Contemporary Art Archive'), url: 'https://tcaaarchive.org/', description: text('台湾当代艺术作品、艺术家与评论在线档案。', '台灣當代藝術作品、藝術家與評論線上檔案。', 'An online archive for contemporary art, artists, and criticism in Taiwan.') },
      { title: text('数位艺术中心 (DAC)', '數位藝術中心 (DAC)', 'Digital Art Center Taipei'), url: 'https://dac.tw/', description: text('记录台湾数字艺术与科技艺术创作。', '記錄台灣數位藝術與科技藝術創作。', 'A platform documenting digital art and technology-based art in Taiwan.') },
      { title: text('IDEA Magazine', 'IDEA Magazine', 'IDEA Magazine'), url: 'https://www.idea-mag.com/en/', description: text('日本平面设计与字体研究的重要参考。', '日本平面設計與字體研究的重要參考。', 'A key reference for Japanese and Asian graphic design and typography.') },
      { title: text('MOT TIMES 明日志', 'MOT TIMES 明日誌', 'MOT TIMES'), url: 'http://www.mottimes.com/', description: text('设计、建筑与生活美学观察媒体。', '設計、建築與生活美學觀察媒體。', 'A media site for design, architecture, and everyday aesthetics.') },
      { title: text('ARThon 松学校', 'ARThon 松學校', 'ARThon'), url: 'https://arthon.tw/', description: text('关注艺术、科技与跨领域实践。', '關注藝術、科技與跨領域實踐。', 'A platform for art, technology, and interdisciplinary practice.') },
    ],
  },
  {
    id: 'music',
    icon: '🎧',
    title: text('音乐、声响与流行文化档案', '音樂、聲響與流行文化檔案', 'Music, Sound & Pop Culture'),
    subtitle: 'music / sound / pop archives',
    accent: 'mint',
    links: [
      { title: text('台湾流行音乐维基馆', '台灣流行音樂維基館', 'Taiwan Popular Music Wiki'), url: 'http://www.tpmw.org.tw/', description: text('以 Wiki 模式记录歌手、专辑及幕后创作者。', '以 Wiki 模式記錄歌手、專輯及幕後創作者。', 'A wiki-style archive of artists, albums, and music workers in Taiwan.') },
      { title: text('台湾流行音乐资料库', '臺灣流行音樂資料庫', 'Taiwan Popular Music Database'), url: 'https://www.pmdb.org.taipei/', description: text('官方数据库，含唱片封面、歌词与音乐人信息。', '官方資料庫，含唱片封面、歌詞與音樂人資訊。', 'An official database with record covers, lyrics, and music credits.') },
      { title: text('台湾音声一百年', '臺灣音聲一百年', 'One Hundred Years of Taiwan Audio'), url: 'https://audio.nmth.gov.tw/audio', description: text('收藏台湾近百年录音、广播与音乐档案。', '收藏臺灣近百年錄音、廣播與音樂檔案。', 'A historical archive of recordings, radio, and music in Taiwan.') },
      { title: text('香港乐评 HKmc²', '香港樂評 HKmc²', 'HKmc²'), url: 'https://hkmc2.com/', description: text('香港乐坛深度评论与历年乐评选记录。', '香港樂壇深度評論與歷年樂評選記錄。', 'Music criticism and award records from the Hong Kong music scene.') },
      { title: text('Taiwan Beats', 'Taiwan Beats', 'Taiwan Beats'), url: 'https://zh.taiwanbeats.tw/', description: text('向国际推广台湾音乐的平台，含深度专访与趋势分析。', '向國際推廣台灣音樂的平台，含深度專訪與趨勢分析。', 'A platform promoting Taiwanese music internationally through interviews and features.') },
      { title: text('Blow 吹音乐', 'Blow 吹音樂', 'Blow StreetVoice'), url: 'https://blow.streetvoice.com/', description: text('台湾独立音乐报道媒体，关注乐团、创作与音乐祭。', '台灣獨立音樂報導媒體，關注樂團、創作與音樂祭。', 'A major outlet for Taiwan indie music, bands, and festivals.') },
      { title: text('声轨 Sound Traces', '聲軌 Sound Traces', 'Sound Traces'), url: 'https://soundtraces.tw/', description: text('台湾现代声响文化数据库。', '台灣現代聲響文化資料庫。', 'A database for contemporary sound culture in Taiwan.') },
      { title: text('声经络 Sound Meridians', '聲經絡 Sound Meridians', 'Sound Meridians'), url: 'https://soundmeridians.net/', description: text('跨亚洲声音艺术与文化研究平台。', '跨亞洲聲音藝術與文化研究平台。', 'A trans-Asian platform for sound art and sound culture research.') },
      { title: text('大大树音乐图像', '大大樹音樂圖像', 'Trees Music & Art'), url: 'https://www.treesmusic.co/', description: text('世界音乐、跨界创作及文化交流资源站。', '世界音樂、跨界創作及文化交流資源站。', 'A label and resource hub for world music and cultural exchange.') },
      { title: text('客家公共传播基金会', '客家公共傳播基金會', 'Hakka Public Communication Foundation'), url: 'https://www.hpcf.tw/', description: text('台湾客家音乐、传统歌谣与现代创作档案。', '台灣客家音樂、傳統歌謠與現代創作檔案。', 'A source for Hakka music, folk songs, and contemporary cultural production.') },
      { title: text('Irama Nusantara', 'Irama Nusantara', 'Irama Nusantara'), url: 'https://www.iramanusantara.org/', description: text('印尼音乐档案，也是东南亚音乐研究参考标杆。', '印尼音樂檔案，也是東南亞音樂研究參考標竿。', 'An Indonesian music archive and a useful benchmark for Southeast Asian music research.') },
    ],
  },
  {
    id: 'learning',
    icon: '🧭',
    title: text('自学与开放式课程', '自學與開放式課程', 'Open CourseWare & Learning'),
    subtitle: 'open courses / self-learning',
    accent: 'aqua',
    links: [
      { title: text('台大开放式课程', '臺大開放式課程', 'NTU OpenCourseWare'), url: 'http://ocw.aca.ntu.edu.tw/ntu-ocw/', description: text('台湾成熟的高等教育自学资源库。', '臺灣成熟的高等教育自學資源庫。', 'One of Taiwan’s most established higher-education self-learning libraries.') },
      { title: text('政大开放式课程影音网', '政大開放式課程影音網', 'NCCU Open Courses'), url: 'https://ctld.video.nccu.edu.tw/', description: text('以人文、社科与传播课程见长。', '以人文、社科與傳播課程見長。', 'Open course videos with strengths in humanities, social science, and communication.') },
      { title: text('清华大学开放式课程', '清華大學開放式課程', 'NTHU OpenCourseWare'), url: 'https://ocw.nthu.edu.tw/ocw/', description: text('理工、人文与通识教育精品课程。', '理工、人文與通識教育精品課程。', 'Open courses across STEM, humanities, and general education.') },
      { title: text('阳明交大开放式课程', '陽明交大開放式課程', 'NYCU OpenCourseWare'), url: 'https://ocw.nycu.edu.tw/', description: text('跨领域科研与人文社科数字课程。', '跨領域科研與人文社科數位課程。', 'Digital courses spanning research, humanities, and social sciences.') },
      { title: text('北艺大开放式课程平台', '北藝大開放式課程平台', 'TNUA OpenCourseWare'), url: 'https://ocw.media.tnua.edu.tw/', description: text('艺术理论、戏剧、音乐与美术专业课程。', '藝術理論、戲劇、音樂與美術專業課程。', 'Specialized open courses in art theory, theatre, music, and fine art.') },
      { title: text('台湾开放式课程联盟', '台灣開放式課程聯盟', 'Taiwan OpenCourseWare Consortium'), url: 'https://www.tocec.org.tw/', description: text('整合台湾多所大学开放课程的综合门户。', '整合台灣多所大學開放課程的綜合入口。', 'A portal gathering open courses from universities across Taiwan.') },
      { title: text('中华开放教育平台 OpenEdu', '中華開放教育平台 OpenEdu', 'OpenEdu Taiwan'), url: 'https://www.openedu.tw/', description: text('集合多方资源的大型公开在线课程平台。', '集合多方資源的大型公開線上課程平台。', 'A large MOOC-style platform bringing together open education resources.') },
    ],
  },
];

export const friendLinkCount = friendLinkCategories.reduce(
  (sum, category) => sum + category.links.length,
  0,
);
