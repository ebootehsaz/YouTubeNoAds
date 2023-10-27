chrome.webNavigation.onBeforeNavigate.addListener(
    function(details) {
      var url = new URL(details.url);
      if (url.hostname === "www.youtube.com" && url.pathname === "/watch") {
        var newUrl = "https://yewtu.be" + url.pathname + url.search;
        chrome.tabs.update(details.tabId, {url: newUrl});
      }
    },
    {url: [{urlPrefix: "https://www.youtube.com/watch"}]}
  );
  