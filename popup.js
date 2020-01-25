// // Copyright 2018 The Chromium Authors. All rights reserved.
// // Use of this source code is governed by a BSD-style license that can be
// // found in the LICENSE file.

// 'use strict';

// let changeColor = document.getElementById('qa-button');
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
//   changeColor.onclick = function(element) {
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
//   };
// });

// var request = new XMLHttpRequest()
// console.log("Line 22")
// request.open('GET', 'https://app.truckstop.com', true)
// request.onload = function() {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)
// console.log("Line27")
//   if (request.status >= 200 && request.status < 400) {
//     console.log('Good')
//   } else {
//     console.log('error')
//   }
// }

// request.send()
const axios = require('axios');


// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });



