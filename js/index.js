let about = '熱愛閱讀、思考、分析，與各種人事物交流。因協助友人的畢業作品而接觸前端，至此對其產生濃厚興趣以及嚮往。具備獨立完成專案能力，且擁有串接多種API、多人協作開發等經驗。'
let contact = [
  {title:'姓名',content:'廖士豪'},
  {title:'手機',content:'0976656913'},
  {title:'Email',content:'gww680923@gmail.com'},
]
let work = [
  {title:'第一銀行-實習生',content:'協助主管完成指派專案，並蒐集產業以及市場資料及撰寫相關報告'},
  {title:'安聯人壽-業務主任',content:'主要負責團隊管理、業務拓展，並善用資源及團隊執行力提升業務績效'},
]
let web = [
  {title:'政府職訓',content:'為期半年，共900小時專業訓練，擁有獨立開發、前端頁面切版、串接API等經驗'},
  {title:'青年署比賽',content:'擔任前端及企劃書撰寫等職務，獲得比賽佳作'},
]
let layout = ['HTML/CSS 規劃響應式版面','利用Less簡化代碼，降低維護成本','運用Boostrap快速搭建形象網站','能解決跨瀏覽器的相容性']
let grammar = ['熟悉Javascript語法，建構動態網頁','利用Jquery整合第三方插件','具有串接Google Service 及其他API等經驗','利用Vue-cli創建選項式組件應用']
let other = ['利用Git、Github等工具進行多人協作開發','運用Adobe XD、PS、AI等工具進行UI/UX設計','dreamweaver開發經驗及證照','Wordpress開發經驗']
let portfolio = [
  {name:'Old Resume',tro:'主要為展示其他作品集個人資料(履歷資料)的形象網站',link:'https://hao1008.github.io/HAO-Portfolio/',menu:['animate.js','lottie','Less'],src:'./img/profolio/04-resume.jpg',link:'https://hao1008.github.io/HAO-Portfolio/'},
  {name:'covid-19',tro:'透過串接API，實現將數據以視覺方式呈現',link:'https://hao1008.github.io/COVID-19/',menu:['Fetch','chart.js','Lottie'],src:'./img/profolio/01-covid19.jpg',link:'https://hao1008.github.io/COVID-19/'},
  {name:'OnoSteak',tro:'利用Bootstrap建置的靜態形象網站',link:'https://hao1008.github.io/HAO-Portfolio/',menu:['Google Map API','Bootstrap','RWD'],src:'./img/profolio/02-OnoSteak.jpg',link:'https://hao1008.github.io/OnoSteak/'},
  {name:'todolist',tro:'利用Vue cli 所建置的組件式應用案例',link:'https://github.com/HAO1008/todolist',menu:['Vue3','Vue-cli','npm'],src:'./img/profolio/03-todolist.jpg',link:'https://github.com/HAO1008/todolist'},
]

const app = Vue.createApp({
  data(){
    return{
      experience:1,
      index:0,
      // 菜單切換
      resumeActive:true,
      skillActive:false,
      portfolioActive:false,
      // resume切換
      aboutTest:true,
      workTest:false,
      webTest:false,
      // button切換
      btn:1,
      // portfolio背景切換
      src:'./img/profolio/02-OnoSteak.jpg',
      // 資料物件
      about:about,
      contact:contact,
      work:work,
      web:web,
      layout:layout,
      grammar:grammar,
      other:other,
      portfolio:portfolio,
    }
  },
  methods:{
    webBtn(){
      this.experience = 0
    },
    workBtn(){
      this.experience = 1
    },
    // 切換菜單
    plusResumeActive(){
      this.resumeActive = true
      this.skillActive = false
      this.portfolioActive = false
    },
    plusSkillActive(){
      this.resumeActive = false
      this.skillActive = true
      this.portfolioActive = false
    },
    plusPortfolioActive(){
      this.resumeActive = false
      this.skillActive = false
      this.portfolioActive = true
    },
    // 切換履歷
    changeAbout(){
      this.aboutTest = true;
      this.workTest = false;
      this.webTest = false;
      this.btn = 1
    },
    changeWork(){
      this.aboutTest = false;
      this.workTest = true;
      this.webTest = false;
      this.btn = 2
    },
    changeWeb(){
      this.aboutTest = false;
      this.workTest = false;
      this.webTest = true;
      this.btn = 3
    },
    // 作品頁面輪播
    changeCarousel(change){
      this.index = (this.index + change +this.total) % this.total
    },
  },
  computed:{
    that(){
      return this.portfolio[this.index]
    },
    total(){
      return this.portfolio.length
    }
  }
})
app.mount('#app')











// lottie
lottie.loadAnimation({
  path:'./json/html.json',   //json文件路径
  loop:true,
  autoplay:true,
  renderer:'canvas',  //渲染方式，有"html"、"canvas"和"svg"三种
  container:document.getElementById('animation')
});
lottie.loadAnimation({
  path:'./json/bulbhead.json',   //json文件路径
  loop:true,
  autoplay:true,
  renderer:'svg',  //渲染方式，有"html"、"canvas"和"svg"三种
  container:document.getElementById('animationn')
});
lottie.loadAnimation({
  path:'./json/git.json',   //json文件路径
  loop:true,
  autoplay:true,
  renderer:'svg',  //渲染方式，有"html"、"canvas"和"svg"三种
  container:document.getElementById('animationnn')
});