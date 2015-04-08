/**
 * @file edp-build parallelly
 * @author junmer
 */

/* eslint-env node */

var extend = require('extend');

/**
 * 获取处理器名称
 *
 * @param  {Array} pces 处理器们
 * @return {string}      处理器名称
 */
function getNames(pces) {
    var names = [];
    pces.forEach(function (pce) {
        names.push(pce.name);
    });
    return names.join(', ');
}

/**
 * ParallelProcessor 构造函数
 *
 * @param {Array} processors 处理器实例
 * @param {Object} opt 配置
 * @param {Array} opt.name 处理器名称
 * @return {Object} ParallelProcessor instance
 */
function ParallelProcessor(processors, opt) {
    return extend(
        {
            name: 'ParallelProcessor',
            start: function (processContext, done) {

                var me = this;
                var BaseProcessor = me.constructor;
                var processLen = processors.length;

                processors.forEach(function (processor, index) {
                    if (!(processor instanceof BaseProcessor)) {
                        processor = new BaseProcessor(processor);
                    }
                    processor.start(processContext, processFinish);
                });

                function processFinish() {
                    if (--processLen === 0) {
                        done();
                    }
                }
            }
        },
        {
            name: getNames(processors)
        },
        opt
    );
}

module.exports = exports = ParallelProcessor;
