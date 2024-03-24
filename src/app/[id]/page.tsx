"use client";

import Image from "next/image";
import { cn } from "../utils";
import Hero1 from "../../../public/1.jpg";
import Hero2 from "../../../public/2.jpg";
import Hero3 from "../../../public/3.png";
import Bride from "../../../public/bride.jpg";
import Groom from "../../../public/groom.jpg";

import Background from "../../../public/bg.png";
import Header from "../../../public/home.png";

import PageTwo from "../../../public/page2.png";
import PageThree from "../../../public/page3.png";
import PageFour from "../../../public/pg4.png";
import PageFive from "../../../public/page5.png";
import PageSix from "../../../public/page6.png";
import PageSeven from "../../../public/page7.png";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Button } from "../button";
import { Calendar } from "../calendar";
import { forum, theSeason } from "../font";
import AnimateOnScroll from "../animate";

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
  const krem = "#EDE3D9";

  const handleBukaUndangan = () => {
    setUndanganOpened(true);
  };

  function handleCopy(text: string) {
    navigator.clipboard.writeText(text);
  }

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
          <div
            style={{
              backgroundImage: `url(${Header.src})`,
              backgroundSize: "cover",
              width: videoWidth,
            }}
            className="flex flex-col items-center justify-center h-screen"
          >
            <p className={cn(theSeason.className, "text-4xl text-krem")}>
              DEAR {guest.shortName.toUpperCase()}
            </p>
            <p className={cn(forum.className, "text-xl text-krem mb-20")}>
              {"you're invited to"}
            </p>
            {/* <p className={cn(theSeason.className, "text-4xl text-krem")}>
                ARYA & LAKSMI
              </p> */}
            <p
              style={{
                fontFamily: "daydream",
              }}
              className="text-5xl text-krem"
            >
              {"Arya & Laksmi"}
            </p>
            <p className={cn(forum.className, "text-xl text-krem mb-20")}>
              {"wedding reception"}
            </p>
            <button
              className={cn(forum.className, "p-2 my-2  bg-krem rounded-xl")}
              onClick={handleBukaUndangan}
            >
              <p className={cn(forum.className, "text-xl text-biru")}>
                buka undangan
              </p>
            </button>
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
            className="flex flex-col items-center pt-12 h-screen"
          >
            <AnimateOnScroll>
              <p className={cn(forum.className, "text-lg p-2 text-left mx-5")}>
                &#34;Ya Tuhan Yang Maha Pengasih, anugrahkanlah kepada pasangan
                ini tanpa terpisahkan, panjang umur, semoga pernikahan ini
                dianugrahkan putra-putri dan cucu yang memberi penghiburan,
                tinggal di rumah yang penuh kebahagiaan&#34;
              </p>

              <p className={cn(forum.className, "text-lg p-2 text-left mx-5")}>
                Reg Weda X. 85.42
              </p>
            </AnimateOnScroll>
          </div>
          <div
            style={{
              backgroundImage: `url(${PageThree.src})`,
              backgroundSize: "cover",
              width: videoWidth,
              height: "100vh",
            }}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex flex-row items-center">
              <AnimateOnScroll className="w-2/3">
                <Image
                  src={Groom.src}
                  width="0"
                  height="0"
                  sizes="100%"
                  className="h-auto w-auto my-1"
                  alt={"groom"}
                  style={{
                    boxShadow: "8px 8px #EDE3D9",
                  }}
                />
              </AnimateOnScroll>
              <div className="flex flex-col ml-4 mr-1">
                <AnimateOnScroll>
                  <p
                    className={cn(
                      theSeason.className,
                      "text-2xl py-3 font-light text-birutua"
                    )}
                  >
                    THE GROOM
                  </p>
                  <p className={cn(forum.className, "text-xl")}>
                    Putu Arya Pradipta
                  </p>
                  <p className={cn(forum.className, "text-sm")}>
                    Putra pertama dari Bapak Komang Krisnayuda & Ibu Erni
                    Rustiani
                  </p>
                </AnimateOnScroll>
              </div>
            </div>
            <div className="flex flex-row-reverse	items-center mt-10">
              <AnimateOnScroll className="w-2/3">
                <Image
                  src={Bride.src}
                  width="0"
                  height="0"
                  sizes="100%"
                  className="h-auto w-auto my-1 shadow-md"
                  alt={"bride"}
                  style={{
                    boxShadow: "-8px 8px #EDE3D9",
                  }}
                />
              </AnimateOnScroll>
              <div className="flex flex-col mr-4 ml-1">
                <AnimateOnScroll>
                  <p
                    className={cn(
                      theSeason.className,
                      "text-2xl py-3 font-light text-birutua "
                    )}
                  >
                    THE BRIDE
                  </p>
                  <p className={cn(forum.className, "text-xl ")}>
                    Made Laksmiani Dewi
                  </p>
                  <p className={cn(forum.className, "text-sm ")}>
                    Putri pertama dari Bapak Made Sadiana & Ibu Ida Ayu
                    Saraswati
                  </p>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${PageFive.src})`,
              backgroundSize: "cover",
              width: videoWidth,
            }}
            className="flex flex-col items-center justify-center pt-8 h-screen"
          >
            <AnimateOnScroll className="flex flex-col items-center justify-center">
              <p
                className={cn(
                  theSeason.className,
                  "text-4xl text-krem text-center"
                )}
              >
                MARK YOUR CALENDAR
              </p>

              <p
                className={cn(
                  forum.className,
                  "text-2xl text-krem text-center"
                )}
              >
                18 Mei 2024
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll className="flex flex-col items-center justify-center">
              <Calendar></Calendar>
              <Button
                onClick={() => {
                  window.open(
                    "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MGFxb2JzbzM4bXU0NGdhcmVuZHZ0OWQ4ZWwgYXJ5YXByYWRpcHRhOUBt&tmsrc=aryapradipta9%40gmail.com"
                  );
                }}
                text={"Jadwalkan via Google Kalender"}
                className={cn(forum.className)}
              ></Button>
            </AnimateOnScroll>

            <AnimateOnScroll className="flex flex-col items-center justify-center">
              <p
                className={cn(forum.className, "text-xl text-krem text-center")}
              >
                18.00 - 20.00 WIB
              </p>
              <p
                className={cn(forum.className, "text-xl text-krem text-center")}
              >
                The Gallery CIBIS Park
              </p>
              <p
                className={cn(forum.className, "text-md text-krem text-center")}
              >
                Jl.TB Simatupang No. 2 Cilandak Timur, Jakarta Selatan
              </p>

              <Button
                onClick={() => {
                  window.open("https://maps.app.goo.gl/A9GikxuTd7SJpn5o8");
                }}
                text={"Lihat di peta"}
                className={cn(forum.className, "w-1/2")}
              ></Button>
            </AnimateOnScroll>
          </div>
          <div
            style={{
              backgroundImage: `url(${PageSix.src})`,
              backgroundSize: "cover",
              width: videoWidth,
            }}
            className="flex flex-col items-center justify-center h-screen px-2 "
          >
            <AnimateOnScroll>
              <p
                className={cn(
                  theSeason.className,
                  "text-4xl text-krem text-center"
                )}
              >
                WEDDING GIFT
              </p>
              <p
                className={cn(
                  forum.className,
                  "text-md text-krem text-center mb-5"
                )}
              >
                Doa restu Anda merupakan hadiah yang tidak dapat tergantikan.
                Tanpa mengurangi rasa hormat, Anda dapat memberikan hadiah dalam
                bentuk lainnya.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll className="flex flex-col  items-center justify-center mx-5 py-2 w-3/4 bg-krem mb-2 rounded-lg bg-opacity-60">
              <p
                className={cn(forum.className, "text-lg text-biru text-center")}
              >
                <b>BCA</b> 7772102251
                <button
                  onClick={() => handleCopy("7772102251")}
                  className="border"
                >
                  copy
                </button>
                <br /> a.n. Putu Arya Pradipta
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll className="flex flex-col  items-center justify-center mx-5 py-2 w-3/4 bg-krem mb-2 rounded-lg bg-opacity-60">
              <p
                className={cn(forum.className, "text-lg text-biru text-center")}
              >
                <b>BRI</b> 150401005572506
                <button
                  onClick={() => handleCopy("150401005572506")}
                  className="border"
                >
                  copy
                </button>
                <br /> a.n. Made Laksmiani Dewi
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll className="flex flex-col  items-center justify-center mx-5 py-2 w-3/4 bg-krem mb-2 rounded-lg bg-opacity-60">
              <p
                className={cn(forum.className, "text-lg text-biru text-center")}
              >
                <b>Gopay</b> 087882072855
                <button
                  onClick={() => handleCopy("087882072855")}
                  className="border"
                >
                  copy
                </button>
                <br /> a.n. Made Laksmiani Dewi
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll className="flex flex-col  items-center justify-center mx-5 px-2 h-24 w-3/4 bg-krem rounded-lg bg-opacity-60">
              <p
                className={cn(
                  theSeason.className,
                  "text-lg text-biru text-center"
                )}
              >
                <b>Alamat</b>
              </p>
              <p
                className={cn(forum.className, "text-sm text-biru text-center")}
              >
                Jl. Robusta 2c blok s5 no 4 rt05 rw06 Kel. Pondok Kopi Kec.
                Duren Sawit Kota Jakarta Timur 13460
              </p>
            </AnimateOnScroll>
          </div>
          <div
            style={{
              backgroundImage: `url(${PageSeven.src})`,
              backgroundSize: "cover",
              width: videoWidth,
            }}
            className="flex flex-col items-center justify-center h-screen px-2 "
          >
            <AnimateOnScroll className="flex flex-col w-5/6">
              <p
                className={cn(
                  theSeason.className,
                  "text-xl text-krem text-center"
                )}
              >
                KONFIRMASI KEHADIRAN
              </p>
              <input
                type="text"
                value={guest.fullName}
                className={cn(
                  forum.className,
                  "bg-krem rounded-lg pl-2 mb-1 h-8 bg-opacity-60"
                )}
              ></input>
              <select
                id="konfirmasi"
                name="konfirmasi"
                className={cn(
                  forum.className,
                  "bg-krem rounded-lg pl-2 mb-1 h-8 bg-opacity-60"
                )}
              >
                <option value={"Hadir"}>Hadir</option>
                <option value={"Tidak hadir"}>Tidak hadir</option>
              </select>

              <textarea
                name="comment"
                rows={4}
                cols={30}
                placeholder="Sampaikan ucapan..."
                className={cn(
                  forum.className,
                  "bg-krem rounded-lg pl-2 mb-1 bg-opacity-60"
                )}
              ></textarea>
              <Button
                onClick={() => {}}
                className={cn(forum.className, "w-1/2 place-self-center")}
              >
                Kirim
              </Button>
            </AnimateOnScroll>

            <p
              className={cn(
                forum.className,
                "text-sm text-krem text-center bg-opacity-60"
              )}
            >
              Comments ({allComments.length})
            </p>
            <div className="flex flex-col h-1/3 w-5/6 items-center overflow-auto">
              {allComments.map((c) => {
                return (
                  <div
                    key={c.timestamp}
                    className="m-1 bg-krem rounded-lg pl-2 w-full leading-tight bg-opacity-60"
                  >
                    <p className={cn(forum.className, "text-biru")}>
                      <b>{c.name}</b>
                    </p>
                    <p className={cn(forum.className, "text-biru")}>
                      {c.comment}
                    </p>
                  </div>
                );
              })}
            </div>
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
              className={cn(forum.className)}
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
