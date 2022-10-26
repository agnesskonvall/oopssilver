import Link from "next/link";
import styled from "styled-components";
import React, { useState } from "react";
import Image from "next/image";

const FaqWrapper = styled.div`
  font-family: "RedHatDisplay";
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  display: block;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
  }
`;

const QuestionsWrapper = styled.div`
  display: grid;
  list-style-type: none;
  flex-direction: column;
  width: 100vw;
  align-items: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
  }
`;

const TitleText = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;
const Text = styled.p`
  font-size: 16px;
`;

const TextWrapper = styled.div`
  width: 90%;
  margin-left: 1rem;
`;

const ImageWrapper = styled.div`
  width: 20rem;
  height: 20rem;
  align-items: center;
  position: relative;
  margin-left: 3rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    width: 40rem;
    height: 40rem;
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 992px) {
  }
`;

const BoldText = styled.h4`
  font-family: "RedHatDisplayBold";
  font-size: 22px;
  margin: 0.2rem;
`;
const CareWrapper = styled.div`
  display: grid;
  list-style-type: none;
  flex-direction: column;
  width: 100vw;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto;

  .necklace-image {
    grid-row: 2;
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    flex-direction: row;
    grid-auto-rows: auto;

    .necklace-image {
      grid-row: 1;
    }
  }
`;

const FaqSection = ({ text, href, active }) => {
  return (
    <FaqWrapper>
      <TitleText>VANLIGA FRÅGOR</TitleText>
      <QuestionsWrapper>
        <TextWrapper>
          <BoldText>Passar ringarna alla?</BoldText>
          <Text>
            Om inget annat anges så är ringstommen gjord i en omlottmodell som
            kan regleras till rätt storlek. I beställningen kan man uppge önskad
            storlek så anpassas just din ring till denna storlek.Om ringen är av
            en modell där det inte är en omlottstomme anges önskad ringstorlek i
            beställningen.
          </Text>
          <BoldText>Hur vet jag vilken ringstorlek jag har?</BoldText>
          <Text>
            Du kan antingen gå in till en juvelerare och be att få mäta ditt
            finger/dina fingrar med ett särskilt ringmått.Om du har en ring
            hemma som är i rätt storlek så kan du mäta innerdiametern på ringen.
            Lägg den t ex på en linjal och läs av innermåttet. Har du
            diametermåttet kan jag räkna om till omkrets.
          </Text>
          <BoldText>
            Kan jag välja vilken färg jag vill på OOPS-smycket?
          </BoldText>
          <Text>
            Eftersom jag blandar färgerna på resinet själv kan jag ta fram de
            flesta färger och jag försöker komma så nära önskemålet som möjligt.
            Om jag inte hamnar tillräckligt nära önskad färg så kontaktar jag
            alltid beställaren.Ett tips till dig är att googla på färgbemnämning
            och färgprov, tex olivgrön och färgprov, så får du förslag som
            kanske kan passa. Bilden av färgprovet skickar du med i din
            beställning.
          </Text>
          <BoldText>Använder du äkta silver i dina smycken?</BoldText>
          <Text>
            Jag använder endast sterlingsilver inköpt i Sverige i mina smycken.
            Sterlingsilver innehåller 925/1000 delar rent silver och är det vi i
            dagligt tal brukar kalla äkta silver.
          </Text>
          <BoldText>Vad är resin?</BoldText>
          <Text>
            Det finns många olika sorters resin. Det jag använder är ett
            tvåkomponents epoxiresin som är klassat som giftfritt.Mina
            resinsmycken tål vatten.
          </Text>
          <BoldText>Vad är oxiderat silver?</BoldText>
          <Text>
            Silvret oxideras genom en kemisk process. Oxid är en ytbeläggning
            som kan putsas bort, antingen genom polering eller nötning vid
            användning och de smycken som är oxiderade vid köp ska av dessa skäl
            inte putsas eftersom oxideringen då försvinner.
          </Text>
        </TextWrapper>
        <ImageWrapper>
          <Image
            className="image"
            layout="fill"
            src="/images/pink-rings.jpeg"
          ></Image>
        </ImageWrapper>
      </QuestionsWrapper>
      <TitleText>SMYCKESSKÖTSEL</TitleText>
      <CareWrapper>
        <ImageWrapper className="necklace-image">
          <Image layout="fill" src="/images/silver-necklaces.jpeg"></Image>
        </ImageWrapper>
        <TextWrapper>
          <Text>
            Allt silver oxiderar och blir mörkare med tiden, det är till och med
            ett kännetecken för silver med hög silverhalt. Silver reagerar på
            svavelväte och syre som finns i luften, på huden, tyger, plaster,
            gummi, cigarettrök, fossila bränseln, parfym och vissa hudkrämer.
            Oxidationen är oundviklig men lätt att åtgärda.Att göra rent silver
            är inte svårt, och här får du tips på hur du får upp lystern på ditt
            silver igen:
          </Text>
          <BoldText>Bakpulver</BoldText>
          <Text>
            Koka upp vatten i en aluminiumkastrull eller häll kokhett vatten i
            ett kärl (t ex en plastbunke) där bottnen täckts med aluminiumfolie.
            Tillsätt 1,5-2 tsk bakpuler per liter vatten. Lägg ned silvret så
            det täcks av vattnet och har kontakt med aluminiumfolien. Låt
            silvret ligga i badet tills den svarta beläggningen försvunnit.
            Detta brukar ta några minuter. Tag upp silvret och skölj under
            rinnande vatten. Polera med en ren putsduk (bomullstrasa).
            Bakpulvermetoden är enkel, har ingen slipande effekt och inget
            silver går förlorat tack vare den kemiska reaktionen med aluminium
            (reduktion = motsatsen till oxidation).
          </Text>
          <BoldText>Silverputs/rengöring</BoldText>
          <Text>
            Du kan också köpa silverputs eller silverrengöring i butik. Oavsett
            vilket medel du använder så tänk på att alltid först testa det på en
            liten yta. Om medlet skadar ditt silver vill du inte riskera att
            hela smycket blir förstört.
          </Text>
          <BoldText>
            OBS! Silversmycken med inslag av resin (t ex OOPS-ringarna) går inte
            att rengöra med ovanstående metoder. Nedan följer två alternativa
            metoder som inte skadar resinet.
          </BoldText>
          <BoldText>Tandkräm</BoldText>
          <Text>
            Ta en liten klick tandkräm (ej whitening med blekningsmedel) på en
            fuktig bomullstrasa, applicera och gnid silvret. Putsa tills det
            blänker. Skölj av och polera med en ren och torr trasa. Denna metod
            kan ha viss slipande effekt, men är även den jag tycker fungerar
            bäst och själv använder på mina resinsmycken.
          </Text>
          <BoldText>Ketchup</BoldText>
          <Text>
            Ta lite ketchup på en bomullstrasa och applicera på silvret. Putsa
            tills silvret blänker. Skölj av och polera med ren och torr
            bomullstrasa. Ketchupens sura ämnen reagerar med den svarta ytan och
            får den att försvinna. Metoden är okomplicerad, miljövänlig och har
            ingen slipande effekt på silvret.
          </Text>
        </TextWrapper>
      </CareWrapper>
    </FaqWrapper>
  );
};

export default FaqSection;
