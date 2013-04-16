﻿(function () {
    var dBody = document.getElementsByTagName("body")[0];
    var circleDoms = document.getElementsByTagName("circle");

    for (var circleDomIndex = 0; circleDomIndex < circleDoms.length; circleDomIndex++) {
        var circleDom = circleDoms[circleDomIndex];

        var ox = parseInt(circleDom.getAttribute("x"));
        var oy = parseInt(circleDom.getAttribute("y"));
        var r = parseInt(circleDom.getAttribute("r"));
        var border = parseInt(circleDom.getAttribute("border"));
        var color = circleDom.getAttribute("color") || "black";

        var p = Math.sqrt((r * r) / 2);

        var dotDoms = [];

        for (var idx = 0; idx <= p; idx++) {
            var xy = Math.sqrt(r * r - idx * idx);

            var dot1x = document.createElement("div");
            dot1x.style.position = "absolute";
            dot1x.style.left = (ox + idx) + "px";
            dot1x.style.top = (oy - xy) + "px";
            dot1x.style.width = border + "px";
            dot1x.style.height = border + "px";
            dot1x.style.backgroundColor = color;

            var dot1y = document.createElement("div");
            dot1y.style.position = "absolute";
            dot1y.style.left = (ox + xy) + "px";
            dot1y.style.top = (oy - idx) + "px";
            dot1y.style.width = border + "px";
            dot1y.style.height = border + "px";
            dot1y.style.backgroundColor = color;

            var dot2x = document.createElement("div");
            dot2x.style.position = "absolute";
            dot2x.style.left = (ox + idx) + "px";
            dot2x.style.top = (oy + xy) + "px";
            dot2x.style.width = border + "px";
            dot2x.style.height = border + "px";
            dot2x.style.backgroundColor = color;

            var dot2y = document.createElement("div");
            dot2y.style.position = "absolute";
            dot2y.style.left = (ox + xy) + "px";
            dot2y.style.top = (oy + idx) + "px";
            dot2y.style.width = border + "px";
            dot2y.style.height = border + "px";
            dot2y.style.backgroundColor = color;

            var dot3x = document.createElement("div");
            dot3x.style.position = "absolute";
            dot3x.style.left = (ox - idx) + "px";
            dot3x.style.top = (oy + xy) + "px";
            dot3x.style.width = border + "px";
            dot3x.style.height = border + "px";
            dot3x.style.backgroundColor = color;

            var dot3y = document.createElement("div");
            dot3y.style.position = "absolute";
            dot3y.style.left = (ox - xy) + "px";
            dot3y.style.top = (oy + idx) + "px";
            dot3y.style.width = border + "px";
            dot3y.style.height = border + "px";
            dot3y.style.backgroundColor = color;

            var dot4x = document.createElement("div");
            dot4x.style.position = "absolute";
            dot4x.style.left = (ox - idx) + "px";
            dot4x.style.top = (oy - xy) + "px";
            dot4x.style.width = border + "px";
            dot4x.style.height = border + "px";
            dot4x.style.backgroundColor = color;

            var dot4y = document.createElement("div");
            dot4y.style.position = "absolute";
            dot4y.style.left = (ox - xy) + "px";
            dot4y.style.top = (oy - idx) + "px";
            dot4y.style.width = border + "px";
            dot4y.style.height = border + "px";
            dot4y.style.backgroundColor = color;

            dotDoms.push(dot1x);
            dotDoms.push(dot1y);
            dotDoms.push(dot2x);
            dotDoms.push(dot2y);
            dotDoms.push(dot3x);
            dotDoms.push(dot3y);
            dotDoms.push(dot4x);
            dotDoms.push(dot4y);
        }

        for (var i = 0; i < dotDoms.length; i++) {
            dBody.appendChild(dotDoms[i]);
        }
    }

})();