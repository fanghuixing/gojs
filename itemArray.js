var $ = go.GraphObject.make;
var diagram = new go.Diagram("myDiagramDiv");


diagram.nodeTemplate =
    $(go.Node, "Auto",
        $(go.Shape, "RoundedRectangle", { fill: "white" }),
        $(go.Panel, "Vertical",
            $(go.TextBlock, new go.Binding("text", "key"),{font: "bold 16pt sans-serif"} ),
            $(go.Panel, "Table",
                new go.Binding("itemArray", "people"), {
                    defaultAlignment: go.Spot.Left,
                    itemTemplate: $(go.Panel, "TableRow",
                        new go.Binding("background", "row",
                            function(i) { return i % 2 === 0 ? "lightgreen" : "transparent" })
                        .ofObject(),
                        $(go.TextBlock, new go.Binding("text", "name"), { column: 1, margin: 2, font: "bold 10pt sans-serif" }),
                        $(go.TextBlock, new go.Binding("text", "phone"), { column: 2, margin: 2 }),
                        $(go.TextBlock, new go.Binding("text", "loc"), { column: 3, margin: 2 }),
                        $("Button", {
                                column: 0,
                                margin: new go.Margin(0, 1, 0, 0),
                                click: function(e, obj) {
                                    // OBJ is this Button Panel;
                                    // find the TableRow Panel containing it
                                    var itempanel = obj.panel;
                                    alert("Clicked on row " + itempanel.row + " for " + itempanel.data.name);
                                }
                            },
                            $(go.Shape, "FivePointedStar", { desiredSize: new go.Size(8, 8) })
                        )
                    ) // end of itemTemplate
                }))
    );

diagram.model =
    $(go.GraphLinksModel, {
        nodeDataArray: [{
            key: "group1",
            people: [
                { name: "Alice", phone: "2345", loc: "C4-E18" },
                { name: "Bob", phone: "9876", loc: "E1-B34" },
                { name: "Carol", phone: "1111", loc: "C4-E23" },
                { name: "Ted", phone: "2222", loc: "C4-E197" },
                { name: "Robert", phone: "5656", loc: "B1-A27" },
                { name: "Natalie", phone: "5698", loc: "B1-B6" }
            ]
        }]
    });