import React, { useState, useEffect, useCallback,useRef } from "react";
import EmblaCarousel from "./VideoCarousel";
import {Count} from "../../hooks/CarouselMedia";

import styled from '@emotion/styled';

const VideosSection = () => {

    const TituloDiv = styled.div`
    text-align: center;
    margin: 0px auto;
    padding-top: 3rem;
    width: 100%;
    `;

    const Titulo = styled.p`
    font-weight: bold;
    font-size: 33px;
    `;


    const SLIDE_COUNT = Count+(Count%2);
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    return ( 
        <>
        <section id="videos" >
        
        <TituloDiv>
            <Titulo>
                Videos Hand Held Solutions
            </Titulo>
        </TituloDiv>
        <EmblaCarousel slides={slides}/>
        
        
        </section>
        </>
     );
}
 
export default VideosSection;