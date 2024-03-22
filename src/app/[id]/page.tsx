"use client";

import Image from "next/image";
import { cn } from "../utils";
import Hero1 from "../../../public/1.jpg";
import Hero2 from "../../../public/2.jpg";
import Hero3 from "../../../public/3.png";
import Bride from "../../../public/bride.jpg";
import Groom from "../../../public/groom.jpg";

import Background from "../../../public/bg.png";
import PageTwo from "../../../public/pg2.png";
import PageThree from "../../../public/pg3.png";
import PageFour from "../../../public/pg4.png";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Button } from "../button";
import { Calendar } from "../calendar";

type Guest = {
  fullName: string;
  shortName: string;
};

type Comment = {
  timestamp: string;
  name: string;
  comment: string;
};

export default function Home() {
  const { id } = useParams();
  const [videoWidth, setVideoWidth] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);
  const [guest, setGuest] = useState<Guest | undefined>(undefined);
  const [image, setImage] = useState<StaticImport | null>(null);
  const [undanganOpened, setUndanganOpened] = useState<boolean>(false);
  const [komentar, setKomentar] = useState("");
  const [allComments, setAllComments] = useState<Array<Comment>>([]);

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

  useEffect(() => {
    listComments();
  }, []);

  function listComments() {
    return fetch("/api/comments")
      .then((r) => r.json())
      .then((data) =>
        setAllComments(
          (data.data as Array<Comment>).sort(
            (a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp)
          )
        )
      );
  }

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
          </div>
          <div className="flex flex-col items-center content-center pt-8">
            <p
              style={{
                fontFamily: "glacial-indifference",
              }}
              className="text-2xl py-5 italic font-light"
            >
              Konfirmasi Kehadiran
            </p>
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
            <Button
              onClick={() => {
                fetch("/api/" + id, {
                  method: "POST",
                  body: JSON.stringify({
                    accept: false,
                  }),
                });
              }}
              text={"Tidak datang"}
            ></Button>
          </div>
          <p
            style={{
              fontFamily: "glacial-indifference",
            }}
            className="text-2xl py-5 italic font-light"
          >
            Komentar
          </p>
          <input
            type="text"
            placeholder="ketik komentar"
            value={komentar}
            onChange={(e) => setKomentar(e.target.value)}
            className="border-black py-2 px-4 border"
          />
          <Button
            onClick={() => {
              createComments(guest.fullName, komentar).then(() =>
                listComments()
              );
            }}
            text={"Submit"}
          ></Button>

          {allComments.map((c) => {
            return (
              <div key={c.timestamp} className="border-2 m-5">
                <p>Nama: {c.name}</p>
                <p>Komentar: {c.comment}</p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

function createComments(nama: string, komentar: string) {
  return fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({
      nama: nama,
      komentar: komentar,
    }),
  });
}
