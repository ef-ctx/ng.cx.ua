/**
 * ng.cx.ua - v0.0.1 - 2015-02-06
 * https://github.com/ef-ctx/ng.cx.ua
 *
 * Copyright (c) 2015 EF CTX <http://ef.com>
 * License: MIT <https://raw.githubusercontent.com/EFEducationFirstMobile/oss/master/LICENSE>
 */
(function (angular) {
    'use strict';

    var module = angular.module('ng.cx.ua', []);

    /**
     * @ngdoc object
     * @name  ng.cx.ua.cxUA
     *
     * @description
     * AngularJS service for browser detection, scope and digest friendly.
     *
     * @todo implement mininmal feature detection to (probably in a different service cxBrowserFeature)
     * https://github.com/Modernizr/Modernizr/tree/master/feature-detects
     *
     * @property {srtring} userAgent  The full user-agent string.
     * @property {boolean} isWindows  True if the browser is running on a Windows desktop.
     * @property {boolean} isChrome   True if the browser is Chrome or compatible.
     * @property {boolean} isFirefox  True if the browser is Firefox.
     * @property {boolean} isGecko    True if the browser is using the Gecko engine. This property is probably a better way to identify Firefox and other browsers that use XulRunner.
     * @property {boolean} isKindle   True if the browser is running on Kindle.
     * @property {boolean} isMobile   True if the browser is running on a mobile device.
     * @property {boolean} isOpera    True if the browser is Opera.
     * @property {boolean} isSafari   True if the browser is Safari.
     * @property {boolean} isTablet   True if the browser is running on a tablet. Way to distinguish Android mobiles from tablets is that the mobiles contain the string "mobile" in their UserAgent string. If the word "Android" isn't followed by "mobile" then its a tablet.
     * @property {boolean} isTV       True if the browser is running on a TV.
     * @property {boolean} isWebKit   True if the browser is running on a WebKit browser.
     * @property {boolean} isAndroid  True if the browser is running on an Android browser.
     * @property {boolean} isIOS      True if the browser is running on any iOS device.
     * @property {boolean} isIPad     True if the browser is running on an iPad.
     * @property {boolean} isIPhone   True if the browser is running on an iPhone.
     * @property {boolean} isIPod     True if the browser is running on an iPod touch.
     * @property {boolean} isIE       True if the browser is Internet Explorer.
     */
    module.service('cxUA', [
        '$window',
        function cxUA($window) {

            var userAgent = ($window.navigator && $window.navigator.userAgent) || 'unknown';

            // patterns taken from: https://github.com/g13n/ua.js/blob/master/src/ua.js
            var detections = {
                userAgent: function () {
                    return userAgent;
                },
                isWindows: function () {
                    return detect('_isWindowsDesktop') && !detect('isMobile');
                },
                isChrome: 'webkit\\W.*(chrome|chromium)\\W',
                isFirefox: 'mozilla.*\\Wfirefox\\W',
                isGecko: 'mozilla(?!.*webkit).*\\Wgecko\\W',
                isKindle: '\\W(kindle|silk)\\W',
                isMobile: '(iphone|ipod|android|mobile|blackberry|nokia|win ce|xoom)',
                isOpera: 'opera.*\\Wpresto\\W',
                isSafari: 'webkit\\W(?!.*chrome).*safari\\W',
                isTablet: '(ipad|android(?!.*mobile)|tablet)',
                isTV: 'googletv|sonydtv',
                isWebKit: 'webkit\\W',
                isAndroid: 'android',
                isIOS: '(ipad|iphone|ipod)',
                isIPad: 'ipad',
                isIPhone: 'iphone',
                isIPod: 'ipod',
                isIE: function () {
                    if ($window.navigator && $window.navigator.appName === 'Microsoft Internet Explorer') {
                        return true;
                    } else {
                        return (detect('_isTrident'));
                    }
                },
                // partial patterns (not part of API)
                _isTrident: '\\bTrident\\b',
                _isWindowsDesktop: '\\W\\((win|windows|win7|vista|nt [0-9.]+|server 2003)|\\windows\\Wnt',

            };

            var detect = function (pattern) {
                if (!cache.hasOwnProperty(pattern)) {
                    if (typeof detections[pattern] === 'string') {
                        var reg = new RegExp(detections[pattern], 'i');
                        cache[pattern] = reg.test(userAgent);
                    } else {
                        cache[pattern] = detections[pattern]();
                    }
                }
                return cache[pattern];
            };

            var cache = {};

            var api = {};

            function makeProperty(key) {
                return {
                    get: function () {
                        return detect(key);
                    }
                };
            }

            for (var key in detections) {
                Object.defineProperty(api, key, makeProperty(key));
            }

            return api;
        }
    ]);

})(angular);

