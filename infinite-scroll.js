function infinite(options) {
  var el = options.element;
  var data = options.data;
  var dataShow = options.dataShow;
  var displayed = options.dataShowOnStart;

  for (var i = 0; i < options.dataShowOnStart; i++) {
    options.onScrollEnd(i);
  }

  el.addEventListener('scroll', function() {
    if ((list.scrollTop + list.clientHeight >= list.scrollHeight) && displayed < data.length) {
      for (var a = displayed; a < displayed + dataShow; a++) {
        options.onScrollEnd(a);
      }

      displayed = displayed + dataShow;
    }
  });
}
