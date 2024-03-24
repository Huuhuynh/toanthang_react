import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import TabGrid from "../components/cards/TabCardGrid.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import MainFeature from "../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../images/product/bg1.jpg";

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature
        // subheading={<Subheading>Chống Stress</Subheading>}
        heading={
          <>
            Chống Stress
            <wbr /> <HighlightedText>over 5 years.</HighlightedText>
          </>
        }
        description={
          <Description>
            Cung cấp vitamin, acid amin thiết yếu và khoáng điện giải giúp tôm
            chống sốc, chống stress, phục hồi nhanh sau khi bệnh, gia tăng sức
            đề kháng, dùng trong trường hợp vận chuyển tôm hoặc tôm sang ao,
            chống sốc môi trường khi thả tôm.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={InstructionImage_1}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
