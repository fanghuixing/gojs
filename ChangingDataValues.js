 var $ = go.GraphObject.make;
 var diagram = new go.Diagram("myDiagramDiv");


 diagram.nodeTemplate =
     $(go.Node, "Auto", { locationSpot: go.Spot.Center },
         $(go.Shape, "RoundedRectangle", { // default values if the data.highlight is undefined:
                 fill: "yellow",
                 stroke: "orange",
                 strokeWidth: 2
             },
             new go.Binding("fill", "highlight", function(v) { return v ? "pink" : "lightblue"; }),
             new go.Binding("stroke", "highlight", function(v) { return v ? "red" : "blue"; }),
             new go.Binding("strokeWidth", "highlight", function(v) { return v ? 3 : 1; })),
         $(go.TextBlock, { margin: 5 },
             new go.Binding("text", "key"))
     );

 diagram.model.nodeDataArray = [
     { key: "Alpha", highlight: false } // just one node, and no links
 ];

 function flash() {
     // all model changes should happen in a transaction
     diagram.model.commit(function(m) {
         var data = m.nodeDataArray[0]; // get the first node data
         m.set(data, "highlight", !data.highlight);
     }, "flash");
 }

 function loop() {
     setTimeout(function() { flash();
         loop(); }, 500);
 }
 loop();