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
