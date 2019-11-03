 var $ = go.GraphObject.make;
 var diagram = new go.Diagram("myDiagramDiv");

 diagram.nodeTemplate =
     $(go.Node, "Auto",
         new go.Binding("location", "loc"), // get the Node.location from the data.loc value
         $(go.Shape, "RoundedRectangle", { fill: "white" },
             new go.Binding("fill", "color")),
         $(go.TextBlock, { margin: 5 },
             new go.Binding("text", "key"))
     );

 var nodeDataArray = [
     // for each node specify the location using Point values
     { key: "Alpha", color: "lightblue", loc: new go.Point(0, 0) },
     { key: "Beta", color: "pink", loc: new go.Point(100, 50) }
 ];
 var linkDataArray = [
     { from: "Alpha", to: "Beta" }
 ];
 diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);