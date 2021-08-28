import { useEffect, forwardRef } from 'react'

const FrameCanvas = forwardRef(
  ({ frameSrc, overlays = [], yOffset = 0 }, ref) => {
    useEffect(() => {
      if (!frameSrc) return

      const canvas = ref.current
      const context = canvas.getContext('2d')

      const image = new Image()
      image.onload = function () {
        context.drawImage(image, 0, 0, canvas.width, canvas.height)

        overlays.forEach(src => {
          const overlay = new Image()
          overlay.onload = function () {
            context.drawImage(overlay, 0, yOffset, canvas.width, canvas.height)
          }

          overlay.src = src
        })
      }

      image.src = frameSrc
    }, [ref, frameSrc, overlays, yOffset])

    return <canvas ref={ref} id='canvas' width='125' height='125'></canvas>
  }
)

export default FrameCanvas
