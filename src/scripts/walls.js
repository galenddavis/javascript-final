
class Wall {
    constructor(height, width, x, y) {
        this.height = height;
        this.width = width; 
        this.position = {
            x: x,
            y: y
        };
     
    }
    
    draw(ctx) {
        ctx.fillStyle = 'black'
        ctx.fillRect(this.position.x, this.position.y, this.height, this.width)
    }
}

export default Wall;