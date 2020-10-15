"use strict";

function openPage() {
    console.log("injecting");
     browser.tabs.create({
       "url": "/page.html"
     });
  }
  
browser.browserAction.onClicked.addListener(openPage);
