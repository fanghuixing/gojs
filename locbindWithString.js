 var $ = go.GraphObject.make;
 var diagram = new go.Diagram("myDiagramDiv");


 diagram.nodeTemplate =
     $(go.Node, "Auto",
         new go.Binding("location", "loc", go.Point.parse), // convert string into a Point value
         $(go.Shape, "RoundedRectangle", { fill: "white" },
             new go.Binding("fill", "color")),
         $(go.TextBlock, { margin: 5 },
             new go.Binding("text", "key"))
     );

 var nodeDataArray = [
     { key: "Alpha", color: "lightblue", loc: "0 0" }, // note string values for location
     { key: "Beta", color: "pink", loc: "100 50" }
 ];
 var linkDataArray = [
     { from: "Alpha", to: "Beta" }
 ];
 diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);