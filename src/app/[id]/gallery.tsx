import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";

const photos = [
  { src: "/gallery/TB2_2142.jpg", width: 800, height: 600 },
  { src: "/gallery/TB2_2219.jpg", width: 800, height: 600 },
  { src: "/gallery/TB2_2253.jpg", width: 800, height: 600 },
  { src: "/gallery/TB2_2196.jpg", width: 600, height: 800 },
  { src: "/gallery/TB2_2269.jpg", width: 600, height: 800 },
  { src: "/gallery/TB1_8096.jpg", width: 800, height: 600 },
  { src: "/gallery/TB1_8045.jpg", width: 800, height: 600 },
  { src: "/gallery/TB2_2188.jpg", width: 800, height: 600 },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
