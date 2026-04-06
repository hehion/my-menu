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
  </div>
  <div style="text-align: right;">
    　<a href="https://hhdrawing.blogspot.com">Draw</a>
    　<a href="https://hhplaysing.blogspot.com">Play<font style="font-size: 1.8vmin;">&amp;</font>Sing</a>
    　<a href="https://hhcoding.blogspot.com">C<font style="font-size: 1.8vmin;">oding</font></a>
    　<a href="https://hhmathscience.blogspot.com">M<font style="font-size: 1.8vmin;">ath</font>S<font style="font-size: 1.8vmin;">cience</font></a>
  </div>
</div>

<hr />
<div id="hh-scroll-top" onclick="window.scrollTo({top:0, behavior:'smooth'})">
  ↑ TOP
</div>
<style>
/* 기존 스타일 유지 */
@keyframes ziz-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
@keyframes ziz-color {
  0% { color: #e05a5a; } 16% { color: #e0a05a; } 33% { color: #a0c040; }
  50% { color: #40b0c0; } 66% { color: #7060e0; } 83% { color: #c050a0; } 100% { color: #e05a5a; }
}
.ziz-blink {
  display: inline-block;
  animation: ziz-float 2s ease-in-out infinite, ziz-color 4s linear infinite;
  font-weight: bold !important;
  font-size: 2.5vmin !important;
  text-decoration: none;
}
  #hh-scroll-top {
    position: fixed;
    bottom: 25px;
    right: 25px;
    cursor: pointer;
    z-index: 9999;
    font-weight: bold;
    font-size: 3.5vmin;
    opacity: 0.3; 
    transition: all 0.3s ease;
    user-select: none;
  }
  #hh-scroll-top:hover {
    opacity: 1;
    color: #5e8ab4;
    transform: translateY(-3px);
  }
</style>
`;

  document.write(menuHTML);
})();