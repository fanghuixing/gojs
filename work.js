var $ = go.GraphObject.make;
var diagram = new go.Diagram("myDiagramDiv");
var nodeDataArray = [
    { key: "Alpha", color: "lightblue" }, // note extra property for each node data: color
    { key: "Beta", color: "pink" }
];
var linkDataArray = [
    { from: "Alpha", to: "Beta" }
];


diagram.model = $(go.GraphLinksModel, { nodeDataArray, linkDataArray });

diagram.nodeTemplate =
    $(go.Node, "Auto",
        $(go.Shape, {
                figure: "RoundedRectangle",
                fill: "white"
            }, // default Shape.fill value
            new go.Binding("fill", "color")), // binding to get fill from nodedata.color
        $(go.TextBlock, { margin: 5 },
            new go.Binding("text", "key")) // binding to get TextBlock.text from nodedata.key
    );


