class DrawingTriangleEquil extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.clickCount = 0;
  }

  onMouseDown(coord, event) {
    this.origX = coord[0];
    this.origY = coord[1];
    this.contextDraft.strokeStyle = userColor;
    this.contextReal.strokeStyle = userColor;

    this.clickCount++;

    if (this.clickCount == 4) {
      this.clickCount = 1;
    }
    if (this.clickCount == 1) {
      this.startX = coord[0];
      this.startY = coord[1];

      this.contextDraft.fillStyle = userColor;
      this.contextDraft.font = $("#text-size").val() + "px" + " " + "Arial" + " " + "blue";
      this.contextDraft.textAlign= "center";
      this.contextDraft.fillText("First Point",this.startX,(this.startY-10));
      

      this.contextDraft.strokeStyle = userColor;
      this.contextDraft.lineWidth = lineWidth;
      this.contextDraft.beginPath();
      this.contextDraft.arc(this.startX, this.startY, 10, 0, 2 * Math.PI);
      this.contextDraft.stroke();
    }

    if (this.clickCount == 2) {
      this.endX = coord[0];
      this.endY = coord[1];

      this.contextDraft.fillStyle = userColor;
      this.contextDraft.font = $("#text-size").val() + "px" + " " + "Arial" + " " + "blue";
      this.contextDraft.textAlign= "center";
      this.contextDraft.fillText("Second Point", this.endX, (this.endY - 10));
      
      this.contextDraft.fillText("Locate the third point!!",(1280/2),(700));
  
      this.contextDraft.strokeStyle = userColor;
      this.contextDraft.lineWidth = lineWidth;
      this.contextDraft.beginPath();
      this.contextDraft.arc(this.endX, this.endY, 10, 0, 2 * Math.PI);
      this.contextDraft.stroke();

      
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.startX, this.startY);
      this.contextDraft.lineTo(this.endX, this.endY);
      this.contextDraft.stroke();
    }

  }


  onMouseUp(coord, event)
  {
    if (this.clickCount == 3) {

      this.contextDraft.clearRect(
        0,
        0,
        canvasDraft.width,
        canvasDraft.height
      ); 

      this.controlX = coord[0];
      this.controlY = coord[1];
      
      this.contextReal.fillStyle = userColor;
      
      this.contextReal.beginPath();

      this.contextReal.moveTo(this.startX, this.startY);
      this.contextReal.lineTo(this.endX,this.endY);
      this.contextReal.lineTo(coord[0], coord[1]);
      this.contextReal.fill();




    }
  }



}
