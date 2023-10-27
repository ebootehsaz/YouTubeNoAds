function confirmAndRedirect() {
    const userConfirmed = confirm('Would you like to redirect to Yewtu.be?');
    if (userConfirmed) {
      const newUrl = "https://yewtu.be" + location.pathname + location.search;
      location.replace(newUrl);
    }
  }
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'checkRedirect') {
      confirmAndRedirect();
      sendResponse({done: true});
    }
  });
  