import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import MainFeature from "../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../images/product/dactribenh/florsol.png";

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
        subheading={
          "KHÁNG SINH PHỔ RỘNG ĐIỀU TRỊ HẦU HẾT CÁC BỆNH VỀ GAN, ĐƯỜNG RUỘT TRÊN TÔM, CÁ"
        }
        heading={
          <>
            FLOR SOL
            {/* <br/>
            {token === "true" ? (
              <HighlightedTextInverse>
                <p>200g/lon | 310,000 VNĐ | 30 lon/ thùng</p>
                <p>500g/lon | 775,000 VNĐ | 30 lon/ thùng</p>
                <p>1kg/lon | 1,540,000 VNĐ | 20 lon/ thùng</p>
              </HighlightedTextInverse>
            ) : (
              <HighlightedText>Liên Hệ Giá</HighlightedText>
            )} */}
          </>
        }
        description={
          <Description>
            <strong>CÔNG DỤNG: </strong>
            <p>
              - Trị bệnh nhiễm trùng huyết đường ruột, bệnh gan thận mủ do vi
              khuẩn Edwardsiella ictaluri gây ra trên cá tra, bệnh xuất huyết,
              phù đầu, lở loét, thối đuôi do nhóm vi khuẩn Aeromonas sp,
              Pseudomonas sp gây ra trên cá tra, ba sa, cá có vẩy như cá lóc, cá
              điêu hồng, cá rô, cá trê, cá trắm cỏ, ếch, lươn. <br />
              - Phòng và trị các bệnh gan, ruột trên tôm thẻ và tôm sú như: Bệnh
              teo gan, vàng gan, đỏ gan, đỏ ruột, phân trắng, phân lỏng… trị đen
              mang, cụt râu, đốm đen trên tôm sú. <br />
            </p>
            <p>
              CHỐNG CHỈ ĐỊNH: Không có
              <br />
              THỜI GIAN NGƯNG SỬ DỤNG THUỐC: Ngưng sử dụng thuốc 12 ngày trước
              khi thu hoạch.
              <br />
              ĐIỆU KIỆN BẢO QUẢN: Nơi khô mát, nhiệt độ không quá 300C, tránh
              ánh sáng trực tiếp.
              <br />
              Thể tích thực: 500ml
              <br />
              SĐK: HCM.TS85-11
              <br />
              Số lô, NSX, HSD: xem trên bao bì.
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
            <strong>THÀNH PHẦN: Trong 1 kg sản phẩm </strong>
            <p>
              Florfenicol.....................................................
              200g <br />
              Dung môi vừa đủ ............................ 1 lít
            </p>
            <strong>
              HƯỚNG DẪN SỬ DỤNG: Hòa tan vào nước trộn vào thức ăn.{" "}
            </strong>
            <p>
              Trên cá: <br />
              Phòng bệnh: 1lít/20 tấn cá, liên tục 2 ngày, 1 tháng dùng 2 lần.{" "}
              <br />
              Trị bệnh: 1lít/10 tấn cá, liên tục 5 -7 ngày. <br />
              Trên tôm: <br />
              Dùng định kỳ: 2ml/1kg thức ăn, ngày 1 cữ, liên tục từ 2 – 3 ngày.{" "}
              <br />
              Trị bệnh: 4ml/1kg thức ăn, ngày 2 cữ, liên tục 3 – 5 ngày. Hòa
              FLOR SOL với lượng nước vừa đủ, trộn đều vào thức ăn, sau 30 phút
              mới cho ăn.
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
