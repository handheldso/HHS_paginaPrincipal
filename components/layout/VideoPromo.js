import React from 'react';
import styled from '@emotion/styled';


const VideoPromo = () => {

    const Video = styled.div`
        padding-top: 4rem;
        padding-bottom: 1rem;
        width: 100%;
        height: 45rem;
        text-align: center;
    `;

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

    return ( 
        <>
        <TituloDiv>
            <Titulo>
                Software para venta en ruta
            </Titulo>
        </TituloDiv>
        <Video>
            <iframe
              src="https://www.youtube.com/embed/wk4VNl5WhrY?start=5"
              width="90%"
              height="90%"
              frameborder="0"
              aria-hidden="false"
              tabindex="0"
              
            ></iframe>
        </Video>
        </>
     );
}
 
export default VideoPromo;