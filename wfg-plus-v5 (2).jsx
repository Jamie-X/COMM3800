// React hooks available globally via window (see index.html shim)

const S = { SPLASH:"splash",LOGIN:"login",OB1:"ob1",OB2:"ob2",OB3:"ob3",PERM:"perm",HOME:"home",MAP:"map",CHECKIN:"checkin",SUCCESS:"success",LB:"lb",FRIENDS:"friends",HIST:"hist",SETTINGS:"settings",BADGES:"badges",REDEEM:"redeem",SCHEDULE:"schedule" };

// ═══ i18n ═══
const TR = {
  welc:{en:"Welcome Back",tc:"歡迎回來",sc:"欢迎回来"},
  peCredits:{en:"PE Credit Points",tc:"體育學分積分",sc:"体育学分积分"},
  rank:{en:"Rank",tc:"排名",sc:"排名"},
  ptsTo:{en:"pts to complete PE",tc:"分即可完成體育要求",sc:"分即可完成体育要求"},
  dailyGoal:{en:"Daily Goal",tc:"每日目標",sc:"每日目标"},
  habit:{en:"Habit",tc:"習慣",sc:"习惯"},
  streak:{en:"Streak",tc:"連續",sc:"连续"},
  steps:{en:"Steps",tc:"步數",sc:"步数"},
  dist:{en:"Distance",tc:"距離",sc:"距离"},
  checkins:{en:"Check-ins",tc:"打卡",sc:"打卡"},
  cal:{en:"Calories",tc:"卡路里",sc:"卡路里"},
  nearby:{en:"Nearby",tc:"附近",sc:"附近"},
  spots:{en:"spots",tc:"個地點",sc:"个地点"},
  history:{en:"History",tc:"歷史",sc:"历史"},
  thisWeek:{en:"this week",tc:"本週",sc:"本周"},
  co2:{en:"CO₂ saved",tc:"CO₂ 已節省",sc:"CO₂ 已节省"},
  vsShuttle:{en:"vs shuttle",tc:"相比穿梭巴士",sc:"相比穿梭巴士"},
  recent:{en:"Recent",tc:"最近",sc:"最近"},
  campusMap:{en:"Campus Map",tc:"校園地圖",sc:"校园地图"},
  checkIn:{en:"Check In",tc:"打卡",sc:"打卡"},
  verifying:{en:"Verifying...",tc:"驗證中...",sc:"验证中..."},
  checkedIn:{en:"Checked in!",tc:"打卡成功！",sc:"打卡成功！"},
  verified:{en:"verified",tc:"已驗證",sc:"已验证"},
  dashboard:{en:"Dashboard",tc:"主頁",sc:"主页"},
  returning:{en:"Returning automatically...",tc:"自動返回中...",sc:"自动返回中..."},
  leaderboard:{en:"Leaderboard",tc:"排行榜",sc:"排行榜"},
  individual:{en:"Individual",tc:"個人",sc:"个人"},
  collegeCup:{en:"College Cup",tc:"書院盃",sc:"书院杯"},
  walkers:{en:"walkers",tc:"步行者",sc:"步行者"},
  profile:{en:"Profile",tc:"個人資料",sc:"个人资料"},
  badges:{en:"Badges",tc:"徽章",sc:"徽章"},
  appearance:{en:"Appearance",tc:"外觀",sc:"外观"},
  darkMode:{en:"Dark Mode",tc:"深色模式",sc:"深色模式"},
  darkOn:{en:"On — easy on the eyes",tc:"開啟 — 護眼模式",sc:"开启 — 护眼模式"},
  darkOff:{en:"Off — light and bright",tc:"關閉 — 明亮模式",sc:"关闭 — 明亮模式"},
  healthSync:{en:"Health Sync",tc:"健康同步",sc:"健康同步"},
  connected:{en:"Connected",tc:"已連接",sc:"已连接"},
  notConn:{en:"Not connected",tc:"未連接",sc:"未连接"},
  connect:{en:"Connect",tc:"連接",sc:"连接"},
  weekly:{en:"Weekly",tc:"每週",sc:"每周"},
  settings:{en:"Settings",tc:"設定",sc:"设置"},
  notif:{en:"Notifications",tc:"通知",sc:"通知"},
  location:{en:"Location",tc:"位置",sc:"位置"},
  privacy:{en:"Privacy",tc:"隱私",sc:"隐私"},
  export:{en:"Export",tc:"匯出",sc:"导出"},
  help:{en:"Help",tc:"幫助",sc:"帮助"},
  language:{en:"Language",tc:"語言",sc:"语言"},
  friends:{en:"Friends",tc:"朋友",sc:"朋友"},
  addFriend:{en:"Add Friend",tc:"添加朋友",sc:"添加朋友"},
  friendLb:{en:"Friend Ranking",tc:"好友排名",sc:"好友排名"},
  allFriends:{en:"All Friends",tc:"全部好友",sc:"全部好友"},
  searchFriend:{en:"Search by Student ID...",tc:"以學號搜尋...",sc:"以学号搜索..."},
  sent:{en:"Sent",tc:"已發送",sc:"已发送"},
  add:{en:"Add",tc:"添加",sc:"添加"},
  redeem:{en:"Redeem",tc:"兌換",sc:"兑换"},
  rewards:{en:"Rewards",tc:"獎勵",sc:"奖励"},
  yourPts:{en:"Your Points",tc:"你的積分",sc:"你的积分"},
  redeemBtn:{en:"Redeem",tc:"兌換",sc:"兑换"},
  redeemed:{en:"Redeemed!",tc:"已兌換！",sc:"已兑换！"},
  syncing:{en:"Syncing...",tc:"同步中...",sc:"同步中..."},
  done:{en:"Done",tc:"完成",sc:"完成"},
  doing:{en:"Doing",tc:"進行中",sc:"进行中"},
  locked:{en:"Locked",tc:"未解鎖",sc:"未解锁"},
  signIn:{en:"Sign In",tc:"登入",sc:"登录"},
  skip:{en:"Skip",tc:"跳過",sc:"跳过"},
  next:{en:"Next",tc:"下一步",sc:"下一步"},
  getStarted:{en:"Get Started",tc:"開始使用",sc:"开始使用"},
  almostThere:{en:"Almost there",tc:"快完成了",sc:"快完成了"},
  enableBoth:{en:"Enable both",tc:"啟用兩者",sc:"启用两者"},
  cont:{en:"Continue",tc:"繼續",sc:"继续"},
  to10k:{en:"to 10k",tc:"至 10k",sc:"至 10k"},
  week:{en:"Week",tc:"本週",sc:"本周"},
  pts:{en:"Points",tc:"積分",sc:"积分"},
  schedule:{en:"Schedule",tc:"時間表",sc:"时间表"},
  classes:{en:"Classes",tc:"課堂",sc:"课堂"},
  bookings:{en:"Bookings",tc:"預訂",sc:"预订"},
  bookFacility:{en:"Book Facility",tc:"預訂設施",sc:"预订设施"},
  book:{en:"Book",tc:"預訂",sc:"预订"},
  booked:{en:"Booked",tc:"已預訂",sc:"已预订"},
  peClass:{en:"PE Class",tc:"體育課",sc:"体育课"},
  facility:{en:"Facility",tc:"設施",sc:"设施"},
  upcoming:{en:"Upcoming",tc:"即將到來",sc:"即将到来"},
  today:{en:"Today",tc:"今天",sc:"今天"},
  tomorrow:{en:"Tomorrow",tc:"明天",sc:"明天"},
  notifyOn:{en:"Notifications on",tc:"已開啟通知",sc:"已开启通知"},
  available:{en:"Available",tc:"可用",sc:"可用"},
  slots:{en:"slots left",tc:"個名額",sc:"个名额"},
  inCampus:{en:"In-Campus",tc:"校內",sc:"校内"},
  offCampus:{en:"Off-Campus",tc:"校外",sc:"校外"},
  restaurant:{en:"Restaurants",tc:"餐廳",sc:"餐厅"},
  canteen:{en:"Canteen",tc:"飯堂",sc:"饭堂"},
  fitness:{en:"Fitness",tc:"健身",sc:"健身"},
  merch:{en:"Merch",tc:"商品",sc:"商品"},
};

// ═══ PALETTES ═══
const LIGHT = {bg:"#D5E3B3",bgO:"#C3D49C",card:"#EDF2DE",cardDk:"#1C1C1E",green:"#6B8F3C",gB:"#8DB255",gP:"#E2EDCA",text:"#1C1C1E",tS:"#6B7A54",tT:"#9BAA82",wh:"#FFFFFF",bor:"#C3D49C",acc:"#4A6B20",or:"#E8943A",gold:"#D4A520",red:"#C0392B",blue:"#3A7BD5",mapBg:"#E2EDCA",sT:"#1C1C1E"};
const DARK = {bg:"#121A12",bgO:"#0A120A",card:"#1E2A1E",cardDk:"#C8E6A0",green:"#8DB255",gB:"#A8CC6A",gP:"#1E2A1E",text:"#E8F0DA",tS:"#9BAA82",tT:"#5A6B4A",wh:"#E8F0DA",bor:"#2A3A2A",acc:"#A8CC6A",or:"#FFB347",gold:"#FFD700",red:"#FF6B6B",blue:"#64B5F6",mapBg:"#1A261A",sT:"#E8F0DA"};

