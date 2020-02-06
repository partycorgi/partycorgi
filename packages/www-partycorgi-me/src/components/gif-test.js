/** @jsx jsx */
import { useEffect, useRef, useState } from 'react';
import { jsx } from 'theme-ui';
import gifshot from 'gifshot';
import FrameCanvas from './frame-canvas';

// TODO figure out how to export with transparency

const CORGI_FRAMES = [
  '/party-corgi-step-00.png',
  '/party-corgi-step-01.png',
  '/party-corgi-step-02.png',
  '/party-corgi-step-03.png',
  '/party-corgi-step-04.png',
  '/party-corgi-step-05.png',
  '/party-corgi-step-06.png',
  '/party-corgi-step-07.png',
  '/party-corgi-step-08.png',
  '/party-corgi-step-09.png',
  '/party-corgi-step-10.png',
  '/party-corgi-step-11.png'
];

const GifTest = () => {
  const canvasRef00 = useRef();
  const canvasRef01 = useRef();
  const canvasRef02 = useRef();
  const canvasRef03 = useRef();
  const canvasRef04 = useRef();
  const canvasRef05 = useRef();
  const canvasRef06 = useRef();
  const canvasRef07 = useRef();
  const canvasRef08 = useRef();
  const canvasRef09 = useRef();
  const canvasRef10 = useRef();
  const canvasRef11 = useRef();

  // 47,45,42,42,45,46,45,42,43,44,48,48
  const refArray = [
    { ref: canvasRef00, yOffset: 0 },
    { ref: canvasRef01, yOffset: -2 },
    { ref: canvasRef02, yOffset: -5 },
    { ref: canvasRef03, yOffset: -5 },
    { ref: canvasRef04, yOffset: -2 },
    { ref: canvasRef05, yOffset: -1 },
    { ref: canvasRef06, yOffset: -2 },
    { ref: canvasRef07, yOffset: -5 },
    { ref: canvasRef08, yOffset: -4 },
    { ref: canvasRef09, yOffset: -3 },
    { ref: canvasRef10, yOffset: 1 },
    { ref: canvasRef11, yOffset: 1 }
  ];

  const [img, setImg] = useState();

  const createGIF = () => {
    const images = refArray.map(({ ref }) =>
      ref.current.toDataURL('image/png')
    );
    gifshot.createGIF({ images }, function(obj) {
      if (!obj.error) {
        var image = obj.image;
        console.log({ image });

        setImg(image);
      }
    });
  };

  const overlay = new Image();
  overlay.src = '/sunglasses-that-are-illegal.png';

  return (
    <div sx={{ my: 5, mx: 'auto', maxWidth: 500 }}>
      <button onClick={createGIF}>Create a GIF</button>
      {img && <img sx={{ display: 'block' }} alt="Party Corgi" src={img} />}

      <div sx={{ my: 5 }}></div>

      <div
        sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', my: 4 }}
      >
        {CORGI_FRAMES.map((src, i) => (
          <FrameCanvas
            key={src}
            frameSrc={src}
            overlays={['/party-hat.png']}
            ref={refArray[i].ref}
            yOffset={refArray[i].yOffset}
          />
        ))}
      </div>
    </div>
  );
};

export default GifTest;
