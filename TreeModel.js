var $ = go.GraphObject.make;
var diagram = $(go.Diagram, "myDiagramDiv");

diagram.nodeTemplate =
    $(go.Node, "Auto",
      $(go.Shape,
        { figure: "Ellipse" },
        new go.Binding("fill", "color")),
      $(go.TextBlock,
        { margin: 5 },
        new go.Binding("text", "key"))
    );

  var nodeDataArray = [
    { key: "Alpha", color: "lightblue" },
    { key: "Beta", parent: "Alpha", color: "yellow" },  // note the "parent" property
    { key: "Gamma", parent: "Alpha", color: "orange" },
    { key: "Delta", parent: "Alpha", color: "lightgreen" }
  ];
  diagram.model = new go.TreeModel(nodeDataArray);