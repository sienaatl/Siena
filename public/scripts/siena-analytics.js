(function () {
  function loadGTM() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
    var f = document.getElementsByTagName('script')[0], j = document.createElement('script');
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-N593KQGJ';
    f.parentNode.insertBefore(j, f);
  }
  function loadTikTok() {
    !function (w, d, t) {
      w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
      var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
      ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

      ttq.load('DA8D6C3C77UES9745N50');
      ttq.page();
    }(window, document, 'ttq');
  }
  // Registered outside loadGTM so a tap before GTM loads is still queued.
  document.addEventListener('click', function (e) {
    var cta = e.target && e.target.closest && e.target.closest('a[data-booking-cta]');
    if (cta) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'booking_cta_click', page_path: window.location.pathname,
        booking_destination: cta.getAttribute('href'), cta_label: cta.textContent.trim() });
    }
    var link = e.target && e.target.closest && e.target.closest('a[href^="tel:"]');
    if (!link) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'phone_click', phone_number: link.getAttribute('href').slice(4) });
  });
  var fired = false;
  var events = ['pointerdown', 'mousemove', 'keydown', 'touchstart', 'scroll'];
  var fallback;
  function trigger() {
    if (fired) return;
    fired = true;
    events.forEach(function (e) { document.removeEventListener(e, trigger); });
    clearTimeout(fallback);
    loadGTM();
    loadTikTok();
  }
  events.forEach(function (e) { document.addEventListener(e, trigger, { passive: true }); });
  fallback = setTimeout(trigger, 5000);
})();
