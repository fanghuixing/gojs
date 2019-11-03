var $ = go.GraphObject.make;
var diagram = new go.Diagram("myDiagramDiv");


diagram.nodeTemplate =
    $(go.Node, "Auto", { locationSpot: go.Spot.Center },
        new go.Binding("location", "loc").makeTwoWay(), // TwoWay Binding
        $(go.Shape, "RoundedRectangle", { fill: "lightblue", stroke: "blue", strokeWidth: 2 }),
        $(go.TextBlock, { margin: 5 },
            new go.Binding("text", "key"))
    );

var nodeDataArray = [
    { key: "Alpha", loc: new go.Point(0, 0) }
];
diagram.model = new go.GraphLinksModel(nodeDataArray);

shiftNode = (function() { // define a function named "shiftNode" callable by button.onclick
    // all model changes should happen in a transaction
    diagram.commit(function(d) {
        var data = d.model.nodeDataArray[0]; // get the first node data
        var node = d.findNodeForData(data); // find the corresponding Node
        var p = node.location.copy(); // make a copy of the location, a Point
        p.x += 10;
        if (p.x > 200) p.x = 0;
        // changing the Node.location also changes the data.loc property due to TwoWay binding
        node.location = p;
        // show the updated location held by the "loc" property of the node data
        document.getElementById("bindTwoWayData").textContent = data.loc.toString();
    }, "shift node");
});
shiftNode(); // initialize everything