const lw1 = new LogWeb({ prefix: 'hhp' });
lw1.info('lw', '你好');

const lw2 = new LogWeb();
lw2.info('lw2', 'hello');

lw1.info('lw', 'world');
lw1.info('标签1', '内容1', 123, true, () => {}, { msg: 'haha' }, [1, { a: 1 }]);
lw1.error('标签2', '内容2', 123, true, () => {}, { msg: 'hah' }, [1, { a: 1 }]);
lw1.success('标签3', '内容3', 123, true, () => {}, { msg: 'hah' }, [1, { a: 1 }]);
lw1.fail('标签4', '内容4', 123, true, () => {}, { msg: 'haha' }, [1, { a: 1 }]);
lw1.debug('标签5', '内容5', 123, true, () => {}, { msg: 'hah' }, [1, { a: 1 }]);

const lw3 = new LogWeb({ prefix: 'foo', method: 'warn' });
lw3.info('标签1', '内容1', 123, true, () => {}, { msg: 'hah' }, [1, { a: 1 }]);
lw3.error('标签2', '内容2', 123, true, () => {}, { msg: 'haha' }, [1, { a: 1 }]);
lw3.success('标签3', '内容3', 123, true, () => {}, { msg: 'haha' }, [1, { a: 1 }]);
lw3.fail('标签4', '内容4', 123, true, () => {}, { msg: 'hah' }, [1, { a: 1 }]);
lw3.debug('标签5', '内容5', 123, true, () => {}, { msg: 'haha' }, [1, { a: 1 }]);

lw1.info('lw', '没有影响');
