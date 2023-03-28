class Rhombus extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = userColor;
    this.contextDraft.strokeStyle = userColor;
    this.contextReal.fillStyle = userColor;
    this.contextDraft.fillStyle = userColor;
    this.contextReal.lineWidth = lineWidth;
    this.contextDraft.lineWidth = lineWidth;

    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(coord[0], coord[1]); //1
    this.contextDraft.lineTo(coord[0] + this.origY - this.origX, coord[1]); //2
    this.contextDraft.lineTo(coord[0], coord[1] + this.origX - this.origY); //3
    this.contextDraft.lineTo(this.origX, this.origY); //4
    this.contextDraft.stroke();
  }

  onMouseMove() {}

  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.lineTo(coord[0], coord[1]); //1
    this.contextReal.lineTo(coord[0] + this.origY - this.origX, coord[1]); //2
    this.contextReal.lineTo(coord[0], coord[1] + this.origX - this.origY); //3
    this.contextReal.lineTo(this.origX, this.origY); //4
    this.contextReal.stroke();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
