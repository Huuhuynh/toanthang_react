import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Hero from "../components/hero/TwoColumnWithVideo.js";
import Features from "../components/features/ThreeColSimple.js";
import MainFeature from "../components/features/TwoColWithButton.js";
import MainFeature2 from "../components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "../components/cards/TabCardGrid.js";
import Testimonial from "../components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "../components/cta/DownloadApp.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "../images/chef-icon.png";
import celebrationIconImageSrc from "../images/celebration-icon.svg";
import shopIconImageSrc from "../images/shop-icon.svg";
import bg_tom from "../images/product/bg_tom.jpeg";
import bg_tom_2 from "../images/bg/bg1.png";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            TOÀN THẮNG <HighlightedText>COMMERCE</HighlightedText>
          </>
        }
        description="Với phương châm “ Chất lượng mang đến thịnh vượng”, và định hướng “Liên tục cải tiến” Công Ty đã luôn nỗ lực cả về trình độ kỹ thuật lao động, máy móc, thiết bị, xây dựng uy tín thương hiệu, niềm tin với khách hàng với những sản phẩm chúng tôi cung cấp.
        Sau nhiều năm đi vào hoạt động và phát triển, với phương châm “Chất lượng mang đến thịnh vượng” "
        imageSrc={bg_tom}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Liên hệ ngay"
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Sản Phẩm <HighlightedText>Thuỷ Sản</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
            Vì sao  <HighlightedText>chọn chúng tôi?</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "Sản phẩm được cung cấp toàn quốc",
            description: "Nhà máy sản xuất đạt chuẩn GMP-WHO",
            url: "https://www.facebook.com/profile.php?id=61556809433602",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Chuyên gia có nhiều năm kinh nghiệm",
            description: "Công ty có nhiều chuyên gia trong lĩnh vực về Thuỷ Sản. Đội ngũ tư vấn miễn phí, tận tình",
            url: "https://www.facebook.com/profile.php?id=61556809433602",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Ưu đãi",
            description: "Các chương trình ưu đãi đến khách hàng khi liên hệ trực tiếp nhận tư vấn",
            url: "https://www.facebook.com/profile.php?id=61556809433602",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature2
        // subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={
          <>
           <HighlightedText> Bắt đầu</HighlightedText> ngay hôm nay cùng chúng tôi 
          </>
        }
        statistics={[
          {
            key: "Năm kinh nghiệm",
            value: "9+",
          },
          {
            key: "Khách hàng",
            value: "1000+",
          },
          {
            key: "Tỉnh thành cả nước",
            value: "63",
          },
        ]}
        // primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc= {bg_tom_2}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Testimonial
        subheading=""
        heading={
          <>
            Khách hàng <HighlightedText>đánh giá</HighlightedText>
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
  );
};
