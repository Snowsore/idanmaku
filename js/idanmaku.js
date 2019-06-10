function Idanmaku(ctx) {
	let w, h;
	this.dansou = [];
	this.fire = fire;
	this.reFrame = reFrame;
	this.setCtx = setCtx;

	setCtx();
	function fire(msg) {
		this.dansou.push({
			x: w,
			y: Math.floor(Math.random() * h),
			m: msg
		});
	}

	function reFrame() {
		if(this.dansou) {
			ctx.clearRect(0, 0, w, h);
			this.dansou = this.dansou.filter(e => {
				ctx.strokeText(e.m, e.x, e.y);
				ctx.fillText(e.m, e.x, e.y);
				e.x -= 4;
				return (e.x > -200)
			});
		}
	}

	function setCtx() {
		w = window.innerWidth;
		h = window.innerHeight;
		ctx.canvas.width = w;
		ctx.canvas.height = h;
		ctx.font = "30px Arial";
		ctx.strokeStyle = 'black';
		ctx.lineWidth = 2;
		ctx.fillStyle = 'white';
	}
}
