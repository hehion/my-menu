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
<div style="font-size: 2.5vmin;">
<table style="width: 100%;"><tbody><tr><td align="left" style="font-size: 2.5vmin;" width="30%">
<a href="https://hehion.blogspot.kr/"><b>home</b></a>
　<a href="https://hhscrap.blogspot.kr/" style="font-size: 2.5vmin; text-align: left;">scrap</a>
</td><td align="right" style="font-size: 2.5vmin;" width="70%">
<a href="https://hharchdesign.blogspot.com"><font style="font-size: 1.8vmin;">arch</font>Design</a>
 <a href="https://hharchlesson.blogspot.com"><font style="font-size: 1.8vmin;">arch</font>Lesson</a>
 <a href="https://hharchstudy.blogspot.com"><font style="font-size: 1.8vmin;">arch</font>Study</a>
 <a href="https://hharchug.blogspot.kr/">ARCH<font style="font-size: 1.8vmin;">ug</font></a>
 <a href="https://hhinnc.blogspot.kr"><font style="font-size: 1.8vmin;">..in</font>NC</a>
 <a href="https://hhincs.blogspot.com/2018/06/20185.html"><font style="font-size: 1.8vmin;">..in</font>CS</a>
</td></tr></tbody></table></div>
<div align="right" style="font-size: 2.5vmin;">
　<a href="https://hhlearnrun.blogspot.com">Learn!Run!</a>
　<a href="https://hhchef.blogspot.com">Chef!</a>
　<a href="https://hh-movement.blogspot.com">Move<font style="font-size: 1.8vmin;">ment</font></a>
　<a href="https://hhlanguage.blogspot.com">L<font style="font-size: 1.8vmin;">anguage</font></a>
</div>
<div style="font-size: 2.5vmin;">
<table style="width: 100%;"><tbody><tr><td align="left" style="font-size: 2.5vmin;" width="30%">
<a href="https://hehion.blogspot.com/p/hehion-system-22.html" class="ziz-blink">ZIZ</a>
</td><td align="right" style="font-size: 2.5vmin;" width="70%">
　<a href="https://hhdrawing.blogspot.com">Draw</a>
　<a href="https://hhplaysing.blogspot.com">Play<font style="font-size: 1.8vmin;">&amp;</font>Sing</a>
　<a href="https://hhcoding.blogspot.com">C<font style="font-size: 1.8vmin;">oding</font></a>
　<a href="https://hhmathscience.blogspot.com">M<font style="font-size: 1.8vmin;">ath</font>S<font style="font-size: 1.8vmin;">cience</font></a>
</td></tr></tbody></table></div>
<hr />
<div id="hh-scroll-top" onclick="window.scrollTo({top:0, behavior:'smooth'})">
  ↑ TOP
</div>
<style>
/* 둥둥 떠다니는 애니메이션 (ZIZ 매트릭스와 통일) */
@keyframes ziz-float { 
  0%, 100% { transform: translateY(0); } 
  50% { transform: translateY(-3px); } 
}
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
  /* [KIK] 우측 하단 고정 TOP 버튼 */
  #hh-scroll-top {
    position: fixed;
    bottom: 25px; /* 바닥에서 25px 이격 */
    right: 25px;  /* 우측에서 25px 이격 */
    cursor: pointer;
    z-index: 9999;
    font-weight: bold;
    font-size: 13px; /* 너무 크지 않게 조절 */
    opacity: 0.3; 
    transition: all 0.3s ease;
    user-select: none;
  }
  #hh-scroll-top:hover {
    opacity: 1;
    color: #5e8ab4; /* KIK 포인트 컬러 */
    transform: translateY(-3px); /* 호버 시 살짝 떠오름 */
  }
//링크 밑줄 쫙
/* [KIK] 순수 밑줄 드로잉 효과 (폰트 설정 없음) */
a {
  position: relative;
  text-decoration: none !important; /* 기존 밑줄 제거 */
  /* 폰트 크기, 색상, 종류 설정을 삭제하여 시스템 기본값을 따름 */
}

/* 선의 초기 상태 (보이지 않는 0의 상태) */
a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px; /* 선 두께 */
  bottom: -2px; /* 글자와의 간격 */
  left: 0;
  background-color: #5e8ab4; /* HH의 KIK 포인트 컬러 */
  transition: width 0.3s ease-in-out; /* 드로잉 속도 */
}

/* 마우스를 올렸을 때 (선이 왼쪽에서 오른쪽으로 그려짐) */
a:hover::after {
  width: 100%;
}

/* 호버 시 선명도만 살짝 강조 (색상 코드는 시스템에 맡김) */
a:hover {
  opacity: 1;
}
</style>
`;

  // 화면에 즉시 뿌려주기
  document.write(menuHTML);
})();