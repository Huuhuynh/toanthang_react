import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import TabGrid from "../components/cards/TabCardGrid.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import MainFeature from "../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../images/product/bg4.jpg";

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const Description2 = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature
        // subheading={<Subheading>Chống Stress</Subheading>}
        heading={
          <>
            TT PATHO STOP
            <wbr /> <HighlightedText>Liên Hệ Giá</HighlightedText>
          </>
        }
        description={
          <Description>
            <strong>CÔNG DỤNG: </strong>
            <p>
              Phức hợp hiệp đồng các acid béo và hệ đệm các acid hữu cơ giúp ức
              chế mạnh sự phát triển của mầm bệnh, tăng cường hệ miễn dịch.
              <br />
              Hỗ trợ và điều trị hiệu quả các bệnh về gan tụy, đục cơ, đặc biệt
              các bệnh về đường ruột như: phân trắng, phân lỏng, rối loạn tiêu
              hóa trên tôm nuôi.
            </p>
            <p>
              BẢO QUẢN: Nơi thoáng mát, tránh ánh nắng trực tiếp, tránh xa tầm
              tay trẻ em. <br />
              Thể tích thực: 500ml
              <br />
              Mã số: <br />
              TCCS <br />
              Ngày SX: <br />
              Hạn dùng: 2 năm kể từ ngày sản xuất
              <br />
              CHỈ DÙNG TRONG NUÔI TRỒNG THỦY SẢN
              <br />
              Sản phẩm không chứa các chất cấm sử dụng trong sản xuất, kinh
              doanh thủy sản theo các quy định hiện hành của Bộ NN&PTNT
            </p>
          </Description>
        }
        description2={
          <Description2>
            <strong>THÀNH PHẦN: Trong 1 lít sản phẩm </strong>
            <p>
              Acid béo 15%
              <br />
              Hệ đệm các acid hữu cơ:
              <br />
              Formic acid 20%
              <br />
              Lactic acid 20%
              <br />
              Propionic acid 8%
              <br />
              Butyric acid 6%
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG: </strong>
            <p>
              Phòng bệnh: 2ml/1kg thức ăn, ngày 2 lần, liên tục 2 ngày/tuần.{" "}
              <br />
              Hỗ trợ trị bệnh: 4ml/1kg thức ăn, ngày 2 lần, liên tục 3 ngày.{" "}
              <br />
              Hòa tan TT – PATHO STOP với nước sạch sau đó trộn đều vào thức ăn,
              để ráo sau 30 phút mới cho tôm ăn.
            </p>
          </Description2>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Liên hệ"
        imageSrc={InstructionImage_1}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
