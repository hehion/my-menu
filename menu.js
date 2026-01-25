if (localStorage.getItem('isAdmin') === 'true') {
    window['ga-disable-UA-XXXXX-Y'] = true;
    console.log("관리자 접속");
}

document.write(`
<div align="left" style="font-size:2.5vmin;">
  <a href="https://hehion.blogspot.com/p/flytothe.html"><b>가라!종이비행기</b></a>
  　<a href="https://hehion.blogspot.com/p/i.html"><b>hh</b></a>
  　<a href="https://hhtoday.blogspot.kr/"><font color="fafafa">'s today</font></a>
  　<a href="https://hhyesterday.blogspot.kr/p/20130728.html"><font color="fafafa">'s yesterday</font></a>
  　<a href="https://hhfavorite.blogspot.kr/"><font color="fafafa">'s ☆</font></a>
</div>
<div align="right" style="font-size:2.5vmin;">
  　<a href="https://hehion.blogspot.kr/">home</a>
  　<a href="https://hhscrap.blogspot.kr/">scrap</a>
  　<a href="https://hharchug.blogspot.kr/">ARCH</a>
  <a href="https://hhinnc.blogspot.kr"><font style="font-size:1.8vmin;">..in</font>NC</a>
  <a href="https://hhincs.blogspot.com/2018/06/20185.html"><font style="font-size:1.8vmin;">..in</font>CS</a>
  <a href="https://hharchstudy.blogspot.com"><font style="font-size:1.8vmin;">arch</font>STUDY</a>
<br>
  　<a href="https://hhlearnrun.blogspot.com">Learn!Run!</a>
  　<a href="https://hhdrawing.blogspot.com">Draw</a>
  　<a href="https://hhchef.blogspot.com">Chef!</a>
  　<a href="https://hhplaysing.blogspot.com">Play<font style="font-size:1.8vmin;">&</font>Sing</a>
<br />
  　<a href="https://hhlanguage.blogspot.com">L<font style="font-size:1.8vmin;">anguage</font></a>
  　<a href="https://hhcoding.blogspot.com">C<font style="font-size:1.8vmin;">oding</font></a>
  　<a href="https://hhmathscience.blogspot.com">M<font style="font-size:1.8vmin;">ath</font>S<font style="font-size:1.8vmin;">cience</font></a>
  　<a href="https://hh-movement.blogspot.com">Move<font style="font-size:1.8vmin;">ment</font></a>
<br /><hr />
`);