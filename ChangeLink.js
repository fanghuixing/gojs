 var $ = go.GraphObject.make;
 var diagram = new go.Diagram("myDiagramDiv");

 diagram.nodeTemplate =
     $(go.Node, "Auto", { locationSpot: go.Spot.Center },
         $(go.Shape, "RoundedRectangle", { fill: "yellow", stroke: "orange", strokeWidth: 2 }),
         $(go.TextBlock, { margin: 5 },
             new go.Binding("text", "key"))
     );

 var nodeDataArray = [
     { key: "Alpha" },
     { key: "Beta" },
     { key: "Gamma" }
 ];
 var linkDataArray = [
     { from: "Alpha", to: "Beta" }
 ];
 diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);

 function switchTo() {
     // all model changes should happen in a transaction
     diagram.model.commit(function(m) {
         var data = m.linkDataArray[0]; // get the first link data
         if (m.getToKeyForLinkData(data) === "Beta")
             m.setToKeyForLinkData(data, "Gamma");
         else
             m.setToKeyForLinkData(data, "Beta");
     }, "name of this transition");
 }

 function loop() {
     setTimeout(function() { switchTo();
         loop(); }, 1000);
 }
 loop();