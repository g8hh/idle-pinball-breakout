/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "💡 Offline Boosters and only consumed when you are offline": "💡 离线助推器，仅在您离线时使用",
    "# Launches": "# 发射",
    "Auto Aim and Auto Collect are no longer boosters - they are now part of the launcher. This frees up two booster slots. You can turn them on/off in Launcher page": "自动瞄准和自动收集不再是助推器 - 它们现在是发射器的一部分。 这释放了两个助推器插槽。 您可以在发射器页面中打开/关闭它们",
    "Ball": "小球",
    "Crafting requirement for Rare and Epic boosters have been reduced - now you can easily craft Rare and Epic boosters.": "稀有和史诗助推器的制作要求已降低 - 现在您可以轻松制作稀有和史诗助推器。",
    "Hitpower": "打击力",
    "Introducing upgrade multiplier: for every 10th level of upgrade, you will get a 25% multiplier": "引入升级乘数：每升级 10 级，您将获得 25% 乘数",
    "Multiplier": "乘数",
    "Offline earnings are enabled by default - you no longer need to activate Auto Aim and Auto Collect": "默认情况下启用离线收入 - 您不再需要激活自动瞄准和自动收集",
    "Physics": "物理",
    "Ok, Got It!": "好的，我知道了！",
    "Rand What's New": "",
    "Reset What's New": "重置新功能",
    "Total Damage": "总伤害",
    "What's New": "新功能",
    "💡 You need to activate both Auto Aim and Auto Collect boosters to enable offline earning": "💡 您需要同时激活自动瞄准和自动收集助推器以启用离线收入",
    "Bounce": "弹跳",
    "Burst Count": "突发数量",
    "Critical Bounce Boost": "临界弹跳提升",
    "Critical Bounce Chance": "临界弹跳几率",
    "Max Speed": "最大速度",
    "Not enough gold to buy a ball": "没有足够的金币购买小球",
    "The boost that the ball will get when a critical bounce happens.": "发生关键反弹时球将获得的提升。",
    "The chance that the ball will get a boost when it hits the block.": "球击中挡板时获得助力的机会。",
    "The maximum speed the ball can travel at after burst period ends": "爆发期结束后球可以移动的最大速度",
    "This is how many blocks can the ball hit before the burst period ends. During burst period, the ball can exceed max speed": "这是在爆发期结束之前球可以击中多少块。 在爆发期间，球可以超过最大速度",
    "This one should be straightforward: it's the bouncing force when the ball hits the block": "这个应该直截了当：就是球击中挡板时的弹跳力",
    "💡 Setting your name is free for the first time. Changing it later will cost 10K gold": "💡 首次免费可以设置您的名字。 以后更改将花费 10K 金币",
    "x10 Cash": "x10 现金",
    "You can earn gems 💎 by resetting your gold and upgrades": "您可以通过重置金币和升级来赚取宝石💎",
    "You can extend offline earning time using boosters": "您可以使用助推器延长离线赚钱时间",
    "You can invest your gold now and get return in the future. You can only make one investment at a time": "您现在可以投资您的黄金，并在未来获得回报。您一次只能进行一项投资",
    "You will earn 750": "您将获得 750",
    "Auto Aim": "自动瞄准",
    "Auto Collect": "自动收集",
    "Cannot upgrade bounce": "无法升级弹跳",
    "Clear Investment": "明确投资",
    "Collect Time": "收集时间",
    "Earning Per Minute": "每分钟收入",
    "Extra time from booster": "助推器的额外时间",
    "Finger Hitpower": "手指打击力",
    "From Balls": "从球",
    "From Boosters": "来自助推器",
    "Go to Booster": "前往助推器",
    "Gold, ball upgrade, launcher upgrade and physics upgrade": "金币、球升级、发射器升级和物理升级",
    "Investment": "投资",
    "Launch Speed": "发射速度",
    "Launcher": "发射器",
    "Launcher Aim Speed": "发射器瞄准速度",
    "Level, gem, booster and energy ⚡": "等级，宝石，助推器和能量⚡",
    "Mature Investment": "成熟的投资",
    "Max offline earning time": "最长离线赚取时间",
    "Offline Earning Time": "线下赚钱时间",
    "offline_bolt": "离线螺栓",
    "Only earnings from balls are used for offline earning calculations": "只有来自球的收益用于离线收益计算",
    "Prestige": "声望",
    "Prestige and Get 3 Gems": "声望并获得 3 颗宝石",
    "Progress More to Enable Prestige": "取得更多进步以实现声望",
    "Require Level 2": "需要2级",
    "Reset": "重启",
    "Test Level Up": "测试升级",
    "Test Update": "测试更新",
    "The damage that your finger tap will cast": "手指敲击会造成的伤害",
    "The speed that the launcher will aim at target when auto aim is activated": "发生器自动瞄准时发射器瞄准目标的速度",
    "The speed that the launcher will launch the ball": "发射器发射球的速度",
    "💡 Some boosters are only found in higher levels": "💡 一些助推器只能在更高级别找到",
    "Activate Booster": "激活助推器",
    "Avatar": "头像",
    "Ball Sound Effect": "球音效",
    "Blue Block x2": "蓝色方块 x2",
    "Booster": "助推器",
    "Booster Pack Cooldown": "补充包冷却",
    "Booster Pack Level": "补充包等级",
    "Booster Timer": "助推器计时器",
    "Boosterpedia": "助推器",
    "Chance to get ⚡ for each hit": "每次点击有机会获得⚡",
    "Claim Booster Pack": "领取补充包",
    "Craft": "制作",
    "Empty Slot": "空插槽",
    "Energy": "能量",
    "Green Block x2": "绿块 x2",
    "hi@fishpondstudio.com": "hi@fishpondstudio.com",
    "Ingredents": "成分",
    "Join our Discord to learn about what's coming and give your feedback": "加入我们的 Discord 以了解即将发生的事情并提供反馈",
    "left in your inventory": "留在您的库存中",
    "Locked": "未解锁",
    "Name": "姓名",
    "No Time Left": "没有时间了",
    "Offline Earn Rate": "线下赚取率",
    "Offline Earning": "线下收益",
    "Offline earning time": "线下赚钱时间",
    "Offline Time": "离线时间",
    "Orange Block x2": "橙色块 x2",
    "Pink Block x2": "粉红色块 x2",
    "Purple Block x2": "紫色方块 x2",
    "Recipes have been refreshed just now, craft on!": "食谱刚刚更新，继续制作！",
    "Recipes will refresh in": "配方将刷新于",
    "Refersh Now 🎬": "立即转发🎬",
    "Refresh Recipe": "刷新配方",
    "Reset Energy": "重置能量",
    "Reset Recipe Timer": "重置食谱计时器",
    "Review on AppStore": "AppStore 上的评论",
    "Review on Google Play": "在 Google Play 上评论",
    "Reward Ad Loading...": "奖励广告加载中...",
    "Sell": "出售",
    "Setting your name for the first time is free, changing it after will cost 10K gold": "第一次设置名字是免费的，之后改名需要10K金",
    "Sound Effect": "音效",
    "Spend 5💎 x3 Earning": "花费 5💎 x3 收益",
    "Support": "支持",
    "TAP TO CHANGE": "点击更改",
    "This is the time you have earned offline earning": "这是您赚取离线收入的时间",
    "This is the total time you have been away": "这是您离开的总时间",
    "Today's Recipes": "今日配方",
    "Total Offline Earning": "离线总收入",
    "Yellow Block x2": "黄色方块 x2",
    "You can claim one booster pack every 4h. It will not stack": "您可以每 4 小时领取一个补充包。它不会堆叠",
    "You do not have enough energy ⚡ to craft this booster": "你没有足够的能量 ⚡ 来制作这个助推器",
    "We are still loading reward ad, please wait": "我们仍在加载奖励广告，请稍候",
    "Got it": "我知道了",
    "Not enough gem to unlock a slot": "没有足够的宝石来解锁插槽",
    "Play on Mobile": "在手机上玩",
    "worth of booster, it will cost the ingredients listed above": "助推器的价值，它将花费上面列出的成分",
    "You can play Idle Pinball Breakout on iOS and Android now!": "您现在可以在 iOS 和 Android 上玩 弹珠突围放置！",
    "💡 Upgrading a ball's physics has a big impact on its performance": "💡 升级球的物理特性对其性能有很大影响",
    "Up!": "升级了！",
    "In Use": "使用中",
    "Pink Block x2 has been activated": "粉红色块 x2 已激活",
    "x1.25 Earning has been activated": "x1.25 收益已激活",
    "2s Collect Time has been activated": "2秒收集时间已激活",
    "💡 To replace this booster, deactivate it first": "💡 要更换此助推器，请先将其停用",
    "Cannot upgrade launch speed": "无法升级发射速度",
    "Common": "普通",
    "Deactivate": "停用",
    "Epic": "史诗",
    "Go Back": "返回",
    "Gain double the gold from pink blocks": "从粉红色块中获得双倍的金币",
    "Online": "在线",
    "Online Earning x 1.25": "在线收入 x 1.25",
    "Prestige and Get 5 Gems": "声望并获得 5 颗宝石",
    "Rare": "稀有",
    "Reduce collection time to 2s (from 3s": "将采集时间缩短至 2 秒（从 3 秒",
    "The time it takes for launcher to collect the ball. You can reduce the time using a booster": "发射器收集球所需的时间。 您可以使用助推器减少时间",
    "This booster will automatically be deactivated when time runs out": "此助推器将在时间用完时自动停用",
    "This booster's time is only consumed when you are online": "此助推器的时间仅在您在线时消耗",
    "This slot is locked, you need to unlock it first": "此插槽已锁定，您需要先解锁",
    "Time Left": "剩余时间",
    "will reset": "会重置",
    "will stay": "会保留",
    "Consume Type": "消耗类型",
    "Not enough gold to upgrade ball": "金币不够升级小球",
    "Booster Pack": "助推器提升包",
    "Purple Block x2 has been activated": "紫色方块 x2 已激活",
    "Cannot upgrade finger hitpower": "无法升级手指攻击力",
    "A ball seems stuck and has been automatically collected": "一个球似乎被卡住并被自动收集",
    "x1.25 Earning has been deactivated. You can add a new one to replace it": "x1.25 收入已停用。 您可以添加一个新的来替换它",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Ball $": "小球 $",
    "Level ": "等级 ",
    "Ball #": "小球 #",
    "Upgrade $": "升级 $",
    "Invest ": "投资 ",
    "Lvl ": "等级 ",
    "Unlock Slot ": "解锁插槽 ",
    "Require Level ": "要求等级 ",
    "Next Booster in ": "下一个提升器需要 ",
    "🏅 LVL": "🏅 等级",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^💰 ([\d\.]+)$/,
    /^💰 ([\d\.]+)K$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Claim (.+) Gold$/, '收集 $1 金币'],
    [/^Prestige and Get (.+) Gems$/, '声望并获得 $1 颗宝石'],
    [/^Your booster pack will contain (.+) of booster time: (.+) of COMMON, (.+) of RARE and (.+) of EPIC$/, '您的补充包将包含 $1 的补充包时间：$2 的 普通、$3 的 稀有 和 $4 的 史诗'],
    [/^Claim (.+) Gold 🎬$/, '收集 $1 金币 🎬'],
    [/^You have sold (.+)min \"x(.+) Earning\" booster for (.+) 💎$/, '你出售了 $1 分钟 “x$2 收益” 助推器 获得了 $3 💎'],
    [/^worth of booster, you will get (.+)💎. You currently have$/, '价值的助推器，您将获得 $1💎。 你目前有'],
    [/^You have made (.+) investment$/, '你投资了 $1'],
    [/^Earn (.+) in (.+) hours$/, '$2 小时内赚 $1'],
    [/^Welcome to Level (.+), here's some gold to help you get ahead!$/, '欢迎来到第 $1 级，这里有一些金币可以帮助您取得成功！'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/min$/, '$1\/分钟'],
	[/^([\d\.,]+)\/m$/, '$1\/分钟'],
	[/^([\d\.,]+)min$/, '$1分钟'],
	[/^([\d\.,]+)m Offline$/, '$1分钟 离线'],
	[/^([\d\.,]+)h Offline$/, '$1小时 离线'],
	[/^([\d\.,]+)h Offline Earning$/, '$1小时 离线收益'],
	[/^([\d\.,]+)s Collect Time$/, '$1秒 收集时间'],
	[/^([\d\.,]+)m Left$/, '$1分钟 剩余'],
	[/^([\d\.,]+)h Left$/, '$1小时 剩余'],
	[/^([\d\.,]+)h([\d\.,]+)m Left$/, '$1小时$2分钟 剩余'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^x([\d\.]+) Earning$/, 'x$1 收益'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) Level$/, '$1 等级'],
    [/^([\d\.,]+) Gem$/, '$1 宝石'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) \/ (.+) elves$/, '成本：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);