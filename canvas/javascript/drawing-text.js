/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class DrawingText extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.fillStyle = userColor;
    this.origX = coord[0];
    this.origY = coord[1];
    this.textValue = $("#insert-text").val();
    this.fontSetting = $("#text-size").val() + "px" + " " + "Arial" + " " + "blue";
    this.contextReal.font = this.fontSetting;
    this.contextReal.textAlign = "center";
    this.contextReal.fillText(this.textValue,coord[0],coord[1]);
  }


  onMouseLeave() {}
  onMouseEnter() {}
}
