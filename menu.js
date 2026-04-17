(function() {
  const menuHTML = `
<style>
/* ── 트리거 버튼 ── */
@keyframes hhBtnPulse {
  0%   { box-shadow: 0 0 8px 2px rgba(200,188,140,0.18), 0 0 0px 0px rgba(200,188,140,0); }
  50%  { box-shadow: 0 0 18px 8px rgba(200,188,140,0.38), 0 0 38px 18px rgba(200,188,140,0.10); }
  100% { box-shadow: 0 0 8px 2px rgba(200,188,140,0.18), 0 0 0px 0px rgba(200,188,140,0); }
}
@keyframes hhBtnPulseOpen {
  0%   { box-shadow: 0 0 12px 4px rgba(255,240,180,0.35), 0 0 0px 0px rgba(255,220,120,0); }
  50%  { box-shadow: 0 0 28px 14px rgba(255,240,180,0.55), 0 0 55px 28px rgba(255,220,120,0.18); }
  100% { box-shadow: 0 0 12px 4px rgba(255,240,180,0.35), 0 0 0px 0px rgba(255,220,120,0); }
}
.hh-star-btn {
  position: fixed;
  top: 14px;
  left: 14px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(26,26,24,0.75);
  cursor: pointer;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 8px 2px rgba(200,188,140,0.18);
  transition: background 0.25s, transform 0.2s;
  user-select: none;
  animation: hhBtnPulse 2.8s ease-in-out infinite;
}
.hh-star-btn:hover { background: rgba(26,26,24,0.9); transform: scale(1.1); }
.hh-star-btn.open { animation: hhBtnPulseOpen 1.8s ease-in-out infinite; }
.hh-star-btn-text {
  font-size: 11px;
  color: rgba(230,224,210,0.85);
  letter-spacing: 0.06em;
  text-transform: lowercase;
  line-height: 1;
  transition: color 0.3s ease;
  pointer-events: none;
  text-align: center;
  white-space: nowrap;
}
.hh-star-btn.open .hh-star-btn-text { color: #fff8ee; }

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
</style>

<canvas id="hhMenuCanvas"></canvas>
<div class="hh-menu-tip" id="hhMenuTip"></div>

<div class="hh-star-btn" id="hhStarBtn">
  <span class="hh-star-btn-text">menu</span>
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
    <a href="https://www.tiktok.com/@hehion" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgikhhEX255bDr60DDiyaRUzlRksOOEC3SV9btjM7x-rTHg5EjlEf_s_7gKKHz3XXEb2k1MhsvIMpJdkXs2q-oEwdN2bl04oMdtXdj8PPV943iHe84haxmyRQulxRzk3p3svHC3Gxm0Av4VFAtcG_Fh468jLwa_uSNzJk8R0fmyv1a_FQx1p8PqZDcwu8k/s320/tictok.png" alt="smartstore" class="icon-default"></a>
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
  // 그룹 정의 (별자리 묶음)
  // 5개 구역 (겹치지 않게 화면 분할)
  // 구역: 좌상/좌하/중앙/우상/우하 — 로드마다 그룹을 섞어서 배치
  var ZONES = [
    { cx: 0.14, cy: 0.22, sx: 0.07, sy: 0.09 },  // 좌상
    { cx: 0.14, cy: 0.74, sx: 0.07, sy: 0.10 },  // 좌하
    { cx: 0.50, cy: 0.50, sx: 0.13, sy: 0.15 },  // 중앙
    { cx: 0.86, cy: 0.22, sx: 0.07, sy: 0.09 },  // 우상
    { cx: 0.86, cy: 0.74, sx: 0.07, sy: 0.09 },  // 우하
  ];
  // 구역 순서 랜덤 (단, 중앙은 항상 DO 그룹용으로 고정)
  var zoneOrder = [0,1,3,4].sort(function(){ return Math.random()-0.5; });
  // 최종 zone 배정: HH→zoneOrder[0], ARCH→zoneOrder[1], DO→중앙(2), FLOW→zoneOrder[2], 숨김→zoneOrder[3]
  var zHH   = ZONES[zoneOrder[0]];
  var zARCH = ZONES[zoneOrder[1]];
  var zDO   = ZONES[2];
  var zFLOW = ZONES[zoneOrder[2]];
  var zHIDN = ZONES[zoneOrder[3]];

  var GROUPS = [
    { name: 'HH',   cx: zHH.cx,   cy: zHH.cy,   sx: zHH.sx,   sy: zHH.sy,   nodes: [
      { label: 'home',             url: 'https://hehion.blogspot.com/' },
      { label: '가라!종이비행기',  url: 'https://hhcenter.blogspot.com/p/flytothe.html' },
      { label: 'hh',               url: 'https://hhcenter.blogspot.com/p/i.html' },
      { label: 'scrap',            url: 'https://hhscrap.blogspot.kr/' },
    ]},
    { name: 'ARCH', cx: zARCH.cx, cy: zARCH.cy, sx: zARCH.sx, sy: zARCH.sy, nodes: [
      { label: 'archDesign',       url: 'https://hharchdesign.blogspot.com' },
      { label: 'archLesson',       url: 'https://hharchlesson.blogspot.com' },
      { label: 'archStudy',        url: 'https://hharchstudy.blogspot.com' },
      { label: 'archUG',           url: 'https://hharchug.blogspot.kr/' },
      { label: '..inNC',           url: 'https://hhinnc.blogspot.kr' },
      { label: '..inCS',           url: 'https://hhincs.blogspot.com/2018/06/20185.html' },
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
      { label: 'flow',             url: 'https://hhflowmap.blogspot.com/2026/04/flow-map.html' },
      { label: 'Learn!Run!',             url: 'https://hhlearnrun.blogspot.com' },
      { label: 'AloneorTogether',  url: 'https://hhaloneortogether.blogspot.com/p/contents.html' },
    ]},
    { name: '', hidden: true, cx: zHIDN.cx, cy: zHIDN.cy, sx: zHIDN.sx, sy: zHIDN.sy, nodes: [
      { label: "'s today",         url: 'https://hhtoday.blogspot.kr/' },
      { label: "'s yesterday",     url: 'https://hhyesterday.blogspot.kr/p/20130728.html' },
      { label: "'s tomorrow",      url: 'https://hhtomorrow.blogspot.com' },
      { label: "'s \u2605",       url: 'https://hhfavorite.blogspot.kr/' },
    ]},
  ];
  // 12개 황도 별자리 좌표 풀 (노드 수에 맞게 슬라이싱해서 사용)
  var ALL_CONSTELLATIONS = [
    // 양자리 Aries
    [[0.0,0.2],[-0.5,-0.1],[-0.85,-0.0],[0.55,0.6]],
    // 황소자리 Taurus (6)
    [[0.0,-0.8],[0.4,-0.4],[-0.4,-0.4],[0.7,0.1],[-0.7,0.2],[0.0,0.7]],
    // 쌍둥이자리 Gemini (6)
    [[-0.5,-0.8],[-0.5,0.0],[-0.5,0.8],[0.5,-0.8],[0.5,0.0],[0.5,0.8]],
    // 게자리 Cancer (4)
    [[-0.6,-0.4],[0.6,-0.4],[-0.2,0.3],[0.2,0.3]],
    // 사자자리 Leo (6)
    [[-0.7,-0.5],[-0.3,-0.8],[0.2,-0.6],[0.7,-0.2],[0.5,0.5],[0.0,0.8]],
    // 처녀자리 Virgo (8)
    [[0.0,-0.9],[0.4,-0.5],[-0.4,-0.4],[0.6,0.0],[-0.2,0.2],[0.3,0.55],[-0.5,0.7],[0.0,0.95]],
    // 천칭자리 Libra (6)
    [[0.0,-0.6],[0.6,-0.3],[-0.6,-0.3],[0.4,0.4],[-0.4,0.4],[0.0,0.8]],
    // 전갈자리 Scorpius (8)
    [[-0.1,-0.9],[0.3,-0.55],[-0.3,-0.2],[0.1,0.1],[-0.2,0.4],[0.4,0.65],[0.1,0.82],[-0.3,0.95]],
    // 사수자리 Sagittarius (8)
    [[-0.8,-0.5],[-0.2,-0.8],[0.4,-0.6],[0.9,-0.1],[0.5,0.4],[0.0,0.7],[-0.5,0.5],[-0.9,0.1]],
    // 염소자리 Capricornus (6)
    [[-0.8,0.0],[-0.3,-0.6],[0.3,-0.5],[0.8,0.0],[0.3,0.6],[-0.3,0.6]],
    // 물병자리 Aquarius (6)
    [[-0.6,-0.6],[0.0,-0.8],[0.6,-0.5],[0.3,0.1],[-0.4,0.5],[0.1,0.9]],
    // 물고기자리 Pisces (4)
    [[-0.7,-0.3],[-0.1,0.4],[0.5,-0.5],[0.7,0.4]],
  ];

  // 그룹별로 랜덤 별자리 선택 (페이지 로드마다 다르게)
  var shuffled = ALL_CONSTELLATIONS.slice().sort(function(){ return Math.random()-0.5; });
  var SHAPES = [
    shuffled[0].slice(0,4),   // HH: 4개
    shuffled[1].slice(0,6),   // ARCH: 6개
    shuffled[2].slice(0,8),   // DO: 8개
    shuffled[3].slice(0,3),   // FLOW: 3개
    shuffled[4].slice(0,4),   // 숨김: 4개
  ];
  // NODES: 그룹에서 flat하게 생성 (group 인덱스 포함)
  var NODES = [];
  GROUPS.forEach(function(g, gi) {
    g.nodes.forEach(function(n, ni) {
      NODES.push({ label: n.label, url: n.url, hidden: !!g.hidden, group: gi, ni: ni });
    });
  });

  function init() {
    var canvas  = document.getElementById('hhMenuCanvas');
    var btn     = document.getElementById('hhStarBtn');
    if (!canvas || !btn) { setTimeout(init, 80); return; }

    var ctx = canvas.getContext('2d');
    var W, H, pts = [];
    var isOpen = false;
    var mouse  = { x: -9999, y: -9999 };
    var hoveredIdx = -1;
    var selectedIdx = -1;
    var revealProgress = 0; // 0→1 펼쳐지는 진행도
    var animDir = 0; // 1=열기, -1=닫기, 0=정지
    var t = 0;

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      scatter();
      // x,y를 W,H 기준으로 재계산
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
      // 기존 라벨 제거
      var old = document.getElementById('hhStarLabels');
      if (old) old.parentNode.removeChild(old);
      var wrap = document.createElement('div');
      wrap.id = 'hhStarLabels';
      wrap.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99991;opacity:0;transition:opacity .3s ease;';
      // 그룹명 — 배회 + 무지개색
      GROUPS.forEach(function(g, gi) {
        if (!g.name) return;
        var el = document.createElement('div');
        el.style.cssText = 'position:absolute;font-size:1.5vmin;letter-spacing:.18em;text-transform:uppercase;white-space:nowrap;transform:translate(-50%,-50%);pointer-events:none;will-change:left,top,color;';
        el.textContent = g.name;
        var baseLeft = g.cx * 100;
        var baseTop  = g.cy * 100;
        el.style.left = baseLeft + '%';
        el.style.top  = baseTop  + '%';
        wrap.appendChild(el);

        // 배회 파라미터 — 별자리 바운더리(sx,sy) 전체를 유영
        var ph1 = gi * 1.37 + Math.random() * Math.PI * 2;
        var ph2 = gi * 2.11 + Math.random() * Math.PI * 2;
        var ph3 = gi * 0.83 + Math.random() * Math.PI * 2;
        // sx,sy 를 % 단위로 변환해 범위로 사용
        var rx = g.sx * 100 * 0.75;   // 좌우 진폭 (바운더리 75%)
        var ry = g.sy * 100 * 0.75;   // 상하 진폭
        // 서로소에 가까운 속도 비율 → 리사주 곡선처럼 반복 없이 자유롭게 순회
        var spX = 0.13 + (gi % 3) * 0.04;
        var spY = spX  * (1 + 0.37 + (gi % 2) * 0.19);
        var hueBase = gi * 72;
        // 기준점: 그룹 중심 (기존 baseTop은 버리고 cy 사용)
        var anchorLeft = g.cx * 100;
        var anchorTop  = g.cy * 100;

        (function animate(ts) {
          if (!el.parentNode) return;
          var sec = (ts || 0) * 0.001;
          // X: 두 사인 합산 → 더 불규칙한 좌우 흔들림
          var ox = (Math.cos(sec * spX + ph1) * 0.65
                  + Math.cos(sec * spX * 1.73 + ph3) * 0.35) * rx;
          // Y: 역시 두 사인 → 상하도 불규칙
          var oy = (Math.sin(sec * spY + ph2) * 0.65
                  + Math.sin(sec * spY * 1.61 + ph1) * 0.35) * ry;
          el.style.left = (anchorLeft + ox) + '%';
          el.style.top  = (anchorTop  + oy) + '%';
          var hue = (hueBase + sec * 28) % 360;
          el.style.color = 'hsl(' + hue + ',85%,72%)';
          requestAnimationFrame(animate);
        })(0);
      });
      // 노드 라벨 — wrap(absolute) 안에 배치 + 겹침 방지
      var labelItems = [];
      pts.forEach(function(p, pi) {
        var el = document.createElement('div');
        el.style.cssText = 'position:absolute;font-size:2.5vmin;color:'+(p.hidden?'rgba(230,224,210,0.08)':'rgba(230,224,210,0.88)')+';white-space:nowrap;pointer-events:auto;cursor:pointer;padding:0.2vmin 0.4vmin;transition:color .15s;user-select:none;line-height:1.5;letter-spacing:0.04em;background:none;';
        el.textContent = p.label;
        // 일단 별 위치에 배치
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
          el.style.color=p.hidden?'rgba(230,224,210,0.08)':'rgba(230,224,210,0.88)';
          p._hovered = false;
        });
        el.addEventListener('click', function(e){ e.stopPropagation(); window.location.href=p.url; });
      });

      // 렌더링 후 겹침 보정
      setTimeout(function() {
        var placed = [];
        var vw = window.innerWidth, vh = window.innerHeight;
        var tryAngles = [0,25,-25,50,-50,75,-75,100,-100,125,-125,150,-150,175,-175,180];

        labelItems.forEach(function(item) {
          var p = item.p, el = item.el;
          var sw = el.offsetWidth || 70;
          var sh = el.offsetHeight || 20;
          var g = GROUPS[p.group];
          var dx = p.rx - g.cx, dy = p.ry - g.cy;
          var len = Math.sqrt(dx*dx+dy*dy) || 0.001;
          var nx = dx/len, ny = dy/len;
          var baseDist = Math.min(vw,vh)*0.025 + sw*0.05;
          var bestX = -1, bestY = -1;

          for (var ai = 0; ai < tryAngles.length; ai++) {
            var rad = tryAngles[ai]*Math.PI/180;
            var c = Math.cos(rad), s = Math.sin(rad);
            var rx2 = nx*c - ny*s, ry2 = nx*s + ny*c;
            for (var d = baseDist; d <= baseDist*3.5; d += sh*0.7) {
              var cx2 = p.rx*vw + rx2*d;
              var cy2 = p.ry*vh + ry2*d;
              var bx = cx2-sw/2, by = cy2-sh/2;
              if (bx<4||by<4||bx+sw>vw-4||by+sh>vh-4) continue;
              var ok = true;
              for (var k=0; k<placed.length; k++) {
                var pb = placed[k];
                if (bx<pb.x+pb.w+5 && bx+sw+5>pb.x && by<pb.y+pb.h+5 && by+sh+5>pb.y) { ok=false; break; }
              }
              if (ok) { bestX=cx2; bestY=cy2; placed.push({x:bx,y:by,w:sw,h:sh}); break; }
            }
            if (bestX>=0) break;
          }
          if (bestX<0) {
            bestX = p.rx*vw + nx*baseDist;
            bestY = p.ry*vh + ny*baseDist;
            placed.push({x:bestX-sw/2,y:bestY-sh/2,w:sw,h:sh});
          }
          el.style.left = bestX+'px';
          el.style.top  = bestY+'px';
          el.style.transform = 'translate(-50%,-50%)';
        });
      }, 50);
      document.body.appendChild(wrap);
      // canvas open 상태면 라벨도 바로 보이게
      if (isOpen) wrap.style.opacity = '1';
    }

    function draw() {
      requestAnimationFrame(draw);
      t += 0.012;

      // 진행도 애니메이션
      if (animDir === 1 && revealProgress < 1) {
        revealProgress = Math.min(1, revealProgress + 0.04);
      } else if (animDir === -1 && revealProgress > 0) {
        revealProgress = Math.max(0, revealProgress - 0.06);
        if (revealProgress === 0) {
          canvas.classList.remove('open');
          var lbl = document.getElementById('hhStarLabels');
          if (lbl) lbl.style.opacity = '0';
        }
      }

      ctx.clearRect(0, 0, W, H);
      if (revealProgress === 0) return;

      // 차콜 배경 오버레이 (대문 스타일)
      ctx.fillStyle = 'rgba(42,42,40,' + (revealProgress * 0.92) + ')';
      ctx.fillRect(0, 0, W, H);

      // 가장 가까운 노드
      var minD = 9999, nearIdx = -1;
      for (var i = 0; i < pts.length; i++) {
        var d = Math.hypot(pts[i].x - mouse.x, pts[i].y - mouse.y);
        if (d < minD) { minD = d; nearIdx = i; }
      }
      hoveredIdx = (minD < 52 && revealProgress > 0.5) ? nearIdx : -1;

      // 별별 유효 진행도 (delay 반영)
      function starProgress(p) {
        var dp = (revealProgress - p.delay) / (1 - p.delay * 0.5);
        return Math.max(0, Math.min(1, dp));
      }

      // 연결선 (같은 그룹끼리만)
      for (var i = 0; i < pts.length; i++) {
        var sp = starProgress(pts[i]);
        if (sp < 0.1) continue;
        for (var j = i+1; j < pts.length; j++) {
          if (pts[i].group !== pts[j].group) continue;
          var dd = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          var maxD = 160;
          if (dd < maxD) {
            var alpha = (1 - dd/maxD) * 0.65 * sp;
            ctx.strokeStyle = 'rgba(225,219,205,' + alpha + ')';
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // 마우스 → 호버 선
      if (hoveredIdx >= 0) {
        ctx.strokeStyle = 'rgba(200,196,188,0.35)';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(pts[hoveredIdx].x, pts[hoveredIdx].y);
        ctx.stroke();
      }

      // 별 그리기
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        var sp = starProgress(p);
        if (sp <= 0) continue;

        var hover    = (i === hoveredIdx) || !!p._hovered;
        var selected = (i === selectedIdx);
        var twinkle  = Math.sin(t * p.twinkleSpeed + p.phase);
        var brightness = p.hidden ? 0.15 + twinkle*0.08 : 0.45 + twinkle*0.3;
        var radius = (hover || selected) ? p.r*2.6 : p.r*(0.85 + twinkle*0.18);
        radius *= sp;

        if (hover || selected) {
          // 호버/선택 — 따뜻한 흰빛 글로우
          var grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius*6);
          grd.addColorStop(0, 'rgba(255,250,235,0.28)');
          grd.addColorStop(1, 'rgba(255,250,235,0)');
          ctx.beginPath(); ctx.arc(p.x, p.y, radius*6, 0, Math.PI*2);
          ctx.fillStyle = grd; ctx.fill();
          ctx.beginPath(); ctx.arc(p.x, p.y, radius, 0, Math.PI*2);
          ctx.fillStyle = '#fff8ee';
          ctx.fill();
        } else {
          // 일반 별 — 흰빛 반짝임
          var alpha1 = brightness*0.3*sp;
          var alpha2 = brightness*sp;
          var r1 = 230, g1 = 224, b1 = 210;
          var grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius*3.5);
          grd.addColorStop(0, 'rgba('+r1+','+g1+','+b1+','+alpha1+')');
          grd.addColorStop(1, 'rgba('+r1+','+g1+','+b1+',0)');
          ctx.beginPath(); ctx.arc(p.x, p.y, radius*3.5, 0, Math.PI*2);
          ctx.fillStyle = grd; ctx.fill();
          ctx.beginPath(); ctx.arc(p.x, p.y, radius, 0, Math.PI*2);
          ctx.fillStyle = 'rgba('+r1+','+g1+','+b1+','+alpha2+')';
          ctx.fill();
        }
      }
    }

    // ── 이벤트 ──
    window.addEventListener('resize', resize);

    canvas.addEventListener('mousemove', function(e) {
      mouse.x = e.clientX; mouse.y = e.clientY;
    });

    canvas.addEventListener('click', function(e) {
      if (hoveredIdx < 0) {
        isOpen = false;
        animDir = -1;
        btn.classList.remove('open');
        var lbl = document.getElementById('hhStarLabels');
        if (lbl) lbl.style.opacity = '0';
        return;
      }
      window.location.href = pts[hoveredIdx].url;
    });

    canvas.addEventListener('touchstart', function(e) {
      var touch = e.touches[0];
      mouse.x = touch.clientX; mouse.y = touch.clientY;
      var minD = 9999, nearIdx = -1;
      for (var i = 0; i < pts.length; i++) {
        var d = Math.hypot(pts[i].x - touch.clientX, pts[i].y - touch.clientY);
        if (d < minD) { minD = d; nearIdx = i; }
      }
      if (minD < 60) {
        window.location.href = pts[nearIdx].url;
      } else {
        isOpen = false; animDir = -1; btn.classList.remove('open');
        var lbl = document.getElementById('hhStarLabels');
        if (lbl) lbl.style.opacity = '0';
      }
      e.preventDefault();
    }, { passive: false });

    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      isOpen = !isOpen;
      var labelsEl = document.getElementById('hhStarLabels');
      if (isOpen) {
        canvas.classList.add('open');
        animDir = 1;
        btn.classList.add('open');
        if (labelsEl) labelsEl.style.opacity = '1';
        selectedIdx = -1; touchSelected = -1;
        tip.style.opacity = '0';
      } else {
        animDir = -1;
        btn.classList.remove('open');
        if (labelsEl) labelsEl.style.opacity = '0';
        selectedIdx = -1; touchSelected = -1;
        tip.style.opacity = '0';
      }
    });

    resize();
    draw();
  }

  setTimeout(init, 0);
})();
</script>
`;

  document.write(menuHTML);
})();