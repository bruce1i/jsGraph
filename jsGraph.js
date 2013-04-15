(function () {
    var dBody = document.getElementsByTagName("body")[0];
    var circleDoms = document.getElementsByTagName("circle");

    for (var circleDomIndex = 0; circleDomIndex < circleDoms.length; circleDomIndex++) {
        var circleDom = circleDoms[circleDomIndex];

        var ox = parseInt(circleDom.getAttribute("x"));
        var oy = parseInt(circleDom.getAttribute("y"));
        var r = parseInt(circleDom.getAttribute("r"));
        var border = parseInt(circleDom.getAttribute("border"));

        var dotDoms = [];
        for (var x = 0; x <= r; x++) {
            var y = Math.sqrt(r * r - x * x);

            var dot = document.createElement("div");
            dot.style.position = "absolute";
            dot.style.left = (ox + x) + "px";
            dot.style.top = (oy - y) + "px";
            dot.style.width = border + "px";
            dot.style.height = border + "px";
            dot.style.backgroundColor = "red";

            dotDoms.push(dot);
        }

        for (var i = 0; i < dotDoms.length; i++) {
            dBody.appendChild(dotDoms[i]);
        }
    }

})();