(function() {
  const sitemapHtml = `
    <style>
      .sitemap-container { text-align: center; padding: 10px 0; margin-top: 20px; }
      .sitemap-group { display: flex; justify-content: center; flex-wrap: wrap; gap: 2px 10px; margin-bottom: 4px; list-style: none; padding: 0; }
      .sitemap-group li { display: inline-block; }
      .sitemap-group a { color: #d1d1d1; text-decoration: none; font-size: 10px; letter-spacing: -0.02em; transition: color 0.2s ease; }
      .sitemap-group a:hover { color: #888; text-decoration: none; }
      .sitemap-spacer { height: 1px; width: 10px; margin: 2px auto 6px; background-color: transparent; }
    </style>
    <div class="sitemap-container">
      <ul class="sitemap-group">
        <li><a href="https://hehion.blogspot.com" target="_blank">hehion</a></li>
        <li><a href="https://hhcenter.blogspot.com" target="_blank">hhcenter</a></li>
        <li><a href="https://hhscrap.blogspot.com" target="_blank">hhscrap</a></li>
      </ul>
      <div class="sitemap-spacer"></div>
      <ul class="sitemap-group">
        <li><a href="https://hharchdesign.blogspot.com" target="_blank">hharchdesign</a></li>
        <li><a href="https://hharchlesson.blogspot.com" target="_blank">hharchlesson</a></li>
        <li><a href="https://hharchstudy.blogspot.com" target="_blank">hharchstudy</a></li>
        <li><a href="https://hharchug.blogspot.com" target="_blank">hharchug</a></li>
        <li><a href="https://hhinnc.blogspot.com" target="_blank">hhinnc</a></li>
        <li><a href="https://hhincs.blogspot.com" target="_blank">hhincs</a></li>
      </ul>
      <div class="sitemap-spacer"></div>
      <ul class="sitemap-group">
        <li><a href="https://hhchef.blogspot.com" target="_blank">hhchef</a></li>
        <li><a href="https://hhcoding.blogspot.com" target="_blank">hhcoding</a></li>
        <li><a href="https://hhdrawing.blogspot.com" target="_blank">hhdrawing</a></li>
        <li><a href="https://hhlanguage.blogspot.com" target="_blank">hhlanguage</a></li>
        <li><a href="https://hhmathscience.blogspot.com" target="_blank">hhmathscience</a></li>
        <li><a href="https://hh-movement.blogspot.com" target="_blank">hh-movement</a></li>
        <li><a href="https://hhreadwrite.blogspot.com" target="_blank">hhreadwrite</a></li>
        <li><a href="https://hhplaysing.blogspot.com" target="_blank">hhplaysing</a></li>
      </ul>
      <div class="sitemap-spacer"></div>
      <ul class="sitemap-group">
        <li><a href="https://hh-hub.blogspot.com/" target="_blank">hh-hub</a></li>
        <li><a href="https://hhlearnrun.blogspot.com" target="_blank">hhlearnrun</a></li>
        <li><a href="https://hhaloneortogether.blogspot.com" target="_blank">hhaloneortogether</a></li>
        <li><a href="https://hhziz.blogspot.com" target="_blank">hhziz</a></li>
        <li><a href="https://hhflowmap.blogspot.com" target="_blank">hhflowmap</a></li>
      </ul>
      <div class="sitemap-spacer"></div>
      <ul class="sitemap-group">
        <li><a href="https://hhtoday.blogspot.com" target="_blank">hhtoday</a></li>
        <li><a href="https://hhyesterday.blogspot.com" target="_blank">hhyesterday</a></li>
        <li><a href="https://hhtomorrow.blogspot.com" target="_blank">hhtomorrow</a></li>
        <li><a href="https://hhfavorite.blogspot.com" target="_blank">hhfavorite</a></li>
        <li><a href="https://hh-test0.blogspot.com" target="_blank">hh-test0</a></li>
      </ul>
    </div>
  `;
  document.write(sitemapHtml);
})();