// ═══ DATA ═══
const CPS=[{id:1,name:"University Station",type:"transit",pts:20,elev:"32m"},{id:2,name:"Chung Chi College",type:"college",pts:25,elev:"35m"},{id:3,name:"Lake ad Excellentiam",type:"scenic",pts:30,elev:"33m"},{id:4,name:"Sports Centre",type:"facility",pts:25,elev:"42m"},{id:5,name:"University Library",type:"academic",pts:30,elev:"68m"},{id:6,name:"Science Centre",type:"academic",pts:30,elev:"72m"},{id:7,name:"Shaw College",type:"college",pts:35,elev:"85m"},{id:8,name:"S.H. Ho College",type:"college",pts:30,elev:"55m"},{id:9,name:"New Asia College",type:"college",pts:45,elev:"120m"},{id:10,name:"United College",type:"college",pts:40,elev:"95m"},{id:11,name:"Morningside College",type:"college",pts:45,elev:"130m"},{id:12,name:"Wu Yee Sun College",type:"college",pts:45,elev:"128m"}];
const CP_POS={1:{x:170,y:460},2:{x:105,y:400},3:{x:80,y:375},4:{x:200,y:385},5:{x:175,y:290},6:{x:152,y:265},7:{x:260,y:325},8:{x:218,y:360},9:{x:168,y:145},10:{x:200,y:195},11:{x:248,y:115},12:{x:275,y:145}};
const ROUTES=[{d:"M170 460Q145 440 130 420Q115 410 105 400"},{d:"M170 460Q185 440 195 420Q200 400 200 385"},{d:"M105 400Q95 390 80 375"},{d:"M200 385Q198 350 190 320Q185 305 175 290"},{d:"M175 290Q165 278 152 265"},{d:"M175 290Q180 255 185 230Q190 215 200 195"},{d:"M152 265Q155 220 160 185Q165 165 168 145"},{d:"M168 145Q195 132 220 122Q235 118 248 115"},{d:"M248 115Q260 125 275 145"},{d:"M200 195Q218 168 235 145Q242 130 248 115"}];
const LBD=[{r:1,name:"Chan Wing Yan",col:"Shaw",pts:2840},{r:2,name:"Li Jia Hao",col:"United",pts:2710},{r:3,name:"Wong Mei Ling",col:"Chung Chi",pts:2560},{r:4,name:"Zhang Wei",col:"New Asia",pts:2430},{r:5,name:"Lam Ka Yi",col:"Morningside",pts:2290},{r:6,name:"You",col:"Shaw",pts:2180,me:true},{r:7,name:"Ho Siu Ming",col:"S.H. Ho",pts:2050}];
const COLD=[{r:1,name:"Shaw",pts:18420,n:312},{r:2,name:"United",pts:17890,n:298},{r:3,name:"Chung Chi",pts:16750,n:345},{r:4,name:"New Asia",pts:15920,n:267},{r:5,name:"Morningside",pts:14300,n:189}];
const HD=[{date:"Today",time:"14:32",cp:"University Library",pts:30,type:"academic"},{date:"Today",time:"10:15",cp:"University Station",pts:20,type:"transit"},{date:"Yesterday",time:"16:48",cp:"Sports Centre",pts:25,type:"facility"},{date:"Yesterday",time:"09:30",cp:"Science Centre",pts:30,type:"academic"},{date:"Mar 22",time:"15:12",cp:"Shaw College",pts:35,type:"college"},{date:"Mar 22",time:"11:05",cp:"Lake ad Excellentiam",pts:30,type:"scenic"},{date:"Mar 21",time:"13:40",cp:"New Asia College",pts:45,type:"college"}];
const FRIENDS_DATA=[{id:"f1",name:"Cheung Ka Long",sid:"s1234601",col:"Shaw",pts:2650,added:true},{id:"f2",name:"Liu Mei Xin",sid:"s1234602",col:"Chung Chi",pts:2420,added:true},{id:"f3",name:"Tam Hoi Yin",sid:"s1234603",col:"United",pts:2180,added:true},{id:"f4",name:"Wang Jia Yi",sid:"s1234604",col:"New Asia",pts:1950,added:true},{id:"f5",name:"Lee Siu Wai",sid:"s1234605",col:"Shaw",pts:1720,added:true}];
const SEARCH_RESULTS=[{id:"s1",name:"Zhou Xiao Ming",sid:"s1234610",col:"Morningside"},{id:"s2",name:"Ng Ka Man",sid:"s1234611",col:"S.H. Ho"}];
const REWARDS=[
  // In-campus canteens
  {id:"r1",name:"Canteen $10 Voucher",desc:"Any CUHK canteen",cost:500,cat:"canteen",loc:"in"},
  {id:"r2",name:"Pacific Coffee $15",desc:"On-campus branches",cost:450,cat:"canteen",loc:"in"},
  {id:"r6",name:"Canteen $25 Meal Set",desc:"UC or NA canteen",cost:1000,cat:"canteen",loc:"in"},
  {id:"r7",name:"Bean Sprout $20 Voucher",desc:"Healthy options · Chung Chi",cost:700,cat:"canteen",loc:"in"},
  // Off-campus restaurants
  {id:"r8",name:"Starbucks $30 Voucher",desc:"Sha Tin / Tai Po branches",cost:900,cat:"restaurant",loc:"off"},
  {id:"r9",name:"MX $25 Meal Coupon",desc:"Hong Kong-wide",cost:800,cat:"restaurant",loc:"off"},
  {id:"r10",name:"Tsui Wah 10% Off",desc:"Near University MTR",cost:600,cat:"restaurant",loc:"off"},
  {id:"r11",name:"Pizza Hut $50 Off",desc:"Min spend $200",cost:1200,cat:"restaurant",loc:"off"},
  // Fitness
  {id:"r4",name:"Gym Day Pass",desc:"Sports Centre entry",cost:600,cat:"fitness",loc:"in"},
  {id:"r12",name:"Yoga Class Pass",desc:"PE dept class",cost:500,cat:"fitness",loc:"in"},
  // Merch & campus
  {id:"r3",name:"Sports Towel",desc:"Official CUHK PE towel",cost:800,cat:"merch",loc:"in"},
  {id:"r5",name:"Library Fee Waiver",desc:"One-time waiver",cost:400,cat:"campus",loc:"in"}
];

// Schedule & booking data
const PE_CLASSES=[
  {id:"c1",title:"PE 1001 - Fitness Walking",loc:"Sports Centre Room 3",date:"Today",time:"14:30 - 16:00",day:"Mon",instructor:"Dr. Wong",notify:true},
  {id:"c2",title:"PE 1002 - Hiking Skills",loc:"Adam Schall Building",date:"Tomorrow",time:"10:00 - 11:30",day:"Tue",instructor:"Mr. Cheung",notify:true},
  {id:"c3",title:"PE 1001 - Fitness Walking",loc:"Sports Centre Room 3",date:"Thu",time:"14:30 - 16:00",day:"Thu",instructor:"Dr. Wong",notify:false},
];
const FACILITIES=[
  {id:"f1",name:"Fitness Gym",loc:"Sports Centre · 2F",slots:8,cap:15,cat:"gym",nextSlot:"15:00",cost:0},
  {id:"f2",name:"Swimming Pool",loc:"Sports Centre · 1F",slots:3,cap:30,cat:"pool",nextSlot:"16:30",cost:0},
  {id:"f3",name:"Tennis Court A",loc:"University Sports Centre",slots:1,cap:4,cat:"court",nextSlot:"17:00",cost:50},
  {id:"f4",name:"Yoga Studio",loc:"Sports Centre · 3F",slots:5,cap:12,cat:"studio",nextSlot:"18:00",cost:30},
  {id:"f5",name:"Basketball Court",loc:"Chan Shun Raceway",slots:0,cap:10,cat:"court",nextSlot:"19:30",cost:0},
  {id:"f6",name:"Badminton Court 2",loc:"Sports Centre · 1F",slots:4,cap:4,cat:"court",nextSlot:"20:00",cost:40},
];

const TAB_VIS=[S.HOME,S.MAP,S.FRIENDS,S.LB,S.SETTINGS,S.HIST,S.BADGES,S.REDEEM,S.SCHEDULE];
const SCR_ORD=[S.SPLASH,S.LOGIN,S.OB1,S.OB2,S.OB3,S.PERM,S.HOME,S.MAP,S.SCHEDULE,S.FRIENDS,S.LB,S.SETTINGS,S.HIST,S.BADGES,S.REDEEM,S.CHECKIN,S.SUCCESS];

