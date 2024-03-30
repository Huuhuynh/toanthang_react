import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import TabGrid from "../components/cards/TabCardGrid.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import MainFeature from "../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../images/product/bg15.jpg";

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
            TOXIN SSE
            <br />
            {token === "true" ? (
              <HighlightedTextInverse>
                <p>2lit/cal | 120,000 VNĐ | 10 cal/ thùng</p>
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
              Giải độc nước, giảm nhớt nước và váng bọt trên mặt nước, khử kim
              loại nặng, khử các độc tố như hóa chất, thuốc trừ sâu tồn lưu
              trong ao nuôi. <br />
              Lắng tụ chất lơ lửng, hạn chế sức căng bề mặt, tạo môi trường
              thuận lợi cho tôm, cá phát triển. <br />
              Rửa sạch mang và thân tôm, tránh bị bám phèn, tăng lượng oxy hòa
              tan trong ao nuôi, giúp tôm, cá hô hấp tốt.
            </p>
            <p>
              HƯỚNG DẪN SỬ DỤNG: Hòa tan ALL CIDE vào nước tạt đều khắp ao.{" "}
              <br />
              CHỐNG CHỈ ĐỊNH: Không có. <br />
              Thời gian ngưng sử dụng thuốc: không có. <br />
              ĐIỀU KIỆN BẢO QUẢN: Nơi khô mát, trắng ánh sáng trực tiếp, nhiệt
              độ không quá 30oC, để xa tầm tay trẻ em. <br />
              Thể tích thực: 2lit <br />
              SĐK: HCM.TS85-13 <br />
              NSX, số lô,HSD: Xem trên bao bì. <br />
              CHỈ DÙNG TRONG NUÔI TRỒNG THỦY SẢN <br />
              Sản phẩm không chứa các chất cấm sử dụng trong sản xuất, kinh
              doanh thủy sản theo các quy định hiện hành của Bộ NN&PTNT
            </p>
          </Description>
        }
        description2={
          <Description2>
            <strong>THÀNH PHẦN: Trong 1 lít sản phẩm </strong>
            <p>
              Sodium Thiosulfate (min) 120.000mg <br />
              Ethylene Diamine TetraAcetic Acid (min) 50.000mg <br />
              Sodium Lauryl Ether Sulfate (min) 50.000mg <br />
              Dung môi vừa đủ 1 lít
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG: </strong>
            <p>
              Giải độc sau khi sử dụng hóa chất: 1-2 lít/1.000m3 nước.
              <br />
              Lắng tụ chất lơ lửng, khử kim loại nặng, tăng oxy hòa tan: 2-3
              lít/1.000m3 nước.
              <br />
              Khi ao váng bọt, độ nhớt nước cao: 2-3 lít/1.000m3 nước.
              <br />
              Lắc kỹ trước khi sử dụng.
              <br />
              Pha loãng sản phẩm với nước rồi tạt xuống ao.
              <br />
              Thời điểm sử dụng tốt nhấ từ 10h sáng -16h chiều.
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
