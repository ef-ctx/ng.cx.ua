/*jshint -W083 */ /* Don't make functions within a loop */
describe('ng.cx.ua', function () {
    'use strict';

    // http://techpatterns.com/downloads/firefox/useragentswitcher.xml

    var userAgents = {

        // 'windows': {

        // 'Arora 0.8.0 - (Windows)': {
        //     userAgent: 'Mozilla/5.0 (Windows; U; ; en-NZ) AppleWebKit/527 (KHTML, like Gecko, Safari/419.3) Arora/0.8.0',
        //     tags: ['isWindows', 'isDesktop', 'isWebKit', 'isSafari']
        // },

        // 'Avant Browser - MSIE 7 (Win XP)': {
        //     userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Avant Browser; Avant Browser; .NET CLR 1.0.3705; .NET CLR 1.1.4322; Media Center PC 4.0; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30)',
        //     tags: ['isWindows', 'isDesktop']
        // },

        'Beamrise - (Win 7) - Webkit 535.8': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.8 (KHTML, like Gecko) Beamrise/17.2.0.9 Chrome/17.0.939.0 Safari/535.8',
            tags: ['isWindows', 'isDesktop', 'isWebKit', 'isChrome']
        },

        'Chrome 22.0.1207.1 (Win 7 - 64 bit)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/22.0.1207.1 Safari/537.1',
            tags: ['isWindows', 'isDesktop', 'isWebKit', 'isChrome']
        },

        'Chrome 28.0.1469.0 (Win 7 - 64 bit)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/28.0.1469.0 Safari/537.36',
            tags: ['isWindows', 'isDesktop', 'isWebKit', 'isChrome']
        },

        'Chrome 28.0.1469.0 (Win 8 - 64 bit)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/28.0.1469.0 Safari/537.36',
            tags: ['isWindows', 'isDesktop', 'isWebKit', 'isChrome']
        },

        'Chrome 32.0.1667.0 (Win 8 - 64 bit)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1667.0 Safari/537.36',
            tags: ['isWindows', 'isDesktop', 'isWebKit', 'isChrome']
        },

        'Chrome 36.0.1985.67 (Win 8 - 64 bit)': {
            userAgent: 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.67 Safari/537.36',
            tags: ['isWindows', 'isDesktop', 'isWebKit', 'isChrome']
        },

        'Chrome 37.0.2049.0 (Win 8.1 - 64 bit)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36',
            tags: ['isWindows', 'isDesktop', 'isWebKit', 'isChrome']
        },

        'Chrome 41.0.2228.0 (Win 7 - 32 bit)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
            tags: ['isWindows', 'isDesktop', 'isWebKit', 'isChrome']
        },

        'Firefox 14.0.1 (Win Vista)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.0; rv:14.0) Gecko/20100101 Firefox/14.0.1',
            tags: ['isWindows', 'isDesktop', 'isFirefox', 'isGecko']
        },

        'Firefox 15.0a1 (Win 7 64)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:15.0) Gecko/20120427 Firefox/15.0a1',
            tags: ['isWindows', 'isDesktop', 'isFirefox', 'isGecko']
        },

        'Firefox 16.0 (Win 8 64)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:16.0) Gecko/16.0 Firefox/16.0',
            tags: ['isWindows', 'isDesktop', 'isFirefox', 'isGecko']
        },

        'Firefox 19.0 (Win 8 32)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.2; rv:19.0) Gecko/20121129 Firefox/19.0',
            tags: ['isWindows', 'isDesktop', 'isFirefox', 'isGecko']
        },

        'Firefox 21.0 (Win 7 32)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.1; rv:21.0) Gecko/20130401 Firefox/21.0',
            tags: ['isWindows', 'isDesktop', 'isFirefox', 'isGecko']
        },

        'Firefox 25.0 (Win 7 64)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:25.0) Gecko/20100101 Firefox/25.0',
            tags: ['isWindows', 'isDesktop', 'isFirefox', 'isGecko']
        },

        'Firefox 29.0 (Win 7 64 bit)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:25.0) Gecko/20100101 Firefox/29.0',
            tags: ['isWindows', 'isDesktop', 'isFirefox', 'isGecko']
        },

        'Firefox 31.0 (Win XP)': {
            userAgent: 'Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0',
            tags: ['isWindows', 'isDesktop', 'isFirefox', 'isGecko']
        },

        'Firefox 35.0 (Win 7 64 bit)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:35.0) Gecko/20100101 Firefox/35.0',
            tags: ['isWindows', 'isDesktop', 'isFirefox', 'isGecko']
        },

        'Firefox 36.0 (Win 8.1 32 bit)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.3; rv:36.0) Gecko/20100101 Firefox/36.0',
            tags: ['isWindows', 'isDesktop', 'isFirefox', 'isGecko']
        },

        'iTunes 9.0.2 (Windows)': {
            userAgent: 'iTunes/9.0.2 (Windows; N)',
            tags: ['isWindows', 'isDesktop']
        },

        // 'Konqueror 4.5 (Win XP - KDE native)': {
        //     userAgent: 'Mozilla/5.0 (compatible; Konqueror/4.5; Windows) KHTML/4.5.4 (like Gecko)',
        //     tags: ['isWindows', 'isDesktop', 'isGecko']
        // },

        // 'Maxthon 2.0 (Trident/MSIE) (Win 7)': {
        //     userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; Maxthon 2.0)',
        //     tags: ['isWindows', 'isDesktop']
        // },

        // 'Maxthon 3.0.8.2 (Webkit) (Vista)': {
        //     userAgent: 'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/533.1 (KHTML, like Gecko) Maxthon/3.0.8.2 Safari/533.1',
        //     tags: ['isWindows', 'isDesktop']
        // },

        // 'Maxthon 4.0.0.2000 (Webkit) (Win7 64 bit)': {
        //     userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML like Gecko) Maxthon/4.0.0.2000 Chrome/22.0.1229.79 Safari/537.1',
        //     tags: ['isWindows', 'isDesktop']
        // },

        'MSIE 6 (Win XP)': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isWindows', 'isDesktop', 'isIE']
        },

        'MSIE 7 (Vista)': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isWindows', 'isDesktop', 'isIE']
        },

        'MSIE 8 - standard mode (Win XP)': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isWindows', 'isDesktop', 'isIE']
        },

        'MSIE 8 - standard mode (Win 7)': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isWindows', 'isDesktop', 'isIE']
        },

        'MSIE 8 - compat mode (Vista)': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/4.0)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isWindows', 'isDesktop', 'isIE']
        },

        'MSIE 8 - standard mode (Vista)': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isWindows', 'isDesktop', 'isIE']
        },

        'MSIE 9 - compat mode (Vista)': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/5.0)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isWindows', 'isDesktop', 'isIE']
        },

        'MSIE 9 - standard mode (Win 7)': {
            userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isWindows', 'isDesktop', 'isIE']
        },

        'MSIE 9 - standard mode (NT 6.2 32 Win 8)': {
            userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.2; Trident/5.0)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isWindows', 'isDesktop', 'isIE']
        },

        'MSIE 9 - standard mode (NT 6.2 64 Win 8)': {
            userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.2; WOW64; Trident/5.0)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isWindows', 'isDesktop', 'isIE']
        },

        // @todo check stats/capcabilites
        // 'MSIE 9 - standard mode (with Zune plugin) (NT 6.1 Win 7)': {
        //     userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; Media Center PC 6.0; InfoPath.3; MS-RTC LM 8; Zune 4.7)',
        // },

        'MSIE 10 - standard mode (Win 7 64)': {
            userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isWindows', 'isDesktop', 'isIE']
        },

        'MSIE 10 - compat mode (Win 7 64)': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; Trident/6.0)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isWindows', 'isDesktop', 'isIE']
        },

        'MSIE 10.6 - (Win 7 32)': {
            userAgent: 'Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0',
            appName: 'Microsoft Internet Explorer',
            tags: ['isWindows', 'isDesktop', 'isIE']
        },

        'MSIE 11.0 - (Win 7 64)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
            appName: 'Microsoft Internet Explorer',
            tags: ['isWindows', 'isDesktop', 'isIE']
        },

        'MSIE 11.0 - (Win 8.1 32)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko',
            appName: 'Microsoft Internet Explorer',
            tags: ['isWindows', 'isDesktop', 'isIE']
        },

        'MSIE 11.0 (compatibility mode IE 7)- (Win 8.1 32)': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.3; Trident/7.0; .NET4.0E; .NET4.0C)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isWindows', 'isDesktop', 'isIE']
        },

        'Opera 11.01 (id as 9.8) (Win 7)': {
            userAgent: 'Opera/9.80 (Windows NT 6.1; U; en) Presto/2.7.62 Version/11.01',
            tags: ['isWindows', 'isDesktop', 'isOpera']
        },

        'Opera 12.14 (id as 9.8) (Win Vista)': {
            userAgent: 'Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14',
            tags: ['isWindows', 'isDesktop', 'isOpera']
        },

        'Opera 12.16 (id as 9.8) (Win 7)': {
            userAgent: 'Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.16',
            tags: ['isWindows', 'isDesktop', 'isOpera']
        },

        'Opera 14.0.1116.4 (Webkit 537.36) (Win 7)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.12 Safari/537.36 OPR/14.0.1116.4',
            tags: ['isWindows', 'isDesktop', 'isWebKit', 'isChrome']
        },

        'Opera 15.0.1147.24 (Webkit 537.36) (Win 7)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.29 Safari/537.36 OPR/15.0.1147.24 (Edition Next)',
            tags: ['isWindows', 'isDesktop', 'isWebKit', 'isChrome']
        },

        'Opera 18.0.1284.49 (Webkit 537.36) (Win 8)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.57 Safari/537.36 OPR/18.0.1284.49',
            tags: ['isWindows', 'isDesktop', 'isWebKit', 'isChrome']
        },

        'Opera 19.0.1326.56 (Webkit 537.36) (Win 7)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.76 Safari/537.36 OPR/19.0.1326.56',
            tags: ['isWindows', 'isDesktop', 'isWebKit', 'isChrome']
        },

        'Opera 20.0.1387.91 (Webkit 537.36) (Win 7 64 bit)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36 OPR/20.0.1387.91',
            tags: ['isWindows', 'isDesktop', 'isWebKit', 'isChrome']
        },

        'Safari 533.17.8 (Server 2003/64 bit)': {
            userAgent: 'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/533.17.8 (KHTML, like Gecko) Version/5.0.1 Safari/533.17.8',
            tags: ['isWindows', 'isDesktop', 'isWebKit', 'isSafari']
        },

        'Safari 533.19.4 (Win 7)': {
            userAgent: 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5',
            tags: ['isWindows', 'isDesktop', 'isWebKit', 'isSafari']
        },

        'Safari 6.0 (Win 8)': {
            userAgent: 'Mozilla/5.0 (Windows; U; Windows NT 6.2; es-US ) AppleWebKit/540.0 (KHTML like Gecko) Version/6.0 Safari/8900.00',
            tags: ['isWindows', 'isDesktop', 'isWebKit', 'isSafari']
        },

        'Safari 7.0 (Win 7)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.71 (KHTML like Gecko) WebVideo/1.0.1.10 Version/7.0 Safari/537.71',
            tags: ['isWindows', 'isDesktop', 'isWebKit', 'isSafari']
        },

        'SeaMonkey (Mozilla) 2.0.12 (Win 7)': {
            userAgent: 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-GB; rv:1.9.1.17) Gecko/20110123 (like Firefox/3.x) SeaMonkey/2.0.12',
            tags: ['isWindows', 'isDesktop', 'isGecko', 'isFirefox']
        },

        'SeaMonkey (Mozilla) 2.7.1 (NT 5.2)': {
            userAgent: 'Mozilla/5.0 (Windows NT 5.2; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1',
            tags: ['isWindows', 'isDesktop', 'isGecko', 'isFirefox']
        },

        'SeaMonkey (Mozilla) 2.9 (Win7 64 bit)': {
            userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:12.0) Gecko/20120422 Firefox/12.0 SeaMonkey/2.9',
            tags: ['isWindows', 'isDesktop', 'isGecko', 'isFirefox']
        },

        // 'osx': {

        'Camino 2.2.1 (Firefox 4.0.1) (OS X 10.6 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Camino/2.2.1',
            tags: ['isOSX', 'isGecko', 'isFirefox']
        },

        'Camino 2.2a1pre (Firefox 4.0.1) (OS X 10.6 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0b6pre) Gecko/20100907 Firefox/4.0b6pre Camino/2.2a1pre',
            tags: ['isOSX', 'isGecko', 'isFirefox']
        },

        'Chrome 26.0.1410.63 (OS X 10_8_4 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.31 (KHTML like Gecko) Chrome/26.0.1410.63 Safari/537.31',
            tags: ['isOSX', 'isWebKit', 'isChrome']
        },

        'Chrome 28.0.1469.0 (OS X 10_8_3 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 1083) AppleWebKit/537.36 (KHTML like Gecko) Chrome/28.0.1469.0 Safari/537.36',
            tags: ['isOSX', 'isWebKit', 'isChrome']
        },

        'Chrome 32.0.1664.3 (OS X 10_9_0 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36',
            tags: ['isOSX', 'isWebKit', 'isChrome']
        },

        'Chrome 36.0.1944.0 (OS X 10_9_2 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1944.0 Safari/537.36',
            tags: ['isOSX', 'isWebKit', 'isChrome']
        },

        'Chrome 41.0.2227.1 (OS X 10_10_1) Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36',
            tags: ['isOSX', 'isWebKit', 'isChrome']
        },

        'Firefox 20.0 (OS X 10.7 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:20.0) Gecko/20100101 Firefox/20.0',
            tags: ['isOSX', 'isGecko', 'isFirefox']
        },

        'Firefox 21.0 (OS X 10.8 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko/20100101 Firefox/21.0',
            tags: ['isOSX', 'isGecko', 'isFirefox']
        },

        'Firefox 25.0 (OS X 10.6 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:25.0) Gecko/20100101 Firefox/25.0',
            tags: ['isOSX', 'isGecko', 'isFirefox']
        },

        'Firefox 35.0 (OS X 10.9 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:35.0) Gecko/20100101 Firefox/35.0',
            tags: ['isOSX', 'isGecko', 'isFirefox']
        },

        'iTunes 4.2 (OS X 10.2 PPC)': {
            userAgent: 'iTunes/4.2 (Macintosh; U; PPC Mac OS X 10.2)',
            tags: ['isOSX']
        },
        'iTunes 9.0.3 (OS X 10_6_2)': {
            userAgent: 'iTunes/9.0.3 (Macintosh; U; Intel Mac OS X 10_6_2; en-ca)',
            tags: ['isOSX']
        },
        'Omniweb 622.8.0 (OS X Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-US) AppleWebKit/528.16 (KHTML, like Gecko, Safari/528.16) OmniWeb/v622.8.0.112941',
            tags: ['isOSX', 'isWebKit', 'isSafari']
        },

        'Omniweb 622.8.0 (OS X 10_5_6 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_6; en-US) AppleWebKit/528.16 (KHTML, like Gecko, Safari/528.16) OmniWeb/v622.8.0',
            tags: ['isOSX', 'isWebKit', 'isSafari']
        },

        // 'Opera 9.20 (OS X Intel)': {
        //     userAgent: 'Opera/9.20 (Macintosh; Intel Mac OS X; U; en)',
        //     tags: ['isOSX', 'isOpera']
        // },

        'Opera 9.64 (OS X PPC)': {
            userAgent: 'Opera/9.64 (Macintosh; PPC Mac OS X; U; en) Presto/2.1.1',
            tags: ['isOSX', 'isOpera']
        },

        'Opera 10.61 (id as 9.8) (OS X Intel)': {
            userAgent: 'Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.6.30 Version/10.61',
            tags: ['isOSX', 'isOpera']
        },

        'Opera 11.00 (id as 9.8) (OS X Intel)': {
            userAgent: 'Opera/9.80 (Macintosh; Intel Mac OS X 10.4.11; U; en) Presto/2.7.62 Version/11.00',
            tags: ['isOSX', 'isOpera']
        },

        'Opera 11.52 (id as 9.8) (OS X Intel)': {
            userAgent: 'Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; fr) Presto/2.9.168 Version/11.52',
            tags: ['isOSX', 'isOpera']
        },

        'Safari 531.21.10 (OS X 10_6_2 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_2; en-us) AppleWebKit/531.21.8 (KHTML, like Gecko) Version/4.0.4 Safari/531.21.10',
            tags: ['isOSX', 'isWebKit', 'isSafari']
        },

        'Safari 533.19.4 (OS X 10_6_5 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_5; de-de) AppleWebKit/534.15 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4',
            tags: ['isOSX', 'isWebKit', 'isSafari']
        },

        'Safari 533.20.27 (OS X 10_6_6 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-us) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27',
            tags: ['isOSX', 'isWebKit', 'isSafari']
        },

        'Safari 534.20.8 (OS X 10_7 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_7; en-us) AppleWebKit/534.20.8 (KHTML, like Gecko) Version/5.1 Safari/534.20.8',
            tags: ['isOSX', 'isWebKit', 'isSafari']
        },

        'Safari 534.55.3 (OS X 10_7_3 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/534.55.3 (KHTML, like Gecko) Version/5.1.3 Safari/534.53.10',
            tags: ['isOSX', 'isWebKit', 'isSafari']
        },

        'Safari 534.57.2 (5.1.7) (OS X 10_6_8 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13+ (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2',
            tags: ['isOSX', 'isWebKit', 'isSafari']
        },

        'Safari 536.26.17 (6) (OS X 10_7_5 Intel)': {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/536.26.17 (KHTML like Gecko) Version/6.0.2 Safari/536.26.17',
            tags: ['isOSX', 'isWebKit', 'isSafari']
        },

        'Safari 7 537.78.1 (OS X 10_9_5)': {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.78.1 (KHTML like Gecko) Version/7.0.6 Safari/537.78.1',
            tags: ['isOSX', 'isWebKit', 'isSafari']
        },

        'Safari 7.0.3 537.75.14 (OS X 10_9_3)': {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A',
            tags: ['isOSX', 'isWebKit', 'isSafari']
        },

        'SeaMonkey 2.7.1 (OS X 10.5 - Mozilla)': {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.5; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1',
            tags: ['isOSX', 'isFirefox', 'isGecko']
        },

        'Silk 1.0.13 (AppleWebKit533.16) 2.9 (Mac OS X 10_6_3)': {
            userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.13.81_10003810) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true',
            tags: ['isOSX', 'isKindle', 'isSafari', 'isWebKit']
        },

        // 'linux': {

        'Arora 0.11.1 - WebKit': {
            userAgent: 'Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527 (KHTML, like Gecko, Safari/419.3) Arora/0.10.1',
            tags: ['isLinux', 'isWebKit', 'isSafari']
        },

        'Chrome 19.0.1084.9 (64 bit)': {
            userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.9 Safari/536.5',
            tags: ['isLinux', 'isWebKit', 'isChrome']
        },

        'Chrome 20.0.1132.57 (CrOS)': {
            userAgent: 'Mozilla/5.0 (X11; CrOS i686 2268.111.0) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.57 Safari/536.11',
            tags: ['isLinux', 'isWebKit', 'isChrome']
        },

        'Chrome 22.0.1229.56 (64 bit)': {
            userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.4 (KHTML like Gecko) Chrome/22.0.1229.56 Safari/537.4',
            tags: ['isLinux', 'isWebKit', 'isChrome']
        },

        'Chrome 28.0.1478.0 (32 bit)': {
            userAgent: 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1478.0 Safari/537.36',
            tags: ['isLinux', 'isWebKit', 'isChrome']
        },

        'Chrome 36.0.1985.138 (CrOS)': {
            userAgent: 'Mozilla/5.0 (X11; CrOS x86_64 5841.83.0) AppleWebKit/537.36 (KHTML like Gecko) Chrome/36.0.1985.138 Safari/537.36',
            tags: ['isLinux', 'isWebKit', 'isChrome']
        },

        'Chromium 25.0.1364 (Ubuntu 32 bit)': {
            userAgent: 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.22 (KHTML like Gecko) Ubuntu Chromium/25.0.1364.160 Chrome/25.0.1364.160 Safari/537.22',
            tags: ['isLinux', 'isWebKit', 'isChrome']
        },

        'Chromium 36.0.1985.125 (64 bit)': {
            userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/36.0.1985.125 Safari/537.36',
            tags: ['isLinux', 'isWebKit', 'isChrome']
        },

        'Chromium 39.0.2166.2 (32 bit)': {
            userAgent: 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2166.2 Safari/537.36',
            tags: ['isLinux', 'isWebKit', 'isChrome']
        },

        'Chromium 41.0.2227.0 (64 bit)': {
            userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36',
            tags: ['isLinux', 'isWebKit', 'isChrome']
        },

        'Dillo 3.0': {
            userAgent: 'Mozilla/4.0 (compatible; Dillo 3.0)',
            tags: ['isLinux']
        },

        'Epiphany - WebKit (528.5)': {
            userAgent: 'Mozilla/5.0 (X11; U; Linux i686; en-us) AppleWebKit/528.5 (KHTML, like Gecko, Safari/528.5 ) lt-GtkLauncher',
            tags: ['isLinux', 'isWebKit', 'isSafari']
        },

        'Firefox 16.0 (32 bit)': {
            userAgent: 'Mozilla/5.0 (X11; Linux i686; rv:16.0) Gecko/20100101 Firefox/16.0',
            tags: ['isLinux', 'isGecko', 'isFirefox']
        },

        'Firefox 19.0 (Slackware 13 32 bit)': {
            userAgent: 'Mozilla/5.0 (X11; U; Linux i686; rv:19.0) Gecko/20100101 Slackware/13 Firefox/19.0',
            tags: ['isLinux', 'isGecko', 'isFirefox']
        },

        'Firefox 20.0 (Ubuntu 64 bit)': {
            userAgent: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:20.0) Gecko/20100101 Firefox/20.0',
            tags: ['isLinux', 'isGecko', 'isFirefox']
        },

        'Firefox 20.0 (32 bit)': {
            userAgent: 'Mozilla/5.0 (X11; Linux i686; rv:20.0) Gecko/20100101 Firefox/20.0',
            tags: ['isLinux', 'isGecko', 'isFirefox']
        },

        'Firefox 25.0 (32 bit)': {
            userAgent: 'Mozilla/5.0 (X11; Linux i686; rv:25.0) Gecko/20100101 Firefox/25.0',
            tags: ['isLinux', 'isGecko', 'isFirefox']
        },

        'Firefox 28.0 (32 bit)': {
            userAgent: 'Mozilla/5.0 (X11; Linux i686; rv:28.0) Gecko/20100101 Firefox/28.0',
            tags: ['isLinux', 'isGecko', 'isFirefox']
        },

        'Firefox 32.0 (32 bit)': {
            userAgent: 'Mozilla/5.0 (X11; Linux i686; rv:32.0) Gecko/20100101 Firefox/32.0',
            tags: ['isLinux', 'isGecko', 'isFirefox']
        },

        'Firefox 35.0 (Ubuntu 64 bit)': {
            userAgent: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0',
            tags: ['isLinux', 'isGecko', 'isFirefox']
        },

        'Galeon 2.0.6 (Ubuntu)': {
            userAgent: 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Galeon/2.0.6 (Ubuntu 2.0.6-2)',
            tags: ['isLinux', 'isGecko']
        },

        'Galeon 2.0.6 (Gentoo)': {
            userAgent: 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.16) Gecko/20080716 (Gentoo) Galeon/2.0.6',
            tags: ['isLinux', 'isGecko']
        },

        'Iceape (SeaMonkey) 2.0.8 (Debian)': {
            userAgent: 'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.1.13) Gecko/20100916 Iceape/2.0.8',
            tags: ['isLinux', 'isGecko']
        },

        'Iceweasel (Firefox) 14.0.1': {
            userAgent: 'Mozilla/5.0 (X11; Linux i686; rv:14.0) Gecko/20100101 Firefox/14.0.1 Iceweasel/14.0.1',
            tags: ['isLinux', 'isGecko', 'isFirefox']
        },

        'Iceweasel (Firefox) 15.02 (Debian)': {
            userAgent: 'Mozilla/5.0 (X11; Linux x86_64; rv:15.0) Gecko/20120724 Debian Iceweasel/15.02',
            tags: ['isLinux', 'isGecko']
        },

        'Iceweasel (Firefox) 19.0.2 (Debian 64)': {
            userAgent: 'Mozilla/5.0 (X11; Linux x86_64; rv:19.0) Gecko/20100101 Firefox/19.0 Iceweasel/19.0.2',
            tags: ['isLinux', 'isGecko', 'isFirefox']
        },

        'Konqueror 4.3 - khtml (Slackware 13)': {
            userAgent: 'Mozilla/5.0 (compatible; Konqueror/4.2; Linux) KHTML/4.2.4 (like Gecko) Slackware/13.0',
            tags: ['isLinux', 'isGecko']
        },

        'Konqueror 4.3.1 - khtml (Fedora 11)': {
            userAgent: 'Mozilla/5.0 (compatible; Konqueror/4.3; Linux) KHTML/4.3.1 (like Gecko) Fedora/4.3.1-3.fc11',
            tags: ['isLinux', 'isGecko']
        },

        'Konqueror 4.4.3 - khtml (Fedora 12)': {
            userAgent: 'Mozilla/5.0 (compatible; Konqueror/4.4; Linux) KHTML/4.4.1 (like Gecko) Fedora/4.4.1-1.fc12',
            tags: ['isLinux', 'isGecko']
        },

        'Konqueror 4.4.3 - khtml (Kubuntu)': {
            userAgent: 'Mozilla/5.0 (compatible; Konqueror/4.4; Linux 2.6.32-22-generic; X11; en_US) KHTML/4.4.3 (like Gecko) Kubuntu',
            tags: ['isLinux', 'isGecko']
        },

        'Konqueror 4.8.4 - khtml (Debian)': {
            userAgent: 'Mozilla/5.0 (X11; Linux 3.8-6.dmz.1-liquorix-686) KHTML/4.8.4 (like Gecko) Konqueror/4.8',
            tags: ['isLinux', 'isGecko']
        },

        'Konqueror 4.9 - khtml': {
            userAgent: 'Mozilla/5.0 (X11; Linux) KHTML/4.9.1 (like Gecko) Konqueror/4.9',
            tags: ['isLinux', 'isGecko']
        },

        'Midori 0.1.10 (Webkit 531)': {
            userAgent: 'Midori/0.1.10 (X11; Linux i686; U; en-us) WebKit/(531).(2) ',
            tags: ['isLinux', 'isWebKit']
        },

        'Mozilla 1.9.0 (Debian)': {
            userAgent: 'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.0.3) Gecko/2008092814 (Debian-3.0.1-1)',
            tags: ['isLinux', 'isGecko']
        },

        'Mozilla 1.9a3pre': {
            userAgent: 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9a3pre) Gecko/20070330',
            tags: ['isLinux', 'isGecko']
        },

        'Opera 9.64 (Linux Mint)': {
            userAgent: 'Opera/9.64 (X11; Linux i686; U; Linux Mint; nb) Presto/2.1.1',
            tags: ['isLinux', 'isOpera']
        },

        'Opera 10.10 (id as 9.8)': {
            userAgent: 'Opera/9.80 (X11; Linux i686; U; en) Presto/2.2.15 Version/10.10',
            tags: ['isLinux', 'isOpera']
        },

        'Opera 11.00 (id as 9.8)': {
            userAgent: 'Opera/9.80 (X11; Linux x86_64; U; pl) Presto/2.7.62 Version/11.00',
            tags: ['isLinux', 'isOpera']
        },

        'Opera 12.16 (id as 9.8, last presto)': {
            userAgent: 'Opera/9.80 (X11; Linux i686) Presto/2.12.388 Version/12.16',
            tags: ['isLinux', 'isOpera']
        },

        'Opera 20.0.1396 (Webkit 537.36)': {
            userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.166 Safari/537.36 OPR/20.0.1396.73172',
            tags: ['isLinux', 'isWebKit', 'isChrome']
        },

        'QupZilla 1.2.0 (Webkit 534.34)': {
            userAgent: 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) QupZilla/1.2.0 Safari/534.34',
            tags: ['isLinux', 'isWebKit', 'isSafari']
        },

        'SeaMonkey 2.7.1 (Mozilla)': {
            userAgent: 'Mozilla/5.0 (X11; Linux i686; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1',
            tags: ['isLinux', 'isGecko', 'isFirefox']
        },

        'SeaMonkey 2.9.1 (Mozilla)': {
            userAgent: 'Mozilla/5.0 (X11; Linux i686; rv:12.0) Gecko/20120502 Firefox/12.0 SeaMonkey/2.9.1',
            tags: ['isLinux', 'isGecko', 'isFirefox']
        },

        'Shadowfox 7.0 (Mozilla)': {
            userAgent: 'Mozilla/5.0 (X11; U; Linux x86_64; us; rv:1.9.1.19) Gecko/20110430 shadowfox/7.0 (like Firefox/7.0',
            tags: ['isLinux', 'isGecko', 'isFirefox']
        },

        'Swiftfox 3.6.3': {
            userAgent: 'Mozilla/5.0 (X11; U; Linux i686; it; rv:1.9.2.3) Gecko/20100406 Firefox/3.6.3 (Swiftfox)',
            tags: ['isLinux', 'isGecko', 'isFirefox']
        },

        'Uzbl (Webkit 1.3)': {
            userAgent: 'Uzbl (Webkit 1.3) (Linux i686 [i686])',
            tags: ['isLinux', 'isWebKit']
        },

        // 'unix': {

        'Arora/0.10.2 (BSD/Haiku)': {
            userAgent: 'Mozilla/5.0 (Unknown; U; UNIX BSD/SYSV system; C -) AppleWebKit/527 (KHTML, like Gecko, Safari/419.3) Arora/0.10.2',
            tags: ['isUnix', 'isWebKit', 'isSafari']
        },

        'Chrome 19.0.1084.56 (FreeBSD 64)': {
            userAgent: 'Mozilla/5.0 (X11; FreeBSD amd64) AppleWebKit/536.5 (KHTML like Gecko) Chrome/19.0.1084.56 Safari/536.5',
            tags: ['isUnix', 'isWebKit', 'isChrome']
        },

        'Chrome 22.0.1229.79 (FreeBSD 64)': {
            userAgent: 'Mozilla/5.0 (X11; FreeBSD amd64) AppleWebKit/537.4 (KHTML like Gecko) Chrome/22.0.1229.79 Safari/537.4',
            tags: ['isUnix', 'isWebKit', 'isChrome']
        },

        'Chrome 27.0 (NetBSD)': {
            userAgent: 'Mozilla/5.0 (X11; NetBSD) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36',
            tags: ['isUnix', 'isWebKit', 'isChrome']
        },

        'Epiphany 2.30.0 (OpenBSD)': {
            userAgent: 'Mozilla/5.0 (X11; U; OpenBSD arm; en-us) AppleWebKit/531.2 (KHTML, like Gecko) Safari/531.2 Epiphany/2.30.0',
            tags: ['isUnix', 'isWebKit', 'isSafari']
        },

        'Firefox 16.0 (NetBSD 64)': {
            userAgent: 'Mozilla/5.0 (X11; NetBSD amd64; rv:16.0) Gecko/20121102 Firefox/16.0',
            tags: ['isUnix', 'isGecko', 'isFirefox']
        },

        'Firefox 28.0 (OpenBSD 64)': {
            userAgent: 'Mozilla/5.0 (X11; OpenBSD amd64; rv:28.0) Gecko/20100101 Firefox/28.0',
            tags: ['isUnix', 'isGecko', 'isFirefox']
        },

        'Konqueror 4.1 - khtml (DragonFly)': {
            userAgent: 'Mozilla/5.0 (compatible; Konqueror/4.1; DragonFly) KHTML/4.1.4 (like Gecko)',
            tags: ['isUnix', 'isGecko']
        },

        'Konqueror 4.1 - khtml (OpenBSD)': {
            userAgent: 'Mozilla/5.0 (compatible; Konqueror/4.1; OpenBSD) KHTML/4.1.4 (like Gecko)',
            tags: ['isUnix', 'isGecko']
        },

        'Konqueror 4.5.4 - khtml (NetBSD 5.0.2)': {
            userAgent: 'Mozilla/5.0 (compatible; Konqueror/4.5; NetBSD 5.0.2; X11; amd64; en_US) KHTML/4.5.4 (like Gecko)',
            tags: ['isUnix', 'isGecko']
        },

        'Konqueror 4.5.4 - khtml (FreeBSD)': {
            userAgent: 'Mozilla/5.0 (compatible; Konqueror/4.5; FreeBSD) KHTML/4.5.4 (like Gecko)',
            tags: ['isUnix', 'isGecko']
        },

        'Namoroka 3.6.15 (Firefox) (NetBSD)': {
            userAgent: 'Mozilla/5.0 (X11; U; NetBSD amd64; en-US; rv:1.9.2.15) Gecko/20110308 Namoroka/3.6.15',
            tags: ['isUnix', 'isGecko']
        },

        'NetSurf 1.2 (NetBSD)': {
            userAgent: 'NetSurf/1.2 (NetBSD; amd64)',
            tags: ['isUnix']
        },

        'Opera 12.10 (FreeBSD)': {
            userAgent: 'Opera/9.80 (X11; FreeBSD 8.1-RELEASE i386; Edition Next) Presto/2.12.388 Version/12.10',
            tags: ['isUnix', 'isOpera']
        },

        'Seamonkey 1.1.8 (Mozilla) (SunOS 32bit)': {
            userAgent: 'Mozilla/5.0 (X11; U; SunOS i86pc; en-US; rv:1.8.1.12) Gecko/20080303 SeaMonkey/1.1.8',
            tags: ['isUnix', 'isGecko']
        },

        'Seamonkey 2.25 (Firefox/28.0) (FreeBSD)': {
            userAgent: 'Mozilla/5.0 (X11; FreeBSD i386; rv:28.0) Gecko/20100101 Firefox/28.0 SeaMonkey/2.25',
            tags: ['isUnix', 'isGecko', 'isFirefox']
        },

        // 'mobile': {

        // 'Bolt 2.8 (webkit 534.6) (Sony Ericsson K800i)': {
        //     userAgent: 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; BOLT/2.800) AppleWebKit/534.6 (KHTML, like Gecko) Version/5.0 Safari/534.6.3',
        //     tags: ['isMobile', 'isWindows']
        // },

        'Chrome 35.0.1916.141 (Samsung SM-T537A) - Android 4.4.2 - ': {
            userAgent: 'Mozilla/5.0 (Linux; Android 4.4.2; SAMSUNG-SM-T537A Build/KOT49H) AppleWebKit/537.36 (KHTML like Gecko) Chrome/35.0.1916.141 Safari/537.36',
            tags: ['isMobile', 'isTablet', 'isAndroid', 'isWebKit', 'isChrome']
        },

        'Firefox 35.0 - Android': {
            userAgent: 'Mozilla/5.0 (Android; Mobile; rv:35.0) Gecko/35.0 Firefox/35.0',
            tags: ['isMobile', 'isAndroid', 'isGecko', 'isFirefox']
        },

        'IEMobile 6.12 (Win CE) (with zune id)': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12; Microsoft ZuneHD 4.3)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isIE']
        },

        'EMobile 7.11 (MSIE 6 - Win CE)': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) ',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isIE']
        },

        'IEMobile 7.0 (MSIE 7.0) - WinPhone OS 7.0 - Asus Galaxy': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) Asus;Galaxy6',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isIE']
        },

        'IEMobile 7.5 (MSIE 9 - WP7.5)': {
            userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isIE']
        },

        'IEMobile 9.0 - WinPhone OS 7.5': {
            userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isIE']
        },

        'IEMobile 10.0 - WinPhone OS 8.0 - ARM': {
            userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch) ',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isIE']
        },

        // @todo check stats/capcabilites
        // 'EudoraWeb 2.1 (PalmOS)': {
        //     userAgent: 'Mozilla/1.22 (compatible; MSIE 5.01; PalmOS 3.0) EudoraWeb 2.1',
        // },

        // @should be mobile?
        // 'Firefox 4.0.1 (Win CE)': {
        //     userAgent: 'Mozilla/5.0 (WindowsCE 6.0; rv:2.0.1) Gecko/20100101 Firefox/4.0.1',
        //     tags: ['isMobile', 'isWindows', 'isGecko', 'isFirefox']
        // },

        // 'Firefox Fennec 1.0.a1 (Linux arm)': {
        //     userAgent: 'Mozilla/5.0 (X11; U; Linux armv61; en-US; rv:1.9.1b2pre) Gecko/20081015 Fennec/1.0a1',
        //     tags: ['isMobile', 'isGecko']
        // },

        // 'Firefox Fennec 2.0.1 (Maemo arm)': {
        //     userAgent: 'Mozilla/5.0 (Maemo; Linux armv7l; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Fennec/2.0.1',
        //     tags: ['isMobile', 'isGecko']
        // },

        // 'Firefox Fennec 10.0.1 (Maemo arm)': {
        //     userAgent: 'Mozilla/5.0 (Maemo; Linux armv7l; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 Fennec/10.0.1',
        //     tags: ['isMobile', 'isGecko']
        // },

        // 'Minimo 0.016 (Win CE)': {
        //     userAgent: 'Mozilla/5.0 (Windows; U; Windows CE 5.1; rv:1.8.1a3) Gecko/20060610 Minimo/0.016',
        //     tags: ['isMobile', 'isGecko']
        // },

        // 'Minimo 0.020 (Linux)': {
        //     userAgent: 'Mozilla/5.0 (X11; U; Linux armv6l; rv 1.8.1.5pre) Gecko/20070619 Minimo/0.020',
        //     tags: ['isMobile', 'isGecko']
        // },

        // 'Minimo 0.025 (Linux arm)': {
        //     userAgent: 'Mozilla/5.0 (X11; U; Linux arm7tdmi; rv:1.8.1.11) Gecko/20071130 Minimo/0.025',
        //     tags: ['isMobile', 'isGecko']
        // },

        // 'NetFront 3.0 (PalmOS)': {
        //     userAgent: 'Mozilla/4.0 (PDA; PalmOS/sony/model prmr/Revision:1.1.54 (en)) NetFront/3.0',
        //     tags: ['isMobile']
        // },

        // should be mobile
        // 'Opera 9.60 Mini 4.2 J2ME/MIDP': {
        //     userAgent:
        //     'Opera/9.60 (J2ME/MIDP; Opera Mini/4.2.14320/554; U; cs) Presto/2.2.0',
        //     tags: ['isMobile', 'isOpera']
        // },

        // should be mobile
        // 'Opera 10.00 Mobi - SymbOS': {
        //     userAgent:
        //     'Opera/9.80 (S60; SymbOS; Opera Mobi/499; U; ru) Presto/2.4.18 Version/10.00',
        //     tags: ['isMobile', 'isOpera']
        // },

        // should be mobile
        // 'Opera 10.61 Mini 5.1 (J2ME/MIDP)': {
        //     userAgent: 'Opera/10.61 (J2ME/MIDP; Opera Mini/5.1.21219/19.999; en-US; rv:1.9.3a5) WebKit/534.5 Presto/2.6.30',
        //     tags: ['isMobile', 'isOpera']
        // },

        // should be mobile
        // 'Opera 11.1010 Mini 7.5.33361 (Android)': {
        //     userAgent: 'Opera/9.80 (Android; Opera Mini/7.5.33361/31.1543; U; en) Presto/2.8.119 Version/11.1010',
        //     tags: ['isMobile', 'isOpera']
        // },

        // @todo check stats/capabilities
        // 'Polaris 6.01': {
        //     userAgent: 'POLARIS/6.01 (BREW 3.1.5; U; en-us; LG; LX265; POLARIS/6.01/WAP) MMP/2.0 profile/MIDP-2.1 Configuration/CLDC-1.1',
        // },

        // should be mobile
        // 'Puffin 2.9174AP - Android - (AP=Android Phone)': {
        //     userAgent: 'Mozilla/5.0 (X11; U; Linux x86_64; en-gb) AppleWebKit/534.35 (KHTML, like Gecko) Chrome/11.0.696.65 Safari/534.35 Puffin/2.9174AP',
        //     tags: ['isMobile', 'isWebKit', 'isChrome']
        // },

        // should be mobile
        // 'Puffin 2.9174AT - Android - (AT=Android Tablet)': {
        //     userAgent: 'Mozilla/5.0 (X11; U; Linux x86_64; en-us) AppleWebKit/534.35 (KHTML, like Gecko) Chrome/11.0.696.65 Safari/534.35 Puffin/2.9174AT',
        //     tags: ['isMobile', 'isWebKit', 'isChrome']
        // },

        // should be mobile
        // 'Puffin 3.9174IP - iOS 6_1 - (IP=iphone)': {
        //     userAgent: 'Mozilla/5.0 (iPod; U; CPU iPhone OS 6_1 like Mac OS X; en-HK) AppleWebKit/534.35 (KHTML, like Gecko) Chrome/11.0.696.65 Safari/534.35 Puffin/3.9174IP Mobile ',
        //     tags: ['isMobile', 'isIOS', 'isIPhone', 'isWebKit', 'isChrome']
        // },

        // should be mobile
        // 'Puffin 3.9174IT -(says Linux) - (IT=iOS tablet)': {
        //     userAgent: 'Mozilla/5.0 (X11; U; Linux x86_64; en-AU) AppleWebKit/534.35 (KHTML, like Gecko) Chrome/11.0.696.65 Safari/534.35 Puffin/3.9174IT ',
        //     tags: ['isMobile', 'isTablet', 'isIOS', 'isIPad', 'isWebKit', 'isChrome']
        // },

        // should be mobile
        // 'Puffin2.0.5603M - Linux - (M=mobile)': {
        //     userAgent: 'Mozilla/5.0 (X11; U; Linux i686; en-gb) AppleWebKit/534.35 (KHTML, like Gecko) Chrome/11.0.696.65 Safari/534.35 Puffin/2.0.5603M',
        //     tags: ['isMobile', 'isWebKit', 'isChrome']
        // },

        'Mobile Safari 530.17 (Android)': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; Droid Build/ESD20) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Safari 533 - iPad - iOS 4_2_1)': {
            userAgent: 'Mozilla/5.0 (iPad; U; CPU OS 4_2_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',
            tags: ['isMobile', 'isIOS', 'isTablet', 'isIPad', 'isWebKit', 'isSafari']
        },

        'Safari 533.17.9 - iPhone - iOS 4_2_1': {
            userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; da-dk) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',
            tags: ['isMobile', 'isIOS', 'isIPhone', 'isWebKit', 'isSafari']
        },

        'Safari 6 (8536.25) - Apple iPad 2 - iOS 6_0': {
            userAgent: 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25',
            tags: ['isMobile', 'isIOS', 'isTablet', 'isIPad', 'isWebKit', 'isSafari']
        },

        // should be mobile
        // 'UCBrowser 2.9.0 - Trident/MSIE 9.0 - WindowsPhone 7': {
        //     userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; XBLWP7; ZuneWP7) UCBrowser/2.9.0.263',
        //     appName: 'Microsoft Internet Explorer',
        //     tags: ['isMobile', 'isIE']
        // },

        'UCBrowser 8.6.1 - Webkit 533 - Android 2.3.3': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us ; LS670 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1/UCBrowser/8.6.1.262/145/355',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        // 'tablet': {

        'Acer Iconia - Android - 3.0.1 - AppleWebKit 534.13': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 3.0.1; fr-fr; A500 Build/HRI66) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
            tags: ['isMobile', 'isAndroid', 'isTablet', 'isWebKit', 'isSafari']
        },

        // should be mobile
        // 'Apple iPad - iOS - Puffin/3.9174IT (IT=ios tablet)': {
        //     userAgent: 'Mozilla/5.0 (X11; U; Linux x86_64; en-AU) AppleWebKit/534.35 (KHTML, like Gecko) Chrome/11.0.696.65 Safari/534.35 Puffin/3.9174IT',
        //     tags: ['isMobile', 'isTablet', 'isIPad', 'isWebKit', 'isSafari']
        // },

        'Apple iPad 1 - iOS 3.2 - Safari 531': {
            userAgent: 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10',
            tags: ['isMobile', 'isTablet', 'isIPad', 'isIOS', 'isWebKit', 'isSafari']
        },

        'Apple iPad 1 - iOS 4_2_1 - Safari 533': {
            userAgent: 'Mozilla/5.0 (iPad; U; CPU OS 4_2_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',
            tags: ['isMobile', 'isTablet', 'isIPad', 'isIOS', 'isWebKit', 'isSafari']
        },

        'Apple iPad 2 - iOS 4_3 - Safari 533': {
            userAgent: 'Mozilla/5.0 (iPad; U; CPU OS 4_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8F190 Safari/6533.18.5',
            tags: ['isMobile', 'isTablet', 'isIPad', 'isIOS', 'isWebKit', 'isSafari']
        },

        'Apple iPad - iOS 5_1 - Safari 5.1 (7534.48.3)': {
            userAgent: 'Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko ) Version/5.1 Mobile/9B176 Safari/7534.48.3',
            tags: ['isMobile', 'isTablet', 'isIPad', 'isIOS', 'isWebKit', 'isSafari']
        },

        'Apple iPad 2 - iOS 6_0 - Safari 6 (8536.25)': {
            userAgent: 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25',
            tags: ['isMobile', 'isTablet', 'isIPad', 'isIOS', 'isWebKit', 'isSafari']
        },

        'Apple iPad - iOS 8_0_2 - Safari 7 (9537.53)': {
            userAgent: 'Mozilla/5.0 (iPad; CPU OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML like Gecko) Mobile/12A405 Version/7.0 Safari/9537.53',
            tags: ['isMobile', 'isTablet', 'isIPad', 'isIOS', 'isWebKit', 'isSafari']
        },

        // @todo check capabilites
        // 'Barnes & Noble Nook Color - (Masked: IDs as: OS_X 10_5_7) - Safari 530.17': {
        //     userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7;en-us) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Safari/530.17',
        // },

        // should be mobile
        // 'HP Touchpad 1.0 - WebOS 3.0.2 - wOSBrowser 234.40.1': {
        //     userAgent: 'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.2; U; de-DE) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/234.40.1 Safari/534.6 TouchPad/1.0',
        //     tags: ['isMobile', 'isTablet', 'isWebKit', 'isSafari']
        // },

        'Kindle Fire - Android 4.0.3 - Silk 2.1 (AppleWebKit 535.19)': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; KFTT Build/IML74K) AppleWebKit/535.19 (KHTML, like Gecko) Silk/2.1 Mobile Safari/535.19 Silk-Accelerated=true',
            tags: ['isMobile', 'isAndroid', 'isKindle', 'isWebKit', 'isSafari']
        },

        // should be tablet
        // 'Motorola Xoom - Android 3.0.1 - Mobile Safari 523.12': {
        //     userAgent: 'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2',
        //     tags: ['isMobile', 'isTablet', 'isWebKit', 'isSafari']
        // },

        // should be mobile
        // 'RIM (Blackberry) Playbook - OS 2.1.0 - Safari 536.2+': {
        //     userAgent: 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+',
        //     tags: ['isMobile', 'isTablet', 'isWebKit', 'isSafari']
        // },

        // should be tablet
        // 'Samsung Galaxy - Android 1.5 - Mobile Safari 525.20.1': {
        //     userAgent: 'Mozilla/5.0 (Linux; U; Android 1.5; de-de; Galaxy Build/CUPCAKE) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
        //     tags: ['isMobile', 'isTablet', 'isAndroid', 'isWebKit', 'isSafari']
        // },

        // should be tablet
        // 'Samsung Galaxy - Android 2.2 - Mobile Safari 533.1': {
        //     userAgent: 'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; GT-P1000M Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
        //     tags: ['isMobile', 'isTablet', 'isAndroid', 'isWebKit', 'isSafari']
        // },

        // should be tablet
        // 'Samsung Galaxy (Verizon) - Android 2.2 - Mobile Safari 533.1': {
        //     userAgent: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SCH-I800 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
        //     tags: ['isMobile', 'isTablet', 'isAndroid', 'isWebKit', 'isSafari']
        // },

        // should be tablet
        // 'Samsung GT-P7100 - Android 3.0.1 - AppleWebKit 534.13': {
        //     userAgent: 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; GT-P7100 Build/HRI83) AppleWebkit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
        //     tags: ['isMobile', 'isTablet', 'isAndroid', 'isWebKit', 'isSafari']
        // },

        // 'kindle': {

        //     'Kindle 2.0 - Linux': {
        //         userAgent: 'Mozilla/4.0 (compatible; Linux 2.6.22) NetFront/3.4 Kindle/2.0 (screen 600x800)',
        //     },

        //     'Kindle 3.0 - AppleWebKit 528.5 - Linux': {
        //         userAgent: 'Mozilla/5.0 (Linux U; en-US) AppleWebKit/528.5 (KHTML, like Gecko, Safari/528.5 ) Version/4.0 Kindle/3.0 (screen 600x800; rotate)',
        //     },

        //     'Kindle Fire - Silk/2.1 (AppleWebKit 535.19) - Android': {
        //         userAgent: 'Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; KFTT Build/IML74K) AppleWebKit/535.19 (KHTML, like Gecko) Silk/2.1 Mobile Safari/535.19 Silk-Accelerated=true',
        //     },

        // 'ipad': {

        'iPad 1 - iOS 3.2 - Safari 531': {
            userAgent: 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10',
            tags: ['isMobile', 'isTablet', 'isIPad', 'isIOS', 'isWebKit', 'isSafari']
        },

        'iPad 1 - iOS 4_2_1 - Safari 533': {
            userAgent: 'Mozilla/5.0 (iPad; U; CPU OS 4_2_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',
            tags: ['isMobile', 'isTablet', 'isIPad', 'isIOS', 'isWebKit', 'isSafari']
        },

        'iPad 2 - iOS 4_3 - Safari 533': {
            userAgent: 'Mozilla/5.0 (iPad; U; CPU OS 4_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8F190 Safari/6533.18.5',
            tags: ['isMobile', 'isTablet', 'isIPad', 'isIOS', 'isWebKit', 'isSafari']
        },

        // should be mobile
        // 'iPad 2 - iOS 5_0_1 - Safari 6533.18.5': {
        //     userAgent: 'Mozilla/5.0 (iPad; U; CPU iPad OS 5_0_1 like Mac OS X; en-us) AppleWebKit/535.1+ (KHTML like Gecko) Version/7.2.0.0 Safari/6533.18.5',
        //     tags: ['isMobile', 'isTablet', 'isIPad', 'isIOS', 'isWebKit', 'isSafari']
        // },

        'iPad - iOS 6_0 - Safari 6 (8536.25)': {
            userAgent: 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25',
            tags: ['isMobile', 'isTablet', 'isIPad', 'isIOS', 'isWebKit', 'isSafari']
        },

        'iPad - iOS 7_0 - Safari 6 (8536.25)': {
            userAgent: 'Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/30.0.1599.12 Mobile/11A465 Safari/8536.25 (3B92C18B-D9DE-4CB7-A02A-22FD2AF17C8F)',
            tags: ['isMobile', 'isTablet', 'isIPad', 'isIOS', 'isWebKit', 'isSafari']
        },

        'iPad - iOS 8_0_2 - Safari 7 (9537.53)': {
            userAgent: 'Mozilla/5.0 (iPad; CPU OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML like Gecko) Mobile/12A405 Version/7.0 Safari/9537.53',
            tags: ['isMobile', 'isTablet', 'isIPad', 'isIOS', 'isWebKit', 'isSafari']
        },

        // 'iphone': {

        'iPhone - iOS 1.0 - Safari 419.3': {
            userAgent: 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420 (KHTML, like Gecko) Version/3.0 Mobile/1A543a Safari/419.3',
            tags: ['isMobile', 'isIPhone', 'isIOS', 'isWebKit', 'isSafari']
        },

        'iPhone - iOS 2.0 - Safari 525.200': {
            userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A347 Safari/525.200',
            tags: ['isMobile', 'isIPhone', 'isIOS', 'isWebKit', 'isSafari']
        },

        'iPhone - iOS 3.0 - Safari 528.16': {
            userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16',
            tags: ['isMobile', 'isIPhone', 'isIOS', 'isWebKit', 'isSafari']
        },

        'iPhone - iOS 4_0 - Safari 531.22.7': {
            userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/531.22.7',
            tags: ['isMobile', 'isIPhone', 'isIOS', 'isWebKit', 'isSafari']
        },

        'iPhone - iOS 4_2_1 - Safari 533.17.9': {
            userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; da-dk) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',
            tags: ['isMobile', 'isIPhone', 'isIOS', 'isWebKit', 'isSafari']
        },

        'iPhone - iOS 5_1_1 - Chrome (crios) 19.0.1084.60': {
            userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; da-dk) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3',
            tags: ['isMobile', 'isIPhone', 'isIOS', 'isWebKit', 'isSafari']
        },

        'iPhone - iOS 6 - UCWEB 8.8': {
            userAgent: 'UCWEB/8.8 (iPhone; CPU OS_6; en-US)AppleWebKit/534.1 U3/3.0.0 Mobile',
            tags: ['isMobile', 'isIPhone', 'isIOS', 'isWebKit']
        },

        'iPhone - iOS 7_1_2 - Safari 7': {
            userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53',
            tags: ['isMobile', 'isIPhone', 'isIOS', 'isWebKit', 'isSafari']
        },

        // 'ipod': {

        'iPod Touch - iOS 2.2.1 - Safari 525.20': {
            userAgent: 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11a Safari/525.20',
            tags: ['isMobile', 'isIPhone', 'isIOS', 'isIPod', 'isWebKit', 'isSafari']
        },

        'iPod Touch - iOS 3_1_1 - Safari 528.16': {
            userAgent: 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1_1 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Mobile/7C145',
            tags: ['isMobile', 'isIPhone', 'isIOS', 'isIPod', 'isWebKit']
        },

        'iPod Touch - iOS 7_1 - Safari 7.0/537.51.2': {
            userAgent: 'Mozilla/5.0 (iPod touch; CPU iPhone OS 7_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML like Gecko) Version/7.0 Mobile/11D167 Safari/123E71C',
            tags: ['isMobile', 'isIPhone', 'isIOS', 'isIPod', 'isWebKit', 'isSafari']
        },

        // 'barnes and noble': {

        //     'Nook 2 (limited data)': {
        //         userAgent: 'nook browser/1.0',
        //     },

        //     'Nook Color - Android - IDs as: OS_X 10_5_7 - Safari 530.17': {
        //         userAgent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7;en-us) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Safari/530.17',
        //     },

        //     'Nook Tablet - Android 2.3.4 - Safari 533.1': {
        //         userAgent: 'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; BNTV250 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Safari/533.1',
        //     },

        // },

        // 'blackberry': {

        '7100': {
            userAgent: 'BlackBerry7100i/4.1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/103',
            tags: ['isMobile']
        },

        '8300 Bold': {
            userAgent: 'BlackBerry8300/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/107 UP.Link/6.2.3.15.0',
            tags: ['isMobile']
        },

        '8320 Curve': {
            userAgent: 'BlackBerry8320/4.2.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/100',
            tags: ['isMobile']
        },

        '8330': {
            userAgent: 'BlackBerry8330/4.3.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/105',
            tags: ['isMobile']
        },

        '9000': {
            userAgent: 'BlackBerry9000/4.6.0.167 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102',
            tags: ['isMobile']
        },

        '9530 Storm': {
            userAgent: 'BlackBerry9530/4.7.0.167 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102 UP.Link/6.3.1.20.0',
            tags: ['isMobile']
        },

        '9700': {
            userAgent: 'BlackBerry9700/5.0.0.351 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/123',
            tags: ['isMobile']
        },

        '9800 Torch - Safari 534.1': {
            userAgent: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1 (KHTML, Like Gecko) Version/6.0.0.141 Mobile Safari/534.1',
            tags: ['isMobile', 'isWebKit', 'isSafari']
        },

        // 'Playbook (tablet) - OS 2.1.0 - Safari 536.2+': {
        //     userAgent: 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+',
        //     tags: ['isMobile', 'isWebKit', 'isSafari']
        // },

        'Z10 - BB10 OS - Mobile Safari 537.10+': {
            userAgent: 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.1.0.2342 Mobile Safari/537.10+',
            tags: ['isMobile', 'isWebKit', 'isSafari']
        },

        // 'nexus': {

        'Android SDK - Android 1.5 - Mobile Safari 525.20.1': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; sdk Build/CUPCAKE) AppleWebkit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Nexus One - Android 2.1 - Mobile Safari 530.17': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; Nexus One Build/ERD62) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Nexus One - Android 2.2 - Mobile Safari 533.1': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Nexus 5 - Android 4.4 - AppleWebKit/536.23': {
            userAgent: 'Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isChrome']
        },

        // should NOT be tablet
        // 'Nexus 7 - Android 4.4.4 - AppleWebKit/537.36': {
        //     userAgent: 'Mozilla/5.0 (Linux; Android 4.4.4; Nexus 7 Build/KTU84P) AppleWebKit/537.36 (KHTML like Gecko) Chrome/36.0.1985.135 Safari/537.36',
        //     tags: ['isMobile', 'isAndroid', 'isWebKit', 'isChrome']
        // },

        // 'hp': {

        //     'Touchpad 1.0 - WebOS 3.0.2 - wOSBrowser 234.40.1': {
        //         userAgent: 'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.2; U; de-DE) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/234.40.1 Safari/534.6 TouchPad/1.0',
        //     },

        //     'Pre3 - webOS 2.2.4 - wOSBrowser 221.56': {
        //         userAgent: 'Mozilla/5.0 (Linux; webOS/2.2.4; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) webOSBrowser/221.56 Safari/534.6 Pre/3.0 ',
        //     },

        // 'htc': {

        '6800 - WinCE - IEMobile 7.11 (MSIE 6.0) - Sprint': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Sprint:PPC6800 ',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isIE']
        },

        '6800 - WinCE - IEMobile 7.11 (MSIE 6.0) - Verizon': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) XV6800 ',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isIE']
        },

        'Bahamas - Android 1.5 - Mobile Safari 525.20.1': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; htc_bahamas Build/CRB17) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Desire - Android 2.1 - Mobile Safari 530.17': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.1-update1; de-de; HTC Desire 1.19.161.5 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Dream - Android 1.5 - Mobile Safari 525': {
            userAgent: 'HTC_Dream Mozilla/5.0 (Linux; U; Android 1.5; en-ca; Build/CUPCAKE) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Evo - Android 2.2 - Mobile Safari 533.1': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Sprint APA9292KT Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Hero - Android 1.5 - Mobile Safari 525.20': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 1.5; de-ch; HTC Hero Build/CUPCAKE) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Incredible - Android 2.2 - Mobile Safari 533.1': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; ADR6300 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Legend - Android 2.1 - Mobile Safari 530.17': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; HTC Legend Build/cupcake) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Magic - Android 1.5 - Mobile Safari 525.20.1': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 1.5; de-de; HTC Magic Build/PLAT-RC33) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1 FirePHP/0.3',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Sensation - Android 4.0.3 - Mobile Safari 534.30': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        // should be mobile
        // 'ST7377 - Win XP - Opera 9.5': {
        //     userAgent: 'HTC-ST7377/1.59.502.3 (67150) Opera/9.50 (Windows NT 5.1; U; en) UP.Link/6.3.1.17.0',
        //     tags: ['isMobile', 'isAndroid', 'isOpera']
        // },

        'Tattoo - Android 1.6 - Mobile Safari/525.20.1': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; HTC_TATTOO_A3288 Build/DRC79) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        // 'lg': {

        //     'Fusic LX550': {
        //         userAgent: 'LG-LX550 AU-MIC-LX550/2.0 MMP/2.0 Profile/MIDP-2.0 Configuration/CLDC-1.1',
        //     },

        //     'Rumor2 LX265 - Polaris': {
        //         userAgent: 'POLARIS/6.01(BREW 3.1.5;U;en-us;LG;LX265;POLARIS/6.01/WAP;)MMP/2.0 profile/MIDP-201 Configuration /CLDC-1.1',
        //     },

        //     'Viewty': {
        //         userAgent: 'LG-GC900/V10a Obigo/WAP2.0 Profile/MIDP-2.1 Configuration/CLDC-1.1',
        //     },

        // 't-mobile': {

        //     'MDA Pro - Win CE': {
        //         userAgent: 'Mozilla/4.0 (compatible; MSIE 4.01; Windows CE; PPC; MDA Pro/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1)',
        //     },

        //     'T-Mobile G1 - Android 1.0 - Mobile Safari 523.12.2': {
        //         userAgent: 'Mozilla/5.0 (Linux; U; Android 1.0; en-us; dream) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2',
        //     },

        //     'T-Mobile G1 - Android 1.5 - Mobile Safari 525.20.1': {
        //         userAgent: 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; T-Mobile G1 Build/CRB43) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari 525.20.1',
        //     },

        //     'T-Mobile G2 - Android 1.5 - Mobile Safari 525.20.1': {
        //         userAgent: 'Mozilla/5.0 (Linux; U; Android 1.5; en-gb; T-Mobile_G2_Touch Build/CUPCAKE) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
        //     },

        // 'motorola': {

        'Droid - Android 2.0 - Mobile Safari 530.17': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; Droid Build/ESD20) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Droid V2.2 - Android 2.2 - Mobile Safari 533.1': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Droid Build/FRG22D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        // 'L7': {
        //     userAgent: 'MOT-L7v/08.B7.5DR MIB/2.2.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0',
        // },

        'Milestone - Android 2.0 - Mobile Safari 530.17': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; Milestone Build/ SHOLS_U2_01.03.1) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Milestone Android 2.0.1 - Mobile Safari 530.17': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.0.1; de-de; Milestone Build/SHOLS_U2_01.14.0) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        // 'Razr V9': {
        //     userAgent: 'MOT-V9mm/00.62 UP.Browser/6.2.3.4.c.1.123 (GUI) MMP/2.0',
        // },

        // 'RIZR - Symbian OS - Opera 8.65': {
        //     userAgent: 'MOTORIZR-Z8/46.00.00 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 356) Opera 8.65 [it] UP.Link/6.3.0.0.0',
        // },

        // 'V177': {
        //     userAgent: 'MOT-V177/0.1.75 UP.Browser/6.2.3.9.c.12 (GUI) MMP/2.0 UP.Link/6.3.1.13.0',
        // },

        'Xoom - Android 3.0.1 - Mobile Safari 523.12': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        // 'nokia': {

        // '3230 - SymbianOS 7.0s': {
        //     userAgent: 'Nokia3230/2.0 (5.0614.0) SymbianOS/7.0s Series60/2.1 Profile/MIDP-2.0 Configuration/CLDC-1.0',
        // },

        // should be android
        '5700 - SymbianOS 9.2 - Safari 413': {
            userAgent: 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia5700/3.27; Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413',
            tags: ['isMobile', 'isWebKit', 'isSafari']
        },

        // '6120 Classic - SymbianOS 9.2 - Safari 413': {
        //     userAgent: 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 Nokia6120c/3.70; Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413',
        //     tags: ['isMobile', 'isWebKit', 'isSafari']
        // },

        // '6230': {
        //     userAgent: 'Nokia6230/2.0 (04.44) Profile/MIDP-2.0 Configuration/CLDC-1.1',
        // },

        // '6230i': {
        //     userAgent: 'Nokia6230i/2.0 (03.80) Profile/MIDP-2.0 Configuration/CLDC-1.1',
        // },

        // '6600 Smartphone - Symbian OS - Opera 6.20': {
        //     userAgent: 'Mozilla/4.1 (compatible; MSIE 5.0; Symbian OS; Nokia 6600;452) Opera 6.20 [en-US]',
        // },

        // '6630 - SymbianOS 8.0': {
        //     userAgent: 'Nokia6630/1.0 (2.39.15) SymbianOS/8.0 Series60/2.6 Profile/MIDP-2.0 Configuration/CLDC-1.1',
        // },

        // '7250': {
        //     userAgent: 'Nokia7250/1.0 (3.14) Profile/MIDP-1.0 Configuration/CLDC-1.0',
        // },

        // '9500': {
        //     userAgent: 'Mozilla/4.0 (compatible; MSIE 5.0; Series80/2.0 Nokia9500/4.51 Profile/MIDP-2.0 Configuration/CLDC-1.1)',
        // },

        // shouldb be safari
        'C6-01 - Symbian 3 - Safari 525': {
            userAgent: 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC6-01/011.010; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.2 3gpp-gba',
            tags: ['isMobile', 'isWebKit']
        },

        // shouldb be safari
        'C7 - Symbian 3 - Safari 525': {
            userAgent: 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaC7-00/012.003; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba',
            tags: ['isMobile', 'isWebKit']
        },

        // should be mobile
        // 'E50 - SymbianOS 9.1 - Safari 413 es50': {
        //     userAgent: 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413 es50',
        //     tags: ['isMobile', 'isWebKit', 'isSafari']
        // },

        'E6-00 - SymbianOS 3 - Safari 533.4': {
            userAgent: 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE6-00/021.002; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.16 Mobile Safari/533.4 3gpp-gba',
            tags: ['isMobile', 'isWebKit', 'isSafari']
        },

        // shouldb be safari
        'E63 - SymbianOS 9.2 - UCWEB 8.8 (webkit)': {
            userAgent: 'UCWEB/8.8 (SymbianOS/9.2; U; en-US; NokiaE63) AppleWebKit/534.1 UCBrowser/8.8.0.245 Mobile',
            tags: ['isMobile', 'isWebKit']
        },

        // should be mobile
        // 'E65 - SymbianOS 9.1 - Safari 413 es65': {
        //     userAgent: 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413 es65',
        //     tags: ['isMobile', 'isWebKit', 'isSafari']
        // },

        // shouldb be safari
        'E7 - Symbian 3 - Safari 525': {
            userAgent: 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaE7-00/010.016; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.3 3gpp-gba',
            tags: ['isMobile', 'isWebKit']
        },

        // should be mobile
        // 'E70 - SymbianOS 9.1 - Safari 413 es70': {
        //     userAgent: 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413 es70',
        //     tags: ['isMobile', 'isWebKit', 'isSafari']
        // },

        'E90 - SymbianOS 9.2 - Safari 413': {
            userAgent: 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE90-1/07.24.0.3; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413 UP.Link/6.2.3.18.0',
            tags: ['isMobile', 'isWebKit', 'isSafari']
        },

        'Lumia 620 ARM - Windows Phone OS 8.0 - IEMobile 10.0': {
            userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isIE']
        },

        // 'N70': {
        //     userAgent: 'NokiaN70-1/5.0609.2.0.1 Series60/2.8 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.1.13.0',
        // },

        // 'N73 - SymbianOS 9.1 - Safari 413': {
        //     userAgent: 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413',
        // },

        // 'N73 (Service)': {
        //     userAgent: 'NokiaN73-1/3.0649.0.0.1 Series60/3.0 Profile/MIDP2.0 Configuration/CLDC-1.1',
        // },

        // 'N8 - Symbian 3 - Safari 525': {
        //     userAgent: 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/014.002; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.4 3gpp-gba',
        // },

        // 'N80 - SymbianOS 9.1 - Safari 413': {
        //     userAgent: 'Mozilla/5.0 (SymbianOS/9.1; U; en-us) AppleWebKit/413 (KHTML, like Gecko) Safari/413',
        // },

        // 'N9 - MeeGo - Safari 534.13': {
        //     userAgent: 'Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13',
        // },

        // 'N93 - SymbianOS 9.1 - Safari 413': {
        //     userAgent: 'Mozilla/5.0 (SymbianOS/9.1; U; de) AppleWebKit/413 (KHTML, like Gecko) Safari/413',
        // },

        // 'N95 - SymbianOS 9.2 - Safari 413': {
        //     userAgent: 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/10.0.018; Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413 UP.Link/6.3.0.0.0',
        // },

        // 'N950 - MeeGo - Safari 534.13': {
        //     userAgent: 'Mozilla/5.0 (MeeGo; NokiaN950-00/00) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13',
        // },

        // 'N97 - SymbianOS 9.4 - WicKed 7.1.12344': {
        //     userAgent: 'Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/10.0.012; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) WicKed/7.1.12344',
        // },

        // 'X7 - Symbian 3 - Safari 533.4': {
        //     userAgent: 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaX7-00/021.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.21 Mobile Safari/533.4 3gpp-gba',
        // },

        // 'samsung': {

        // should be mobile
        // 'e900 - Opera/Netfront': {
        //     userAgent: 'SEC-SGHE900/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera/8.01 (J2ME/MIDP; Opera Mini/2.0.4509/1378; nl; U; ssr)',
        //     tags: ['isMobile', 'isOepra']
        // },

        'Galaxy - Android 1.5 - Mobile Safari 525.20.1': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 1.5; de-de; Galaxy Build/CUPCAKE) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Galaxy - Android 2.2 - Mobile Safari 533.1': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; GT-P1000M Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Galaxy (Verizon) - Android 2.2 - Mobile Safari 533.1': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; SCH-I800 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Galaxy S II - Android 4.0.3 - Mobile Safari 534.30': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 4.0.3; de-de; Galaxy S II Build/GRJ22) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Galaxy S 3 (SPH-L710) - Android 4.3 - Chrome 32.0.1700.99': {
            userAgent: 'User agent: Mozilla/5.0 (Linux; Android 4.3; SPH-L710 Build/JSS15J) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.99 Mobile Safari/537.36',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isChrome']
        },

        'GT-P7100 tablet - Android 3.0.1 - AppleWebKit 534.13': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 3.0.1; en-us; GT-P7100 Build/HRI83) AppleWebkit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
            tags: ['isMobile', 'isTablet', 'isAndroid', 'isWebKit', 'isSafari']
        },

        // 'Jet': {
        //     userAgent: 'SAMSUNG-S8000/S8000XXIF3 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 FirePHP/0.3',
        // },

        'Moment - Android 1.5 - Mobile Safari 525.20.1': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 1.5; en-us; SPH-M900 Build/CUPCAKE) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        // 'SGH-A867 - Netfront': {
        //     userAgent: 'SAMSUNG-SGH-A867/A867UCHJ3 SHP/VPP/R5 NetFront/35 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1 UP.Link/6.3.0.0.0',
        // },

        // 'SGH X210 (WML)': {
        //     userAgent: 'SEC-SGHX210/1.0 UP.Link/6.3.1.13.0',
        // },

        'SM-T537A - Android 4.4.2 - Chrome 35.0.1916.141': {
            userAgent: 'Mozilla/5.0 (Linux; Android 4.4.2; SAMSUNG-SM-T537A Build/KOT49H) AppleWebKit/537.36 (KHTML like Gecko) Chrome/35.0.1916.141 Safari/537.36',
            tags: ['isMobile', 'isTablet', 'isAndroid', 'isWebKit', 'isChrome']
        },

        'Spica - Android 1.5 - Mobile Safari 525.20.1': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 1.5; fr-fr; GT-I5700 Build/CUPCAKE) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        // 'X820': {
        //     userAgent: 'SEC-SGHX820/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1',
        // },

        // 'sony ericson': {

        //     'K310iv': {
        //         userAgent: 'SonyEricssonK310iv/R4DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.1.13.0',
        //     },

        //     'K550i': {
        //         userAgent: 'SonyEricssonK550i/R1JD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1',
        //     },

        //     'K610i': {
        //         userAgent: 'SonyEricssonK610i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1',
        //     },

        //     'K750i': {
        //         userAgent: 'SonyEricssonK750i/R1CA Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1',
        //     },

        //     'K800 - Opera 9.8': {
        //         userAgent: 'Opera/9.80 (J2ME/MIDP; Opera Mini/5.0.16823/1428; U; en) Presto/2.2.0',
        //     },

        //     'K800i': {
        //         userAgent: 'SonyEricssonK800i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0',
        //     },

        //     'K810i': {
        //         userAgent: 'SonyEricssonK810i/R1KG Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1',
        //     },

        //     'P900 - Opera 8.0 Mini': {
        //         userAgent: 'Opera/8.01 (J2ME/MIDP; Opera Mini/1.0.1479/HiFi; SonyEricsson P900; no; U; ssr)',
        //     },

        //     'S500i': {
        //         userAgent: 'SonyEricssonS500i/R6BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1',
        //     },

        //     'Satio - Safari 525': {
        //         userAgent: 'Mozilla/5.0 (SymbianOS/9.4; U; Series60/5.0 SonyEricssonP100/01; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 Safari/525',
        //     },

        //     'T68 (WML)': {
        //         userAgent: 'SonyEricssonT68/R201A',
        //     },

        //     'T100 (WML)': {
        //         userAgent: 'SonyEricssonT100/R101',
        //     },

        //     'T610': {
        //         userAgent: 'SonyEricssonT610/R201 Profile/MIDP-1.0 Configuration/CLDC-1.0',
        //     },

        //     'T650i': {
        //         userAgent: 'SonyEricssonT650i/R7AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1',
        //     },

        //     'W580i': {
        //         userAgent: 'SonyEricssonW580i/R6BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1',
        //     },

        //     'W660i': {
        //         userAgent: 'SonyEricssonW660i/R6AD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1',
        //     },

        //     'W810i': {
        //         userAgent: 'SonyEricssonW810i/R4EA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0',
        //     },

        //     'W850i': {
        //         userAgent: 'SonyEricssonW850i/R1ED Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1',
        //     },

        //     'W950i - Opera 8.60 - Symbian OS': {
        //         userAgent: 'SonyEricssonW950i/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 323) Opera 8.60 [en-US]',
        //     },

        //     'W995': {
        //         userAgent: 'SonyEricssonW995/R1EA Profile/MIDP-2.1 Configuration/CLDC-1.1 UNTRUSTED/1.0',
        //     },

        // 'X10 - Android 1.6 - Safari 525.20.1': {
        //     userAgent: 'Mozilla/5.0 (Linux; U; Android 1.6; es-es; SonyEricssonX10i Build/R1FA016) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
        // },

        // 'X10i - Android 1.6 - Mobile Safari 525.20.1': {
        //     userAgent: 'Mozilla/5.0 (Linux; U; Android 1.6; en-us; SonyEricssonX10i Build/R1AA056) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
        // },

        // 'Xperia X1 - Opera Mobi 9.5': {
        //     userAgent: 'Opera/9.5 (Microsoft Windows; PPC; Opera Mobi; U) SonyEricssonX1i/R2AA Profile/MIDP-2.0 Configuration/CLDC-1.1',
        // },

        // 'Z800i': {
        //     userAgent: 'SonyEricssonZ800/R1Y Browser/SEMC-Browser/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0',
        // },

        // 'zune': {

        // 'ZuneHD 4.3 - IEMobile 6.12 - CE': {
        //     userAgent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12; Microsoft ZuneHD 4.3)',
        // },

        // 'android': {

        // should not be tablet
        // 'Android - Opera Mini 7.5.33361 (11.1010)': {
        //     userAgent: 'Opera/9.80 (Android; Opera Mini/7.5.33361/31.1543; U; en) Presto/2.8.119 Version/11.1010',
        //     tags: ['isMobile', 'isAndroid', 'isOpera']
        // },

        'Android - Firefox 35.0': {
            userAgent: 'Mozilla/5.0 (Android; Mobile; rv:35.0) Gecko/35.0 Firefox/35.0',
            tags: ['isMobile', 'isAndroid', 'isGecko', 'isFirefox']
        },

        'Android 0.5 - Safari 419': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 0.5; en-us) AppleWebKit/522 (KHTML, like Gecko) Safari/419.3',
            tags: ['isMobile', 'isTablet', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Android 1.1 - Mobile Safari 523': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 1.1; en-gb; dream) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Android 1.5 - HTC Dream - Mobile Safari 525': {
            userAgent: 'HTC_Dream Mozilla/5.0 (Linux; U; Android 1.5; en-ca; Build/CUPCAKE) AppleWebKit/528.5 (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Android 2.0 - Motorola Droid - Mobile Safari 530.17': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.0; en-us; Droid Build/ESD20) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Android 2.1 - Nexus One - Safari 530.17': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.1; en-us; Nexus One Build/ERD62) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Android 2.2 - HTC Evo - Mobile Safari 533.1': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Sprint APA9292KT Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Android 2.2 - HTC Incredible - Safari 533.1': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.2; en-us; ADR6300 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Android 2.2 - Samsung Galaxy - Mobile Safari 533.1': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; GT-P1000M Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        // should NOT be tablet
        // 'Android - Fennec 2.0.1 (arm)': {
        //     userAgent: 'Mozilla/5.0 (Android; Linux armv7l; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Fennec/2.0.1',
        //     tags: ['isMobile', 'isAndroid', 'isGecko', 'isFirefox']
        // },

        'Android - 3.0.1 - Safari 534.13 - Acer Iconia': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 3.0.1; fr-fr; A500 Build/HRI66) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
            tags: ['isMobile', 'isTablet', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Android - 3.0.1 - Mobile Safari 523.12 - Motorola Xoom': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/525.10 (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Android 4.0.3 - Mobile Safari 534.30 - HTC Sensation': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Android 4.0.3 - Mobile Safari 534.30 - Samsung Galaxy S II': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 4.0.3; de-de; Galaxy S II Build/GRJ22) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        // should NOT be tablet
        'Android 4.0.4 - Opera 12.00': {
            userAgent: 'Opera/9.80 (Android 4.0.4; Linux; Opera Mobi/ADR-1205181138; U; pl) Presto/2.10.254 Version/12.00',
            tags: ['isMobile', 'isTablet', 'isMobile', 'isAndroid', 'isOpera']
        },

        // should NOT be tablet
        'Android - Fennec 10.0.1': {
            userAgent: 'Mozilla/5.0 (Android; Linux armv7l; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 Fennec/10.0.1',
            tags: ['isMobile', 'isTablet', 'isAndroid', 'isGecko', 'isFirefox']
        },

        'Android 4.1.2 - Chrome 30.0': {
            userAgent: 'Mozilla/5.0 (Linux; Android 4.1.2; SHV-E250S Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.82 Mobile Safari/537.36',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isChrome']
        },

        'Android 4.2 - Firefox 19.0': {
            userAgent: 'Mozilla/5.0 (Android 4.2; rv:19.0) Gecko/20121129 Firefox/19.0',
            tags: ['isMobile', 'isTablet', 'isAndroid', 'isGecko', 'isFirefox']
        },

        'Android 4.3 - AppleWebKit/536.23': {
            userAgent: 'Mozilla/5.0 (Linux; U; Android 4.3; en-us; sdk Build/MR1) AppleWebKit/536.23 (KHTML, like Gecko) Version/4.3 Mobile Safari/536.23',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isSafari']
        },

        'Android 4.4 - (Nexus 5) - AppleWebKit/536.23': {
            userAgent: 'Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36',
            tags: ['isMobile', 'isAndroid', 'isWebKit', 'isChrome']
        },

        'Android 4.4.2 - Chrome 35.0.1916.141': {
            userAgent: 'Mozilla/5.0 (Linux; Android 4.4.2; SAMSUNG-SM-T537A Build/KOT49H) AppleWebKit/537.36 (KHTML like Gecko) Chrome/35.0.1916.141 Safari/537.36',
            tags: ['isMobile', 'isTablet', 'isAndroid', 'isWebKit', 'isChrome']
        },

        // 'ios': {

        'iOS 1.0 - iPhone - Safari 419.3': {
            userAgent: 'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420 (KHTML, like Gecko) Version/3.0 Mobile/1A543a Safari/419.3',
            tags: ['isMobile', 'isIPhone', 'isIOS', 'isWebKit', 'isSafari']
        },

        'iOS 2.0 - iPhone - Safari 525.200': {
            userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A347 Safari/525.200',
            tags: ['isMobile', 'isIPhone', 'isIOS', 'isWebKit', 'isSafari']
        },

        // should not be iphone
        // 'iOS 2.2.1 - iPod - Safari 525.20': {
        //     userAgent: 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11a Safari/525.20',
        //     tags: ['isMobile', 'isIPod', 'isIOS', 'isWebKit', 'isSafari']
        // },

        'iOS 3.0 - iPhone - Safari 528.16': {
            userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16',
            tags: ['isMobile', 'isIPhone', 'isIOS', 'isWebKit', 'isSafari']
        },

        'iOS 3.2 - iPad - Safari 531': {
            userAgent: 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10',
            tags: ['isMobile', 'isTablet', 'isIPad', 'isIOS', 'isWebKit', 'isSafari']
        },

        // should NOT be isIPhone
        // 'iOS 4_2_1 - iPad - Safari 533': {
        //     userAgent: 'Mozilla/5.0 (iPad; U; CPU OS 4_2_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',
        //     tags: ['isMobile', 'isTablet', 'isIPad', 'isIOS', 'isWebKit', 'isSafari']
        // },

        // should NOT be tablet
        // 'iOS 4_2_1 - iPhone - Safari 533.17.9': {
        //     userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; da-dk) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',
        //     tags: ['isMobile', 'isIPhone', 'isIOS', 'isWebKit', 'isSafari']
        // },

        // should be safari
        // 'iOS 4_3 - iPhone - Safari 533.17.9': {
        //     userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3 like Mac OS X; de-de) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/8F190',
        //     tags: ['isMobile', 'isIPhone', 'isIOS', 'isWebKit', 'isSafari']
        // },

        'iOS 5_1_1 - iPhone - Chrome (crios) 19.0.1084.60': {
            userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; da-dk) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3',
            tags: ['isMobile', 'isIPhone', 'isIOS', 'isWebKit', 'isSafari']
        },

        // 'symbian': {

        // 'Symbian 3 - N8 - Safari 525': {
        //     userAgent: 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/014.002; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.6.4 3gpp-gba',
        //     tags: ['isMobile', 'isWebKit', 'isSafari']
        // },

        'Symbian 3 - Nokia X7 - Safari 533.4': {
            userAgent: 'Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaX7-00/021.004; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.21 Mobile Safari/533.4 3gpp-gba',
            tags: ['isMobile', 'isWebKit', 'isSafari']
        },

        'SymbianOS 9.2 - Nokia E90 - Safari': {
            userAgent: 'Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaE90-1/07.24.0.3; Profile/MIDP-2.0 Configuration/CLDC-1.1 ) AppleWebKit/413 (KHTML, like Gecko) Safari/413 UP.Link/6.2.3.18.0',
            tags: ['isMobile', 'isWebKit', 'isSafari']
        },

        'SymbianOS 9.4 - Nokia N97 - WicKed 7.1.12344': {
            userAgent: 'Mozilla/5.0 (SymbianOS 9.4; Series60/5.0 NokiaN97-1/10.0.012; Profile/MIDP-2.1 Configuration/CLDC-1.1; en-us) AppleWebKit/525 (KHTML, like Gecko) WicKed/7.1.12344',
            tags: ['isMobile', 'isWebKit']
        },

        // 'SymbOS - Opera 10.00 Mobi': {
        //     userAgent: 'Opera/9.80 (S60; SymbOS; Opera Mobi/499; U; ru) Presto/2.4.18 Version/10.00',
        // },

        // 'windows mobile': {

        'Windows CE - ZuneHD 4.3 - IEMobile 6.12': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 6.12; Microsoft ZuneHD 4.3)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isWwindows', 'isIE']
        },

        'Windows CE - MSIE 6 - IEMobile 7.11': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isWwindows', 'isIE']
        },

        'Windows CE 5.2 - Sprint (HTC Titan) - IEMobile 7.11 (MSIE 6.0)': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11) Sprint:PPC6800',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isWwindows', 'isIE']
        },

        'Windows CE - MSIE 6 - IEMobile 8.12': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 8.12; MSIEMobile6.0)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isWwindows', 'isIE']
        },

        'Windows Phone OS 7.0 - Asus Galaxy - IEMobile 7.0 (MSIE 7.0)': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) Asus;Galaxy6',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isWwindows', 'isIE']
        },

        'Windows Phone 7 - MSIE 7 - IEMobile 7.0': {
            userAgent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isWwindows', 'isIE']
        },

        'Windows Phone OS 7.5 - IEMobile 9.0': {
            userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isWwindows', 'isIE']
        },

        'Windows Phone OS 8.0 - ARM - IEMobile 10.0': {
            userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch) ',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isWwindows', 'isIE']
        },

        'Windows Phone OS 8.0 - Nokia Lumia 620 ARM - IEMobile 10.0': {
            userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)',
            appName: 'Microsoft Internet Explorer',
            tags: ['isMobile', 'isWwindows', 'isIE']
        },
    };

    var tests = [
        'isWindows',
        'isChrome',
        'isFirefox',
        'isGecko',
        'isKindle',
        'isMobile',
        'isOpera',
        'isSafari',
        'isTablet',
        'isTV',
        'isWebKit',
        'isAndroid',
        'isIOS',
        'isIPad',
        'isIPhone',
        'isIPod',
        'isIE'
    ];

    beforeEach(module('ng.cx.ua'));

    var expected;
    var message;
    var ix;

    function setUa(ua, appName) {
        return function ($provide) {
            $provide.value('$window', {
                navigator: {
                    userAgent: ua,
                    appName: appName
                }
            });
        };
    }

    function createExpectation(test, expected) {
        return inject(function (cxUA) {
            expect(cxUA[test]).toBe(expected);
        });
    }

    function createTestGroup(key) {
        return function () {
            beforeEach(module(setUa(userAgents[key].userAgent, userAgents[key].appName)));

            for (ix = 0; ix < tests.length; ix++) {
                expected = userAgents[key].tags.indexOf(tests[ix]) !== -1;
                message = 'should ' + (expected ? '' : 'NOT ') + ' be "' + tests[ix] + '".';
                it(message, createExpectation(tests[ix], expected));
            }
        };
    }

    describe('cxUA', function () {
        for (var key in userAgents) {
            describe('UA: "' + key + '"', createTestGroup(key));
        }
    });
});
