function infinite(options) {
  var el = options.element;
  var data = options.data;
  var dataShow = options.dataShow;
  var displayed = options.dataShowOnStart;

  for (var i = 0; i < options.dataShowOnStart; i++) {
    options.onScrollEnd(i);
  }

  el.addEventListener('scroll', function() {
    if ((el.scrollTop + el.clientHeight >= el.scrollHeight) && displayed < data.length) {
      for (var a = displayed; a < displayed + dataShow - 1; a++) {
        options.onScrollEnd(a);
      }

      displayed = displayed + dataShow;
    }
  });
}
