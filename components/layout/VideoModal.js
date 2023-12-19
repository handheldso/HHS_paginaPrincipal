import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,0.8);
    position:fixed;
    top:0;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center; 
    z-index:1500;
`;

const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    color: #000;
    display:block;
    position: relative;
    z-index: 10;
`;

const ModalImg = styled.iframe`
    width:70vw;
    max-width:1200px;
    max-height:780px;
    height: 40vw;
    border:none;
    background : #000;
    border-radius : 10px;
`;

const CloseModalButton = styled(MdClose)`
    Cursor:pointer;
    position: absolute;
    top: -50px;
    right: 0px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
    fill: white;
`;


export const VideoModal = ({ showModal, setShowModal,videoID}) => {
    const modalRef = useRef();
    const videoURL = "https://www.youtube.com/embed/"+videoID+"?autoplay=1";
    const animation = useSpring({
      config: {
        duration: 250
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });
  
    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);
        }
      },
      [setShowModal, showModal]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );
  
    return (
      <>
        {showModal ? (
          <Background onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
              <ModalWrapper showModal={showModal}>
                <ModalImg src={videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal(prev => !prev)}

                />
              </ModalWrapper>
            </animated.div>
          </Background>
        ) : null}
      </>
    );
  };