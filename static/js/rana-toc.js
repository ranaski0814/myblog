(function () {
  function showTocOnly() {
    var sidebar = document.getElementById('sidebar');
    if (!sidebar || !sidebar.querySelector('.sidebar-toc-sidebar')) return;
    sidebar.querySelectorAll('.sidebar-common-sidebar, .sidebar-btn-wrapper').forEach(function (el) {
      el.style.display = 'none';
    });
    sidebar.querySelectorAll('.sidebar-toc-sidebar').forEach(function (el) {
      el.classList.remove('hidden');
      el.style.display = 'flex';
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showTocOnly);
  } else {
    showTocOnly();
  }
  document.addEventListener('pjax:complete', showTocOnly);
})();


/* Fix Reimu TOC / heading anchor jump:
   - do not horizontally center article content
   - put target heading near the top instead of the middle
*/
(function () {
  var OFFSET = 55; // 数字越大，小标题离页面顶部越远；数字越小，越靠上

  function decodeHash(hash) {
    if (!hash || hash === "#") return "";
    var id = hash.slice(1);
    try {
      id = decodeURIComponent(id);
    } catch (e) {}
    return id;
  }

  function scrollToHeading(hash, updateUrl) {
    var id = decodeHash(hash);
    if (!id) return;

    var target = document.getElementById(id);
    if (!target) return;

    var top = target.getBoundingClientRect().top + window.pageYOffset - OFFSET;

    window.scrollTo({
      top: Math.max(top, 0),
      left: 0,
      behavior: "smooth"
    });

    // 更新地址栏里的 #xxx，但不触发浏览器默认跳转
    if (updateUrl && window.history && window.history.pushState) {
      history.pushState(null, "", hash);
    }
  }

  document.addEventListener(
    "click",
    function (event) {
      var link = event.target.closest(
        '#sidebar .sidebar-toc-wrapper a[href^="#"], .article-entry .header-anchor[href^="#"]'
      );

      if (!link) return;

      var hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      event.preventDefault();
      event.stopImmediatePropagation();

      scrollToHeading(hash, true);
    },
    true
  );

  // 如果直接打开带 # 的链接，也修正跳转位置
  window.addEventListener("load", function () {
    if (window.location.hash) {
      setTimeout(function () {
        scrollToHeading(window.location.hash, false);
      }, 120);
    }
  });

  document.addEventListener("pjax:complete", function () {
    if (window.location.hash) {
      setTimeout(function () {
        scrollToHeading(window.location.hash, false);
      }, 120);
    }
  });
})();