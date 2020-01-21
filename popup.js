// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('qa-button');
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
  changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };
});

// var request = new XMLHttpRequest()

// request.open('GET', 'https://app.truckstop.com', true)
// request.onload = function() {
//   // Begin accessing JSON data here
//   var statusCode = context.response.meta.statusCode;

//   if (statusCode >= 200 && statusCode < 400) {
    
//       console.log(statusCode && 'UP')
    
//   } else {
//     console.log(statusCode && 'DOWN')
//   }
// }

// request.send()
