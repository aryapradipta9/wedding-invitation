import PhotoAlbum from "react-photo-album";

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
  return <PhotoAlbum layout="rows" photos={photos} />;
}
