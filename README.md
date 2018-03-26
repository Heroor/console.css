# console.css
> console.css() can print text with CSS in browser

## install

```npm i console-css -S```
or
```yarn add console-css```

## how to use?

```
console.log('This is the console.log().');
console.css('This is the console.css(), you can use console.css like console.log:');
console.css(null);
console.css(undefined);
console.css(true, false);
console.css(1234, 567, 89);
console.css({
  text: 'Can also be these:',
  style: {
    fontSize: '18px',
    color: '#d4a28e'
  }
});
console.css({
  text: 'hello world',
  style: {
    padding: '10px',
    lineHeight: '80px',
    fontSize: '50px',
    textShadow: '2px 2px 1px #999',
    background: '#eee',
    color: '#eee',
  }
});
var showStatus = function (text, val) {
  var success = '#00a698'
  var error = '#ff7b71'
  return [{
    text: text,
    style: {
      padding: '2px 6px',
      fontSize: '8px',
      color: '#fff',
      background: '#555',
      borderRadius: '3px 0 0 3px'
    }
  }, {
    text: val ? 'success' : 'error',
    style: {
      padding: '2px 6px',
      fontSize: '8px',
      color: '#fff',
      background: val ? success : error,
      borderRadius: '0 3px 3px 0'
    }
  }]
}
console.css(showStatus('request', true));
console.css(showStatus('request', false));
```
![./images/1.png](./images/1.png)
