import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import MainFeature from "../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../images/product/bg12.jpg";

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
            ALL CIDE
            <br/>
            {token === "true" ? (
              <HighlightedTextInverse>
                <p>200g/lon | 310,000 VNĐ | 30 lon/ thùng</p>
                <p>500g/lon | 775,000 VNĐ | 30 lon/ thùng</p>
                <p>1kg/lon | 1,540,000 VNĐ | 20 lon/ thùng</p>
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
              Phòng và trị ao nuôi tôm, cá bị nhiễm nấm <br />
              Phòng và trị nấm đồng tiền (nấm chân chó), nguyên sinh động vật,
              nhớt nước trên tôm. <br />
              Phòng và trị tôm, cá nuôi bị nhiễm nấm thủy mi (saprolegnia spp),
              trùng quả dưa (Ichthyophthyrius spp) trên cá, đặc biệt ở giai đoạn
              cá hương và cá giống.
            </p>
            <p>
              HƯỚNG DẪN SỬ DỤNG: Hòa tan ALL CIDE vào nước tạt đều khắp ao.{" "}
              <br />
              CHỐNG CHỈ ĐỊNH: Không có. <br />
              Thời gian ngưng sử dụng thuốc: không có. <br />
              ĐIỀU KIỆN BẢO QUẢN: Nơi khô mát, trắng ánh sáng trực tiếp, nhiệt
              độ không quá 30oC, để xa tầm tay trẻ em. <br />
              Thể tích thực:1lit <br />
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
            <strong>THÀNH PHẦN: Trong 1 kg sản phẩm </strong>
            <p>
              Bronopol 350g
              <br />
              Dung môi vừa đủ 1 lít
              <br />
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG: </strong>
            <p>
              Trên tôm:
              <br />
              Chuẩn bị ao: trước khi thả tôm giống 4 ngày tạt 1lit/1.000 m3
              nước.
              <br />
              Định kỳ: 1 lít/2.000m3 nước, 1 tuần 1 đợt.
              <br />
              Khi ao xảy ra nấm: 1lit/500m3 nước/ chà bạt bờ trước khi tạt thuốc
              và sau khi tạt thuốc 24 giờ, sau đó si phông
              <br />
              Trên cá: <br />
              Phòng bệnh: định kỳ 7 – 10 ngày tạt 1 lần, dùng 1 lít ALL CIDE pha
              loãng với nước tạt cho 8.000 – 10.000 m3 nước.
              <br />
              Trị bệnh:
              <br />
              Cá hương và cá giống: dùng 1 lít ALL CIDE pha loãng với nước tạt
              cho 6.000 – 8.000m3 nước.
              <br />
              Cá thịt: dùng 1 lit ALL CIDE pha loãng với nước tạt cho 5.000m3
              nước.
              <br />
              Trị nấm nhớt trên cá rô: Dùng 1 lít ALL CIDE pha loãng với nước
              tạt cho 4.000m3 nước, sử dụng liên tục 4 lần, mỗi lần cách nhau 1
              ngày.
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
