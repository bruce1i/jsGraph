(function () {
    var dBody = document.getElementsByTagName("body")[0];
    var circleDoms = document.getElementsByTagName("circle");
    var lineDoms = document.getElementsByTagName("line");

    for (var lineDomIndex = 0; lineDomIndex < lineDoms.length; lineDomIndex++) {
        var lineDom = lineDoms[lineDomIndex];

        var x1 = parseInt(lineDom.getAttribute("x1"));
        var y1 = parseInt(lineDom.getAttribute("y1"));

        var x2 = parseInt(lineDom.getAttribute("x2"));
        var y2 = parseInt(lineDom.getAttribute("y2"));

        var a = Math.abs(x2 - x1);
        var b = Math.abs(y2 - y1);

        var dotDoms = [];

        var previousD = 0;
        for (var idx = 0; idx <= a; idx++) {
            var d = Math.round((b * idx) / a);
            var diff = d - previousD;
            previousD = d;
            for (var diffIdx = 1; diffIdx < diff; diffIdx++) {
                var dot = document.createElement("div");
                dot.style.position = "absolute";
                dot.style.left = (x1 + idx) + "px";
                dot.style.top = (y1 - d + diffIdx) + "px";
                dot.style.width = 1 + "px";
                dot.style.height = 1 + "px";
                dot.style.backgroundColor = "black";
                
                dotDoms.push(dot);
            }

            var dot = document.createElement("div");
            dot.style.position = "absolute";
            dot.style.left = (x1 + idx) + "px";
            dot.style.top = (y1 - d) + "px";
            dot.style.width = 1 + "px";
            dot.style.height = 1 + "px";
            dot.style.backgroundColor = "black";

            dotDoms.push(dot);
        }


        for (var i = 0; i < dotDoms.length; i++) {
            dBody.appendChild(dotDoms[i]);
        }

    }

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