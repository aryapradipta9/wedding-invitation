"use client";

import { cn } from "./utils";
import { useEffect, useState } from "react";
import Header from "../../public/home.png";
import { forum } from "./font";

export default function Home() {
  const [videoWidth, setVideoWidth] = useState(0);

  useEffect(() => {
    const width = window.innerWidth <= 450 ? window.innerWidth : 450;
    setVideoWidth(width);
  }, []);

  if (!videoWidth) return null;

  return (
    <>
      <main
        className={cn(
          "flex min-h-screen flex-col items-center justify-start bg-white max-w-[450px] relative",
          "visible"
        )}
      >
        <div>
          <div
            style={{
              backgroundImage: `url(${Header.src})`,
              backgroundSize: "cover",
              width: videoWidth,
            }}
            className="flex flex-col items-center justify-center h-screen"
          >
            <p className={cn(forum.className, "text-xl text-krem mb-8")}>
              {"invitation for"}
            </p>
            <p
              style={{
                fontFamily: "daydream",
              }}
              className="text-5xl text-krem mb-2"
            >
              <span>Arya</span>
              <span className={cn(forum.className)}> & </span>
              <span>Laksmi</span>
            </p>
            <p className={cn(forum.className, "text-xl text-krem mb-8")}>
              {"wedding reception"}
            </p>
            <p className={cn(forum.className, "text-xl text-krem mb-8")}>
              {"mohon cek link anda kembali"}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
