/**
 * SUPERSLOTH.JS
 * Created by kris (http://github.com/kriskbx - http://kris.cool)
 * Licensed under the MIT license
 */

SUPERSLOTH = function () {
    this.docReady(window, this.prepare);
}

SUPERSLOTH.prototype.prepare = function () {
    var supersloth = document.createElement('div');
    supersloth.id = 'supersloth';
    supersloth.innerHTML = '<h2 id="supersubline">mega awesome</h2><h1 id="superheadline">SUPERSLOTH</h1><div id="superstripescontainer"><div id="superstripes"></div></div><div id="superslothy"></div>';
    document.getElementsByTagName('body')[0].appendChild(supersloth);
    var css = "{css_placeholder}";
    var style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}

SUPERSLOTH.prototype.start = function () {
    var body = document.getElementsByTagName('body')[0];
    var html = document.getElementsByTagName('html')[0];
    body.className = body.className + ' supersloth';
    html.className = html.className + ' supersloth';
    document.getElementById('superheadline').className = 'a';
    document.getElementById('supersubline').className = 'a';
    document.getElementById('superstripescontainer').className = 'a';
    document.getElementById('superslothy').className = 'a';
    setTimeout(function () {
        document.getElementById('superheadline').className = '';
        document.getElementById('supersubline').className = '';
        document.getElementById('superstripescontainer').className = '';
        document.getElementById('superslothy').className = '';
        setTimeout(function () {
            body.className = body.className.replace(' supersloth', '');
            html.className = html.className.replace(' supersloth', '');
        }, 40);
    }, 3000);
}

SUPERSLOTH.prototype.docReady = function (win, fn) {
    var done = false,
        top = true,
        doc = win.document,
        root = doc.documentElement,
        add = doc.addEventListener ? "addEventListener" : "attachEvent",
        rem = doc.addEventListener ? "removeEventListener" : "detachEvent",
        pre = doc.addEventListener ? "" : "on",
        init = function (e) {
            if (e.type == "readystatechange" && doc.readyState != "complete") {
                return;
            }
            (e.type == "load" ? win : doc)[rem](pre + e.type, init, false);
            if (!done && (done = true)) {
                fn.call(win, e.type || e);
            }
        },
        poll = function () {
            try {
                root.doScroll("left");
            } catch (e) {
                setTimeout(poll, 50);
                return;
            }
            init("poll");
        };
    if (doc.readyState == "complete") {
        fn.call(win, "lazy");
    } else {
        if (doc.createEventObject && root.doScroll) {
            try {
                top = !win.frameElement;
            } catch (e) {
            }
            if (top) {
                poll();
            }
        }
        doc[add](pre + "DOMContentLoaded", init, false);
        doc[add](pre + "readystatechange", init, false);
        win[add](pre + "load", init, false);
    }
}

var superslothjs = new SUPERSLOTH();