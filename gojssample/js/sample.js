window.onload = function() {

  var $ = go.GraphObject.make;  // 用go.GraphObject.make来创建一个GoJS对象，如果$被占用了，可以使用其他名称
  // 创建图表对象，绑定HTML中的DIV，初始化图表风格
  var myDiagram =
    $(go.Diagram, "myDiagramDiv", // 这个名称"myDiagramDiv"必须同HTML中画布DIV的id一致
      {
        initialContentAlignment: go.Spot.Center, // 居中显示内容
        "undoManager.isEnabled": true, // 启用Ctrl-Z撤销和Ctrl-Y重做功能
        layout: $(go.TreeLayout, // 树形排列布局
          { angle: 90,           // 父子节点之间竖排，即同水平线成90度直角
            layerSpacing: 35     // 父子节点默认间距35像素
          })
      });
  
  // 该节点模板里有两部分内部，一部分是图片，一部分是文字，水平排列
  myDiagram.nodeTemplate =
    $(go.Node, "Horizontal",   // 节点中的内容水平排列
      { background: "#44CCFF" },   // 节点的背景色
      // 定义图片尺寸，边间距，绑定图片地址，如果没指定图片地址则默认显示红色
      $(go.Picture,
        { margin: 10, width: 50, height: 50, background: "red" },
        new go.Binding("source")),      // 节点中的图片地址绑定模型中的"source"属性
      // 定义字体风格，默认显示"空白"字样，绑定文字内容
      $(go.TextBlock, "空白",
        { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
        new go.Binding("text", "name"))	// 节点中显示的文字绑定模型中的"name"属性
    );

  // 该连线模板定义了连线的折线风格和线的尺寸颜色
  myDiagram.linkTemplate =
    $(go.Link,
      { routing: go.Link.Orthogonal, corner: 5 }, // 风格：折线直角弯，弧度5像素
      $(go.Shape, { strokeWidth: 3, stroke: "#840" }) // 线宽3像素，褐色
    );
  
  var model = $(go.TreeModel);  // 声明模型变量的类型是树形
  // 模型内容，三层树，6个节点，每个节点1张图片配1个名字
  model.nodeDataArray =
  [ // 树形模型必须有"key"和"parent"的字段名,
    // 你还可以添加任何需要的其他字段，只需要在Node节点模板里绑定就行
    { key: "1",              name: "小花", source: "img/cat1.png" },
    { key: "2", parent: "1", name: "小黄", source: "img/cat2.png" },
    { key: "3", parent: "1", name: "小灰", source: "img/cat3.png" },
    { key: "4", parent: "3", name: "小白", source: "img/cat4.png" },
    { key: "5", parent: "3", name: "小喵", source: "img/cat5.png" },
    { key: "6", parent: "2", name: "小黑", source: "img/cat6.png" },
    { /* 空节点数据 */  }  // 空节点会使用节点模板中定义的默认值，如本例红色图片，"空白"字样
  ];
  myDiagram.model = model;  // 将模型绑定到图表上

}