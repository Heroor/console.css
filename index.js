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
      return console.log.apply(null, arguments)
    }
    var content = [];
    var opts = Array.isArray(options) ? options : [options];
    var styles = opts.map(function (item) {
      content.push(item.text);
      return Object.keys(item.style || {}).map(joinStyle.call(null, item)).join(';')
    })
    console.log(styles)
    console.log.apply(null, ['%c' + content.join('%c')].concat(styles));
  }
  consoleCss.toString = function () { return 'function css () { [native code] }'; };
  console['css'] = consoleCss;
}(window.console));