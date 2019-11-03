var $ = go.GraphObject.make;
var diagram = new go.Diagram("myDiagramDiv");

diagram.nodeTemplate =
    $(go.Node, "Auto",
        $(go.Shape, "RoundedRectangle", { fill: "white" }, // the default value if there is no modelData.color property
            new go.Binding("fill", "color").ofModel()), // meaning a property of Model.modelData
        $(go.TextBlock, { margin: 5 },
            new go.Binding("text"))
    );

// start all nodes yellow
diagram.model.modelData.color = "yellow";

diagram.model.nodeDataArray = [
    { text: "Alpha" },
    { text: "Beta" }
];

diagram.undoManager.isEnabled = true;

changeColor = function() { // define a function named "changeColor" callable by button.onclick
    diagram.model.commit(function(m) {
        // alternate between lightblue and lightgreen colors
        var oldcolor = m.modelData.color;
        var newcolor = (oldcolor === "lightblue" ? "lightgreen" : "lightblue");
        m.set(m.modelData, "color", newcolor);
    }, "changed shared color");
}