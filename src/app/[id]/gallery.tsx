import PhotoAlbum, { RenderPhotoProps } from "react-photo-album";
import Image from "next/image";

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
  { src: "/gallery/TB2_2142.jpg", width: 900, height: 600 },
  { src: "/gallery/TB2_2219.jpg", width: 900, height: 600 },
  { src: "/gallery/TB2_2253.jpg", width: 900, height: 600 },
  { src: "/gallery/TB2_2196.jpg", width: 600, height: 900 },
  { src: "/gallery/TB2_2269.jpg", width: 600, height: 900 },
  { src: "/gallery/TB1_8096.jpg", width: 900, height: 600 },
  { src: "/gallery/TB1_8045.jpg", width: 900, height: 600 },
  { src: "/gallery/TB2_2188.jpg", width: 900, height: 600 },
  // jakarta
  { src: "/gallery2/j5.JPG", width: 900, height: 600 },
  { src: "/gallery2/j2.JPG", width: 900, height: 600 },
  { src: "/gallery2/j3.JPG", width: 600, height: 900 },
  { src: "/gallery2/j4.JPG", width: 600, height: 900 },
  { src: "/gallery2/j1.JPG", width: 900, height: 600 },
  { src: "/gallery2/j6.JPG", width: 900, height: 600 },
  { src: "/gallery2/j9.JPG", width: 600, height: 900 },
  { src: "/gallery2/j8.JPG", width: 600, height: 900 },
  { src: "/gallery2/j7.JPG", width: 900, height: 600 },
];

function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        fill
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className, onClick }}
      />
    </div>
  );
}

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        onClick={({ index }) => setIndex(index)}
        renderPhoto={NextJsImage}
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
