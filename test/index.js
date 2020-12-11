{
  console.group('不同打印等级');
  const lw = new LogWeb();
  lw.info('我是 info 方法');
  lw.error('我是 error 方法');
  lw.success('我是 success 方法');
  lw.fail('我是 fail 方法');
  lw.debug('我是 debug 方法');
  console.groupEnd();
}
{
  console.group('链式调用');
  const lw = new LogWeb();
  lw.method('warn').prefix('前缀').tag('标签').info('我是 info 方法');
  lw.info('我是 info 方法');
  console.groupEnd();
}
{
  console.group('保存指定使用 console 方法');
  const lw = new LogWeb();
  const instance = lw.method('warn', true);
  instance.prefix('前缀').tag('标签').info('我是 info 方法');
  instance.tag('标签').info('我是 info 方法');
  instance.info('我是 info 方法');
  instance.error('我是 error 方法');
  instance.success('我是 success 方法');
  instance.fail('我是 fail 方法');
  instance.debug('我是 debug 方法');
  console.groupEnd();
}
{
  console.group('保存指定前缀');
  const lw = new LogWeb();
  const instance = lw.prefix('hhp', true);
  instance.method('warn').tag('标签1').info('我是 info 方法');
  instance.tag('标签2').info('我是 info 方法');
  instance.info('我是 info 方法');
  instance.error('我是 error 方法');
  instance.success('我是 success 方法');
  instance.fail('我是 fail 方法');
  instance.debug('我是 debug 方法');
  console.groupEnd();
}
{
  console.group('保存指定标签');
  const lw = new LogWeb();
  const instance = lw.tag('hhp', true);
  instance.method('warn').prefix('前缀').info('我是 info 方法');
  instance.prefix('前缀').info('我是 info 方法');
  instance.info('我是 info 方法');
  instance.error('我是 error 方法');
  instance.success('我是 success 方法');
  instance.fail('我是 fail 方法');
  instance.debug('我是 debug 方法');
  console.groupEnd();
}
{
  console.group('隐藏打印');
  const lw1 = new LogWeb({ hide: true });
  lw1.method('warn').prefix('前缀').tag('标签').info('我是 info 方法');
  const lw2 = new LogWeb({ hide: false });
  lw2.method('warn').prefix('前缀').tag('标签').info('我是 info 方法');
  console.groupEnd();
}
