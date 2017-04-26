// https://github.com/getsentry/raven-js/blob/master/plugins/vue.js
/**
 * Vue.js 2.0 plugin
 *
 */
'use strict';

function formatComponentName (vm) {
    if (vm.$root === vm) {
        return 'root instance'
    }
    var name = vm._isVue
        ? vm.$options.name || vm.$options._componentTag
        : vm.name
    return (name ? 'component <' + name + '>' : 'anonymous component') +
        (vm._isVue && vm.$options.__file ? ' at ' + vm.$options.__file  : '')
}

function vuePlugin(Raven, Vue) {
    Vue = Vue || window.Vue;

    // quit if Vue isn't on the page
    if (!Vue || !Vue.config) return;

    var _oldOnError = Vue.config.errorHandler;
    Vue.config.errorHandler = function VueErrorHandler(error, vm) {
        Raven.captureException(error, {
          extra: {
            componentName: formatComponentName(vm),
            data: vm.$data,
            propsData: vm.$options.propsData,
            localStorage: window.localStorage
          }
        });

        if (typeof _oldOnError === 'function') {
            _oldOnError.call(this, error, vm);
        }
    };
}

module.exports = vuePlugin;
