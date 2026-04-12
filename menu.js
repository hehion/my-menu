(function() {
  const menuHTML = `
<div align="left" style="font-size: 2.5vmin;">
<a href="https://hehion.blogspot.com/p/flytothe.html"><b>가라!종이비행기</b></a>
　<a href="https://hehion.blogspot.com/p/i.html"><b>hh</b></a>
　<a href="https://hhtoday.blogspot.kr/" style="font-size: 2.5vmin;"><font color="fafafa">'s today</font></a>
　<a href="https://hhyesterday.blogspot.kr/p/20130728.html" style="font-size: 2.5vmin;"><font color="fafafa">'s yesterday</font></a>
　<a href="https://hhtomorrow.blogspot.com" style="font-size: 2.5vmin;"><font color="fafafa">'s tomorrow</font></a>
　<a href="https://hhfavorite.blogspot.kr/" style="font-size: 2.5vmin;"><font color="fafafa">'s ☆</font></a>
</div>

<div style="display: flex; justify-content: space-between; align-items: baseline; font-size: 2.5vmin;">
  <div style="white-space: nowrap;">
    <a href="https://hehion.blogspot.kr/"><b>home</b></a>
    　<a href="https://hhscrap.blogspot.kr/" style="font-size: 2.5vmin;">scrap</a>
  </div>
  <div style="text-align: right;">
    <a href="https://hharchdesign.blogspot.com"><font style="font-size: 1.8vmin;">arch</font>Design</a>
    <a href="https://hharchlesson.blogspot.com"><font style="font-size: 1.8vmin;">arch</font>Lesson</a>
    <a href="https://hharchstudy.blogspot.com"><font style="font-size: 1.8vmin;">arch</font>Study</a>
    <a href="https://hharchug.blogspot.kr/">ARCH<font style="font-size: 1.8vmin;">ug</font></a>
    <a href="https://hhinnc.blogspot.kr"><font style="font-size: 1.8vmin;">..in</font>NC</a>
    <a href="https://hhincs.blogspot.com/2018/06/20185.html"><font style="font-size: 1.8vmin;">..in</font>CS</a>
  </div>
</div>

<div align="right" style="font-size: 2.5vmin;">
　<a href="https://hhlearnrun.blogspot.com">Learn!Run!</a>
　<a href="https://hhchef.blogspot.com">Chef!</a>
　<a href="https://hh-movement.blogspot.com">Move<font style="font-size: 1.8vmin;">ment</font></a>
　<a href="https://hhlanguage.blogspot.com">L<font style="font-size: 1.8vmin;">anguage</font></a>
</div>

<div style="display: flex; justify-content: space-between; align-items: baseline; font-size: 2.5vmin;">
  <div>
    <a href="https://hehion.blogspot.com/p/hehion-system-22.html" class="ziz-blink">ZIZ</a>
　<a href="https://hhflowmap.blogspot.com/2026/04/flow-map.html" class="water-flow">flow</a>
  </div>
  <div style="text-align: right;">
    　<a href="https://hhdrawing.blogspot.com">Draw</a>
    　<a href="https://hhplaysing.blogspot.com">Play<font style="font-size: 1.8vmin;">&amp;</font>Sing</a>
    　<a href="https://hhcoding.blogspot.com">C<font style="font-size: 1.8vmin;">oding</font></a>
    　<a href="https://hhmathscience.blogspot.com">M<font style="font-size: 1.8vmin;">ath</font>S<font style="font-size: 1.8vmin;">cience</font></a>
  </div>
</div>

<hr />

<div class="hh-contact-card">
  <div class="hh-identity">
    <a href="https://hehion.blogspot.com/p/hh.html" class="hh-name">HH입니다</a>
    <span class="hh-email">hehion@gmail.com</span>
  </div>

  <div class="hh-social-links">
    <a href="https://youtube.com/@hehion" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlB4TacRmM-lLGDYOUT0zGMlEG-l0RRbEC5wp8eNfCG7yA1pJznKXepQ0q8Kyb1WWTxGYQJ_-mWcfbsQZZOjd3k3vxlS0p5Q08FgM_7dEn7kLHWNhle-vG0IraKIrcGPnX-iC0jSiuEBnI-PkA-eVDv9DaWT-Vp5De5idSH2UCAUUMCjqPrFxAJU6LaA4/w200-h200/free-icon-play-10871272.png" alt="youtube" class="icon-lg-adj"></a>
    <a href="https://www.instagram.com/hehion.c/" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0HBAa_lUJNMHoM1ny-SvSs50Yf6NRzB_0iaKUuYQ6dl1Z3aJzPtdbKUsg7gwzjDm-QmErgdNOwDMdst3L6Iragp1Kbj3qmHTeO8027e8004qn4I6aufaVhbr2F3Ml04RbREyLgCAYHftegHmB22PYsVOS2PY1mSyATlHfAHkykfImt8cLW763WANKs3E/w200-h200/free-icon-instagram-1077042.png" alt="instagram" class="icon-sm-adj"></a>
    <a href="https://www.facebook.com/hehion" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJj5a46wvVXEJesvPE0PmXJiVPJ7mUdDovNJhFr5puIAAgkr57-BwmHxdzkQoFSkX2s4G9-SvypHeIRNpuI73nPJt4VdQ48WxWyNumn0qB9AUUClUkzwqQms7kAXJxO55RF3pDfR79EuWhmLrLZ6Jnd2A0gtGuekJ21m2DcfqZkXSQ0JBJ8Rctp-sjMo0/w199-h200/free-icon-facebook-1077041.png" alt="facebook" class="icon-sm-adj"></a>
    <a href="https://twitter.com/hehion" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWh3hHCJgzBelSQUAFsQxOXzgRhExWLEfaoTG47L5bH3kqiHPozO3MhpOf5MKAY-6lJQZR6KthdQD2xWBJSR2hjaaZo_R0Q0IOOnxfRusgB_faeah3WvV3-dVA0osMbLEiRQJa0GEUWSN18ww5x7WkAx_b7W1ovLTqnjfGLzCMPrPSUoqGcmYsKsx_gIY/w200-h200/sl_z_072523_61700_05.png" alt="x" class="icon-default"></a>
    <a href="https://hehion.blogspot.com/p/blog-page_13.html"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJR-pUozdPG8MkOYjSvHua2W1G6CBLqL_9m5-PCiPAZa8cn5XZaLJUTmbEYGv-83cA0lcWFTmqYnXLshG4SmpcRdr1Th4c3567zKxYa-JZt9QfFQoa6uJnKPDniwdv9BJRAg5ExiJAbOzv_9C2zZHePye-7cANWJQuiAVnygJYhgGtu69WDTMLUfEXiqk/w200-h200/free-icon-kakao-talk-2111466.png" alt="kakao" class="icon-default"></a>
    <a href="https://brunch.co.kr/@hehion" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTKV7FiKVVCJWm2vEmDlzwRqrENGPefZr2GLUjkeT3kZTygSsvyhw959-emmV17sZ2rWwcLwPEZuGG98B4m4SMH8WfCcuDxx9hS9PZbxnKVj_EbcpafV5dfnCub3Iyhop8XVE4uNvE-9QgKgonDuUlSLL29nXPBUbc58pA2Arz2lx46cikKymOGkh8pMk/s320/zwv8-ymenlfEcYrfDRTpLYuQwfQ.jpg" alt="brunch" class="icon-default"></a>
    <a href="https://smartstore.naver.com/hehion" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiP7hbViO0195C-Ur5u9aOErxK7_seKLEFHv6htcmJD6Y4oZflgvW0Pd4ccnhXjy-69UgMbdbES7B0Wxk6jsjNpx8rjb7icn9PW7VVgSfGoxehvpjNPPujp81NmboIYwzOYfoi8x0viuQR-D2dfWsY0dS81U4p8b9IuzOU6FFlbFmAFkvu8rAcGPv2F4dk/s1600/smartstore.png" alt="smartstore" class="icon-default"></a>
    <a href="https://www.tiktok.com/@hehion" target="_blank"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgikhhEX255bDr60DDiyaRUzlRksOOEC3SV9btjM7x-rTHg5EjlEf_s_7gKKHz3XXEb2k1MhsvIMpJdkXs2q-oEwdN2bl04oMdtXdj8PPV943iHe84haxmyRQulxRzk3p3svHC3Gxm0Av4VFAtcG_Fh468jLwa_uSNzJk8R0fmyv1a_FQx1p8PqZDcwu8k/s320/tictok.png alt="smartstore" class="icon-default"></a>
  </div>

  <div class="hh-business">
    <a href="https://kmong.com/search?type=gigs&keyword=%ec%97%90%ec%b9%98%ec%97%90%ec%b9%98" target="_blank">kmong</a>
    <span class="divider">|</span>
    <a href="https://soomgo.com/search/pro?sort=review_count&can_reserve=false&q=%ec%97%90%ec%b9%98%ec%97%90%ec%b9%98&is_promotion_target=false" target="_blank">soomgo</a>
    <div class="hh-brand-name">"에치에치"</div>
  </div>

  <div class="hh-integrated-top" onclick="window.scrollTo({top:0, behavior:'smooth'})">
    ↑ TOP
  </div>
</div>

<style>
/* ZIZ & Flow 애니메이션 (기존 유지) */
@keyframes ziz-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
@keyframes ziz-color {
  0% { color: #e05a5a; } 16% { color: #e0a05a; } 33% { color: #a0c040; }
  50% { color: #40b0c0; } 66% { color: #7060e0; } 83% { color: #c050a0; } 100% { color: #e05a5a; }
}
.ziz-blink {
  display: inline-block; animation: ziz-float 2s ease-in-out infinite, ziz-color 4s linear infinite;
  font-weight: bold !important; font-size: 2.5vmin !important; text-decoration: none;
}
@keyframes s-wave-flow {
  0% { transform: perspective(100px) rotateY(0deg) translate(0, 0) scaleY(1); }
  25% { transform: perspective(100px) rotateY(10deg) translate(3px, -2px) scaleY(1.1); }
  50% { transform: perspective(100px) rotateY(0deg) translate(6px, 0px) scaleY(0.85); }
  75% { transform: perspective(100px) rotateY(-10deg) translate(3px, 2px) scaleY(1.1); }
  100% { transform: perspective(100px) rotateY(0deg) translate(0, 0) scaleY(1); }
}
@keyframes water-clear { 0%, 100% { color: rgba(0, 102, 204, 0.95); } 50% { color: rgba(0, 102, 204, 0.15); } }
.water-flow {
  display: inline-block; animation: s-wave-flow 4.5s ease-in-out infinite, water-clear 5s ease-in-out infinite;
  font-weight: bold !important; font-size: 2.5vmin !important; text-decoration: none; transform-style: preserve-3d;
}

/* [보정] 서체 설정을 삭제하고 시스템 서체를 따르는 통합 카드 [cite: 2026-04-08] */
.hh-contact-card {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background-color: rgba(238, 238, 238, 0.45); 
  backdrop-filter: blur(5px); 
  -webkit-backdrop-filter: blur(5px);
  border-radius: 12px;
  padding: 0;
  text-align: center;
  /* font-family 설정 삭제 [cite: 2026-04-08] */
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  z-index: 9999;
  width: fit-content; 
  min-width: 140px;
  overflow: hidden;
  line-height: 1.4; /* 가독성을 위한 줄간격 보정 */
}

.hh-identity { padding: 15px 15px 8px 15px; }
.hh-name {
  display: block; 
  font-size: 18px; /* 깨짐 방지를 위해 고정 단위(px)와 상대 단위의 적절한 조합 고려 [cite: 2026-04-08] */
  font-weight: 900; 
  color: #000;
  text-decoration: none; 
  margin-bottom: 2px; 
  transition: transform 0.3s ease-in-out;
}
.hh-name:hover { transform: scale(1.1) translateY(-3px); }
.hh-email { font-size: 12px; color: #666; }

.hh-social-links { display: flex; justify-content: center; align-items: center; gap: 5px; padding: 0 15px 12px 15px; }
.hh-social-links img { height: auto; object-fit: contain; transition: all 0.2s ease; filter: grayscale(100%); opacity: 0.7; }
.hh-social-links img.icon-lg-adj { width: 22px; }
.hh-social-links img.icon-default { width: 17.5px; }
.hh-social-links img.icon-sm-adj { width: 15px; }
.hh-social-links a:hover img { transform: scale(1.3); filter: grayscale(0%); opacity: 1; }

.hh-business { font-size: 13px; color: #555; padding: 10px 15px; border-top: 1px solid rgba(0,0,0,0.08); }
.hh-business a { color: #2288bb; text-decoration: none; font-weight: bold; }
.divider { margin: 0 5px; color: #ccc; }
.hh-brand-name { margin-top: 4px; font-size: 11px; color: #999; }

.hh-integrated-top {
  background-color: rgba(34, 34, 34, 0.5); 
  color: #fff;            
  font-size: 15px;    
  font-weight: bold;
  padding: 10px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
}
.hh-integrated-top:hover { background-color: rgba(0, 0, 0, 0.75); letter-spacing: 1px; }
</style>
`;

  document.write(menuHTML);
})();