(function() {
  /* [해설] 시각적 보정: 포스트 제목(28px)보다 수치를 2px 더 키워 대등하게 맞춤 [cite: 2026-04-06] */
  const baseSize = "font-size: clamp(30px, 8vw, 34px); font-weight: 500;"; 
  const subSize = "font-size: clamp(22px, 5.5vw, 26px);";

  const menuHTML = `
<div align="left" style="${baseSize} margin-bottom: 18px;">
  <a href="https://hehion.blogspot.com/p/flytothe.html"><b>가라!종이비행기</b></a>
  　<a href="https://hehion.blogspot.com/p/i.html"><b>hh</b></a>
  　<a href="https://hhtoday.blogspot.kr/" style="color: #fafafa;">'s today</a>
  　<a href="https://hhyesterday.blogspot.kr/p/20130728.html" style="color: #fafafa;">'s yesterday</a>
  　<a href="https://hhtomorrow.blogspot.com" style="color: #fafafa;">'s tomorrow</a>
  　<a href="https://hhfavorite.blogspot.kr/" style="color: #fafafa;">'s ☆</a>
</div>

<div style="display: flex; justify-content: space-between; align-items: baseline; ${baseSize} margin-bottom: 18px;">
  <div style="white-space: nowrap;">
    <a href="https://hehion.blogspot.kr/"><b>home</b></a>
    　<a href="https://hhscrap.blogspot.kr/">scrap</a>
  </div>
  <div style="text-align: right;">
    <a href="https://hharchdesign.blogspot.com"><span style="${subSize}">arch</span>Design</a>
    <a href="https://hharchlesson.blogspot.com"><span style="${subSize}">arch</span>Lesson</a>
    <a href="https://hharchstudy.blogspot.com"><span style="${subSize}">arch</span>Study</a>
    <a href="https://hharchug.blogspot.kr/">ARCH<span style="${subSize}">ug</span></a>
    <a href="https://hhinnc.blogspot.kr"><span style="${subSize}">..in</span>NC</a>
    <a href="https://hhincs.blogspot.com/2018/06/20185.html"><span style="${subSize}">..in</span>CS</a>
  </div>
</div>

<div align="right" style="${baseSize} margin-bottom: 18px;">
  　<a href="https://hhlearnrun.blogspot.com">Learn!Run!</a>
  　<a href="https://hhchef.blogspot.com">Chef!</a>
  　<a href="https://hh-movement.blogspot.com">Move<span style="${subSize}">ment</span></a>
  　<a href="https://hhlanguage.blogspot.com">L<span style="${subSize}">anguage</span></a>
</div>

<div style="display: flex; justify-content: space-between; align-items: baseline; ${baseSize} margin-bottom: 18px;">
  <div>
    <span style="display: inline-block; line-height: 0; vertical-align: middle;">
      <a href="https://hehion.blogspot.com/p/hehion-system-22.html" class="ziz-blink">ZIZ</a>
    </span>
  </div>
  <div style="text-align: right;">
    　<a href="https://hhdrawing.blogspot.com">Draw</a>
    　　<a href="https://hhplaysing.blogspot.com">Play<span style="${subSize}">&amp;</span>Sing</a>
    　　<a href="https://hhcoding.blogspot.com">C<span style="${subSize}">oding</span></a>
    　　<a href="https://hhmathscience.blogspot.com">M<span style="${subSize}">ath</span>S<span style="${subSize}">cience</span></a>
  </div>
</div>

<hr style="margin: 40px 0;" />
<div id="hh-scroll-top" onclick="window.scrollTo({top:0, behavior:'smooth'})">
  ↑ TOP
</div>

<style>
  @keyframes ziz-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
  @keyframes ziz-color {
    0% { color: #e05a5a; } 16% { color: #e0a05a; } 33% { color: #a0c040; }
    50% { color: #40b0c0; } 66% { color: #7060e0; } 83% { color: #c050a0; } 100% { color: #e05a5a; }
  }
  .ziz-blink {
    display: inline-block;
    animation: ziz-float 2s ease-in-out infinite, ziz-color 4s linear infinite;
    font-weight: bold !important;
    font-size: clamp(34px, 10vw, 42px) !important; /* [수정] 1순위와 2순위 사이의 존재감 [cite: 2026-04-06] */
    line-height: 1 !important;
    text-decoration: none;
    position: relative; top: -2px;
  }
  #hh-scroll-top {
    position: fixed; bottom: 35px; right: 35px; cursor: pointer; z-index: 9999;
    font-weight: bold; 
    font-size: clamp(38px, 10vw, 55px) !important; /* 1순위 유지 [cite: 2026-04-06] */
    opacity: 0.4; transition: all 0.3s ease; user-select: none;
  }
  #hh-scroll-top:hover { opacity: 1; color: #5e8ab4; transform: translateY(-3px); }
</style>
`;
  document.write(menuHTML);
})();