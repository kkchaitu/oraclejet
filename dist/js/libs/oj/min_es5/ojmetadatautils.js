/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base"],(function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r={getDefaultValue:function(o,n){var u=o.value;if(void 0===u){var f=o.properties;if(f){for(var i={},l=Object.keys(f),c=0;c<l.length;c++){var a=r.getDefaultValue(f[l[c]]);void 0!==a&&(i[l[c]]=a)}Object.keys(i).length>0&&(o.value=i,u=i)}}return void 0!==u&&(Array.isArray(u)?u=n?r.deepFreeze(u):u.slice():null!==u&&"object"===t(u)&&(u=n?r.deepFreeze(u):e.CollectionUtils.copyInto({},u,void 0,!0))),u},getDefaultValues:function(e,t){var o={},n=Object.keys(e),u=!1;return n.forEach((function(n){var f=r.getDefaultValue(e[n],t);void 0!==f&&(o[n]=f,u=!0)})),u?o:null},deepFreeze:function(e){if(Object.isFrozen(e))return e;if(Array.isArray(e))e=e.map((function(e){return r.deepFreeze(e)}));else if(null!==e&&"object"===t(e)){var o=Object.getPrototypeOf(e);null!==o&&o!==Object.prototype||(Object.keys(e).forEach((function(t){e[t]=r.deepFreeze(e[t])})),Object.freeze(e))}return e}};return r}));