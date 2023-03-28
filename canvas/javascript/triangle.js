class Triangle extends PaintFunction {
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
    this.contextReal.lineWidth = 2;
    this.contextDraft.lineWidth = 2;

    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.lineTo(coord[0] , coord[1] - this.origY);
    this.contextDraft.lineTo(this.origX, this.origY);
    this.contextDraft.fill();
    this.contextDraft.stroke();
  }

  onMouseMove() {}

  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.lineTo(coord[0], coord[1]);
    this.contextReal.lineTo(coord[0] , coord[1] - this.origY);
    this.contextReal.lineTo(this.origX, this.origY);
    this.contextReal.fill();
    this.contextReal.stroke();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
