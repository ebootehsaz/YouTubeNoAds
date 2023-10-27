self.addEventListener('install', function(event) {
  // Service worker installation
  console.log('Service Worker installed');
});

chrome.webNavigation.onBeforeNavigate.addListener(
  function(details) {
    let url = new URL(details.url);
    if (url.hostname === "www.youtube.com" && url.pathname === "/watch") {
      let newUrl = "https://yewtu.be" + url.pathname + url.search;
      chrome.tabs.update(details.tabId, {url: newUrl});
    }
  },
  {url: [{urlPrefix: "https://www.youtube.com/watch"}]}
);
