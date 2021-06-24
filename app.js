import { 
    Wave
 } from './wave.js';

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.wave = new Wave();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));  //app객체를 animate 메서드로 넘겨줌. bind를 사용해서 객체를 callback함수에 넘겨줌.
    }

    resize() {
        this.stageWidth = window.innerWidth;
        this.stageHeight = window.innerHeight;

        this.canvas.width = this.stageWidth ;
        this.canvas.height = this.stageHeight ;
        this.ctx.scale(2, 2);

        this.wave.resize(this.stageWidth, this.stageHeight);
    }

    animate(t) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.wave.draw(this.ctx);

        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () => {
    new App();
};