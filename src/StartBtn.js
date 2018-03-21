function StartBtn(canvas) {
    this.canvas = canvas;
    this.canvasCtx = this.canvas.getContext('2d');
    this.canvasCtx.drawImage(Runner.imageSprite,20,20);
}

module.exports = StartBtn;