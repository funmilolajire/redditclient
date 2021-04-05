import { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/src/css/vjs.scss'

export const VideoPlayer = (props: any) => {
  const { videoSrc } = props;
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const options = {
      autoplay: true, muted: true, loop: true, liveui: true, html5: {
        vhs: {
          withCredentials: true
        }
      }
    }
    const player = videojs(playerRef.current, options, () => {
      if (null !== playerRef.current)
        player.src(videoSrc);
    });
    return () => {
      player.dispose();
    };
  }, [videoSrc]);

  return (
    <div data-vjs-player>
      <video ref={playerRef} className="video-js vjs-16-9" controls playsInline />
    </div>
  );
}
