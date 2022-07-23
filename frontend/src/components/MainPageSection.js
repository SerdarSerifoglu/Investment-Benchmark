import styled from "styled-components";
import { deviceMin, deviceMax } from "../helpers/deviceWidth";

const MainPageSection = (props) => {
  const {
    titleText,
    descriptionText,
    buttonText,
    mainImage,
    imagePositionLeft,
    sectionHeight,
  } = props.children;
  return (
    <>
      {imagePositionLeft ? (
        <SectionWrapper style={{ height: sectionHeight }}>
          <ImagePart>
            <Image src={mainImage}></Image>
          </ImagePart>
          <Space></Space>
          <InfoPart>
            <Title>{titleText}</Title>
            <Description>{descriptionText}</Description>
            <Button>{buttonText}</Button>
          </InfoPart>
        </SectionWrapper>
      ) : (
        <SectionWrapper style={{ height: sectionHeight }}>
          <Space></Space>
          <InfoPart>
            <Title>{titleText}</Title>
            <Description>{descriptionText}</Description>
            <Button>{buttonText}</Button>
          </InfoPart>
          <ImagePart>
            <Image src={mainImage}></Image>
          </ImagePart>
        </SectionWrapper>
      )}
    </>
  );
};

const SectionWrapper = styled.div`
  padding: 0 10px;
  width: ${(props) => props.theme.mcv.full_width};
  display: flex;
  background-repeat: no-repeat;
  background-position: right center;
  background: linear-gradient(
    180deg,
    ${(p) => p.theme.mcv.mainpage_section_bc} 0%,
    #ffffff 100%
  );

  @media ${deviceMax.laptop} {
    width: 100vw;
  }
`;

const Space = styled.div`
  flex: ${(props) => props.theme.mcv.flex_space};

  @media ${deviceMax.laptop} {
    flex: 1;
  }
  @media ${deviceMax.tablet} {
    flex: 0.5;
  }
`;

const InfoPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: ${(props) => props.theme.mcv.flex_info_part};

  @media ${deviceMax.laptop} {
    flex: 5;
  }
  @media ${deviceMax.tablet} {
    flex: 6;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;

  @media ${deviceMax.tablet} {
    font-size: 36px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 24px;
  padding-bottom: 48px;
  padding-top: 32px;

  @media ${deviceMax.tablet} {
    font-size: 18px;
  }
`;

const ImagePart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: ${(props) => props.theme.mcv.flex_image_part};

  @media ${deviceMax.laptop} {
    flex: 5;
  }
  @media ${deviceMax.tablet} {
    flex: 4;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 414px;
  height: auto;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.mcv.orange};
  width: 180px;
  height: 48px;
  border-radius: 10px;
  color: ${(props) => props.theme.mcv.white};
  border: none;
  font-size: 14px;
  font-weight: 500;

  @media ${deviceMax.mobileL} {
    width: 120px;
  }
`;

export default MainPageSection;
