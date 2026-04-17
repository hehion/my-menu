(function() {
  const menuHTML = `

<style>
/* ── 캔버스 오버레이 ── */
#hhMenuCanvas {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 99990;
  opacity: 0;
  transition: opacity 0.3s ease;
}
#hhMenuCanvas.open {
  pointer-events: auto;
  opacity: 1;
}

/* ── 툴팁 ── */
.hh-menu-tip {
  position: fixed;
  pointer-events: none;
  font-size: 12px;
  letter-spacing: 0.1em;
  color: #f0ede8;
  background: rgba(28,28,26,0.88);
  border: 1px solid rgba(200,196,188,0.2);
  padding: 3px 8px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.15s ease;
  z-index: 99999;
  white-space: nowrap;
  backdrop-filter: blur(4px);
}

/* ── 기존 카드 ── */
.hh-contact-card {
  position:fixed; bottom:25px; right:25px;
  background-color:rgba(238,238,238,0.45);
  backdrop-filter:blur(5px); -webkit-backdrop-filter:blur(5px);
  border-radius:12px; padding:0; text-align:center;
  box-shadow:0 4px 15px rgba(0,0,0,0.05);
  z-index:9999; width:fit-content; min-width:140px;
  overflow:hidden; line-height:1.4;
}
.hh-identity { padding:15px 15px 8px 15px; }
.hh-name { display:block; font-size:18px; font-weight:900; color:#000; text-decoration:none; margin-bottom:2px; transition:transform 0.3s ease-in-out; }
.hh-name:hover { transform:scale(1.1) translateY(-3px); }
.hh-email { font-size:12px; color:#666; }
.hh-social-links { display:flex; justify-content:center; align-items:center; gap:5px; padding:0 15px 12px 15px; flex-wrap:wrap; }
.hh-social-links img { height:auto; object-fit:contain; transition:all 0.2s ease; filter:grayscale(100%); opacity:0.7; }
.hh-social-links img.icon-lg-adj { width:22px; }
.hh-social-links img.icon-default { width:17.5px; }
.hh-social-links img.icon-sm-adj { width:15px; }
.hh-social-links a:hover img { transform:scale(1.3); filter:grayscale(0%); opacity:1; }
.hh-business { font-size:13px; color:#555; padding:10px 15px; border-top:1px solid rgba(0,0,0,0.08); }
.hh-business a { color:#2288bb; text-decoration:none; font-weight:bold; }
.divider { margin:0 5px; color:#ccc; }
.hh-brand-name { margin-top:4px; font-size:11px; color:#999; }
.hh-integrated-top { background-color:rgba(34,34,34,0.5); color:#fff; font-size:15px; font-weight:bold; padding:10px 0; cursor:pointer; transition:all 0.3s ease; user-select:none; }
.hh-integrated-top:hover { background-color:rgba(0,0,0,0.75); letter-spacing:1px; }

/* 헤더 숨기기 */
.title, h1.title, .header-outer, #header-outer, #header, .header, .header-inner, #header-inner { display:none !important; }

/* ── Pill 네비바 ── */
@keyframes hhStarFloat {
  0%, 100% { transform: translateY(0); box-shadow: 0 0 10px 2px rgba(200,188,140,0.3), inset 0 0 8px rgba(200,188,140,0.2); }
  50% { transform: translateY(var(--float-y)); box-shadow: 0 0 20px 6px rgba(200,188,140,0.5), inset 0 0 12px rgba(200,188,140,0.4); }
}

#hhPillNav {
  position: fixed;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 18px;
  background: transparent;
  padding: 0;
  height: 54px;
  z-index: 99998;
  user-select: none;
  white-space: nowrap;
}

.hh-pill-sep {
  width: 1px;
  height: 14px;
  background: rgba(200,188,140,0.15);
  flex-shrink: 0;
}

.hh-pill-item {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.hh-star-node {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(45, 42, 35, 0.95);
  border: 1px solid rgba(200, 188, 140, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: hhStarFloat var(--float-dur) ease-in-out infinite;
  color: rgba(224, 218, 200, 0.8);
  font-size: 14px;
  letter-spacing: 0.05em;
  font-weight: bold;
}

.hh-star-node:hover {
  background: rgba(60, 55, 45, 1);
  color: #fff8ee;
  transform: scale(1.1) !important;
  box-shadow: 0 0 25px 8px rgba(200, 188, 140, 0.6) !important;
}

.hh-star-node.active {
  background: rgba(200, 188, 140, 0.25);
  border-color: #fff8ee;
  color: #fff8ee;
  box-shadow: 0 0 20px 6px rgba(255, 245, 200, 0.5) !important;
}

.hh-pill-feel-btn { 
  font-style: italic; 
  color: rgba(180,160,210,0.75); 
}
.hh-pill-feel-btn.active { 
  color: rgba(220,200,255,1.0); 
  border-color: rgba(200,180,255,0.6);
}
</style>

<canvas id="hhMenuCanvas"></canvas>
<div class="hh-menu-tip" id="hhMenuTip"></div>

<div id="hhPillNav">
  <div class="hh-pill-item hh-star-node" id="hhPillMenuBtn" style="--float-y: -2px; --float-dur: 2.5s;">ALL</div>
  <div class="hh-pill-sep"></div>
  
  <div class="hh-pill-item hh-star-node" data-group="0" style="--float-y: -4px; --float-dur: 3s;">HH</div>
  <div class="hh-pill-item hh-star-node" data-group="1" style="--float-y: 3px; --float-dur: 3.5s;">ARCH</div>
  <div class="hh-pill-item hh-star-node" data-group="2" style="--float-y: -5px; --float-dur: 4s;">DO</div>
  <div class="hh-pill-item hh-star-node" data-group="3" style="--float-y: 2px; --float-dur: 3.2s;">FLOW</div>
  
  <div class="hh-pill-sep"></div>
  <div class="hh-pill-item hh-star-node hh-pill-feel-btn" id="hhPillFeelBtn" style="--float-y: 4px; --float-dur: 2.8s;">FEEL</div>
</div>

<div class="hh-contact-card">
  <div class="hh-identity">
    <a href="https://hehion.blogspot.com/p/hh.html" class="hh-name">HH입니다</a>
    <span class="hh-email">hehion@gmail.com</span>
  </div>
  <div class="hh-social-links" style="padding-bottom:5px;">
    <a href="https://youtube.com/@hehion" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlB4TacRmM-lLGDYOUT0zGMlEG-l0RRbEC5wp8eNfCG7yA1pJznKXepQ0q8Kyb1WWTxGYQJ_-mWcfbsQZZOjd3k3vxlS0p5Q08FgM_7dEn7kLHWNhle-vG0IraKIrcGPnX-iC0jSiuEBnI-PkA-eVDv9DaWT-Vp5De5idSH2UCAUUMCjqPrFxAJU6LaA4/w200-h200/free-icon-play-10871272.png" alt="youtube" class="icon-lg-adj"></a>
    <a href="https://www.instagram.com/hehion.c/" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0HBAa_lUJNMHoM1ny-SvSs50Yf6NRzB_0iaKUuYQ6dl1Z3aJzPtdbKUsg7gwzjDm-QmErgdNOwDMdst3L6Iragp1Kbj3qmHTeO8027e8004qn4I6aufaVhbr2F3Ml04RbREyLgCAYHftegHmB22PYsVOS2PY1mSyATlHfAHkykfImt8cLW763WANKs3E/w200-h200/free-icon-instagram-1077042.png" alt="instagram" class="icon-sm-adj"></a>
    <a href="https://www.facebook.com/hehion" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJj5a46wvVXEJesvPE0PmXJiVPJ7mUdDovNJhFr5puIAAgkr57-BwmHxdzkQoFSkX2s4G9-SvypHeIRNpuI73nPJt4VdQ48WxWyNumn0qB9AUUClUkzwqQms7kAXJxO55RF3pDfR79EuWhmLrLZ6Jnd2A0gtGuekJ21m2DcfqZkXSQ0JBJ8Rctp-sjMo0/w199-h200/free-icon-facebook-1077041.png" alt="facebook" class="icon-sm-adj"></a>
    <a href="https://twitter.com/hehion" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWh3hHCJgzBelSQUAFsQxOXzgRhExWLEfaoTG47L5bH3kqiHPozO3MhpOf5MKAY-6lJQZR6KthdQD2xWBJSR2hjaaZo_R0Q0IOOnxfRusgB_faeah3WvV3-dVA0osMbLEiRQJa0GEUWSN18ww5x7WkAx_b7W1ovLTqnjfGLzCMPrPSUoqGcmYsKsx_gIY/w200-h200/sl_z_072523_61700_05.png" alt="x" class="icon-default"></a>
    <a href="https://hehion.blogspot.com/p/blog-page_13.html"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJR-pUozdPG8MkOYjSvHua2W1G6CBLqL_9m5-PCiPAZa8cn5XZaLJUTmbEYGv-83cA0lcWFTmqYnXLshG4SmpcRdr1Th4c3567zKxYa-JZt9QfFQoa6uJnKPDniwdv9BJRAg5ExiJAbOzv_9C2zZHePye-7cANWJQuiAVnygJYhgGtu69WDTMLUfEXiqk/w200-h200/free-icon-kakao-talk-2111466.png" alt="kakao" class="icon-default"></a>
  </div>
  <div class="hh-social-links" style="padding-top:0; padding-bottom:12px;">
    <a href="https://brunch.co.kr/@hehion" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTKV7FiKVVCJWm2vEmDlzwRqrENGPefZr2GLUjkeT3kZTygSsvyhw959-emmV17sZ2rWwcLwPEZuGG98B4m4SMH8WfCcuDxx9hS9PZbxnKVj_EbcpafV5dfnCub3Iyhop8XVE4uNvE-9QgKgonDuUlSLL29nXPBUbc58pA2Arz2lx46cikKymOGkh8pMk/s320/zwv8-ymenlfEcYrfDRTpLYuQwfQ.jpg" alt="brunch" class="icon-default"></a>
    <a href="https://smartstore.naver.com/hehion" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiP7hbViO0195C-Ur5u9aOErxK7_seKLEFHv6htcmJD6Y4oZflgvW0Pd4ccnhXjy-69UgMbdbES7B0Wxk6jsjNpx8rjb7icn9PW7VVgSfGoxehvpjNPPujp81NmboIYwzOYfoi8x0viuQR-D2dfWsY0dS81U4p8b9IuzOU6FFlbFmAFkvu8rAcGPv2F4dk/s1600/smartstore.png" alt="smartstore" class="icon-default"></a>
    <a href="https://www.tiktok.com/@hehion" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgikhhEX255bDr60DDiyaRUzlRksOOEC3SV9btjM7x-rTHg5EjlEf_s_7gKKHz3XXEb2k1MhsvIMpJdkXs2q-oEwdN2bl04oMdtXdj8PPV943iHe84haxmyRQulxRzk3p3svHC3Gxm0Av4VFAtcG_Fh468jLwa_uSNzJk8R0fmyv1a_FQx1p8PqZDcwu8k/s320/tictok.png" alt="tiktok" class="icon-default"></a>
    <a href="https://www.threads.com/@hehion.c" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqfsGOi7NXv0Jyld5_W3DdI8Y2tzdziZ-m-PuU9gSMts8qz_EI04JvN6R7vnw3j08dGjd1LxyvhN6ofvTpHeNHTRPoOLGeQzyxHLYVueOqwcoe7op9EmmioY-hEotMLRiwgt94YViwdtjC7Alb7Wr8Vd9Bu_JRg8E764cla1ZlxMmEiMGibaLawZa0ey4/s320/threads.png" alt="threads" class="icon-default"></a>
  </div>
  <div class="hh-business">
    <a href="https://kmong.com/search?type=gigs&keyword=%ec%97%90%ec%b9%98%ec%97%90%ec%b9%98" target="_blank">kmong</a>
    <span class="divider">|</span>
    <a href="https://soomgo.com/search/pro?sort=review_count&can_reserve=false&q=%ec%97%90%ec%b9%98%ec%97%90%ec%b9%98&is_promotion_target=false" target="_blank">soomgo</a>
    <div class="hh-brand-name">"에치에치"</div>
  </div>
  <div class="hh-integrated-top" onclick="window.scrollTo({top:0, behavior:'smooth'})">↑ TOP</div>
</div>

<script>
(function() {
  var ZONES = [
    { cx: 0.14, cy: 0.22, sx: 0.07, sy: 0.09 },
    { cx: 0.14, cy: 0.74, sx: 0.07, sy: 0.10 },
    { cx: 0.50, cy: 0.50, sx: 0.13, sy: 0.15 },
    { cx: 0.86, cy: 0.22, sx: 0.07, sy: 0.09 },
    { cx: 0.86, cy: 0.74, sx: 0.07, sy: 0.09 },
  ];

  /* Fisher-Yates 셔플 */
  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  var zoneOrder = shuffle([0,1,3,4]);
  var zHH   = ZONES[zoneOrder[0]];
  var zARCH = ZONES[zoneOrder[1]];
  var zDO   = ZONES[2];
  var zFLOW = ZONES[zoneOrder[2]];
  var zHIDN = ZONES[zoneOrder[3]];

  var GROUPS = [
    { name: 'HH',   cx: zHH.cx,   cy: zHH.cy,   sx: zHH.sx,   sy: zHH.sy,   nodes: [
      { label: 'home',             url: 'https://hehion.blogspot.com' },
      { label: '가라!종이비행기',  url: 'https://hhcenter.blogspot.com/p/flytothe.html' },
      { label: 'hh',               url: 'https://hhcenter.blogspot.com/p/i.html' },
      { label: 'scrap',            url: 'https://hhscrap.blogspot.com' },
    ]},
    { name: 'ARCH', cx: zARCH.cx, cy: zARCH.cy, sx: zARCH.sx, sy: zARCH.sy, nodes: [
      { label: 'archDesign',       url: 'https://hharchdesign.blogspot.com' },
      { label: 'archLesson',       url: 'https://hharchlesson.blogspot.com' },
      { label: 'archStudy',        url: 'https://hharchstudy.blogspot.com' },
      { label: 'archUG',           url: 'https://hharchug.blogspot.com' },
      { label: '..inNC',           url: 'https://hhinnc.blogspot.com' },
      { label: '..inCS',           url: 'https://hhincs.blogspot.com' },
    ]},
    { name: 'DO',   cx: zDO.cx,   cy: zDO.cy,   sx: zDO.sx,   sy: zDO.sy,   nodes: [
      { label: 'Read&wRite',        url: 'https://hhreadwrite.blogspot.com' },
      { label: 'Chef!',            url: 'https://hhchef.blogspot.com' },
      { label: 'Movement',         url: 'https://hh-movement.blogspot.com' },
      { label: 'Language',         url: 'https://hhlanguage.blogspot.com' },
      { label: 'Draw',             url: 'https://hhdrawing.blogspot.com' },
      { label: 'Play&Sing',        url: 'https://hhplaysing.blogspot.com' },
      { label: 'Coding',           url: 'https://hhcoding.blogspot.com' },
      { label: 'MathScience',      url: 'https://hhmathscience.blogspot.com' },
    ]},
    { name: 'FLOW', cx: zFLOW.cx, cy: zFLOW.cy, sx: zFLOW.sx, sy: zFLOW.sy, nodes: [
      { label: 'ZIZ',              url: 'https://hh-hub.blogspot.com' },
      { label: 'flow',             url: 'https://hhflowmap.blogspot.com' },
      { label: 'Learn!Run!',       url: 'https://hhlearnrun.blogspot.com' },
      { label: 'Alone/Together',   url: 'https://hhaloneortogether.blogspot.com' },
    ]},
    { name: '', hidden: true, cx: zHIDN.cx, cy: zHIDN.cy, sx: zHIDN.sx, sy: zHIDN.sy, nodes: [
      { label: "'s today",         url: 'https://hhtoday.blogspot.com' },
      { label: "'s yesterday",     url: 'https://hhyesterday.blogspot.com/p/20130728.html' },
      { label: "'s tomorrow",      url: 'https://hhtomorrow.blogspot.com' },
      { label: "'s \u2605",        url: 'https://hhfavorite.blogspot.com' },
      { label: "'test0",        url: 'https://hh-test0.blogspot.com' },
    ]},
  ];

  var ALL_CONSTELLATIONS = [
    [[0.0,0.2],[-0.5,-0.1],[-0.85,-0.0],[0.55,0.6]],
    [[0.0,-0.8],[0.4,-0.4],[-0.4,-0.4],[0.7,0.1],[-0.7,0.2],[0.0,0.7]],
    [[-0.5,-0.8],[-0.5,0.0],[-0.5,0.8],[0.5,-0.8],[0.5,0.0],[0.5,0.8]],
    [[-0.6,-0.4],[0.6,-0.4],[-0.2,0.3],[0.2,0.3]],
    [[-0.7,-0.5],[-0.3,-0.8],[0.2,-0.6],[0.7,-0.2],[0.5,0.5],[0.0,0.8]],
    [[0.0,-0.9],[0.4,-0.5],[-0.4,-0.4],[0.6,0.0],[-0.2,0.2],[0.3,0.55],[-0.5,0.7],[0.0,0.95]],
    [[0.0,-0.6],[0.6,-0.3],[-0.6,-0.3],[0.4,0.4],[-0.4,0.4],[0.0,0.8]],
    [[-0.1,-0.9],[0.3,-0.55],[-0.3,-0.2],[0.1,0.1],[-0.2,0.4],[0.4,0.65],[0.1,0.82],[-0.3,0.95]],
    [[-0.8,-0.5],[-0.2,-0.8],[0.4,-0.6],[0.9,-0.1],[0.5,0.4],[0.0,0.7],[-0.5,0.5],[-0.9,0.1]],
    [[-0.8,0.0],[-0.3,-0.6],[0.3,-0.5],[0.8,0.0],[0.3,0.6],[-0.3,0.6]],
    [[-0.6,-0.6],[0.0,-0.8],[0.6,-0.5],[0.3,0.1],[-0.4,0.5],[0.1,0.9]],
    [[-0.7,-0.3],[-0.1,0.4],[0.5,-0.5],[0.7,0.4]],
  ];

  var shuffled = shuffle(ALL_CONSTELLATIONS.slice());
  var SHAPES = [
    shuffled[0].slice(0,4),
    shuffled[1].slice(0,6),
    shuffled[2].slice(0,8),
    shuffled[3].slice(0,3),
    shuffled[4].slice(0,4),
  ];

  var NODES = [];
  GROUPS.forEach(function(g, gi) {
    g.nodes.forEach(function(n, ni) {
      NODES.push({ label: n.label, url: n.url, hidden: !!g.hidden, group: gi, ni: ni });
    });
  });

  function init() {
    var canvas = document.getElementById('hhMenuCanvas');
    if (!canvas) { setTimeout(init, 80); return; }

    var ctx = canvas.getContext('2d');
    var W, H, pts = [];
    var isOpen = false;
    var mouse  = { x: -9999, y: -9999 };
    var hoveredIdx = -1;
    var selectedIdx = -1;
    var revealProgress = 0;
    var animDir = 0;
    var t = 0;
    var highlightGroup = -1;

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      scatter();
      pts.forEach(function(p) {
        p.x = p.rx * W;
        p.y = p.ry * H;
      });
    }

    function scatter() {
      pts = NODES.map(function(n) {
        var g = GROUPS[n.group];
        var pat = SHAPES[n.group][n.ni] || [Math.random()*2-1, Math.random()*2-1];
        var jx = (Math.random()-0.5)*0.1, jy = (Math.random()-0.5)*0.1;
        return {
          label: n.label, url: n.url, hidden: n.hidden, group: n.group,
          x: (g.cx + (pat[0]+jx)*g.sx) * W,
          y: (g.cy + (pat[1]+jy)*g.sy) * H,
          rx: g.cx + (pat[0]+jx)*g.sx,
          ry: g.cy + (pat[1]+jy)*g.sy,
          r: n.hidden ? 1.8 + Math.random()*1.0 : 2.4 + Math.random()*1.6,
          phase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.5 + Math.random() * 1.0,
          delay: n.ni * 0.06
        };
      });
      buildLabels();
    }

    function buildLabels() {
      var old = document.getElementById('hhStarLabels');
      if (old) old.parentNode.removeChild(old);
      var wrap = document.createElement('div');
      wrap.id = 'hhStarLabels';
      wrap.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99991;opacity:0;transition:opacity .3s ease;';
      GROUPS.forEach(function(g, gi) {
        if (!g.name) return;
        var el = document.createElement('div');
        el.style.cssText = 'position:absolute;font-size:14px;letter-spacing:.18em;text-transform:uppercase;white-space:nowrap;transform:translate(-50%,-50%);pointer-events:none;will-change:left,top,color;font-weight:bold;';
        el.textContent = g.name;
        var anchorLeft = g.cx * 100;
        var anchorTop  = g.cy * 100;
        wrap.appendChild(el);
        var ph1 = gi * 1.37 + Math.random() * Math.PI * 2;
        var ph2 = gi * 2.11 + Math.random() * Math.PI * 2;
        var ph3 = gi * 0.83 + Math.random() * Math.PI * 2;
        var rx = g.sx * 100 * 0.75;
        var ry = g.sy * 100 * 0.75;
        var spX = 0.13 + (gi % 3) * 0.04;
        var spY = spX  * (1 + 0.37 + (gi % 2) * 0.19);
        var hueBase = gi * 72;
        (function animate(ts) {
          if (!el.parentNode) return;
          var sec = (ts || 0) * 0.001;
          var ox = (Math.cos(sec * spX + ph1) * 0.65 + Math.cos(sec * spX * 1.73 + ph3) * 0.35) * rx;
          var oy = (Math.sin(sec * spY + ph2) * 0.65 + Math.sin(sec * spY * 1.61 + ph1) * 0.35) * ry;
          el.style.left = (anchorLeft + ox) + '%';
          el.style.top  = (anchorTop  + oy) + '%';
          var hue = (hueBase + sec * 28) % 360;
          var isDimmedGroup = (highlightGroup >= 0 && highlightGroup !== gi) || (highlightGroup === 4);
          el.style.color = isDimmedGroup ? 'rgba(180,174,160,0.18)' : 'hsl(' + hue + ',85%,72%)';
          el.style.opacity = isDimmedGroup ? '0.3' : '1';
          requestAnimationFrame(animate);
        })(0);
      });
      var labelItems = [];
      pts.forEach(function(p, pi) {
        var el = document.createElement('div');
        el.style.cssText = 'position:absolute;font-size:14px;color:'+(p.hidden?'rgba(230,224,210,0.08)':'rgba(230,224,210,0.88)')+';white-space:nowrap;pointer-events:auto;cursor:pointer;padding:0.2vmin 0.4vmin;transition:color .15s;user-select:none;line-height:1.5;letter-spacing:0.04em;background:none;';
        el.textContent = p.label;
        el.style.left = (p.rx*100)+'%';
        el.style.top  = (p.ry*100)+'%';
        el.style.transform = 'translate(-50%,-50%)';
        wrap.appendChild(el);
        labelItems.push({p:p, el:el});
        p._labelEl = el;
        p._idx = pi;
        el.addEventListener('mouseenter', function(){
          el.style.color=p.hidden?'rgba(230,224,210,0.3)':'#ffffff';
          p._hovered = true;
        });
        el.addEventListener('mouseleave', function(){
          var dimmed = !!p._dimmed;
          if (highlightGroup === 4 && p.hidden) {
              el.style.color = 'rgba(230,224,210,0.08)'; 
          } else {
              el.style.color=p.hidden?'rgba(230,224,210,0.08)':(dimmed?'rgba(230,224,210,0.18)':'rgba(230,224,210,0.88)');
          }
          p._hovered = false;
        });
        el.addEventListener('click', function(e){ e.stopPropagation(); window.location.href=p.url; });
      });
      setTimeout(function() {
        var placed = [];
        var vw = window.innerWidth, vh = window.innerHeight;
        var tryAngles = [0,25,-25,50,-50,75,-75,100,-100,125,-125,150,-150,175,-175,180];
        labelItems.forEach(function(item) {
          var p = item.p, el = item.el;
          var sw = el.offsetWidth || 70, sh = el.offsetHeight || 20;
          var g = GROUPS[p.group];
          var dx = p.rx - g.cx, dy = p.ry - g.cy;
          var len = Math.sqrt(dx*dx+dy*dy) || 0.001;
          var nx = dx/len, ny = dy/len;
          var textBonus = Math.max(0, (p.label.length - 4) * 4);
          var baseDist = Math.min(vw,vh)*0.03 + sw*0.1 + textBonus;
          var bestX = -1, bestY = -1;
          for (var ai = 0; ai < tryAngles.length; ai++) {
            var rad = tryAngles[ai]*Math.PI/180;
            var c = Math.cos(rad), s = Math.sin(rad);
            var rx2 = nx*c - ny*s, ry2 = nx*s + ny*c;
            for (var d = baseDist; d <= baseDist*5.0; d += sh*0.7) {
              var cx2 = p.rx*vw + rx2*d, cy2 = p.ry*vh + ry2*d;
              var bx = cx2-sw/2, by = cy2-sh/2;
              if (bx<4||by<4||bx+sw>vw-4||by+sh>vh-4) continue;
              var ok = true;
              for (var k=0; k<placed.length; k++) {
                var pb = placed[k];
                if (bx<pb.x+pb.w+8 && bx+sw+8>pb.x && by<pb.y+pb.h+6 && by+sh+6>pb.y) { ok=false; break; }
              }
              if (ok) { bestX=cx2; bestY=cy2; placed.push({x:bx,y:by,w:sw,h:sh}); break; }
            }
            if (bestX>=0) break;
          }
          if (bestX<0) { bestX = p.rx*vw + nx*baseDist; bestY = p.ry*vh + ny*baseDist; }
          el.style.left = bestX+'px'; el.style.top = bestY+'px'; el.style.transform = 'translate(-50%,-50%)';
        });
      }, 50);
      document.body.appendChild(wrap);
      if (isOpen) wrap.style.opacity = '1';
    }

    function draw() {
      requestAnimationFrame(draw);
      t += 0.012;
      if (animDir === 1 && revealProgress < 1) revealProgress = Math.min(1, revealProgress + 0.04);
      else if (animDir === -1 && revealProgress > 0) {
        revealProgress = Math.max(0, revealProgress - 0.06);
        if (revealProgress === 0) {
          canvas.classList.remove('open');
          var lbl = document.getElementById('hhStarLabels');
          if (lbl) lbl.style.opacity = '0';
        }
      }
      ctx.clearRect(0, 0, W, H);
      if (revealProgress === 0) return;
      ctx.fillStyle = 'rgba(42,42,40,' + (revealProgress * 0.92) + ')';
      ctx.fillRect(0, 0, W, H);
      var minD = 9999, nearIdx = -1;
      for (var i = 0; i < pts.length; i++) {
        var d = Math.hypot(pts[i].x - mouse.x, pts[i].y - mouse.y);
        if (d < minD) { minD = d; nearIdx = i; }
      }
      hoveredIdx = (minD < 52 && revealProgress > 0.5) ? nearIdx : -1;
      function starProgress(p) {
        var dp = (revealProgress - p.delay) / (1 - p.delay * 0.5);
        return Math.max(0, Math.min(1, dp));
      }
      for (var i = 0; i < pts.length; i++) {
        var sp = starProgress(pts[i]);
        if (sp < 0.1) continue;
        for (var j = i+1; j < pts.length; j++) {
          if (pts[i].group !== pts[j].group) continue;
          var dd = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (dd < 160) {
            var isDimmedLine = (!!pts[i]._dimmed || !!pts[j]._dimmed);
            var alpha = (1 - dd/160) * (isDimmedLine ? 0.08 : 0.65) * sp;
            ctx.strokeStyle = 'rgba(225,219,205,' + alpha + ')';
            ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
          }
        }
      }
      if (hoveredIdx >= 0) {
        ctx.strokeStyle = 'rgba(200,196,188,0.35)';
        ctx.lineWidth = 0.8; ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(pts[hoveredIdx].x, pts[hoveredIdx].y); ctx.stroke();
      }
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i], sp = starProgress(p);
        if (sp <= 0) continue;
        var hover = (i === hoveredIdx) || !!p._hovered, selected = (i === selectedIdx);
        var twinkle = Math.sin(t * p.twinkleSpeed + p.phase);
        var dimmed = !!p._dimmed, feelHL = !!p._feelHighlight;
        var brightness = feelHL ? 0.7 + twinkle*0.3 : (p.hidden ? 0.15 + twinkle*0.08 : (dimmed ? 0.10 + twinkle*0.04 : 0.45 + twinkle*0.3));
        var radius = (hover || selected) ? p.r*2.6 : p.r*(0.85 + twinkle*0.18);
        if (dimmed && !hover && !selected && !feelHL) radius *= 0.6;
        if (feelHL) radius *= 1.6;
        radius *= sp;
        if (hover || selected) {
          var grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius*6);
          grd.addColorStop(0, 'rgba(255,250,235,0.28)'); grd.addColorStop(1, 'rgba(255,250,235,0)');
          ctx.beginPath(); ctx.arc(p.x, p.y, radius*6, 0, Math.PI*2); ctx.fillStyle = grd; ctx.fill();
          ctx.beginPath(); ctx.arc(p.x, p.y, radius, 0, Math.PI*2); ctx.fillStyle = '#fff8ee'; ctx.fill();
        } else if (feelHL) {
          var grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius*7);
          grd.addColorStop(0, 'rgba(190,160,255,' + brightness*0.35 + ')'); grd.addColorStop(1, 'rgba(140,100,220,0)');
          ctx.beginPath(); ctx.arc(p.x, p.y, radius*7, 0, Math.PI*2); ctx.fillStyle = grd; ctx.fill();
          ctx.beginPath(); ctx.arc(p.x, p.y, radius, 0, Math.PI*2); ctx.fillStyle = 'rgba(210,190,255,' + brightness + ')'; ctx.fill();
        } else {
          var alpha1 = brightness*0.3*sp, alpha2 = brightness*sp;
          var r1 = 230, g1 = 224, b1 = 210;
          var grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius*3.5);
          grd.addColorStop(0, 'rgba('+r1+','+g1+','+b1+','+alpha1+')'); grd.addColorStop(1, 'rgba('+r1+','+g1+','+b1+',0)');
          ctx.beginPath(); ctx.arc(p.x, p.y, radius*3.5, 0, Math.PI*2); ctx.fillStyle = grd; ctx.fill();
          ctx.beginPath(); ctx.arc(p.x, p.y, radius, 0, Math.PI*2); ctx.fillStyle = 'rgba('+r1+','+g1+','+b1+','+alpha2+')'; ctx.fill();
        }
      }
    }

    /* ── 하이라이트: setInterval 제거 → 이벤트 호출 방식 ── */
    function applyHighlight() {
      if (highlightGroup < 0) {
        pts.forEach(function(p) {
          p._dimmed = false; p._feelHighlight = false;
          if (p._labelEl && !p._hovered) { p._labelEl.style.color = p.hidden ? 'rgba(230,224,210,0.08)' : 'rgba(230,224,210,0.88)'; }
        });
      } else if (highlightGroup === 4) {
        pts.forEach(function(p) {
          p._dimmed = !p.hidden; p._feelHighlight = p.hidden;
          if (p._labelEl && !p._hovered) {
            p._labelEl.style.color = p.hidden ? 'rgba(230,224,210,0.08)' : 'rgba(230,224,210,0.10)';
          }
        });
      } else {
        pts.forEach(function(p) {
          p._dimmed = (p.group !== highlightGroup); p._feelHighlight = false;
          if (p._labelEl && !p._hovered) { p._labelEl.style.color = p.hidden ? 'rgba(230,224,210,0.04)' : (p._dimmed ? 'rgba(230,224,210,0.15)' : 'rgba(255,248,220,1.0)'); }
        });
      }
    }

    function setHighlight(gi) {
      highlightGroup = gi;
      applyHighlight();
    }

    function openMenu() {
      isOpen = true; animDir = 1;
      canvas.classList.add('open');
      var labelsEl = document.getElementById('hhStarLabels');
      if (labelsEl) labelsEl.style.opacity = '1';
    }

    function closeMenu() {
      isOpen = false; animDir = -1;
      var labelsEl = document.getElementById('hhStarLabels');
      if (labelsEl) labelsEl.style.opacity = '0';
    }

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', function(e) { mouse.x = e.clientX; mouse.y = e.clientY; });
    canvas.addEventListener('click', function(e) {
      if (hoveredIdx < 0) { closeMenu(); return; }
      window.location.href = pts[hoveredIdx].url;
    });

    function updatePillActive(gi) {
      var items = document.querySelectorAll('#hhPillNav .hh-pill-item[data-group]');
      items.forEach(function(item) {
        var g = parseInt(item.getAttribute('data-group'));
        if (g === gi) item.classList.add('active'); else item.classList.remove('active');
      });
      var menuBtn = document.getElementById('hhPillMenuBtn');
      if (menuBtn) { if (gi === -1 && isOpen) menuBtn.classList.add('active'); else menuBtn.classList.remove('active'); }
      var feelBtn = document.getElementById('hhPillFeelBtn');
      if (feelBtn) { if (gi === 4) feelBtn.classList.add('active'); else feelBtn.classList.remove('active'); }
    }

    var pillMenuBtn = document.getElementById('hhPillMenuBtn');
    if (pillMenuBtn) {
      pillMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (isOpen) { closeMenu(); setHighlight(-1); updatePillActive(-1); }
        else { openMenu(); setHighlight(-1); updatePillActive(-1); }
      });
    }

    var pillItems = document.querySelectorAll('#hhPillNav .hh-pill-item[data-group]');
    pillItems.forEach(function(item) {
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        var gi = parseInt(item.getAttribute('data-group'));
        if (isOpen && highlightGroup === gi) { closeMenu(); setHighlight(-1); updatePillActive(-1); return; }
        openMenu(); setHighlight(gi); updatePillActive(gi);
      });
    });

    var feelBtn = document.getElementById('hhPillFeelBtn');
    if (feelBtn) {
      feelBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (isOpen && highlightGroup === 4) { closeMenu(); setHighlight(-1); updatePillActive(-1); return; }
        openMenu(); setHighlight(4); updatePillActive(4);
      });
    }

    resize(); draw();
  }
  setTimeout(init, 0);
})();
</script>

`;

  document.write(menuHTML);
  document.write('<style>.title, h1.title, .header-outer, #header-outer, #header, .header, .header-inner, #header-inner { display: none !important; }</style>');
})();