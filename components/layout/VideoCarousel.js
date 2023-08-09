import React, { useState, useEffect, useCallback,useRef } from "react";
import { PrevButton, NextButton, PlayButton } from "./carouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { videoIndex, videoThumbnail,SwapDuration } from "../../hooks/CarouselMedia";
import { VideoModal } from './VideoModal';

const EmblaCarousel = ({slides}) =>{

 const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 2,
    skipSnaps: false,
    loop:true
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const defaultScrollState = true;
  const [scrolling,setScrollState] = useState(defaultScrollState);
  const scrollingRef = useRef(defaultScrollState);

  const[modalVideoUrl,setModalUrl] = useState("");

  let scrollingForward = true;
  let interval = undefined;
  const IntervalDuration = SwapDuration*1000;

  const [videoModalOpen,showVideoModal] = useState(false);
  
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);


  const ShowVideo = (videoID)=>{
      setModalUrl(videoID);
      setScrollState(false);
      showVideoModal(prev=>!prev);
  }

  const setModalVisibility = (isOpen)=>{
    showVideoModal(isOpen);
    setScrollState(prev=>!prev);
  }

  useEffect(()=>{
      scrollingRef.current = scrolling;
  });
  
  useEffect(() => {
    if (!embla) return;

    embla.on("select", onSelect);
    onSelect();
    if(interval == undefined){
        startInterval();
        setScrollState(true);
    }
    
  }, [embla, onSelect]);

    const startInterval = ()=>{
        interval = setInterval(()=>{

            if(scrollingRef.current == true){
                if( scrollingForward == true){

                    if(embla.canScrollNext())
                        scrollNext();
                    else{
                        scrollingForward = false;
                        scrollPrev();
                    }
                }
                else{
                    if(embla.canScrollPrev())
                        scrollPrev();
                    else{
                        scrollingForward = true;
                        scrollNext();
                    }
                }
            }
        },IntervalDuration);
    };


  return (

    <div>

        <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
            {slides.map((index) => 
            (<div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                    
                <div className="video__carousel_slot" onClick={()=>{ShowVideo(videoIndex(index).id);}}>
                    <img src={videoThumbnail(videoIndex(index).id)}/>
                    <p className="carousel_item_name">{videoIndex(index).name}</p>
                    <PlayButton/>
                </div>

                </div>
                </div>
            )
            )}
            </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>

        <VideoModal showModal={videoModalOpen} setShowModal={setModalVisibility} videoID={modalVideoUrl} />
		</div>
        
  );
};

export default EmblaCarousel;