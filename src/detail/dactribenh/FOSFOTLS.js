import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light.js";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/bg10.png";

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
        subheading={"ĐẶC TRỊ ĐỤC CƠ"}
        heading={
          <>
            FOSFO – TLS
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
              Đặc trị các bệnh nhiễm khuẩn trên cá và tôm.
              <br />
              Đặc trị các bệnh gan thận mủ trên cá tra, basa. Bệnh xuất huyết
              phù đầu, lở loét, thối đuôi trên cá tra, cá có vẩy như cá lóc, cá
              điêu hồng, cá rô, cá trê, cá trắm cỏ, ếch.
              <br />
              Phòng và trị hiệu quả các bệnh trên tôm như: Đục cơ rớt đáy, hoại
              tử cơ và các bệnh vàng gan, teo gan, trống ruột, phân lỏng, phân
              trắng…
            </p>
            <p>
              CHỐNG CHỈ ĐỊNH: Không có
              <br />
              THỜI GIAN NGƯNG SỬ DỤNG THUỐC: Ngưng sử dụng thuốc 4 tuần trước
              khi thu hoạch.
              <br />
              ĐIỀU KIỆN BẢO QUẢN: Nơi thoáng mát, nhiệt độ không quá 30ºC.
            </p>
          </Description>
        }
        description2={
          <Description2>
            <strong>THÀNH PHẦN: Trong 1 kg sản phẩm </strong>
            <p>
              Fosfomycin sodium............................................ 250g
              <br />
              Tá dược vừa đủ....................................................
              1kg
              <br />
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Hoà vào nước trộn vào thức ăn.
              <br />
              Trên cá: <br />
              Phòng bệnh: 1kg/40 tấn cá, ngày 1 cữ, liên tục từ 2, 1 tháng dung
              2 lần.
              <br />
              Trị bệnh: 1kg/20 tấn cá, liên tục từ 5 – 7 ngày.
              <br />
              Trên tôm: <br />
              Phòng bệnh: 2g/1kg thức ăn, ngày 1 cữ, liên tục từ 2 – 3 ngày.
              <br />
              Trị bệnh: 5g/1kg thức ăn, ngày 3 cữ, liên tục từ 3 – 5 ngày.
              <br />
              Trong trường hợp bệnh cấp tính dùng tạt trực tiếp xuống ao
              1kg/1.500m3 nước, sau đó tiến hành trộn cho ăn theo khuyến cáo.
              <br />
              Hòa FOSFO - TLS với lượng nước vừa đủ trộn đều vào thức ăn, sau 30
              phút mới cho ăn.
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
