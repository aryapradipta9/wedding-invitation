"use client";

import Image from "next/image";
import ReactPlayer from "react-player";
import { cn } from "../utils";
import Typewriter from "typewriter-effect";
import Hero1 from "../../../public/1.jpg";
import Hero2 from "../../../public/2.jpg";
import Hero3 from "../../../public/3.png";
import Bride from "../../../public/bride.jpg";
import Groom from "../../../public/groom.jpg";

import Background from "../../../public/bg.png";
import PageTwo from "../../../public/pg2.png";
import PageThree from "../../../public/pg3.png";
import PageFour from "../../../public/pg4.png";

import FrontLogo from "../../public/front-logo.png";

import { Toaster } from "react-hot-toast";
import Submission from "./submission";
import { notFound, useParams } from "next/navigation";
import AnimateOnScroll from "./animate";
import { useEffect, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Button } from "../button";
import { Calendar } from "../calendar";

type Guest = {
  fullName: string;
  shortName: string;
};

export default function Home() {
  const { id } = useParams();
  const [videoWidth, setVideoWidth] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);
  const [guest, setGuest] = useState<Guest | undefined>(undefined);
  const [image, setImage] = useState<StaticImport | null>(null);
  const [undanganOpened, setUndanganOpened] = useState<boolean>(false);

  useEffect(() => {
    const width = window.innerWidth <= 450 ? window.innerWidth : 450;
    setVideoWidth(width);
    setVideoHeight((width / 1280) * 720);
  }, []);

  useEffect(() => {
    fetch("/api/" + id)
      .then((response) => response.json())
      .then((data) => setGuest(data.data));
  }, [id]);

  if (!videoWidth) return null;

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const start = new Date();
  const end = new Date("2023-12-16");

  const handleBukaUndangan = () => {
    setUndanganOpened(true);
  };

  if (guest === undefined) {
    return <>Loading</>;
  }

  const days = Math.round(Math.abs((start.getTime() - end.getTime()) / oneDay));

  return (
    <>
      <main
        className={cn(
          "flex min-h-screen flex-col items-center justify-start bg-white max-w-[450px] relative",
          "visible",
          !undanganOpened ? "h-full overflow-hidden" : ""
        )}
      >
        {/* Heading section */}
        <div className={undanganOpened ? "hidden" : ""}>
          <div className="relative">
            <Image
              src={Background}
              alt="bg"
              width={videoWidth}
              className="h-screen"
            />
            <div className="flex flex-col items-center absolute top-0 w-full z-10 mt-24">
              <p
                style={{
                  fontFamily: "glacial-indifference",
                }}
                className="text-4xl"
              >
                Dear {guest.shortName}
              </p>
              <p
                style={{
                  fontFamily: "daydream",
                }}
                className="text-xl "
              >
                {"you're invited to"}
              </p>
              <div className="flex flex-row mt-16 mb-8 ">
                <p
                  style={{
                    fontFamily: "daydream",
                    color: "#0c006c",
                  }}
                  className="text-9xl "
                >
                  {"A"}
                </p>
                <p
                  style={{
                    fontFamily: "daydream",
                    color: "#0c006c",
                    transform: "rotate(10deg)",
                  }}
                  className="text-9xl mt-5"
                >
                  {"L"}
                </p>
              </div>
              <p
                style={{
                  fontFamily: "daydream",
                  color: "#0c006c",
                }}
                className="text-5xl"
              >
                {"Arya & Laksmi"}
              </p>
              <p
                style={{
                  fontFamily: "daydream",
                }}
                className="text-xl"
              >
                {"wedding reception"}
              </p>
              <Button
                onClick={handleBukaUndangan}
                text={"buka undangan"}
              ></Button>
            </div>
          </div>
        </div>
        {/* End of Heading section */}
        <div className={!undanganOpened ? "hidden" : ""}>
          <div
            style={{
              backgroundImage: `url(${PageTwo.src})`,
              backgroundSize: "cover",
              width: videoWidth,
            }}
            className="flex flex-col items-center pt-12"
          >
            <Image
              src={Hero1.src}
              width="0"
              height="0"
              sizes="100vw"
              className="w-1/2 h-auto my-1"
              alt={"hero-one"}
            />
            <Image
              src={Hero2.src}
              width="0"
              height="0"
              sizes="100vw"
              className="w-1/2 h-auto my-1"
              alt={"hero-two"}
            />
            <Image
              src={Hero3.src}
              width="0"
              height="0"
              sizes="100vw"
              className="w-1/2 h-auto my-1"
              alt={"hero-three"}
            />

            <p
              style={{
                fontFamily: "amsterdam",
              }}
              className="text-md p-2 text-center"
            >
              &#34;Ya Tuhan Yang Maha Pengasih, anugrahkanlah kepada pasangan
              ini tanpa terpisahkan, panjang umur, semoga pernikahan ini
              dianugrahkan putra-putri dan cucu yang memberi penghiburan,
              tinggal di rumah yang penuh kebahagiaan&#34;
            </p>

            <p
              style={{
                fontFamily: "amsterdam",
              }}
              className="text-md p-2 mb-5"
            >
              Reg Weda X. 85.42
            </p>
          </div>
          <div
            style={{
              backgroundImage: `url(${PageThree.src})`,
              backgroundSize: "cover",
              width: videoWidth,
              height: "100vh",
            }}
            className="flex flex-col items-center py-24"
          >
            <div className="flex flex-row items-center mx-8">
              <Image
                src={Groom.src}
                width="0"
                height="0"
                sizes="100%"
                className="h-auto w-1/3 my-1 rounded-t-full"
                alt={"groom"}
              />
              <div className="flex flex-col ml-4">
                <p
                  style={{
                    fontFamily: "amsterdam",
                  }}
                  className="text-2xl py-5 italic font-light"
                >
                  The Groom
                </p>
                <p
                  style={{
                    fontFamily: "daydream",
                    color: "#0c006c",
                  }}
                  className="text-2xl"
                >
                  Putu Arya Pradipta
                </p>
                <p
                  style={{
                    fontFamily: "glacial-indifference",
                  }}
                  className="text-sm"
                >
                  Putra pertama dari Bapak Komang Krisnayuda & Ibu Erni Rustiani
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse	 items-center mx-8">
              <Image
                src={Bride.src}
                width="0"
                height="0"
                sizes="100%"
                className="h-auto w-1/3 my-1 rounded-t-full"
                alt={"bride"}
              />
              <div className="flex flex-col ml-4">
                <p
                  style={{
                    fontFamily: "amsterdam",
                  }}
                  className="text-2xl py-5 italic font-light"
                >
                  The Bride
                </p>
                <p
                  style={{
                    fontFamily: "daydream",
                    color: "#0c006c",
                  }}
                  className="text-2xl"
                >
                  Made Laksmiani Dewi
                </p>
                <p
                  style={{
                    fontFamily: "glacial-indifference",
                  }}
                  className="text-sm"
                >
                  Putri pertama dari Bapak Made Sadiana & Ibu Ida Ayu Saraswati
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${PageFour.src})`,
              backgroundSize: "cover",
              width: videoWidth,
            }}
            className="flex flex-col items-center content-center pt-8"
          >
            <p
              style={{
                fontFamily: "amsterdam",
              }}
              className="text-2xl py-5 italic font-light text-white"
            >
              Mark your calendar
            </p>
            <p
              style={{
                fontFamily: "glacial-indifference",
                color: "#f1d0a7",
              }}
              className="text-2xl"
            >
              18 Mei 2024
            </p>
            <p
              style={{
                fontFamily: "glacial-indifference",
                color: "#f1d0a7",
              }}
              className="text-sm"
            >
              18.00 - 20.00
            </p>
            <Calendar></Calendar>
            <Button
              onClick={() => {
                window.open(
                  "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MGFxb2JzbzM4bXU0NGdhcmVuZHZ0OWQ4ZWwgYXJ5YXByYWRpcHRhOUBt&tmsrc=aryapradipta9%40gmail.com"
                );
              }}
              text={"Jadwalkan via Google Kalender"}
            ></Button>
            <p
              style={{
                fontFamily: "amsterdam",
              }}
              className="text-2xl py-5 italic font-light text-white"
            >
              Venue
            </p>
            <p
              style={{
                fontFamily: "glacial-indifference",
                color: "#f1d0a7",
              }}
              className="text-sm"
            >
              The Gallery CIBIS Park
            </p>
            <p
              style={{
                fontFamily: "glacial-indifference",
                color: "#f1d0a7",
                width: "60%",
              }}
              className="text-sm text-center"
            >
              Jl.TB Simatupang No. 2 Cilandak Timur, Jakarta Selatan
            </p>
            <Button
              onClick={() => {
                window.open("https://maps.app.goo.gl/A9GikxuTd7SJpn5o8");
              }}
              text={"Lihat di peta"}
            ></Button>
            <Button
              onClick={() => {
                fetch("/api/" + id, {
                  method: "POST",
                  body: JSON.stringify({
                    accept: true,
                  }),
                });
              }}
              text={"Datang"}
            ></Button>
          </div>
        </div>
        {/* <div className="relative">
          <ReactPlayer
            url={"/hero.mp4"}
            controls={false}
            width={videoWidth}
            height={videoHeight}
            playing
            muted
            loop
            playsinline={true}
            onReady={() => setIsLoadingVideo(false)}
          />
          <div
            style={{
              height: videoHeight,
            }}
            className="flex flex-col items-center justify-center absolute top-0 text-white w-full z-10"
          >
            <p className={cn(dancingScript.className)}>The Wedding Party of</p>
            <p className={cn(dancingScript.className, "text-4xl")}>
              Gery & Mahita
            </p>
            <p className="text-sm">16.12.2023</p>
          </div>
        </div>
        <AnimateOnScroll>
          <div className="flex items-center justify-center pt-2">
            <Image src={Separator} height={75} alt="separator" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex flex-col items-center justify-center p-4 py-5 pt-3 space-y-4">
            <p className="text-center text-4xl text-black">
              <Typewriter
                options={{
                  deleteSpeed: 1000000,
                  strings: [`Hi...`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <p className="text-center leading-5 text-black">
              We are thrilled to invite you to join us for a joyous celebration
              as we unite in marriage. Your presence would mean the world to us
              as we embark on this beautiful journey together.
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex flex-row space-x-4 items-center">
            <Image
              src={Gery}
              width={videoWidth / 2}
              alt="Picture of the author"
            />
            <div className="flex flex-col space-y-2">
              <p className="text-2xl text-gray-700">Putu Gery Wahyu Nugraha</p>
              <div className="border-t border-black font-light text-gray-700">
                son of
              </div>
              <p className="text-black">
                Putu Suadnyana &<br />
                Putu Yeni Widiadnyani
              </p>
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex flex-row space-x-4 items-center">
            <div className="flex flex-col space-y-2">
              <p className="text-2xl text-end text-black">
                Ni Luh Mahita Eka Riadi
              </p>
              <div className="border-t border-black font-light text-gray-700 text-end">
                daughter of
              </div>
              <p className="text-end text-black">
                Nyoman Triyasa &<br />
                Ni Wayan Resiadi
              </p>
            </div>
            <Image
              src={Mahita}
              width={videoWidth / 2}
              alt="Picture of the author"
            />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex items-center justify-center py-5 relative w-full">
            <Image src={Separator} height={75} alt="separator" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="relative">
            <div
              className={cn(
                dancingScript.className,
                "text-2xl absolute h-full w-full flex items-center justify-center bg-black bg-opacity-50 z-50"
              )}
            >
              <p className="text-white text-4xl">Event Details</p>
            </div>
            <Image src={Image1} alt="Picture of the author" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="relative flex items-center justify-center py-5 flex-col w-full">
            <div
              style={{
                backgroundImage: "url(./bg.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                opacity: 0.2,
              }}
              className="absolute h-full w-full"
            ></div>
            <p className="text-center text-black px-4">
              Join us for the celebration at
              <br />
              <span className="font-bold text-gray-700">
                Warung di Kebun, Denpasar City
              </span>
              <br />
              — on — <br />{" "}
              <span className="font-bold text-gray-700">
                16th of December 2023
              </span>{" "}
              <br />{" "}
              <span className="font-bold text-gray-700">
                17.00-20.00 Bali Time
              </span>
              <br />
              <br />
            </p>
            <div className="relative h-[200px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2792415061267!2d115.23871231178799!3d-8.664971488150677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd240613bbb02bb%3A0x26437fa8b7acd924!2sWarung%20Di%20Kebun!5e0!3m2!1sen!2sid!4v1700584477176!5m2!1sen!2sid"
                width={videoWidth}
                height="200"
                style={{
                  border: 0,
                  zIndex: 1000,
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex items-center justify-center py-5 relative w-full">
              <Image src={Separator} height={75} alt="separator" />
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="relative">
            <div
              className={cn(
                dancingScript.className,
                "flex flex-row text-2xl absolute h-full w-full items-center justify-end bg-black bg-opacity-20 z-50 pr-[10%]"
              )}
            >
              <p
                className={cn(
                  dancingScript.className,
                  "text-white text-5xl text-end leading-9 opacity-90"
                )}
              >
                Will we <br /> see you in <br /> {days} days?
              </p>
            </div>
            <Image src={Image2} alt="Picture of the author" />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="px-4 pt-5 pb-0 space-y-4">
            <p className="text-center leading-5 text-black">
              For the convenience of our event, please confirm your attendance
              by December 7th
            </p>
            <Submission />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="p-4 pb-5 pt-5">
            <div className="flex items-center justify-center pt-2">
              <Image src={Separator} height={75} alt="separator" />
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="p-4 pb-5 pt-0">
            <p
              className={cn(
                dancingScript.className,
                "text-center text-5xl text-black"
              )}
            >
              Our Memories
            </p>
          </div>
          <div className="px-8 pb-5">
            <p className="text-center text-black">
              In the meantime, here are some of our loveliest moment together...
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Image
            src={ImageCol1}
            width={videoWidth}
            onClick={() => setImage(ImageCol1)}
            alt="separator"
            placeholder="blur"
          />
        </AnimateOnScroll>
        <div className="flex flex-row">
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol1_1)}
              src={ImageCol1_1}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol1_2)}
              src={ImageCol1_2}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol1_3)}
              src={ImageCol1_3}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll>
          <Image
            src={ImageCol5}
            onClick={() => setImage(ImageCol5)}
            width={videoWidth}
            alt="separator"
            placeholder="blur"
          />
        </AnimateOnScroll>
        <div className="flex flex-row">
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol5_1)}
              src={ImageCol5_1}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol5_2)}
              src={ImageCol5_2}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol5_3)}
              src={ImageCol5_3}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll>
          <Image
            src={ImageCol6}
            onClick={() => setImage(ImageCol6)}
            width={videoWidth}
            alt="separator"
            placeholder="blur"
          />
        </AnimateOnScroll>
        <div className="flex flex-row">
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol6_1)}
              src={ImageCol6_1}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol6_2)}
              src={ImageCol6_2}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol6_3)}
              src={ImageCol6_3}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll>
          <Image
            src={ImageCol2}
            onClick={() => setImage(ImageCol2)}
            width={videoWidth}
            alt="separator"
            placeholder="blur"
          />
        </AnimateOnScroll>
        <div className="flex flex-row">
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol2_1)}
              src={ImageCol2_1}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol2_2)}
              src={ImageCol2_2}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol2_3)}
              src={ImageCol2_3}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll>
          <Image
            src={ImageCol3}
            onClick={() => setImage(ImageCol3)}
            width={videoWidth}
            alt="separator"
            placeholder="blur"
          />
        </AnimateOnScroll>
        <div className="flex flex-row">
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol3_1)}
              src={ImageCol3_1}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol3_2)}
              src={ImageCol3_2}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol3_3)}
              src={ImageCol3_3}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll>
          <Image
            src={ImageCol4}
            onClick={() => setImage(ImageCol4)}
            width={videoWidth}
            alt="separator"
            placeholder="blur"
          />
        </AnimateOnScroll>
        <div className="flex flex-row">
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol4_1)}
              src={ImageCol4_1}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol4_2)}
              src={ImageCol4_2}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <Image
              onClick={() => setImage(ImageCol4_3)}
              src={ImageCol4_3}
              width={videoWidth / 3}
              placeholder="blur"
              alt="separator"
            />
          </AnimateOnScroll>
        </div>

        <p className={cn(dancingScript.className, "py-5 text-black")}>
          Made with love, by Gery & Mahita
        </p> */}
      </main>
    </>
  );
}

function ImagePreview(props: {
  src: StaticImport;
  width: number;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed top-0 h-screen w-screen flex items-center justify-center z-50"
      onClick={props.onClose}
    >
      <div className="w-[450px] z-100 h-full">
        <div className="w-full h-full p-4 z-100 items-center justify-center flex bg-black bg-opacity-50">
          <div className="drop-shadow-md">
            <Image
              src={props.src}
              width={props.width - 40}
              alt="separator"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
