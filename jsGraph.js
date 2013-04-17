(function () {
    var b1i = window.Bruce1i = window.Bruce1i || {};
    var fn = b1i.Graph = {};

    //todo:
    //window.Bruce1i = window.Bruce1i || {};
    //var fn = Bruce1i.Graph = {};

    // private
    var _this = {};

    _this.body = null;
    _this.circleDoms = null;
    _this.lineDoms = null;

    _this.newDot = function (args) {
        args = args || {};
        args.x = args.x || 0;
        args.y = args.y || 0;
        args.color = args.color || "black";
        args.size = args.size || "1";

        var dot = document.createElement("div");

        dot.style.position = "absolute";
        dot.style.left = args.x + "px";
        dot.style.top = args.y + "px";
        dot.style.width = args.size + "px";
        dot.style.height = args.size + "px";
        dot.style.backgroundColor = args.color;

        return dot;
    };

    _this.initCircle = function () {
        for (var circleDomIndex = 0; circleDomIndex < _this.circleDoms.length; circleDomIndex++) {
            var circleDom = _this.circleDoms[circleDomIndex];

            var ox = parseInt(circleDom.getAttribute("x"));
            var oy = parseInt(circleDom.getAttribute("y"));
            var r = parseInt(circleDom.getAttribute("r"));
            var border = parseInt(circleDom.getAttribute("border"));
            var color = circleDom.getAttribute("color") || "black";

            var p = Math.sqrt((r * r) / 2);

            var dotDoms = [];

            for (var idx = 0; idx <= p; idx++) {
                var xy = Math.sqrt(r * r - idx * idx);

                var dot1x = _this.newDot({ x: ox + idx, y: oy - xy, size: border, color: color });
                var dot1y = _this.newDot({ x: ox + xy, y: oy - idx, size: border, color: color });

                var dot2x = _this.newDot({ x: ox + idx, y: oy + xy, size: border, color: color });
                var dot2y = _this.newDot({ x: ox + xy, y: oy + idx, size: border, color: color });

                var dot3x = _this.newDot({ x: ox - idx, y: oy + xy, size: border, color: color });
                var dot3y = _this.newDot({ x: ox - xy, y: oy + idx, size: border, color: color });

                var dot4x = _this.newDot({ x: ox - idx, y: oy - xy, size: border, color: color });
                var dot4y = _this.newDot({ x: ox - xy, y: oy - idx, size: border, color: color });

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
                _this.body.appendChild(dotDoms[i]);
            }
        }
    };

    _this.initLine = function () {
        for (var lineDomIndex = 0; lineDomIndex < _this.lineDoms.length; lineDomIndex++) {
            var lineDom = _this.lineDoms[lineDomIndex];

            var x1 = parseInt(lineDom.getAttribute("x1"));
            var y1 = parseInt(lineDom.getAttribute("y1"));
            var x2 = parseInt(lineDom.getAttribute("x2"));
            var y2 = parseInt(lineDom.getAttribute("y2"));
            var size = parseInt(lineDom.getAttribute("size") || 1);
            var color = lineDom.getAttribute("color") || "black";

            var a = Math.abs(x2 - x1);
            var b = Math.abs(y2 - y1);

            var dotDoms = [];

            var lineDirection = _this.lineHelper.getDirection({ x: x1, y: y1 }, { x: x2, y: y2 });

            if (lineDirection == "dot") {
                dotDoms.push(_this.newDot({ x: x1, y: y1, size: size, color: color }));
            }
            else if (lineDirection == "straighty") {
                var offset = Math.min(y1, y2);
                for (var idx = 0; idx < b; idx++) {
                    dotDoms.push(_this.newDot({ x: x1, y: offset + idx, size: size, color: color }));
                }
            }
            else if (lineDirection == "straightx") {
                var offset = Math.min(x1, x2);
                for (var idx = 0; idx < a; idx++) {
                    dotDoms.push(_this.newDot({ x: offset + idx, y: y1, size: size, color: color }));
                }
            }
            else if (lineDirection == "45c") {
                // there have a bug. 45c has up or down.
            }

            var previousP = 0;
            for (var idx = 0; idx <= a; idx++) {
                var p = Math.round((b * idx) / a);
                var diff = p - previousP;
                previousP = p;

                if (diff == 0) {
                    dotDoms.push(_this.newDot({ x: x1 + idx, y: y1 - p }));
                    continue;
                }

                for (var diffIdx = 0; diffIdx < diff; diffIdx++) {
                    var avgDiff = Math.floor(diff / 2);
                    var leftIdx = avgDiff;
                    var rightIdx = diff - avgDiff;

                    dotDoms.push(_this.newDot({ x: x1 + idx, y: y1 - p + diffIdx }));
                }
            }

            for (var i = 0; i < dotDoms.length; i++) {
                _this.body.appendChild(dotDoms[i]);
            }

        }
    };

    _this.lineHelper = {
        getDirection: function (p1, p2) {
            if (p1.x == p2.x && p1.y == p2.y) {
                return "dot";
            }

            if (p1.x == p2.x) {
                return "straighty";
            }

            if (p1.y == p2.y) {
                return "straightx";
            }

            var ps = p1;
            var pe = p2;
            if (p1.x > p2.x) {
                ps = p2;
                pe = p1;
            }

            //todo: 
            //ps = p1.x > p2.x ? p2 : p1;
            //pe = p1.x > p2.x ? p1 : p2;

            var a = Math.abs(pe.x - ps.x);
            var b = Math.abs(pe.y - ps.y);

            if (a == b) {
                return "45c";
            }

            if (ps.y > pe.y) {
                return "up";
            }

            return "down";
        }
    };

    fn.running = function () {
        _this.body = document.getElementsByTagName("body")[0];
        _this.circleDoms = document.getElementsByTagName("circle");
        _this.lineDoms = document.getElementsByTagName("line");

        _this.initCircle();
        _this.initLine();
    };

})();