import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import TabGrid from "../components/cards/TabCardGrid.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import Hero from "../components/hero/TwoColumnWithVideo.js";
import { CarouselImg } from "../components/cards/CarouselImg.js";
import MainFeature2 from "../components/features/TwoColSingleFeatureWithStats2.js";

import bg_tom from "../images/tom_cang.jpg";
import bg_tom_02 from "../images/benh_tom.jpg";
import bg_tom_03 from "../images/muc.jpg";
import bg_tom_04 from "../images/quat_nuoc.jpg";

export default () => {
  const Description2 = tw.span`inline-block`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block mt-8`;
  const Container = tw.div`relative`;
  const TwoColumn = tw.div`flex flex-col justify-between max-w-screen-xl mx-auto py-20 md:py-10`;
  const Title = tw.h1`text-blue-700 mt-8 font-bold`;
  const ColumnGrid = tw.div``;
  const PostEvent = tw.div``;

  const imageCss = tw`rounded-4xl`;

  return (
    <AnimationRevealPage>
      <Header />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      {/* <TabGrid
        heading={
          <>
            Sản Phẩm <HighlightedText>Thuỷ Sản</HighlightedText>
          </>
        }
      /> */}
      <Container>
        <TwoColumn css={tw`md:items-center`}>
          <CarouselImg />
          <HighlightedText>Dịch vụ</HighlightedText>
          <MainFeature2
            // subheading={<Subheading>A Reputed Brand</Subheading>}
            heading={
              <>
                Cách phân biệt tôm càng xanh và tôm càng sen nhanh chóng, chính
                xác!
              </>
            }
            // primaryButtonText="Order Now"phanbiettom
            primaryButtonUrl="/phanbiettom"
            imageInsideDiv={false}
            imageSrc={bg_tom}
            imageCss={Object.assign(tw`bg-cover`, imageCss)}
            imageContainerCss={tw`md:w-1/2 h-auto`}
            imageDecoratorBlob={true}
            imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
            textOnLeft={true}
            description={
              "Tôm càng xanh và tôm càng sen, mặc dù thuộc cùng họ tôm gai, nhưng lại mang đến những trải nghiệm khác nhau cho người dùng. Dưới đây là những điểm đặc biệt để bạn có thể phân biệt chúng một cách dễ dàng."
            }
          />
          <MainFeature2
            // subheading={<Subheading>A Reputed Brand</Subheading>}
            heading={
              <>
                Bí quyết chọn quạt cho ao tôm phù hợp: So sánh chi tiết quạt 6
                cánh và 8 cánh
              </>
            }
            // primaryButtonText="Order Now"
            primaryButtonUrl="/quatnuoc"
            imageInsideDiv={false}
            imageSrc={bg_tom_04}
            imageCss={Object.assign(tw`bg-cover`, imageCss)}
            imageContainerCss={tw`md:w-1/2 h-auto`}
            imageDecoratorBlob={true}
            imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
            textOnLeft={true}
            description={
              "Trong ngành nuôi tôm, việc lựa chọn và sử dụng quạt nước đóng vai trò quan trọng, giúp tạo ra môi trường sống lý tưởng cho tôm, từ đó nâng cao năng suất và chất lượng sản phẩm. Bài viết này sẽ phân tích ưu và nhược điểm của quạt 6 cánh và 8 cánh, giúp người nuôi tôm đưa ra lựa chọn phù hợp."
            }
          />
          <MainFeature2
            // subheading={<Subheading>A Reputed Brand</Subheading>}
            heading={
              <>
                Nắm chắc "bí kíp" phòng chống dịch bệnh: Tôm khỏe mạnh, mùa vụ
                bội thu
              </>
            }
            // primaryButtonText="Order Now"
            primaryButtonUrl="/tomkhoe"
            imageInsideDiv={false}
            imageSrc={bg_tom_02}
            imageCss={Object.assign(tw`bg-cover`, imageCss)}
            imageContainerCss={tw`md:w-1/2 h-auto`}
            imageDecoratorBlob={true}
            imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
            textOnLeft={true}
            description={
              "Báo cáo từ Bộ NN&PTNT đánh giá tình hình dịch bệnh trên tôm nuôi nước lợ những năm qua đang diễn biến phức tạp. Những bệnh nguy hiểm như hoại tử gan tụy, đốm trắng, và vi bào tử trùng đang gây nên tổn thất đáng kể cho người làm trong ngành chăn nuôi tôm."
            }
          />
          <MainFeature2
            // subheading={<Subheading>A Reputed Brand</Subheading>}
            heading={
              <>
                Những Cải Tiến Đột Phá Trong Công Nghệ Sản Xuất Giống Thủy Sản
              </>
            }
            // primaryButtonText="Order Now"
            primaryButtonUrl="/congnghe"
            imageInsideDiv={false}
            imageSrc={bg_tom_03}
            imageCss={Object.assign(tw`bg-cover`, imageCss)}
            imageContainerCss={tw`md:w-1/2 h-auto`}
            imageDecoratorBlob={true}
            imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
            textOnLeft={true}
            description={
              "Ngành thủy sản Việt Nam đang có những bước tiến mới trong sản xuất giống, góp phần thúc đẩy sự phát triển bền vững của ngành. Bài viết này sẽ giới thiệu 3 kỹ thuật tiên tiến trong lĩnh vực này"
            }
          />
        </TwoColumn>
      </Container>

      <Footer />
    </AnimationRevealPage>
  );
};
