import React from "react";
import styled from "@emotion/styled";

const Servicios = () => {
  const ContenedorD = styled.div`
    width: 50%;
    margin-right: 2rem;

    @media (max-width: 1100px) {
      margin-top: 5rem;
    }

    @media (max-width: 700px) {
      width: 100%;
    }
  `;

  const OvaTexDiv = styled.div`
    width: 50%;
    margin: 0px auto;
    background-color: #0076c0;
    border-radius: 4rem;
    text-align: center;

    @media (max-width: 1200px) {
      width: 70%;
    }

    @media (max-width: 768px) {
      width: 80%;
    }
  `;

  const OvaTex = styled.p`
    font-size: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: bold;
    color: white;

    @media (max-width: 1200px) {
      font-size: 20px;
    }

    @media (max-width: 699px) {
      font-size: 17px;
    }

    @media (max-width: 593px) {
      font-size: 14px;
    }
  `;

  return (
    <>
      <ContenedorD>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/13zQzLmO33zkGCWzry3tUufd4vjxPw9C8/view?usp=sharing"
        >
          <OvaTexDiv className="b">
            <OvaTex>
              ¡Descargue nuestros
              <br /> servicios!
            </OvaTex>
          </OvaTexDiv>
        </a>
      </ContenedorD>
      Handhelds Zebra: TC15 TC52, TC57, 
      TC70, MC3300, EC50, MC2200,
      <br /> 
      MC2700, TC21, TC26, MC9300,
      TC8300, PS20, EC30.
      <br />
      <br /> 
      Handhelds Newland: N7, MT95, MT37,
      MT65, MT67, MT90, NFT10.
      <br />
      <br /> 
      Handhelds Urovo: RT40, DT50,
      DT40, DT30, i6310, i6300,
      <br />
      i6200S, DT50 5G, DT50H, i6310H
      Handhelds Unitech: EA520, EA630,
      <br />
      PA760, HT330, HT730, EA500+, HT380,
      HT730, Loung Range, WD200,
      EA630HC, PA760HC.
      <br />
      <br /> 
      Handhelds Datalogic: Memor 11, Joya Touch 22,
      Skorpio X5, Memor K, Memor 10,
      Falcon X4, Skorpio X4.
      <br /> 
      <br /> 
      Handhelds Honeywell: CT40, CT40P,
      <br />
      CK65, CT60, CN80, EDA61K, CT50,
      EDA52, CT30XP, EDA57, EDA5S,
      <br />
      CT47, EDA51, CW45, CT45, CT45XP.
      <br /> 
      <br /> 
      Impresoras de etiquetas Zebra: ZD600, ZD510-HC,
      <br /> 
      ZD400, ZD421, ZD411, ZD200, ZD500,
      GK420, GT800, TLP2824, ZT600,
      <br />
      ZT620, ZT510, ZT410, ZT411,
      ZT220, ZT230, ZT231, ZT111,
      <br />
      220Xi4, ZQ600, ZQ610,
      ZQ620, ZQ630, ZQ500, ZQ510,
      <br />
      ZQ520, ZQ530, ZQ300,
      ZQ310, ZQ320, ZQ200,
      <br />
      ZQ220, ZQ210, ZT611R, ZT610.
      <br /> 
      <br /> 
      Impresoras de credenciales Zebra: ZC10L,
      <br /> 
      ZXP SERIES 9, ZXP SERIES 7,
      ZC300, ZC100.
      <br />
      <br /> 
      Impresoras Honeywell: MPD31D, PD45S,
      RPF, MPD31, PM43, PC42, PC43, LNX3,
      PX45, PX65, PM45, PM45C, PX45, PD45.
      <br />
      <br />
      Impresoras TSC Printonix: TDP-225,
      <br />
      TDP-225W, TDP-324, TDP-324W, tPP-225,
      TPP-323, TX200, TX300, TX600, TTP-243,
      TPP-247, TPP.345, TTP-244CE
      <br /> 
      TTP-244,
      TTP-244 Pro, TTP-245C, TC210, TC310,
      <br />
      TE200, TE210, TE300, TE310, TE210, TE310,
      TDP-247,
      <br />
      DP-345, DA210, DA220, DA310,
      DA320, TTP-244M Pro, ML240,
      <br />
      MH241, MX241P,
      MB240, MH240, MH241T, MH241P, MX240P,
      <br />
      MX340P, MX640P, MH261, MH240, MH261T,
      MH241T, MH241, TTP-286MT, TTP-384MT,
      T800, T4000, T6000e, T8000,
      RFID Alpha-40L. 
      <br />           
      <br />   
      Impresoras de credenciales Evolis: Primacy,
      Primacy 2, Zenius, Badgy200, Avansia,
      <br />
      Avansia Lamination, Elypso, Issego,
      Privelio, Privelio XT, Quantum,
      Tatto Rewrite,  
      <br />
      <br />
      Impresoras de credenciales Datacard: SR300,
      CP60 Plus, SP35,
      <br />
      CE870, CE840, 450, 280P,
      SR200.
      <br />
      Fargo HDP6600,
      DTC1250e, Fargo HDP600ii, Fargo, INK1000,
      <br />
      Fargo HDP5000, Fargo, DT5500LMX,
      Fargo DTCii Plus, DTC4250e.
      <br />
      <br />
      Lectores de códigos Honeywell: Voyager XP 1470g,
      Voyager XP 1472G, Voyager 1200g, Voyager 1250g,
      Voyager 1400g, Voyager 9540,
      <br />
      Voyager300g, HH490,
      Granit XP 1990iXLR, Granit XP 1991iXLR,
      <br />
      Granit 1990iSR, Granit 1990iXR, Granit 1991iSR,
      Granit, 1991iXR, Granit 1911i,
      <br />
      Genesis, 7580g,
      Genesis XP 7680g, Vuquest 3320g, Orbit, 7190g,
      Solaris 7980g, Orbit, 7120, Orbit 7180, 8680i,
      <br />
      8675i, Xenon XP 1952h, Xenon XP 1950g,
      Xenon XP 1952g, Xenon XP 1950h, 
      <br />
      <br />
      Lectores de códigos Zebra: DS8100, DS4600, DS2200,
      LI2208, LI4278, LS203, LS203-HD, LS2208, DS457,
      DS7708, DS9300, DS9900,
      <br />
      MP7000, CS60, DS3600-KD,
      LI3600ER, LI3678-ER, LI3678-ER, LI3600-SR,
      <br />
      LI3608-SR, LI3678-SR, DS3600-SR, DS3600-HP,
      DS3600-HD, DS3600-DP, DS3600-DPA, DS3600-ER,
      DS4608-HC, DS2200-HC, DS8100-HC,
      <br />
      CS60-HC,
      MiniScan MS954, FS10, FS20, FS40, FS70, MT2000.   
      <br />
      <br />
      Lectores de códigos Urovo: R70, SR5600, U2.
      <br />
      <br />
      Lectores de códigos Unitech: AS10, MS836,
      MS838, MS250, MS832,
      MS852 LR, MS851, MS852+,
      <br />
      FC75, TS100, MS812+. MS816, MS926, MS925, MS838B,
      <br />
      MS852B, MS840P v4, MS851B, MS842P v4,
      MS146, MS120,
      <br />
      MS100, MS622, MS650, MS652+,MS851 ESD,
      <br />
      MS852+ ESD, MS840P ESD, MS842P ESD, MS851B ESD,
      MS8552B+ ESD.
      <br />
      <br />
      Lectores de códigos Datalogic: QuickScan 2200,
      PowerScan 9600, QuickScan 2500, PowerScan 9100,
      Gryphon 4200, PowerScan 9500,
      <br />
      Gryphon 4500,
      Heron 3400, Heron 3100, RIDA DBT6400, TD1100,
      <br />
      QuickScan 2100, PowerScan 9500, FBC9080,
      SD9030 Dongle.
      <br />
    </>
  );
};

export default Servicios;
