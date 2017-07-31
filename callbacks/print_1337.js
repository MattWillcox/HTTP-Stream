var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  var split = html.split('');
  for(let i in split){
    switch(split[i].toLowerCase()){
      case 'a':
      split[i] = '4';
      break;
      case 'e':
      split[i] = '3';
      break;
      case 'l':
      split[i] = '1';
      break;
      case 't':
      split[i] = '7';
      break;
      case 'o':
      split[i] = '0'
    }
  }

  console.log(split.join(''));
}

getHTML.getHTML(requestOptions, print1337);