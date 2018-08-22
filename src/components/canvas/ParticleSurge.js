import React from "react";

export class ParticleSurge extends React.Component {
    constructor(props) {
        super(props);
    }

	componentDidMount() {
        const canvas = this.refs.canvas;
        const c = canvas.getContext('2d');

        let primaryColor = this.props.primaryColor;
        let secondaryColor = this.props.secondaryColor;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const mouse = {
            x: canvas.width / 2,
            y: canvas.height / 2 
        }

        // resize canvas when browser resizes
        window.addEventListener("resize", function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;		
        });

        // get coordinates of mouse location
        window.addEventListener("mousemove", function(e) {
            mouse.x = e.clientX;	
            mouse.y = e.clientY;	
        });

        // define color types of particles
        const colors = [
            {r: 255, g: 255, b: 255}, 
            {r: parseInt(primaryColor.substring(1,3),16) , g: parseInt(primaryColor.substring(3,5),16), b: parseInt(primaryColor.substring(5,7),16)}, 
            {r: parseInt(secondaryColor.substring(1,3),16) , g: parseInt(secondaryColor.substring(3,5),16), b: parseInt(secondaryColor.substring(5,7),16)}
        ];

        // define particle class
        class Particle{
            constructor(x, y, dx, dy, r) {
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.r = r;
                this.opacity = 1;
                this.shouldRemove = false;
                this.randomColor = Math.floor(Math.random() * colors.length);
            }
            
            update() {
                this.x += this.dx;
                this.y += this.dy;

                if (this.x + this.r >= canvas.width || this.x - this.r <= 0) {
                    this.dx = -this.dx
                }

                if (this.y + this.r >= canvas.height || this.y - this.r <= 0) {
                    this.dy = -this.dy
                }

                // ensure that particles cannot be spawned past canvas boundaries
                this.x = Math.min(Math.max(this.x, 0 + this.r), canvas.width - this.r);
                this.y = Math.min(Math.max(this.y, 0 + this.r), canvas.height - this.r);

                this.r -= 0.2;
                this.opacity -= 0.007;

                if (this.r < 0) {
                    this.r = 0;
                    this.shouldRemove = true;
                }

                this.draw();
            }

            draw() {
                c.beginPath();
                c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
                c.strokeStyle = 
                    "rgba(" + colors[this.randomColor].r + 
                    "," + colors[this.randomColor].g + ","  
                    + colors[this.randomColor].b + "," + 
                    this.opacity + ")";
                c.fillStyle =
                    "rgba(" + colors[this.randomColor].r + 
                    "," + colors[this.randomColor].g + ","  
                    + colors[this.randomColor].b + "," + 
                    this.opacity + ")";
                c.stroke();
                c.closePath();
            }
        }



        let particle = [];

        const animate = () => {
            window.requestAnimationFrame(animate);

            c.fillStyle = "#1e1e1e";
            c.fillRect(0, 0, canvas.width, canvas.height);

            particle.push(new Particle(mouse.x, mouse.y, Math.random() * 2 - 1, Math.random() * 2 - 1, 30));
            for (var i = 0; i < particle.length; i++) {
                if(particle[i].shouldRemove) {
                    particle.splice(i, 1);
                } else {
                    particle[i].update();
                }	
            }
        }

        animate();
	}
	
	render() {
		return (
			<canvas ref="canvas" className="canvas__home"></canvas>
		)
	}
}