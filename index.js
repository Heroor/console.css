/***************
console.css([{
  text: 'request',
  style: {
    color: '#fff',
    background: '#555',
    borderRadius: '3px 0 0 3px',
    padding: '2px 6px',
    fontSize: '8px'
  }
}, {
  text: 'successful',
  style: {
    color: '#fff',
    background: '#00a698',
    borderRadius: '0 3px 3px 0',
    padding: '2px 6px',
    fontSize: '8px'
  }
}])
console.css([{
  text: 'request',
  style: {
    color: '#fff',
    background: '#555',
    borderRadius: '3px 0 0 3px',
    padding: '2px 6px',
    fontSize: '8px'
  }
}, {
  text: 'error',
  style: {
    color: '#fff',
    background: 'red',
    borderRadius: '0 3px 3px 0',
    padding: '2px 6px',
    fontSize: '8px'
  }
}])
 ***************/
void(function (console) {
  if (console === null ||
    console === void(0) ||
    console.log === null ||
    console.log === void(0)) {
    return
  }
  var regExp = /([A-Z])/g;

  function replaceKey(key) {
    return key.replace(regExp, function ($, $1) {
      return '-' + $1.toLowerCase()
    })
  }

  function joinStyle(item) {
    return function (k) {
      return [replaceKey(k), item.style[k]].join(':')
    }
  }

  function consoleCss(options) {
    if (typeof options !== 'object' || options === null) {
      return console.log(Array.prototype.slice.call(arguments))
    }
    var content = [];
    var opts = Array.isArray(options) ? options : [options];
    var styles = opts.map(function (item) {
      content.push(item.text);
      return Object.keys(item.style).map(joinStyle.call(null, item)).join(';')
    })
    console.log('%c' + content.join('%c'), ...styles);
  }
  consoleCss.toString = function () { return 'function css () { [native code] }'; };
  console['css'] = consoleCss;
}(window.console));