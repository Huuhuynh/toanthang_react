import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import MainFeature from "../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../images/product/bg11.jpg";

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
            SULBSC
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
              Đặc trị các bệnh nhiễm khuẩn như: xuất huyết, đốm đỏ, phù đầu, lở
              loét, thối đuôi, sình hơi chướng bụng, tuột nhớt do nhóm vi khuẩn
              Aeromonas sp, Pseudomonas sp, Streptococcus sp, Vibrio sp… gây ra
              trên cá tra, basa, cá có vẩy như cá lóc, cá điêu hồng, cá rô, cá
              trê, cá trắm cỏ, ếch, lươn.
              <br />
              Đặc trị các bệnh nhiễm khuẩn đường ruột như phân trắng, phân lỏng,
              đứt khúc, trống đường ruột trên tôm
            </p>
            <p>
              CHỐNG CHỈ ĐỊNH: Không có <br />
              THỜI GIAN NGƯNG SỬ DỤNG THUỐC: Ngưng sử dụng thuốc 4 tuần trước
              khi thu hoạch. <br />
              ĐIỀU KIỆN BẢO QUẢN: Nơi khô mát, tránh ánh sáng trực tiếp, nhiệt
              độ không quá 300C. Để xa tầm tay trẻ em. <br />
              CHỈ DÙNG TRONG THỦY SẢN <br />
              Khối lượng tịnh: 500g <br />
              SĐK: HCM.TS85-01
            </p>
          </Description>
        }
        description2={
          <Description2>
            <strong>THÀNH PHẦN: Trong 1 kg sản phẩm </strong>
            <p>
              Sulfadiazine sodium 100g <br />
              Trimethoprim 20g <br />
              Tá dược vừa đủ 1 kg
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG: </strong>
            <p>
              Trên cá: <br />
              Phòng bệnh: 1kg/ 30 tấn cá, liên tục 2 ngày, 1 tháng dùng 2 lần.{" "}
              <br />
              Trị bệnh : 1kg/ 15 tấn cá, liên tục từ 5 – 7 ngày.
              <br />
              Trên tôm: <br />
              Dùng định kỳ: 5g/1kg thức ăn, ngày 1 cữ, liên tục từ 2 – 3 ngày.
              Trị bệnh: 10g/1kg thức ăn, ngày 2 cữ, liên tục từ 3 – 5 ngày.
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
