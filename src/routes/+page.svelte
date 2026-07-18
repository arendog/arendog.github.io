<script lang="ts">
    import P5Sketch, { type Sketch } from '@sveltecraft/p5-svelte';

    const INC_FAST_SPEED = 0.06;
    const INC_SLOW_SPEED = 0.02;
    const AMPLITUDE_X = 1;
    const AMPLITUDE_Y = 1;

    const sketch: Sketch = (p) => {
        let fontTactile: p5.Font;
        let fontMono: p5.Font;
        let contours: p5.Vector[][] = [];

        let incFast = 0;
        let incSlow = 0;

        p.setup = async () => {
            p.createCanvas(330, 150);
            

            fontTactile = await p.loadFont('/fonts/SyneTactile-Regular.ttf');
            fontMono = await p.loadFont('/fonts/SyneMono-Regular.ttf');

            p.fill(0);
            p.noStroke();

            // p.noFill();
            // p.stroke(0);
            // p.strokeWeight(2);
            // p.strokeJoin(p.ROUND);
            // p.strokeCap(p.ROUND);
            

            p.textSize(72);
            const contours1 = fontTactile.textToContours(
                'alex rennie',
                5,
                60,
                { sampleFactor: 0.5 }
            );

            p.textSize(48);
            const contours2 = fontMono.textToContours(
                'composer',
                60,
                120,
                { sampleFactor: 0.5 }
            );

            contours = contours1.concat(contours2);
        };

        p.draw = () => {
            p.background(p.color("#f2f2f2"));

            incSlow += INC_SLOW_SPEED;
            incFast = incSlow;

            p.beginShape();

            for (const points of contours) {
                p.beginContour();

                for (const point of points) {
                    incFast += INC_FAST_SPEED;

                    p.vertex(
                        point.x + p.cos(incFast) * AMPLITUDE_X,
                        point.y + p.sin(incFast) * AMPLITUDE_Y
                    );
                }

                p.endContour();
            }

            p.endShape(p.CLOSE);
        };
    };
</script>

<svelte:head>
	<title>Alex Rennie - composer</title>
</svelte:head>

<a class="flex min-w-screen min-h-screen items-center justify-center" rel="external" href="/about">
    <P5Sketch {sketch} />
</a>
