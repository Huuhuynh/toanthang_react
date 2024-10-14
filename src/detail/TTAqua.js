import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import MainFeature from "../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../images/product/bg21.jpg";

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block text-base`;
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
            TT - AQUA +
            <br />
            {token === "true" ? (
              <HighlightedTextInverse>
                <p>250g/gói | 200,000 VNĐ | 40 gói/ thùng</p>
              </HighlightedTextInverse>
            ) : (
              <HighlightedText>Liên Hệ Giá</HighlightedText>
            )}
          </>
        }
        description={
          <Description>
            <strong>CÔNG DỤNG: </strong>
            <p>
              Vi sinh chuyên cắt tảo xanh hiệu quả, chuyển đổi màu nước, giảm
              tảo phát triển quá mức, làm sạch nước ao nuôi, kích thích tôm ăn
              mạnh. <br />
              Cung cấp vi sinh và các enzyme có lợi cho ao nuôi tôm, giúp phân
              hủy các chất thải hữu cơ.
            </p>
            <p>
              HƯỚNG DẪN SỬ DỤNG: Hòa tan ALL CIDE vào nước tạt đều khắp ao.{" "}
              <br />
              CHỐNG CHỈ ĐỊNH: Không có. <br />
              Thời gian ngưng sử dụng thuốc: không có. <br />
              ĐIỀU KIỆN BẢO QUẢN: Nơi khô mát, trắng ánh sáng trực tiếp, nhiệt
              độ không quá 30oC, để xa tầm tay trẻ em. <br />
              Thể tích thực: 250g <br />
              NSX, số lô,HSD: 2 năm kể từ ngày sản xuất <br />
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
              Bacillus spp. (B. pumiplus, B. coagulans) (min) 3 x 1010cfu/kg{" "}
              <br />
              Lactobacillus acidophilus (min) 3x1010 cfu/kg <br />
              Xylanase (min) …………………………………………………………………………..50.000 UI/kg <br />
              Protease (min) …………………………………………………………………………..120.000 UI/kg <br />
              Cellulase (min) ………………………………………………………………………….100.000 UI/kg <br />
              Amylase (min) ………………………………………………………………………….100.000 UI/kg <br />
              Chất đệm (Dextrose) vừa đủ……………………………………………………………..…………1kg <br />
              Độ ẩm (max) ……………………………………………………………………………………....10%
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG: </strong>
            <p>
              Giảm tảo phát triển quá mức: 250g/2.000m3 nước. <br />
              Khi nước ao nuôi bị tảo xanh: 250g/1.000m3 nước. <br />
              Hòa tan 250g TT – AQUA + với 20 lít nước sạch, sau đó tạt đều khắp
              ao. Thời điểm sử dụng tốt nhất từ 5 - 6 giờ chiều.
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
