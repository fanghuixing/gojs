var $ = go.GraphObject.make;
var diagram = new go.Diagram("myDiagramDiv");

diagram.nodeTemplate =
    $(go.Node, "Auto",
        $(go.Shape, "RoundedRectangle", { fill: "white" },
            new go.Binding("fill", "color")), // shape.fill = data.color
        $(go.TextBlock, { margin: 5 },
            new go.Binding("text", "key")) // textblock.text = data.key
    );

diagram.linkTemplate =
    $(go.Link,
        $(go.Shape,
            new go.Binding("stroke", "color"), // shape.stroke = data.color
            new go.Binding("strokeWidth", "thick")), // shape.strokeWidth = data.thick
        $(go.Shape, { toArrow: "OpenTriangle", fill: null },
            new go.Binding("stroke", "color"), // shape.stroke = data.color
            new go.Binding("strokeWidth", "thick")) // shape.strokeWidth = data.thick
    );

var nodeDataArray = [
    { key: "Alpha", color: "lightblue" },
    { key: "Beta", color: "pink" }
];
var linkDataArray = [
    { from: "Alpha", to: "Beta", color: "blue", thick: 2 }
];
diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);