import React from 'react';
import '../css/ImageVortex.css';

const PROJECT_GIFS = [
    '/projectsPic/signnu.gif',
    '/projectsPic/predict_sale.gif',
    '/projectsPic/game.gif',
    '/projectsPic/kiosk.gif',
    '/projectsPic/movie_select.gif',
];

const SLOTS = 8;

const START_POINTS = [
    [-3, -1], [3, -1], [-3, 1], [3, 1],
    [-1, -3], [1, -3], [-1, 3], [1, 3],
];

function ImageVortex({ images = PROJECT_GIFS }) {
    const items = START_POINTS.map(([x, y], i) => ({
        src: images[i % images.length],
        index: i,
        x0: x,
        y0: y,
        rot: (i % 2 === 0 ? -1 : 1) * (14 + (i % 3) * 4),
    }));

    return (
        <div className="vortex-bg" aria-hidden="true">
            <div className="vortex-scene">
                {items.map((item) => (
                    <div
                        className="vortex-item"
                        key={item.index}
                        style={{
                            '--i': item.index,
                            '--x0': item.x0,
                            '--y0': item.y0,
                            '--rot': `${item.rot}deg`,
                        }}
                    >
                        <img src={item.src} alt="" loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageVortex;
