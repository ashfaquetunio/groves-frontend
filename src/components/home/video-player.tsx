"use client";

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Modal from "../molecules/Modal";
import { movies } from "@/assets/data";
import Image from "next/image";

function VideoPlayer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<typeof movies[0] | null>(null);


  const handleWatchNow = () => {
    setSelectedMovie(movies[0]);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMovie(null);
  };

  return (
    <>
      <div className="relative mb-6 aspect-video w-full">
        <Image src="/images/home/groves-thumbnail.png" fill alt="video thumbnail" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <button
            className='relative w-8 md:w-16 lg:w-20 aspect-square rounded-full bg-white flex items-center justify-center text-center'
            onClick={() => handleWatchNow()}
          >
            <div className="relative aspect-square overflow-hidden xs:aspect-[0.852] rounded-full xs:rounded-none w-2 xs:w-4 md:w-6 lg:w-7 bg-black xs:bg-transparent xs:translate-x-[15%]">
              <Image src="/images/icons/play-button-dark.svg" alt="watch now" fill className='object-contain' />
            </div>
          </button>
        </div>
      </div>


      <Modal
        isOpen={modalIsOpen}
        handleClose={closeModal}
        ariaLabel='Video Modal'
        targetId="groves-video-player"
        className="aspect-video w-[90vw] sm:w-[75vw]"
      >
        {/* selectedMovie = movie */}

        {selectedMovie && (
          <div className="w-full h-full">
            <ReactPlayer
              url={selectedMovie.trailerLink}
              height='100%'
              width='100%'
              controls={false}
              className='bg-dark overflow-hidden block'
            />
          </div>
        )}
      </Modal>
    </>
  );
}

export default VideoPlayer;