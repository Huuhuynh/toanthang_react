import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import MainFeature from "../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../images/product/bg16.jpg";

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const Description2 = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  var token = localStorage.getItem("token");

  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature
        // subheading={<Subheading>Chống Stress</Subheading>}
        heading={
          <>
            LIVER TONIC
            <wbr />{" "}
            {token === "true" ? (
              <HighlightedText>300000 VNĐ</HighlightedText>
            ) : (
              <HighlightedText>Liên Hệ Giá</HighlightedText>
            )}
          </>
        }
        description={
          <Description>
            <strong>CÔNG DỤNG: </strong>
            <p>
              Cung cấp sorbitol và acid anin giúp phục hồi chức năng gan, giải
              độc gan, tránh hiện tượng gan mờ, vàng gan, phòng các bệnh về gan
              trên tôm, gia tăng tỷ lệ sống, tránh hao hụt đầu con, giúp tôm
              tăng trưởng và phát triển tốt.
            </p>
            <p>
              BẢO QUẢN: Bảo quản nơi khô ráo và thoáng mát. <br />
              Cảnh báo: Tránh xa tầm tay trẻ em <br />
              Khối lượng tịnh: 500g <br />
              Mã số: <br />
              TCCS <br />
              Ngày SX: Xem trên bao bì <br />
              Hạn dùng: 2 năm kể từ ngày sản xuất <br />
              CHỈ DÙNG TRONG NUÔI TRỒNG THỦY SẢN <br />
              Sản phẩm không chứa các chất cấm sử dụng trong sản xuất, kinh
              doanh thủy sản theo các quy định hiện hành của Bộ NN&PTNT
            </p>
          </Description>
        }
        description2={
          <Description2>
            <strong>THÀNH PHẦN: Trong 1 kg sản phẩm </strong>
            <p>
              Sorbitol (min) …………………………………………………….…100.000 mg/kg
              <br />
              Lysine (min) ……………………………………………………….100.000 mg/kg
              <br />
              Methionine (min) ………………………………………………………...50.000 mg/kg
              <br />
              Chất đệm (lactose) vừa đủ. …………………………………………………………..1kg
              <br />
              Độ ẩm (max)
              .................................................................................................10%
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG: </strong>
            <p>
              Sử dụng định kỳ: 2g/1kg thức ăn, ngày 2 cữ, liên tục 3 ngày/tuần.
              <br />
              Phục hồi chức năng gan: 4g/1kg thức ăn, ngày 2 cữ, liên tục 5
              ngày/tuần.
              <br />
              Hòa tan LIVER TONIC với lượng nước vừa đủ, trộn đều vào thức ăn,
              áo để lại sau 30 phút,
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
