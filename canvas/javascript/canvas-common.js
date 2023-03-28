/**********************************************
 * The Canvas
 * ==================================
 ***********************************************/

let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;

let userColor = "#000000";
$("#color-picker").change(function () {
  userColor = $("#color-picker").val();
});

let lineWidth = "5";
$("#slider").change(function () {
  lineWidth = $("#slider").val();
});

contextDraft.fillStyle = "transparent";
contextReal.fillStyle = "rgb(150,150,150)";
contextDraft.fillRect(0, 0, 1280, 720);
contextReal.fillRect(0, 0, 1280, 720);

$("#clear").click(function ()
{
  contextReal.fillStyle = "rgb(150,150,150)";
  contextReal.fillRect(0, 0, 1280, 720);
  eraser_color = "rgb(150,150,150)";
});

UndoCanvas.enableUndo(contextReal);

$("#canvas-draft").mousedown(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$("#canvas-draft").mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});

$("#canvas-draft").mouseup(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
});

$("#canvas-draft").mouseleave(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$("#canvas-draft").mouseenter(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});

// var curve_cout = 0;

//added for advanced curved
// $("#drawing-curved-advanced").click(function ()
// {
//   $("#canvas-draft").mouseup(function (e) {
//     curve_cout++;
//     alert(curve_cout);
//     let mouseX = e.offsetX;
//     let mouseY = e.offsetY;

//     switch (curve_cout) {
//       case 1:
//         contextDraft.beginPath();
//         var startX = mouseX;
//         var startY = mouseY;
//         contextDraft.arc(
//         mouseX, mouseY, 10, 0, 2 * Math.PI);
//         contextDraft.fillStyle = "blue";
//         contextDraft.fill();
//         break;
//       case 2:
//         var controlX = mouseX;
//         var controlY = mouseY;
//         contextDraft.beginPath();
//         contextDraft.arc(
//           mouseX, mouseY, 10, 0, 2 * Math.PI);
//         contextDraft.fillStyle = "green";
//         contextDraft.fill();
//         break;
//       case 3:
//         var endX = mouseX;
//         var endY = mouseY;
//         contextDraft.beginPath();
//         contextDraft.arc(
//           mouseX, mouseY, 10, 0, 2 * Math.PI);
//         contextDraft.fillStyle = "red";
//         contextDraft.fill();
//         break;
//     }

//     if (curve_cout== 4)
//     {
//       // contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
//       alert(startX,startY)
//       contextDraft.beginPath();
//       contextDraft.moveTo(startX, startY);
//       contextDraft.quadraticCurveTo(controlX, controlY, endX, endY);
//       contextDraft.fillStyle = "red";
//       contextDraft.stroke();

//     }

//   });

// })

/** # Class (all classes will have these methods) #
/*  ====================== */
class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}
