(function() {
  const menuHTML = `
<style>
  #hh-menu-wrapper { 
    font-family: 'Pretendard', -apple-system, sans-serif; 
    line-height: 2.0;
  }
  
  #hh-menu-wrapper a {
    text-decoration: none;
    color: #444;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
    display: inline-block;
    position: relative;
    padding: 2px 4px;
  }

  /* 호버 시 위로 톡 튀어오르는 효과 */
  #hh-menu-wrapper a:hover {
    color: #000 !important;
    transform: translateY(-5px); 
    text-shadow: 0 4px 8px rgba(0,0,0,0.1); 
  }

  /* ZIZ 전용: 무지개빛 유영 */
  .ziz-rainbow {
    font-weight: 900 !important;
    font-size: 2.7vmin !important;
    animation: ziz-color-flow 4s linear infinite, ziz-float 2s ease-in-out infinite;
    padding: 2px 0px !important;
  }

  @keyframes ziz-color-flow {
    0% { color: #e05a5a; }
    16% { color: #e0a05a; }
    33% { color: #a0c040; }
    50% { color: #40b0c0; }
    66% { color: #7060e0; }
    83% { color: #c050a0; }
    100% { color: #e05a5a; }
  }

  @keyframes ziz-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }

  /* [KIK] scrap은 또렷하게, 나머지는 은은하게 */
  .sub-text { color: #fafafa !important; font-weight: normal !important; }
  .scrap-text { color: #444 !important; font-weight: bold !important; } /* scrap 강조 */
  
  .small-font { font-size: 1.8vmin !important; }
  hr { border: 0; border-top: 1px solid #eee; margin: 15px 0; }
</style>

<div id="hh-menu-wrapper">
  <div align="left" style="font-size: 2.5vmin;">
    <a href="https://hehion.blogspot.com/p/flytothe.html"><b>가라!종이비행기</b></a>
    　<a href="https://hehion.blogspot.com/p/i.html"><b>hh</b></a>
    　<a href="https://hhtoday.blogspot.kr/" class="sub-text">'s today</a>
    　<a href="https://hhyesterday.blogspot.kr/p/20130728.html" class="sub-text">'s yesterday</a>
    　<a href="https://hhtomorrow.blogspot.com" class="sub-text">'s tomorrow</a>
    　<a href="https://hhfavorite.blogspot.kr/" class="sub-text">'s ☆</a>
  </div>

  <div style="font-size: 2.5vmin;">
    <table style="width: 100%; border-collapse: collapse;"><tbody><tr>
      <td align="left" width="30%">
        <a href="https://hehion.blogspot.kr/"><b>home</b></a>
        　<a href="https://hhscrap.blogspot.kr/" class="scrap-text">scrap</a>
      </td>
      <td align="right" width="70%">
        <a href="https://hharchdesign.blogspot.com"><span class="small-font">arch</span>Design</a>
        <a href="https://hharchlesson.blogspot.com"><span class="small-font">arch</span>Lesson</a>
        <a href="https://hharchstudy.blogspot.com"><span class="small-font">arch</span>Study</a>
        <a href="https://hharchug.blogspot.kr/">ARCH<span class="small-font">ug</span></a>
        <a href="https://hhinnc.blogspot.kr"><span class="small-font">..in</span>NC</a>
        <a href="https://hhincs.blogspot.com/2018/06/20185.html"><span class="small-font">..in</span>CS</a>
      </td>
    </tr></tbody></table>
  </div>

  <div align="right" style="font-size: 2.5vmin;">
    <a href="https://hhlearnrun.blogspot.com">Learn!Run!</a>
    <a href="https://hhchef.blogspot.com">Chef!</a>
    <a href="https://hh-movement.blogspot.com">Move<span class="small-font">ment</span></a>
    <a href="https://hhlanguage.blogspot.com">L<span class="small-font">anguage</span></a>
  </div>

  <div style="font-size: 2.5vmin;">
    <table style="width: 100%; border-collapse: collapse;"><tbody><tr>
      <td align="left" width="30%">
        <a href="https://hehion.blogspot.com/p/hehion-system-22.html" class="ziz-rainbow">ZIZ</a>
      </td>
      <td align="right" width="70%">
        <a href="https://hhdrawing.blogspot.com">Draw</a>
        <a href="https://hhplaysing.blogspot.com">Play<span class="small-font">&amp;</span>Sing</a>
        <a href="https://hhcoding.blogspot.com">C<span class="small-font">oding</span></a>
        <a href="https://hhmathscience.blogspot.com">M<span class="small-font">ath</span>S<span class="small-font">cience</span></a>
      </td>
    </tr></tbody></table>
  </div>
  <hr />
</div>
`;

  // 화면에 즉시 뿌려주기
  document.write(menuHTML);
})();