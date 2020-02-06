import React from 'react';
import gifshot from 'gifshot';

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
].reverse();

const GifTest = () => {
  const [img, setImg] = React.useState();

  const createGIF = () =>
    gifshot.createGIF(
      {
        images: CORGI_FRAMES
      },
      function(obj) {
        if (!obj.error) {
          var image = obj.image;
          console.log({ image });

          setImg(image);
        }
      }
    );

  return (
    <>
      <button onClick={createGIF}>Create a GIF</button>
      {img && <img alt="Party Corgi" src={img} />}
    </>
  );
};

export default GifTest;