function WFGv5(){
  const[dk,setDk]=useState(false);
  const[lang,setLang]=useState("en");
  const C=dk?DARK:LIGHT;
  const t=k=>TR[k]?.[lang]||TR[k]?.en||k;

  // ═══ ICONS ═══
  const I={
    Train:({s=18,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><rect x="4" y="3" width="16" height="14" rx="3"/><path d="M4 11h16M12 3v8"/><circle cx="8" cy="20" r="1"/><circle cx="16" cy="20" r="1"/></svg>,
    College:({s=18,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M2 20h20M4 20V8l8-5 8 5v12M9 20v-5h6v5"/></svg>,
    Lake:({s=18,c=C.blue})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M2 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><circle cx="12" cy="9" r="3"/></svg>,
    Ball:({s=18,c=C.or})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/></svg>,
    Book:({s=18,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
    Mountain:({s=18,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M8 21l4-11 4 11M2 21l6-9 3 4M22 21l-5-7-2 3"/></svg>,
    Pin:({s=18,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>,
    Shoe:({s=18,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M3 18h18v2H3zM5 18v-5l2-4h3l1 2 4-1 3 2 1 4v2"/></svg>,
    Ruler:({s=18,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><rect x="3" y="10" width="18" height="4" rx="1"/><path d="M7 10v4M11 10v2.5M15 10v4"/></svg>,
    Leaf:({s=18,c=C.green})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1.41-4.24C10 16 14 12 17 8zM17 8c3-2 5-4 5-7-3 0-5 2-7 5"/></svg>,
    Trophy:({s=18,c=C.gold})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M6 9H3.5a2.5 2.5 0 010-5H6M18 9h2.5a2.5 2.5 0 000-5H18M8 21h8M12 17v4M18 2H6v7a6 6 0 0012 0V2z"/></svg>,
    Star:({s=18,c=C.gold})=><svg width={s} height={s} viewBox="0 0 24 24" fill={c} stroke="none"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l7.1-1.01z"/></svg>,
    Fire:({s=18,c=C.or})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M12 22c-4.97 0-9-2.69-9-6s2-5 3-7c1 2 3 2 3 2s-1-4 1-7c1 2 4 4 5 5s2 3 2 5c1-2 3-4 3-6 1 2 1 4 1 5 0 3.31-4.03 6-9 6z"/></svg>,
    Map:({s=18,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>,
    Users:({s=18,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    Globe:({s=18,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
    Clipboard:({s=18,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>,
    Bell:({s=18,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>,
    Lock:({s=18,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
    Chart:({s=18,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>,
    Help:({s=18,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5"/></svg>,
    Medal:({s=18,c=C.gold})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M7.21 15L2.66 7.14a2 2 0 01.13-2.2L4.4 2.8A2 2 0 016 2h12a2 2 0 011.6.8l1.6 2.14a2 2 0 01.13 2.2L16.79 15"/><circle cx="12" cy="17" r="5"/></svg>,
    Crown:({s=18,c=C.gold})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M2 20h20l-2-12-5 5-3-7-3 7-5-5z"/></svg>,
    Check:({s=18,c="#fff"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
    Back:({s=20})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>,
    Arrow:({s=16,c=C.tS})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>,
    Person:({s=20,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    Apple:({s=22})=><svg width={s} height={s} viewBox="0 0 24 24"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.94 11.3 4.7 7.84C5.57 6.13 7.36 5.03 9.28 5C10.58 4.98 11.82 5.9 12.62 5.9C13.41 5.9 14.93 4.78 16.5 4.96C17.15 4.99 18.97 5.21 20.12 6.87C20.02 6.93 17.8 8.23 17.82 10.94C17.85 14.17 20.63 15.2 20.66 15.21C20.63 15.29 20.18 16.77 19.12 18.29z M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5z" fill={C.text}/></svg>,
    Google:({s=22})=><svg width={s} height={s} viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>,
    Sun:({s=16})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={C.text} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>,
    Moon:({s=16})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={C.text} strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>,
    Flame:({s=18,c=C.or})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"/></svg>,
    ThumbUp:({s=18,c=C.text,fill=false})=><svg width={s} height={s} viewBox="0 0 24 24" fill={fill?c:"none"} stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>,
    Gift:({s=18,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>,
    Plus:({s=18,c=C.text})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
    Search:({s=18,c=C.tS})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  };
  const cpI=(tp,s=18)=>({transit:<I.Train s={s}/>,college:<I.College s={s}/>,scenic:<I.Lake s={s}/>,facility:<I.Ball s={s}/>,academic:<I.Book s={s}/>}[tp]||<I.Pin s={s}/>);
  const BG=[{name:"First Steps",ic:s=><I.Shoe s={s}/>,done:true},{name:"Hill Climber",ic:s=><I.Mountain s={s}/>,done:true},{name:"Week Warrior",ic:s=><I.Fire s={s}/>,done:true},{name:"Full Route",ic:s=><I.Map s={s}/>,done:false},{name:"10K Legend",ic:s=><I.Shoe s={s} c={C.green}/>,done:false},{name:"Social Walk",ic:s=><I.Users s={s}/>,done:false},{name:"CO2 Saver",ic:s=><I.Leaf s={s}/>,done:false},{name:"Summit",ic:s=><I.Crown s={s}/>,done:false}];

  // ═══ COMPONENTS ═══
  const Cd=({children,style:s={},onClick,inv})=><div onClick={onClick} style={{background:inv?C.cardDk:C.card,borderRadius:18,border:"none",transition:"background 0.3s",...s}}>{children}</div>;
  const Pill=({children,active,onClick})=><button onClick={onClick} style={{padding:"8px 16px",borderRadius:22,border:"none",fontSize:12,fontWeight:active?700:500,cursor:"pointer",background:active?C.cardDk:C.card,color:active?(dk?C.bg:C.wh):C.tS,whiteSpace:"nowrap"}}>{children}</button>;
  const Ava=({onClick,s=38})=><button onClick={onClick} style={{width:s,height:s,borderRadius:12,background:C.cardDk,border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}><I.Person s={s*0.47} c={dk?C.bg:C.wh}/></button>;
  const SIco=({children,inv})=><div style={{width:34,height:34,borderRadius:10,background:inv?C.cardDk:C.gP,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"background 0.3s"}}>{children}</div>;
  const ThemeBtn=()=><button onClick={()=>setDk(!dk)} style={{width:34,height:34,borderRadius:10,background:C.card,border:`1px solid ${C.bor}`,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>{dk?<I.Sun/>:<I.Moon/>}</button>;
  const fg=dk?C.bg:C.wh;

  // ═══ STATE ═══
  const[scr,setScr]=useState(S.SPLASH);const scrR=useRef(S.SPLASH);const[prev,setPrev]=useState(null);const[dir,setDir]=useState(null);const[tr,setTr]=useState(false);const trR=useRef(false);const[selCp,setSelCp]=useState(null);const[lbT,setLbT]=useState("individual");const[hc,setHc]=useState({apple:false,google:false});const[pL,setPL]=useState(false);const[pH,setPH]=useState(false);const[prog,setProg]=useState(0);const[stats,setStats]=useState({steps:6482,dist:4.2,checkins:3,pts:2180,cal:312});const[rfr,setRfr]=useState(null);const[lid,setLid]=useState("");const[lpw,setLpw]=useState("");const[lerr,setLerr]=useState(false);const[mf,setMf]=useState("all");const[mz,setMz]=useState(1);const[mp,setMp]=useState({x:0,y:0});const[drag,setDrag]=useState(false);const[ds,setDs]=useState({x:0,y:0});const[ps,setPs]=useState({x:0,y:0});const tRef=useRef(null);const trTm=useRef(null);
  const[frTab,setFrTab]=useState("ranking");const[frSearch,setFrSearch]=useState("");const[sentReqs,setSentReqs]=useState({});const[thumbs,setThumbs]=useState({});
  const[redFilter,setRedFilter]=useState("all");const[redLoc,setRedLoc]=useState("all");const[redeemed,setRedeemed]=useState({});
  const[schTab,setSchTab]=useState("classes");const[bookings,setBookings]=useState({});const[notify,setNotify]=useState({c1:true,c2:true,c3:false});

  const showSt=scr!==S.SPLASH;const showTb=TAB_VIS.includes(scr);
  const tabs=[{l:lang==="en"?"Home":"\u9996\u9801",s:S.HOME,ic:a=><svg width="20" height="20" viewBox="0 0 24 24" fill={a?C.cardDk:"none"} stroke={a?C.cardDk:C.tT} strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>},{l:lang==="en"?"Map":"\u5730\u5716",s:S.MAP,ic:a=><svg width="20" height="20" viewBox="0 0 24 24" fill={a?C.cardDk:"none"} stroke={a?C.cardDk:C.tT} strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/></svg>},{l:t("friends"),s:S.FRIENDS,ic:a=><svg width="20" height="20" viewBox="0 0 24 24" fill={a?C.cardDk:"none"} stroke={a?C.cardDk:C.tT} strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>},{l:t("rank"),s:S.LB,ic:a=><svg width="20" height="20" viewBox="0 0 24 24" fill={a?C.cardDk:"none"} stroke={a?C.cardDk:C.tT} strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M4 22h16M18 2H6v7a6 6 0 0012 0V2z"/></svg>},{l:t("profile"),s:S.SETTINGS,ic:a=><svg width="20" height="20" viewBox="0 0 24 24" fill={a?C.cardDk:"none"} stroke={a?C.cardDk:C.tT} strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}];
  const ati=tabs.findIndex(x=>x.s===scr);const tw=375/tabs.length;
  const gd=(f,to)=>{const fi=SCR_ORD.indexOf(f),ti=SCR_ORD.indexOf(to);return ti>fi?"left":"right";};
  const go=n=>{if(n===scrR.current||trR.current)return;const d=gd(scrR.current,n);setPrev(scrR.current);setDir(d);setTr(true);trR.current=true;setScr(n);scrR.current=n;if(trTm.current)clearTimeout(trTm.current);trTm.current=setTimeout(()=>{setTr(false);trR.current=false;setPrev(null);setDir(null);},480);};
  useEffect(()=>{if(scr===S.SPLASH){const tm=setTimeout(()=>go(S.LOGIN),3200);return()=>clearTimeout(tm);}},[scr]);
  useEffect(()=>{if(scr===S.SUCCESS){setStats(p=>({steps:p.steps+1240,dist:Math.round((p.dist+0.8)*10)/10,checkins:p.checkins+1,pts:p.pts+30,cal:p.cal+62}));const tm=setTimeout(()=>go(S.HOME),3000);return()=>clearTimeout(tm);}},[scr]);
  useEffect(()=>{if(scr===S.CHECKIN){setProg(0);tRef.current=setInterval(()=>{setProg(p=>{if(p>=100){clearInterval(tRef.current);setTimeout(()=>go(S.SUCCESS),350);return 100;}return p+3;});},65);return()=>clearInterval(tRef.current);}},[scr]);
  const refresh=k=>{if(rfr)return;setRfr(k);setTimeout(()=>{setStats(p=>({...p,steps:p.steps+Math.floor(Math.random()*200+50),dist:Math.round((p.dist+Math.random()*0.2)*10)/10,cal:p.cal+Math.floor(Math.random()*15+5)}));setRfr(null);},800);};
  const onWh=useCallback(e=>{e.preventDefault();setMz(z=>Math.min(3,Math.max(0.8,z+(e.deltaY>0?-0.15:0.15))));},[]);const onMD=e=>{setDrag(true);setDs({x:e.clientX,y:e.clientY});setPs(mp);};const onMM=e=>{if(!drag)return;setMp({x:ps.x+(e.clientX-ds.x)/mz,y:ps.y+(e.clientY-ds.y)/mz});};const onMU=()=>setDrag(false);const onTS=e=>{if(e.touches.length===1){setDrag(true);setDs({x:e.touches[0].clientX,y:e.touches[0].clientY});setPs(mp);}};const onTM=e=>{if(!drag||e.touches.length!==1)return;setMp({x:ps.x+(e.touches[0].clientX-ds.x)/mz,y:ps.y+(e.touches[0].clientY-ds.y)/mz});};
  const ph={width:375,height:750,borderRadius:44,overflow:"hidden",position:"relative",background:C.bg,boxShadow:"0 25px 80px rgba(0,0,0,0.15),0 0 0 6px #1a1a1a,0 0 0 8px #555,0 0 0 10px #1a1a1a",margin:"0 auto",transition:"background 0.4s"};

  // ═══ SPLASH ═══
  // ═══ BOAR MASCOT — static ═══
  const WC=()=>(
    <svg width="180" height="200" viewBox="0 0 180 200" style={{marginBottom:8}}>
      {/* Ground line */}
      <path d="M20,175 Q90,172 160,175" stroke={C.text} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4"/>
      {/* Tiny grass tufts */}
      <path d="M30,172 L30,167 M35,173 L35,169" stroke={C.acc} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M145,172 L145,167 M150,173 L150,169" stroke={C.acc} strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* Simple sketch walker */}
      <g transform="translate(90,95)" stroke={C.text} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Head */}
        <circle cx="0" cy="-50" r="18" fill={C.card}/>
        {/* Smile */}
        <path d="M-6,-46 Q0,-41 6,-46"/>
        {/* Eyes — dots */}
        <circle cx="-6" cy="-54" r="1.5" fill={C.text} stroke="none"/>
        <circle cx="6" cy="-54" r="1.5" fill={C.text} stroke="none"/>
        {/* Body */}
        <path d="M0,-32 L0,15"/>
        {/* Arms — one forward swinging, one back */}
        <path d="M0,-20 L-18,-5"/>
        <path d="M0,-20 L16,-8"/>
        {/* Legs — mid-stride */}
        <path d="M0,15 L-14,48"/>
        <path d="M0,15 L16,45"/>
        {/* Leaf accent — held up */}
        <g transform="translate(16,-8) rotate(20)" stroke={C.acc} fill={C.gP} strokeWidth="2">
          <path d="M0,0 Q6,-6 12,0 Q6,6 0,0 Z"/>
          <path d="M0,0 L12,0" strokeWidth="1.2"/>
        </g>
      </g>

      {/* Motion lines behind */}
      <g stroke={C.acc} strokeWidth="2" strokeLinecap="round" opacity="0.5">
        <path d="M35,110 L50,110"/>
        <path d="M30,125 L48,125"/>
        <path d="M38,140 L52,140"/>
      </g>
    </svg>
  );

  // ═══ SCREENS ═══
  const renderSplash=()=>(<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",background:C.bg,transition:"background 0.4s"}}><div style={{position:"absolute",width:200,height:200,borderRadius:"50%",background:C.gP,top:"22%",left:"50%",transform:"translateX(-50%)",opacity:0.5}}/><WC/><h1 style={{color:C.text,fontSize:32,fontWeight:800,margin:"0 0 4px",letterSpacing:-2,position:"relative"}}>WFG<span style={{color:C.acc}}>+</span></h1><p style={{color:C.tS,fontSize:11,fontWeight:600,letterSpacing:2,textTransform:"uppercase",position:"relative"}}>Walk for Green Plus</p></div>);

  const renderLogin=()=>(<div style={{display:"flex",flexDirection:"column",height:"100%",background:C.bg,transition:"background 0.4s"}}><div style={{height:40}}/><div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 28px"}}><div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}><div style={{width:44,height:44,borderRadius:14,background:C.cardDk,display:"flex",alignItems:"center",justifyContent:"center"}}><I.Leaf s={22} c={C.gB}/></div><h1 style={{fontSize:28,fontWeight:800,color:C.text,margin:0}}>WFG<span style={{color:C.acc}}>+</span></h1></div><p style={{fontSize:14,color:C.tS,margin:"0 0 24px"}}>Sign in with CUHK to start earning.</p><div style={{background:C.card,borderRadius:18,padding:24,transition:"background 0.3s"}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:20}}><div style={{width:28,height:28,borderRadius:8,background:"#5C2D91",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:11,fontWeight:800,color:"#fff"}}>CU</span></div><span style={{fontSize:13,fontWeight:600,color:C.text}}>CUHK Authentication</span></div><label style={{fontSize:11,fontWeight:600,color:C.tS,display:"block",marginBottom:6}}>Student ID</label><input value={lid} onChange={e=>{setLid(e.target.value);setLerr(false);}} placeholder="s1234567" style={{width:"100%",padding:"12px 14px",background:C.bg,border:`2px solid ${lerr?C.red:C.bor}`,borderRadius:12,color:C.text,fontSize:14,outline:"none",boxSizing:"border-box",marginBottom:12,fontFamily:"monospace"}}/><label style={{fontSize:11,fontWeight:600,color:C.tS,display:"block",marginBottom:6}}>Password</label><input type="password" value={lpw} onChange={e=>{setLpw(e.target.value);setLerr(false);}} placeholder="********" style={{width:"100%",padding:"12px 14px",background:C.bg,border:`2px solid ${lerr?C.red:C.bor}`,borderRadius:12,color:C.text,fontSize:14,outline:"none",boxSizing:"border-box",marginBottom:6}}/>{lerr&&<p style={{fontSize:11,color:C.red,margin:"2px 0 8px"}}>Invalid credentials.</p>}<button onClick={()=>{if(lid&&lpw)go(S.OB1);else setLerr(true);}} style={{width:"100%",padding:14,background:C.cardDk,color:fg,border:"none",borderRadius:14,fontSize:15,fontWeight:700,cursor:"pointer",marginTop:10}}>{t("signIn")}</button></div></div></div>);

  const renderOB=step=>{const sl=[{ic:<I.Pin s={44}/>,tt:"Virtual\nCheckpoints",d:"GPS check-in across 12 zones.",bg:dk?"#1E2E1E":C.gP},{ic:<I.Shoe s={44}/>,tt:"Health\nSync",d:"Apple Health & Google Fit → PE credits + calories.",bg:dk?"#2A2210":"#FFF4E6"},{ic:<I.Trophy s={44}/>,tt:"Compete\n& Earn",d:"Leaderboard, badges, redeem rewards.",bg:dk?"#1E162A":"#EDE7F6"}];const s=sl[step-1];return(<div style={{display:"flex",flexDirection:"column",height:"100%",background:C.bg}}><div style={{height:40}}/><div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0 28px"}}><div style={{width:"100%",background:s.bg,borderRadius:24,padding:"44px 24px",display:"flex",flexDirection:"column",alignItems:"center",marginBottom:28}}>{s.ic}<h2 style={{fontSize:28,fontWeight:800,color:C.text,margin:"16px 0 10px",textAlign:"center",lineHeight:1.1,whiteSpace:"pre-line"}}>{s.tt}</h2><p style={{fontSize:14,color:C.tS,textAlign:"center",margin:0,maxWidth:260}}>{s.d}</p></div><div style={{display:"flex",gap:8}}>{[0,1,2].map(i=><div key={i} style={{width:i===step-1?24:8,height:8,borderRadius:4,background:i===step-1?C.cardDk:C.bor}}/>)}</div></div><div style={{padding:"0 28px 40px"}}><button onClick={()=>go(step<3?`ob${step+1}`:S.PERM)} style={{width:"100%",padding:16,background:C.cardDk,color:fg,border:"none",borderRadius:16,fontSize:16,fontWeight:700,cursor:"pointer"}}>{step<3?t("next"):t("getStarted")}</button>{step<3&&<button onClick={()=>go(S.PERM)} style={{width:"100%",padding:10,background:"none",color:C.tS,border:"none",fontSize:13,cursor:"pointer",marginTop:4}}>{t("skip")}</button>}</div></div>);};

  const renderPerm=()=>(<div style={{display:"flex",flexDirection:"column",height:"100%",background:C.bg,padding:24}}><div style={{height:20}}/><div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"}}><h2 style={{fontSize:24,fontWeight:800,color:C.text,margin:"0 0 4px"}}>{t("almostThere")}</h2><p style={{fontSize:13,color:C.tS,margin:"0 0 24px"}}>Grant permissions to verify walks.</p>{[{ic:<I.Pin s={24}/>,l:t("location"),d:"GPS verification",on:pL,fn:()=>setPL(!pL)},{ic:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.red} strokeWidth="2" strokeLinecap="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/></svg>,l:"Health Data",d:"Steps, distance & calories",on:pH,fn:()=>setPH(!pH)}].map(p=><Cd key={p.l} onClick={p.fn} style={{display:"flex",alignItems:"center",gap:14,padding:16,marginBottom:10,cursor:"pointer",border:p.on?`2.5px solid ${C.acc}`:"2.5px solid transparent"}}>{p.ic}<div style={{flex:1}}><div style={{fontSize:14,fontWeight:600,color:C.text}}>{p.l}</div><div style={{fontSize:12,color:C.tS}}>{p.d}</div></div><div style={{width:44,height:26,borderRadius:13,background:p.on?C.cardDk:C.bor,padding:2}}><div style={{width:22,height:22,borderRadius:11,background:dk?"#333":"#fff",transform:p.on?"translateX(18px)":"translateX(0)",transition:"transform 0.2s"}}/></div></Cd>)}</div><button onClick={()=>go(S.HOME)} style={{width:"100%",padding:16,background:(pL&&pH)?C.cardDk:C.bor,color:(pL&&pH)?fg:C.tS,border:"none",borderRadius:16,fontSize:15,fontWeight:700,cursor:"pointer",marginBottom:16}}>{(pL&&pH)?t("cont"):t("enableBoth")}</button></div>);

  // ── HOME ──
  const days=["M","T","W","T","F","S","S"];const today=4;
  const renderHome=()=>(<div style={{height:"100%",display:"flex",flexDirection:"column",background:C.bg,transition:"background 0.4s"}}><div style={{height:40}}/><div style={{flex:1,overflowY:"auto",paddingBottom:72}}>
    <div style={{padding:"4px 20px 14px",display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><p style={{fontSize:12,color:C.tS,margin:"0 0 1px"}}>{t("welc")}</p><h1 style={{fontSize:24,fontWeight:800,color:C.text,margin:0}}>Wing Yan</h1></div><div style={{display:"flex",gap:6,alignItems:"center"}}><ThemeBtn/><Ava onClick={()=>go(S.SETTINGS)}/></div></div>
    {/* Daily Goal — hero card */}
    <Cd inv style={{margin:"0 16px 12px",padding:"18px 18px 14px",color:fg}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}><h3 style={{fontSize:16,fontWeight:700,margin:0}}>{t("dailyGoal")}</h3><span style={{fontSize:13,fontWeight:700,color:C.gB}}>{Math.min(100,Math.round(stats.steps/100))}%</span></div>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:14}}>{days.map((d,i)=>{const done=i<today;const isT=i===today;return(<div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4}}><div style={{width:36,height:36,borderRadius:10,background:done?`${C.gB}33`:isT?`${fg}18`:`${fg}08`,display:"flex",alignItems:"center",justifyContent:"center",border:isT?`2px solid ${fg}44`:"none"}}>{done?<I.Check s={16} c={C.gB}/>:<span style={{width:4,height:4,borderRadius:2,background:`${fg}33`}}/>}</div><span style={{fontSize:9,fontWeight:isT?700:500,color:isT?fg:`${fg}66`}}>{d}</span></div>);})}</div>
      <div style={{height:6,background:`${fg}15`,borderRadius:3,overflow:"hidden"}}><div style={{width:`${Math.min(100,stats.steps/100)}%`,height:"100%",background:C.gB,borderRadius:3,transition:"width 0.5s"}}/></div>
      <p style={{fontSize:10,opacity:0.4,margin:"6px 0 0"}}>{Math.max(0,10000-stats.steps).toLocaleString()} {t("to10k")}</p>
    </Cd>
    {/* PE Points + Habit side by side */}
    <div style={{display:"flex",gap:8,padding:"0 16px",marginBottom:12}}>
      <Cd inv style={{flex:1.2,padding:14,color:fg}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}><span style={{fontSize:11,fontWeight:600,opacity:0.6,textTransform:"uppercase",letterSpacing:0.5}}>{t("peCredits")}</span><span style={{fontSize:10,fontWeight:700,background:`${fg}15`,padding:"3px 8px",borderRadius:8}}>{t("rank")} #6</span></div><div style={{display:"flex",alignItems:"baseline",gap:4}}><span style={{fontSize:32,fontWeight:800,letterSpacing:-1}}>{stats.pts.toLocaleString()}</span><span style={{fontSize:11,opacity:0.45}}>/ 3k</span></div><div style={{height:4,background:`${fg}12`,borderRadius:2,overflow:"hidden",marginTop:6}}><div style={{width:`${Math.min(100,stats.pts/3000*100)}%`,height:"100%",background:C.gB,borderRadius:2}}/></div></Cd>
      <Cd style={{flex:0.8,padding:14}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><span style={{fontSize:13,fontWeight:700,color:C.text}}>{t("habit")}</span><I.Fire s={16}/></div><div style={{display:"flex",alignItems:"baseline",gap:4}}><span style={{fontSize:32,fontWeight:800,color:C.text,letterSpacing:-1}}>{stats.checkins+4}</span><span style={{fontSize:11,color:C.tS}}>{t("streak")}</span></div></Cd>
    </div>
    {/* Stats (with calories) */}
    <div style={{display:"flex",gap:6,padding:"0 16px",marginBottom:12}}>{[{l:t("steps"),v:stats.steps.toLocaleString(),ic:<I.Shoe s={18} c={C.acc}/>,k:"steps"},{l:t("dist"),v:`${stats.dist}km`,ic:<I.Ruler s={18} c={C.acc}/>,k:"dist"},{l:t("cal"),v:String(stats.cal),ic:<I.Flame s={18} c={C.or}/>,k:"cal"},{l:t("checkins"),v:String(stats.checkins),ic:<I.Pin s={18} c={C.acc}/>,k:"checkins"}].map(s=><Cd key={s.l} onClick={()=>refresh(s.k)} style={{flex:1,padding:"10px 4px",textAlign:"center",cursor:"pointer",transform:rfr===s.k?"scale(0.95)":"scale(1)",transition:"transform 0.15s"}}>{rfr===s.k?<div style={{width:16,height:16,border:`2px solid ${C.acc}`,borderTopColor:"transparent",borderRadius:"50%",margin:"0 auto",animation:"spin 0.6s linear infinite"}}/>:s.ic}<div style={{fontSize:16,fontWeight:800,color:C.text,margin:"3px 0 1px",opacity:rfr===s.k?0.3:1}}>{s.v}</div><div style={{fontSize:9,color:C.tS}}>{rfr===s.k?t("syncing"):s.l}</div></Cd>)}</div>
    {/* Quick */}
    <div style={{display:"flex",gap:6,padding:"0 16px",marginBottom:12}}>
      <Cd onClick={()=>go(S.MAP)} style={{flex:1,padding:10,cursor:"pointer",display:"flex",flexDirection:"column",gap:4,alignItems:"center",textAlign:"center"}}><SIco inv><I.Map s={14} c={fg}/></SIco><div><div style={{fontSize:11,fontWeight:600,color:C.text}}>{t("nearby")}</div><div style={{fontSize:9,color:C.tS}}>3 {t("spots")}</div></div></Cd>
      <Cd onClick={()=>go(S.SCHEDULE)} style={{flex:1,padding:10,cursor:"pointer",display:"flex",flexDirection:"column",gap:4,alignItems:"center",textAlign:"center"}}><SIco inv><I.Bell s={14} c={fg}/></SIco><div><div style={{fontSize:11,fontWeight:600,color:C.text}}>{t("schedule")}</div><div style={{fontSize:9,color:C.tS}}>1 {t("today")}</div></div></Cd>
      <Cd onClick={()=>go(S.REDEEM)} style={{flex:1,padding:10,cursor:"pointer",display:"flex",flexDirection:"column",gap:4,alignItems:"center",textAlign:"center"}}><SIco inv><I.Gift s={14} c={fg}/></SIco><div><div style={{fontSize:11,fontWeight:600,color:C.text}}>{t("redeem")}</div><div style={{fontSize:9,color:C.tS}}>{t("rewards")}</div></div></Cd>
    </div>
    {/* Carbon */}
    <Cd style={{margin:"0 16px 12px",padding:14,display:"flex",gap:12,alignItems:"center",background:C.gP}}><I.Globe s={22} c={C.acc}/><div style={{flex:1}}><div style={{fontSize:13,fontWeight:600,color:C.acc}}>3.2kg {t("co2")}</div><div style={{fontSize:11,color:C.tS}}>{t("vsShuttle")}</div></div></Cd>
    {/* Recent */}
    <Cd style={{margin:"0 16px 14px",padding:16}}><h3 style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 10px"}}>{t("recent")}</h3>{HD.slice(0,4).map((h,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"7px 0",borderBottom:i<3?`1px solid ${C.bor}`:"none"}}><div style={{width:3,height:24,borderRadius:2,background:h.date==="Today"?C.gB:C.cardDk}}/><SIco>{cpI(h.type,14)}</SIco><div style={{flex:1}}><div style={{fontSize:11,fontWeight:600,color:C.text}}>{h.cp}</div><div style={{fontSize:9,color:C.tS}}>{h.date} {h.time}</div></div><span style={{fontSize:11,fontWeight:700,color:C.acc,background:C.gP,padding:"3px 8px",borderRadius:8}}>+{h.pts}</span></div>)}</Cd>
  </div></div>);

  // ── MAP (compact) ──
  const renderMap=()=>{const fl=mf==="all"?CPS:CPS.filter(c=>c.type===mf);return(<div style={{height:"100%",display:"flex",flexDirection:"column",background:C.bg,transition:"background 0.4s"}}><div style={{height:40}}/><div style={{padding:"4px 20px 8px",display:"flex",justifyContent:"space-between",alignItems:"center"}}><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>{t("campusMap")}</h1><div style={{display:"flex",gap:4}}>{["+","R","-"].map((b,i)=><button key={i} onClick={()=>i===0?setMz(z=>Math.min(3,z+0.3)):i===1?(setMz(1),setMp({x:0,y:0})):setMz(z=>Math.max(0.8,z-0.3))} style={{width:28,height:28,borderRadius:8,background:C.card,border:"none",cursor:"pointer",fontSize:11,fontWeight:700,color:C.text}}>{b}</button>)}<Ava s={28} onClick={()=>go(S.SETTINGS)}/></div></div><div style={{display:"flex",gap:5,padding:"0 16px 6px",overflowX:"auto"}}>{["all","college","academic","scenic","facility","transit"].map(f=><Pill key={f} active={mf===f} onClick={()=>setMf(f)}>{f}</Pill>)}</div><div style={{flex:1,margin:"0 10px",borderRadius:18,overflow:"hidden",background:C.mapBg,cursor:drag?"grabbing":"grab",position:"relative",touchAction:"none"}} onWheel={onWh} onMouseDown={onMD} onMouseMove={onMM} onMouseUp={onMU} onMouseLeave={onMU} onTouchStart={onTS} onTouchMove={onTM} onTouchEnd={()=>setDrag(false)}><svg viewBox="0 0 360 540" style={{width:"100%",height:"100%",transform:`scale(${mz}) translate(${mp.x}px,${mp.y}px)`,transformOrigin:"center",transition:drag?"none":"transform 0.15s"}}><rect width="360" height="540" fill={C.mapBg}/>{[420,360,280,200,140].map((y,i)=><ellipse key={i} cx="175" cy={y} rx={140-i*12} ry={40-i*4} fill="none" stroke={C.acc} strokeWidth="0.5" opacity={0.06} strokeDasharray="4 6"/>)}{[{x:80,y:415,t:"CHUNG CHI"},{x:170,y:315,t:"CENTRAL"},{x:252,y:345,t:"SHAW"},{x:160,y:168,t:"NEW ASIA"},{x:198,y:215,t:"UNITED"},{x:255,y:132,t:"UPPER"},{x:175,y:488,t:"MTR"}].map((l,i)=><text key={i} x={l.x} y={l.y} textAnchor="middle" fontSize="7" fill={C.tT} fontWeight="600" letterSpacing="1.5">{l.t}</text>)}{ROUTES.map((r,i)=><path key={i} d={r.d} fill="none" stroke={C.acc} strokeWidth="1.8" opacity="0.15" strokeLinecap="round" strokeDasharray="5 3"/>)}{fl.map(cp=>{const p=CP_POS[cp.id];if(!p)return null;const sel=selCp?.id===cp.id;return(<g key={cp.id} onClick={e=>{e.stopPropagation();setSelCp(cp);}} style={{cursor:"pointer"}}><circle cx={p.x} cy={p.y} r={sel?16:10} fill={C.acc} opacity="0.06"/><circle cx={p.x} cy={p.y} r={sel?10:7} fill={sel?C.cardDk:C.card} stroke={C.acc} strokeWidth={sel?2.5:1.5}/></g>);})}<circle cx="168" cy="270" r="5" fill={C.blue} stroke={dk?"#333":"#fff"} strokeWidth="2"><animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/></circle></svg>{selCp&&<div style={{position:"absolute",bottom:10,left:10,right:10,background:C.card,borderRadius:18,padding:16,boxShadow:"0 4px 20px rgba(0,0,0,0.12)"}}><div style={{display:"flex",justifyContent:"space-between"}}><div style={{display:"flex",gap:10,alignItems:"center"}}>{cpI(selCp.type,22)}<div><h3 style={{fontSize:15,fontWeight:700,color:C.text,margin:"0 0 3px"}}>{selCp.name}</h3><div style={{display:"flex",gap:6}}><span style={{fontSize:10,background:C.cardDk,color:fg,padding:"2px 8px",borderRadius:8,fontWeight:600}}>{selCp.type}</span><span style={{fontSize:10,color:C.acc,fontWeight:700}}>+{selCp.pts}</span></div></div></div><button onClick={()=>setSelCp(null)} style={{background:C.bg,border:"none",width:24,height:24,borderRadius:12,cursor:"pointer",color:C.tS,fontSize:12}}>x</button></div><button onClick={()=>{setSelCp(null);go(S.CHECKIN);}} style={{width:"100%",marginTop:12,padding:12,background:C.cardDk,color:fg,border:"none",borderRadius:12,fontSize:14,fontWeight:700,cursor:"pointer"}}>{t("checkIn")}</button></div>}</div><div style={{height:56}}/></div>);};

  const renderCheckin=()=>(<div style={{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:C.bg,padding:32}}><div style={{width:140,height:140,position:"relative",marginBottom:24}}><svg viewBox="0 0 36 36" width="140" height="140" style={{position:"absolute",transform:"rotate(-90deg)"}}><circle cx="18" cy="18" r="16" fill="none" stroke={C.bor} strokeWidth="2"/><circle cx="18" cy="18" r="16" fill="none" stroke={C.cardDk} strokeWidth="2.5" strokeDasharray={`${prog} ${100-prog}`} strokeLinecap="round"/></svg><div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><I.Pin s={28} c={C.acc}/><div style={{color:C.text,fontSize:24,fontWeight:800}}>{prog}%</div></div></div><h2 style={{color:C.text,fontSize:20,fontWeight:700,margin:"0 0 6px"}}>{t("verifying")}</h2><p style={{color:C.tS,fontSize:13,margin:0}}>GPS + steps + time + cal</p></div>);

  const renderSuccess=()=>(<div style={{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:C.bg,padding:28}}><Cd inv style={{width:100,height:100,borderRadius:28,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:18}}><I.Check s={48} c={C.gB}/></Cd><h2 style={{fontSize:24,fontWeight:800,color:C.text,margin:"0 0 4px"}}>{t("checkedIn")}</h2><p style={{fontSize:14,color:C.tS,margin:"0 0 20px"}}>Library {t("verified")}</p><Cd style={{width:"100%",padding:20,marginBottom:12}}><div style={{display:"flex",justifyContent:"space-around",textAlign:"center"}}>{[{v:"+30",l:t("pts"),c:C.acc},{v:"1,240",l:t("steps"),c:C.text},{v:"62",l:t("cal"),c:C.or},{v:"0.8km",l:t("dist"),c:C.text}].map(s=><div key={s.l}><div style={{fontSize:22,fontWeight:800,color:s.c}}>{s.v}</div><div style={{fontSize:9,color:C.tS}}>{s.l}</div></div>)}</div></Cd><button onClick={()=>go(S.HOME)} style={{width:"100%",padding:16,background:C.cardDk,color:fg,border:"none",borderRadius:16,fontSize:16,fontWeight:700,cursor:"pointer"}}>{t("dashboard")}</button><p style={{fontSize:11,color:C.tT,margin:"10px 0 0"}}>{t("returning")}</p></div>);

  // ── FRIENDS ──
  const renderFriends=()=>(<div style={{height:"100%",display:"flex",flexDirection:"column",background:C.bg,transition:"background 0.4s"}}><div style={{height:40}}/><div style={{padding:"4px 20px 10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>{t("friends")}</h1><Ava onClick={()=>go(S.SETTINGS)}/></div><div style={{display:"flex",margin:"0 16px 12px",background:C.card,borderRadius:14,padding:3,position:"relative",overflow:"hidden",transition:"background 0.3s"}}>{(()=>{const tbs=["ranking","all","add"];const fi=tbs.indexOf(frTab);return <div style={{position:"absolute",top:3,left:3,width:`calc(${100/tbs.length}% - ${6/tbs.length}px)`,height:"calc(100% - 6px)",borderRadius:11,background:C.cardDk,transform:`translateX(calc(${fi*100}% + ${fi*3/tbs.length}px))`,transition:"transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.4s",zIndex:1}}/>;})()}<div style={{display:"flex",flex:1,position:"relative",zIndex:2}}>{["ranking","all","add"].map(tb=><button key={tb} onClick={()=>setFrTab(tb)} style={{flex:1,padding:"9px 0",background:"none",color:frTab===tb?fg:C.tS,border:"none",borderRadius:11,fontSize:12,fontWeight:600,cursor:"pointer",transition:"color 0.3s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",transform:frTab===tb?"scale(1.03)":"scale(1)"}}>{tb==="ranking"?t("friendLb"):tb==="all"?t("allFriends"):t("addFriend")}</button>)}</div></div><div style={{flex:1,overflowY:"auto",padding:"0 16px",paddingBottom:72}}>
    {frTab==="ranking"&&<>{FRIENDS_DATA.sort((a,b)=>b.pts-a.pts).map((f,i)=><Cd key={f.id} style={{display:"flex",alignItems:"center",gap:10,padding:12,marginBottom:8}}><span style={{width:24,textAlign:"center",fontSize:14,fontWeight:800,color:i<3?C.acc:C.tS}}>#{i+1}</span><div style={{width:32,height:32,borderRadius:"50%",background:C.cardDk,display:"flex",alignItems:"center",justifyContent:"center"}}><I.Person s={16} c={fg}/></div><div style={{flex:1}}><div style={{fontSize:13,fontWeight:600,color:C.text}}>{f.name}</div><div style={{fontSize:11,color:C.tS}}>{f.col} · {f.pts.toLocaleString()} pts</div></div><button onClick={()=>setThumbs(p=>({...p,[f.id]:!p[f.id]}))} style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:3,padding:"4px 8px",borderRadius:8,background:thumbs[f.id]?C.gP:"transparent"}}><I.ThumbUp s={18} c={thumbs[f.id]?C.acc:C.tT} fill={thumbs[f.id]}/><span style={{fontSize:11,fontWeight:600,color:thumbs[f.id]?C.acc:C.tT}}>{thumbs[f.id]?1:""}</span></button></Cd>)}</>}
    {frTab==="all"&&<>{FRIENDS_DATA.map(f=><Cd key={f.id} style={{display:"flex",alignItems:"center",gap:10,padding:12,marginBottom:8}}><div style={{width:32,height:32,borderRadius:"50%",background:C.cardDk,display:"flex",alignItems:"center",justifyContent:"center"}}><I.Person s={16} c={fg}/></div><div style={{flex:1}}><div style={{fontSize:13,fontWeight:600,color:C.text}}>{f.name}</div><div style={{fontSize:11,color:C.tS}}>{f.sid} · {f.col}</div></div><div style={{display:"flex",alignItems:"center",gap:4}}><I.Shoe s={14} c={C.tT}/><span style={{fontSize:12,fontWeight:600,color:C.tS}}>{f.pts.toLocaleString()}</span></div></Cd>)}</>}
    {frTab==="add"&&<><div style={{display:"flex",gap:8,marginBottom:14}}><div style={{flex:1,display:"flex",alignItems:"center",gap:8,background:C.card,borderRadius:12,padding:"10px 14px",border:`1.5px solid ${C.bor}`}}><I.Search/><input value={frSearch} onChange={e=>setFrSearch(e.target.value)} placeholder={t("searchFriend")} style={{flex:1,border:"none",background:"none",outline:"none",color:C.text,fontSize:13}}/></div></div>{SEARCH_RESULTS.map(sr=><Cd key={sr.id} style={{display:"flex",alignItems:"center",gap:10,padding:12,marginBottom:8}}><div style={{width:32,height:32,borderRadius:"50%",background:C.cardDk,display:"flex",alignItems:"center",justifyContent:"center"}}><I.Person s={16} c={fg}/></div><div style={{flex:1}}><div style={{fontSize:13,fontWeight:600,color:C.text}}>{sr.name}</div><div style={{fontSize:11,color:C.tS}}>{sr.sid} · {sr.col}</div></div><button onClick={()=>setSentReqs(p=>({...p,[sr.id]:true}))} style={{padding:"6px 14px",background:sentReqs[sr.id]?C.gP:C.cardDk,color:sentReqs[sr.id]?C.acc:fg,border:"none",borderRadius:10,fontSize:12,fontWeight:700,cursor:"pointer"}}>{sentReqs[sr.id]?t("sent"):t("add")}</button></Cd>)}</>}
  </div></div>);

  // ── LEADERBOARD ──
  const renderLb=()=>(<div style={{height:"100%",display:"flex",flexDirection:"column",background:C.bg,transition:"background 0.4s"}}><div style={{height:40}}/><div style={{padding:"4px 20px 10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>{t("leaderboard")}</h1><Ava onClick={()=>go(S.SETTINGS)}/></div><div style={{display:"flex",margin:"0 16px 12px",background:C.card,borderRadius:14,padding:3,position:"relative",overflow:"hidden",transition:"background 0.3s"}}>{(()=>{const tbs=["individual","college"];const fi=tbs.indexOf(lbT);return <div style={{position:"absolute",top:3,left:3,width:`calc(${100/tbs.length}% - ${6/tbs.length}px)`,height:"calc(100% - 6px)",borderRadius:11,background:C.cardDk,transform:`translateX(calc(${fi*100}% + ${fi*3/tbs.length}px))`,transition:"transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.4s",zIndex:1}}/>;})()}<div style={{display:"flex",flex:1,position:"relative",zIndex:2}}>{["individual","college"].map(tb=><button key={tb} onClick={()=>setLbT(tb)} style={{flex:1,padding:"9px 0",background:"none",color:lbT===tb?fg:C.tS,border:"none",borderRadius:11,fontSize:13,fontWeight:600,cursor:"pointer",transition:"color 0.3s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",transform:lbT===tb?"scale(1.03)":"scale(1)"}}>{tb==="college"?t("collegeCup"):t("individual")}</button>)}</div></div><div style={{flex:1,overflowY:"auto",paddingBottom:72}}>{lbT==="individual"?<div style={{padding:"0 16px"}}><div style={{display:"flex",justifyContent:"center",alignItems:"flex-end",gap:6,marginBottom:18}}>{[LBD[1],LBD[0],LBD[2]].map((p,i)=>{const h=[88,108,72],m=["\u{1F948}","\u{1F947}","\u{1F949}"];return(<div key={p.r} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center"}}><span style={{fontSize:20,marginBottom:2}}>{m[i]}</span><div style={{width:28,height:28,borderRadius:"50%",background:C.cardDk,marginBottom:4,display:"flex",alignItems:"center",justifyContent:"center"}}><I.Person s={14} c={fg}/></div><div style={{fontSize:10,fontWeight:600,color:C.text,marginBottom:4}}>{p.name.split(" ").pop()}</div><Cd style={{width:"100%",height:h[i],borderRadius:"14px 14px 0 0",display:"flex",alignItems:"center",justifyContent:"center",background:C.gP}}><div style={{fontSize:17,fontWeight:800,color:C.acc}}>{p.pts.toLocaleString()}</div></Cd></div>);})}</div>{LBD.slice(3).map(p=><Cd key={p.r} style={{display:"flex",alignItems:"center",gap:10,padding:12,marginBottom:8,...(p.me&&{border:`2.5px solid ${C.cardDk}`,background:C.gP})}}><span style={{width:24,textAlign:"center",fontSize:13,fontWeight:700,color:C.tS}}>#{p.r}</span><div style={{width:28,height:28,borderRadius:"50%",background:C.cardDk,display:"flex",alignItems:"center",justifyContent:"center"}}><I.Person s={14} c={fg}/></div><div style={{flex:1}}><div style={{fontSize:13,fontWeight:600,color:C.text}}>{p.me?"You":p.name}</div><div style={{fontSize:11,color:C.tS}}>{p.col}</div></div><span style={{fontSize:14,fontWeight:700,color:C.acc}}>{p.pts.toLocaleString()}</span></Cd>)}</div>:<div style={{padding:"0 16px"}}>{COLD.map(c=><Cd key={c.r} style={{display:"flex",alignItems:"center",gap:12,padding:14,marginBottom:8,borderLeft:`4px solid ${C.cardDk}`}}><div style={{width:30,height:30,borderRadius:10,background:C.cardDk,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:800,color:fg}}>{c.r}</div><div style={{flex:1}}><div style={{fontSize:13,fontWeight:600,color:C.text}}>{c.name}</div><div style={{fontSize:11,color:C.tS}}>{c.n} {t("walkers")}</div></div><span style={{fontSize:15,fontWeight:700,color:C.acc}}>{(c.pts/1000).toFixed(1)}k</span></Cd>)}</div>}</div></div>);

  // ── SCHEDULE & BOOKING ──
  const renderSchedule=()=>{
    return(<div style={{height:"100%",display:"flex",flexDirection:"column",background:C.bg,transition:"background 0.4s"}}>
      <div style={{height:40}}/>
      <div style={{padding:"4px 20px 10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{display:"flex",gap:10,alignItems:"center"}}>
          <button onClick={()=>go(S.HOME)} style={{width:36,height:36,borderRadius:12,background:C.card,border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"background 0.3s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1)"}} onMouseDown={e=>e.currentTarget.style.transform="scale(0.92)"} onMouseUp={e=>e.currentTarget.style.transform="scale(1)"} onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.text} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>
          <h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>{t("schedule")}</h1>
        </div>
        <div style={{display:"flex",gap:6,alignItems:"center"}}><ThemeBtn/><Ava onClick={()=>go(S.SETTINGS)}/></div>
      </div>
      {/* Tab selector - sliding pill */}
      <div style={{display:"flex",margin:"0 16px 12px",background:C.card,borderRadius:14,padding:3,position:"relative",overflow:"hidden"}}>
        {(()=>{const tbs=["classes","bookings"];const fi=tbs.indexOf(schTab);return <div style={{position:"absolute",top:3,left:3,width:`calc(${100/tbs.length}% - ${6/tbs.length}px)`,height:"calc(100% - 6px)",borderRadius:11,background:C.cardDk,transform:`translateX(calc(${fi*100}% + ${fi*3/tbs.length}px))`,transition:"transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.4s",zIndex:1}}/>;})()}
        <div style={{display:"flex",flex:1,position:"relative",zIndex:2}}>
          {["classes","bookings"].map(tb=><button key={tb} onClick={()=>setSchTab(tb)} style={{flex:1,padding:"9px 0",background:"none",color:schTab===tb?fg:C.tS,border:"none",borderRadius:11,fontSize:13,fontWeight:600,cursor:"pointer",transition:"color 0.3s"}}>{tb==="classes"?t("classes"):t("bookFacility")}</button>)}
        </div>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"0 16px",paddingBottom:72}}>
        {schTab==="classes"&&<>
          {/* Today's summary */}
          <Cd inv style={{padding:16,marginBottom:12,color:fg}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div><p style={{fontSize:11,opacity:0.6,margin:"0 0 2px",textTransform:"uppercase"}}>{t("today")}</p><div style={{fontSize:26,fontWeight:800,letterSpacing:-1}}>1 {t("peClass")}</div><p style={{fontSize:11,opacity:0.5,margin:"2px 0 0"}}>Next: 14:30 Sports Centre</p></div>
              <div style={{width:48,height:48,borderRadius:14,background:`${C.gB}22`,display:"flex",alignItems:"center",justifyContent:"center"}}><I.Bell s={22} c={C.gB}/></div>
            </div>
          </Cd>
          {/* Upcoming classes */}
          <h3 style={{fontSize:13,fontWeight:700,color:C.text,margin:"4px 0 10px"}}>{t("upcoming")}</h3>
          {PE_CLASSES.map(cls=>{
            const isToday=cls.date==="Today";
            return(
              <Cd key={cls.id} style={{padding:14,marginBottom:8,borderLeft:`4px solid ${isToday?C.gB:C.cardDk}`}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
                  <div style={{flex:1}}>
                    <div style={{fontSize:10,fontWeight:700,color:isToday?C.gB:C.tS,textTransform:"uppercase",letterSpacing:0.8,marginBottom:2}}>{cls.date==="Today"?t("today"):cls.date==="Tomorrow"?t("tomorrow"):cls.date} · {cls.time}</div>
                    <div style={{fontSize:13,fontWeight:700,color:C.text,marginBottom:2}}>{cls.title}</div>
                    <div style={{fontSize:11,color:C.tS}}>{cls.loc} · {cls.instructor}</div>
                  </div>
                  <button onClick={()=>setNotify(p=>({...p,[cls.id]:!p[cls.id]}))} style={{background:notify[cls.id]?C.gP:"transparent",border:"none",width:30,height:30,borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"background 0.2s"}}>
                    <I.Bell s={15} c={notify[cls.id]?C.acc:C.tT}/>
                  </button>
                </div>
                {notify[cls.id]&&<div style={{display:"flex",alignItems:"center",gap:5,fontSize:10,color:C.acc,fontWeight:600,paddingTop:6,borderTop:`1px solid ${C.bor}`}}><I.Check s={11} c={C.acc}/>{t("notifyOn")}</div>}
              </Cd>
            );
          })}
        </>}

        {schTab==="bookings"&&<>
          {/* Your bookings header */}
          <h3 style={{fontSize:13,fontWeight:700,color:C.text,margin:"4px 0 10px"}}>{t("available")} {t("facility")}</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
            {FACILITIES.map(f=>{
              const isBooked=bookings[f.id];
              const full=f.slots===0;
              const ic=f.cat==="gym"?<I.Ball s={20} c={C.or}/>:f.cat==="pool"?<I.Lake s={20}/>:f.cat==="studio"?<I.Leaf s={20}/>:<I.Ball s={20} c={C.acc}/>;
              return(
                <Cd key={f.id} style={{padding:12,opacity:full&&!isBooked?0.5:1}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
                    <div style={{width:34,height:34,borderRadius:10,background:C.gP,display:"flex",alignItems:"center",justifyContent:"center"}}>{ic}</div>
                    {f.cost>0&&<span style={{fontSize:9,fontWeight:700,color:C.or,background:`${C.or}22`,padding:"2px 6px",borderRadius:6}}>${f.cost}</span>}
                  </div>
                  <div style={{fontSize:12,fontWeight:700,color:C.text,marginBottom:2,lineHeight:1.3}}>{f.name}</div>
                  <div style={{fontSize:9,color:C.tS,marginBottom:6}}>{f.loc}</div>
                  <div style={{display:"flex",alignItems:"center",gap:4,marginBottom:8}}>
                    <div style={{flex:1,height:4,background:C.bor,borderRadius:2,overflow:"hidden"}}><div style={{width:`${((f.cap-f.slots)/f.cap)*100}%`,height:"100%",background:full?C.or:C.gB,borderRadius:2}}/></div>
                    <span style={{fontSize:9,color:C.tS,fontWeight:600}}>{f.slots}/{f.cap}</span>
                  </div>
                  <div style={{fontSize:10,color:C.tS,marginBottom:6}}>Next: {f.nextSlot}</div>
                  <button onClick={()=>{if(!full&&!isBooked)setBookings(p=>({...p,[f.id]:true}));}} style={{width:"100%",padding:"7px 0",background:isBooked?C.gP:full?C.bor:C.cardDk,color:isBooked?C.acc:full?C.tT:fg,border:"none",borderRadius:9,fontSize:11,fontWeight:700,cursor:!full&&!isBooked?"pointer":"default"}}>
                    {isBooked?`✓ ${t("booked")}`:full?"Full":t("book")}
                  </button>
                </Cd>
              );
            })}
          </div>
        </>}
      </div>
    </div>);
  };

  // ── REDEEM ──
  const renderRedeem=()=>{
    const loc=REWARDS.filter(r=>redLoc==="all"||r.loc===redLoc);
    const fl=redFilter==="all"?loc:loc.filter(r=>r.cat===redFilter);
    const cats=redLoc==="off"?["all","restaurant"]:redLoc==="in"?["all","canteen","fitness","merch","campus"]:["all","canteen","restaurant","fitness","merch"];
    return(<div style={{height:"100%",display:"flex",flexDirection:"column",background:C.bg,transition:"background 0.4s"}}>
      <div style={{height:40}}/>
      <div style={{padding:"4px 20px 10px",display:"flex",alignItems:"center",gap:8}}>
        <button onClick={()=>go(S.HOME)} style={{background:"none",border:"none",cursor:"pointer",color:C.text,display:"flex",padding:0}}><I.Back/></button>
        <h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>{t("redeem")}</h1>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"0 16px",paddingBottom:72}}>
        <Cd inv style={{padding:16,marginBottom:12,display:"flex",justifyContent:"space-between",alignItems:"center",color:fg}}>
          <div><p style={{fontSize:11,opacity:0.6,margin:"0 0 2px",textTransform:"uppercase"}}>{t("yourPts")}</p><span style={{fontSize:32,fontWeight:800,letterSpacing:-1}}>{stats.pts.toLocaleString()}</span></div>
          <I.Gift s={28} c={C.gB}/>
        </Cd>
        {/* Location toggle - sliding pill */}
        <div style={{background:C.card,borderRadius:14,padding:3,marginBottom:12,position:"relative",overflow:"hidden",transition:"background 0.3s"}}>
          {(()=>{const locs=["all","in","off"];const li=locs.indexOf(redLoc);return <div style={{position:"absolute",top:3,left:3,width:`calc(${100/locs.length}% - ${6/locs.length}px)`,height:"calc(100% - 6px)",borderRadius:11,background:C.cardDk,transform:`translateX(calc(${li*100}% + ${li*3/locs.length}px))`,transition:"transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.4s",zIndex:1}}/>;})()}
          <div style={{display:"flex",flex:1,position:"relative",zIndex:2}}>
            {[{k:"all",l:lang==="en"?"All":lang==="tc"?"全部":"全部"},{k:"in",l:t("inCampus")},{k:"off",l:t("offCampus")}].map(o=><button key={o.k} onClick={()=>{setRedLoc(o.k);setRedFilter("all");}} style={{flex:1,padding:"9px 0",background:"none",color:redLoc===o.k?fg:C.tS,border:"none",borderRadius:11,fontSize:12,fontWeight:600,cursor:"pointer",transition:"color 0.3s"}}>{o.l}</button>)}
          </div>
        </div>
        {/* Category filter chips */}
        <div style={{display:"flex",gap:6,marginBottom:12,overflowX:"auto"}}>
          {cats.map(f=><Pill key={f} active={redFilter===f} onClick={()=>setRedFilter(f)}>{f==="all"?(lang==="en"?"all":"全部"):t(f==="restaurant"?"restaurant":f)||f}</Pill>)}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
          {fl.map(r=>{
            const canAfford=stats.pts>=r.cost;const done=redeemed[r.id];
            const ic=r.cat==="restaurant"?<I.Star s={18} c={C.or}/>:r.cat==="fitness"?<I.Ball s={18}/>:r.cat==="campus"?<I.Book s={18}/>:r.cat==="merch"?<I.Gift s={18} c={C.acc}/>:<I.Gift s={18} c={C.acc}/>;
            return(
              <Cd key={r.id} style={{padding:14,opacity:done?0.5:1,position:"relative"}}>
                <div style={{position:"absolute",top:10,right:10,background:r.loc==="off"?C.or:C.gB,color:"#fff",fontSize:8,fontWeight:700,padding:"2px 6px",borderRadius:6,letterSpacing:0.3}}>{r.loc==="off"?"OFF":"ON"}-CAMPUS</div>
                <div style={{width:38,height:38,borderRadius:12,background:C.gP,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:8}}>{ic}</div>
                <div style={{fontSize:12,fontWeight:700,color:C.text,marginBottom:2,lineHeight:1.3}}>{r.name}</div>
                <div style={{fontSize:10,color:C.tS,marginBottom:8,lineHeight:1.4}}>{r.desc}</div>
                <button onClick={()=>{if(canAfford&&!done){setRedeemed(p=>({...p,[r.id]:true}));setStats(p=>({...p,pts:p.pts-r.cost}));}}} style={{width:"100%",padding:"8px 0",background:done?C.gP:canAfford?C.cardDk:C.bor,color:done?C.acc:canAfford?fg:C.tT,border:"none",borderRadius:10,fontSize:12,fontWeight:700,cursor:canAfford&&!done?"pointer":"default"}}>{done?t("redeemed"):`${r.cost} pts`}</button>
              </Cd>
            );
          })}
        </div>
      </div>
    </div>);
  };

  // ── PROFILE ──
  const renderSettings=()=>(<div style={{height:"100%",display:"flex",flexDirection:"column",background:C.bg,transition:"background 0.4s"}}><div style={{height:40}}/><div style={{padding:"4px 20px 10px"}}><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>{t("profile")}</h1></div><div style={{flex:1,overflowY:"auto",padding:"0 16px",paddingBottom:72}}>
    <Cd style={{padding:18,marginBottom:12,display:"flex",gap:14,alignItems:"center"}}><div style={{width:50,height:50,borderRadius:"50%",background:C.cardDk,display:"flex",alignItems:"center",justifyContent:"center"}}><I.Leaf s={22} c={C.gB}/></div><div><div style={{fontSize:16,fontWeight:700,color:C.text}}>Chan Wing Yan</div><div style={{fontSize:12,color:C.tS}}>s1234567 Shaw</div></div></Cd>
    <Cd onClick={()=>go(S.BADGES)} inv style={{padding:14,marginBottom:12,display:"flex",gap:10,alignItems:"center",cursor:"pointer",color:fg}}><I.Medal s={22}/><div style={{flex:1}}><div style={{fontSize:13,fontWeight:600}}>{t("badges")}</div><div style={{fontSize:11,opacity:0.5}}>3/8</div></div><I.Arrow c={C.tT}/></Cd>
    {/* Language — sliding pill */}
    <h3 style={{fontSize:14,fontWeight:700,color:C.text,margin:"4px 0 10px"}}>{t("language")}</h3>
    {(()=>{const langs=[{k:"en",l:"English"},{k:"tc",l:"繁體中文"},{k:"sc",l:"简体中文"}];const li=langs.findIndex(o=>o.k===lang);return(
    <div style={{background:C.card,borderRadius:18,padding:4,marginBottom:12,position:"relative",overflow:"hidden",transition:"background 0.4s"}}>
      <div style={{position:"absolute",top:4,left:4,width:`calc(${100/langs.length}% - ${8/langs.length}px)`,height:"calc(100% - 8px)",borderRadius:14,background:C.cardDk,transform:`translateX(calc(${li*100}% + ${li*4/langs.length}px))`,transition:"transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.4s",zIndex:1}}/>
      <div style={{display:"flex",position:"relative",zIndex:2}}>
        {langs.map((o,i)=><button key={o.k} onClick={()=>setLang(o.k)} style={{flex:1,padding:"11px 0",background:"none",color:lang===o.k?fg:C.tS,border:"none",borderRadius:14,fontSize:12,fontWeight:lang===o.k?700:500,cursor:"pointer",transition:"color 0.3s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",transform:lang===o.k?"scale(1.04)":"scale(1)"}}>{o.l}</button>)}
      </div>
    </div>);})()}
    {/* Appearance — jelly toggle */}
    <h3 style={{fontSize:14,fontWeight:700,color:C.text,margin:"4px 0 10px"}}>{t("appearance")}</h3>
    <div style={{background:C.card,borderRadius:18,display:"flex",alignItems:"center",gap:12,padding:14,marginBottom:12,transition:"background 0.4s"}}>
      <div style={{width:38,height:38,borderRadius:10,background:C.gP,display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.4s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",transform:dk?"rotate(360deg) scale(1)":"rotate(0deg) scale(1)"}}>{dk?<I.Moon/>:<I.Sun/>}</div>
      <div style={{flex:1}}>
        <div style={{fontSize:14,fontWeight:600,color:C.text,transition:"color 0.4s"}}>{t("darkMode")}</div>
        <div style={{fontSize:11,color:C.tS,transition:"color 0.4s, opacity 0.3s"}}>{dk?t("darkOn"):t("darkOff")}</div>
      </div>
      <div onClick={()=>setDk(!dk)} style={{width:52,height:30,borderRadius:15,background:dk?C.acc:C.bor,padding:3,cursor:"pointer",transition:"background 0.35s cubic-bezier(0.34,1.56,0.64,1)",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,borderRadius:15,background:dk?`${C.gB}15`:"transparent",transition:"background 0.4s"}}/>
        <div style={{width:24,height:24,borderRadius:12,background:dk?"#1E2A1E":"#fff",transform:dk?"translateX(22px) scale(1)":"translateX(0) scale(1)",transition:"transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s",boxShadow:"0 2px 6px rgba(0,0,0,0.2)",position:"relative",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{width:8,height:8,borderRadius:4,background:dk?C.gB:C.bor,transition:"background 0.3s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",transform:dk?"scale(1)":"scale(0.6)"}}/></div>
      </div>
    </div>
    {/* Health */}
    <h3 style={{fontSize:14,fontWeight:700,color:C.text,margin:"4px 0 10px"}}>{t("healthSync")}</h3>
    {[{name:"Apple Health",logo:<I.Apple s={22}/>,on:hc.apple,k:"apple"},{name:"Google Fit",logo:<I.Google s={22}/>,on:hc.google,k:"google"}].map(s=><Cd key={s.k} style={{display:"flex",alignItems:"center",gap:12,padding:14,marginBottom:8,...(s.on&&{border:`2px solid ${C.acc}`})}}><div style={{width:38,height:38,borderRadius:10,background:C.bg,display:"flex",alignItems:"center",justifyContent:"center"}}>{s.logo}</div><div style={{flex:1}}><div style={{fontSize:14,fontWeight:600,color:C.text}}>{s.name}</div><div style={{fontSize:11,color:s.on?C.acc:C.tS}}>{s.on?t("connected"):t("notConn")}</div></div><button onClick={()=>setHc(p=>({...p,[s.k]:!p[s.k]}))} style={{padding:"8px 16px",background:s.on?C.gP:C.cardDk,color:s.on?C.acc:fg,border:"none",borderRadius:10,fontSize:12,fontWeight:700,cursor:"pointer"}}>{s.on?"Off":t("connect")}</button></Cd>)}
    {/* Weekly */}
    <Cd style={{padding:18,marginTop:4,marginBottom:12}}><h3 style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 14px"}}>{t("weekly")}</h3><div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",height:90,gap:5}}>{[{d:"M",v:8200},{d:"T",v:6500},{d:"W",v:9100},{d:"T",v:7800},{d:"F",v:5400},{d:"S",v:11200},{d:"S",v:stats.steps}].map((d,i)=><div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2}}><div style={{fontSize:7,color:C.tS}}>{(d.v/1000).toFixed(1)}k</div><div style={{width:"100%",height:`${Math.min(100,Math.round(d.v/112))}%`,background:i===6?C.cardDk:C.gP,borderRadius:4,minHeight:5}}/><div style={{fontSize:9,color:i===6?C.text:C.tS,fontWeight:i===6?700:500}}>{d.d}</div></div>)}</div></Cd>
    {/* Settings */}
    <h3 style={{fontSize:14,fontWeight:700,color:C.text,margin:"0 0 10px"}}>{t("settings")}</h3>
    <Cd style={{overflow:"hidden",marginBottom:12}}>{[{l:t("notif"),i:<I.Bell/>},{l:t("location"),i:<I.Pin s={18}/>},{l:t("privacy"),i:<I.Lock/>},{l:t("export"),i:<I.Chart/>},{l:t("help"),i:<I.Help/>}].map((s,i)=><div key={s.l} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",borderBottom:i<4?`1px solid ${C.bor}`:"none",cursor:"pointer"}}>{s.i}<div style={{flex:1,fontSize:13,fontWeight:500,color:C.text}}>{s.l}</div><I.Arrow/></div>)}</Cd>
  </div></div>);

  const renderHist=()=>(<div style={{height:"100%",display:"flex",flexDirection:"column",background:C.bg}}><div style={{height:40}}/><div style={{padding:"4px 20px 10px",display:"flex",alignItems:"center",gap:8}}><button onClick={()=>go(S.HOME)} style={{background:"none",border:"none",cursor:"pointer",color:C.text,display:"flex",padding:0}}><I.Back/></button><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>{t("history")}</h1></div><div style={{flex:1,overflowY:"auto",padding:"0 16px",paddingBottom:72}}><div style={{display:"flex",gap:8,marginBottom:14}}>{[{l:t("week"),v:"7",ic:<I.Pin s={16} c={C.acc}/>},{l:t("pts"),v:stats.pts.toLocaleString(),ic:<I.Star s={16}/>},{l:t("cal"),v:String(stats.cal),ic:<I.Flame s={16}/>}].map(s=><Cd key={s.l} style={{flex:1,padding:10,textAlign:"center"}}>{s.ic}<div style={{fontSize:16,fontWeight:700,color:C.acc}}>{s.v}</div><div style={{fontSize:9,color:C.tS}}>{s.l}</div></Cd>)}</div>{HD.map((h,i)=><div key={i} style={{display:"flex",gap:12}}><div style={{display:"flex",flexDirection:"column",alignItems:"center",width:16}}><div style={{width:8,height:8,borderRadius:"50%",background:C.cardDk,flexShrink:0}}/>{i<HD.length-1&&<div style={{width:1.5,flex:1,background:C.bor}}/>}</div><div style={{flex:1,padding:"0 0 14px"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{display:"flex",gap:8,alignItems:"center"}}><SIco>{cpI(h.type,14)}</SIco><div><div style={{fontSize:13,fontWeight:600,color:C.text}}>{h.cp}</div><div style={{fontSize:11,color:C.tS}}>{h.date} {h.time}</div></div></div><span style={{fontSize:13,fontWeight:700,color:C.acc}}>+{h.pts}</span></div></div></div>)}</div></div>);

  const renderBadges=()=>{const earned=BG.filter(b=>b.done).length;return(<div style={{height:"100%",display:"flex",flexDirection:"column",background:C.bg}}><div style={{height:40}}/><div style={{padding:"4px 20px 10px",display:"flex",alignItems:"center",gap:8}}><button onClick={()=>go(S.SETTINGS)} style={{background:"none",border:"none",cursor:"pointer",color:C.text,display:"flex",padding:0}}><I.Back/></button><h1 style={{fontSize:22,fontWeight:800,color:C.text,margin:0}}>{t("badges")}</h1></div><div style={{flex:1,overflowY:"auto",padding:"0 16px",paddingBottom:72}}><Cd style={{padding:18,marginBottom:14,display:"flex",justifyContent:"space-around",textAlign:"center"}}>{[{v:earned,l:t("done"),c:C.acc},{v:BG.length-earned-2,l:t("doing"),c:C.text},{v:2,l:t("locked"),c:C.tS}].map(s=><div key={s.l}><div style={{fontSize:28,fontWeight:800,color:s.c}}>{s.v}</div><div style={{fontSize:11,color:C.tS}}>{s.l}</div></div>)}</Cd><div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>{BG.map(b=><Cd key={b.name} inv={b.done} style={{padding:14,textAlign:"center",opacity:b.done?1:0.35}}><div style={{width:42,height:42,borderRadius:14,background:b.done?`${C.gB}33`:`${C.text}08`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 6px"}}>{b.ic(20)}</div><div style={{fontSize:10,fontWeight:700,color:b.done?fg:C.text,lineHeight:1.3}}>{b.name}</div></Cd>)}</div></div></div>);};

  const all={[S.SPLASH]:renderSplash,[S.LOGIN]:renderLogin,[S.OB1]:()=>renderOB(1),[S.OB2]:()=>renderOB(2),[S.OB3]:()=>renderOB(3),[S.PERM]:renderPerm,[S.HOME]:renderHome,[S.MAP]:renderMap,[S.CHECKIN]:renderCheckin,[S.SUCCESS]:renderSuccess,[S.FRIENDS]:renderFriends,[S.LB]:renderLb,[S.HIST]:renderHist,[S.SETTINGS]:renderSettings,[S.BADGES]:renderBadges,[S.REDEEM]:renderRedeem,[S.SCHEDULE]:renderSchedule};

  return(<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:C.bgO,padding:20,fontFamily:"'DM Sans',-apple-system,sans-serif",transition:"background 0.4s"}}>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;font-family:'DM Sans',-apple-system,sans-serif}::-webkit-scrollbar{display:none}button:active{transform:scale(0.97)!important}input::placeholder{color:${C.tT}}input:focus{border-color:${C.acc}!important}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes sil{0%{transform:translateX(100%) scale(.92);opacity:.3}60%{transform:translateX(-3%) scale(1.01);opacity:1}80%{transform:translateX(1.5%) scale(.998)}100%{transform:translateX(0) scale(1)}}@keyframes sol{0%{transform:translateX(0) scale(1);opacity:1}100%{transform:translateX(-35%) scale(.92);opacity:0}}@keyframes sir{0%{transform:translateX(-100%) scale(.92);opacity:.3}60%{transform:translateX(3%) scale(1.01);opacity:1}80%{transform:translateX(-1.5%) scale(.998)}100%{transform:translateX(0) scale(1)}}@keyframes sor{0%{transform:translateX(0) scale(1);opacity:1}100%{transform:translateX(35%) scale(.92);opacity:0}}.te-left{animation:sil 460ms cubic-bezier(.22,1,.36,1) forwards}.tx-left{animation:sol 400ms cubic-bezier(.22,1,.36,1) forwards}.te-right{animation:sir 460ms cubic-bezier(.22,1,.36,1) forwards}.tx-right{animation:sor 400ms cubic-bezier(.22,1,.36,1) forwards}`}</style>
    <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:12,justifyContent:"center",maxWidth:560}}>
      {[{l:"Splash",s:S.SPLASH},{l:"Login",s:S.LOGIN},{l:"OB",s:S.OB1},{l:"Perm",s:S.PERM},{l:"Home",s:S.HOME},{l:"Map",s:S.MAP},{l:"Schedule",s:S.SCHEDULE},{l:"Friends",s:S.FRIENDS},{l:"Rank",s:S.LB},{l:"Profile",s:S.SETTINGS},{l:"History",s:S.HIST},{l:"Badges",s:S.BADGES},{l:"Redeem",s:S.REDEEM}].map(b=><button key={b.s} onClick={()=>go(b.s)} style={{padding:"5px 10px",background:scr===b.s?C.cardDk:C.card,color:scr===b.s?fg:C.tS,border:"none",borderRadius:8,fontSize:10,cursor:"pointer",fontWeight:scr===b.s?700:500}}>{b.l}</button>)}
      <button onClick={()=>setDk(!dk)} style={{padding:"5px 10px",background:C.acc,color:fg,border:"none",borderRadius:8,fontSize:10,cursor:"pointer",fontWeight:700}}>{dk?"Light":"Dark"}</button>
    </div>
    <div style={ph}>
      <div style={{position:"absolute",top:0,left:0,right:0,zIndex:60,display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 24px 4px",fontSize:13,fontWeight:600,color:C.sT,opacity:showSt?1:0,transition:"all 0.3s"}}><span>9:41</span><div style={{position:"absolute",left:"50%",transform:"translateX(-50%)",top:0,width:126,height:30,background:"#000",borderRadius:"0 0 22px 22px"}}/><div style={{display:"flex",gap:4,alignItems:"center"}}><svg width="16" height="12" viewBox="0 0 16 12"><rect x="0" y="4" width="3" height="8" rx="1" fill={C.sT}/><rect x="4.5" y="2" width="3" height="10" rx="1" fill={C.sT}/><rect x="9" y="0" width="3" height="12" rx="1" fill={C.sT}/></svg><svg width="24" height="12" viewBox="0 0 25 12"><rect x="0" y="1" width="22" height="10" rx="2" stroke={C.sT} strokeWidth="1" fill="none"/><rect x="1.5" y="2.5" width="16" height="7" rx="1" fill={C.acc}/></svg></div></div>
      <div style={{height:"100%",position:"relative",overflow:"hidden"}}>{tr&&prev&&<div key={"o-"+prev} className={`tx-${dir||"left"}`} style={{position:"absolute",inset:0,zIndex:1}}>{all[prev]?.()}</div>}<div key={"i-"+scr} className={tr?`te-${dir||"left"}`:undefined} style={{height:"100%",position:"relative",zIndex:2}}>{all[scr]?.()}</div></div>
      <div style={{position:"absolute",bottom:0,left:0,right:0,zIndex:50,background:C.bg,borderTop:`1px solid ${C.bor}`,transform:showTb?"translateY(0)":"translateY(100%)",transition:"transform 0.35s cubic-bezier(.22,1,.36,1), background 0.4s"}}><div style={{position:"relative",height:3}}><div style={{position:"absolute",top:0,height:3,width:28,borderRadius:"0 0 4px 4px",background:C.cardDk,left:ati>=0?`calc(${ati}*${tw}px + ${tw/2}px - 14px)`:-40,opacity:ati>=0?1:0,transition:"left 0.4s cubic-bezier(.34,1.56,.64,1),opacity 0.2s"}}/></div><div style={{display:"flex",justifyContent:"space-around",alignItems:"center",padding:"4px 0 20px"}}>{tabs.map((tb,i)=>{const a=ati===i;return(<button key={tb.l} onClick={()=>go(tb.s)} style={{background:"none",border:"none",display:"flex",flexDirection:"column",alignItems:"center",gap:1,cursor:"pointer",padding:"4px 8px",transform:a?"scale(1)":"scale(0.9)",transition:"transform 0.35s cubic-bezier(.34,1.56,.64,1)"}}><div style={{transition:"transform 0.3s",transform:a?"translateY(-1px) scale(1.08)":"scale(1)"}}>{tb.ic(a)}</div><span style={{fontSize:9,fontWeight:a?700:500,color:a?C.text:C.tT}}>{tb.l}</span></button>);})}</div></div>
    </div>
    <p style={{color:C.tS,fontSize:10,marginTop:10}}>WFG+ v5.1 · {dk?"Dark":"Light"} · {lang.toUpperCase()}</p>
  </div>);
}
